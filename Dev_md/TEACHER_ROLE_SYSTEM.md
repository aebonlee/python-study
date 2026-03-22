# 선생님 역할 시스템

## 개요
기존 `ADMIN_EMAILS` 배열에 포함되어 있던 `pch93472016@gmail.com`을 **전체 관리자가 아닌 선생님 역할**로 분리하여, 클래스 코드를 통해 배정된 담당 학생들만 관리할 수 있도록 구현.

## 핵심 개념

### 역할 구분
| 역할 | 이메일 | 권한 | 접근 경로 |
|------|--------|------|-----------|
| 관리자 | `aebon@kakao.com` | 전체 회원/데이터 조회, 커뮤니티 관리 | `/admin` |
| 선생님 | `pch93472016@gmail.com` | 담당 클래스 학생만 조회, 클래스 관리 | `/teacher` |
| 학생 | 일반 사용자 | 마이페이지, 클래스 참여 | `/my` |

### 클래스 코드 방식
1. 선생님이 클래스 생성 → **6자리 영숫자 코드** 자동 생성 (예: `A3K9M2`)
2. 선생님이 학생에게 코드 전달 (복사 버튼 제공)
3. 학생이 마이페이지 → "내 클래스" 섹션에서 코드 입력 → 참여
4. 선생님은 참여한 학생만 조회 가능

## 변경 파일 목록 (10개 파일)

| 파일 | 변경 유형 | 설명 |
|------|-----------|------|
| `src/config/supabase.js` | 수정 | `CLASSES`, `CLASS_MEMBERS` 테이블 이름 추가 |
| `src/contexts/AuthContext.jsx` | 수정 | `TEACHER_EMAILS` 배열 + `isTeacher` 계산 + context 노출 |
| `src/App.jsx` | 수정 | `TeacherPage` lazy import, `TeacherRoute` 가드, `/teacher` 라우트 |
| `src/components/layout/Navbar.jsx` | 수정 | `isTeacher` → "선생님" 메뉴 링크 (fa-chalkboard-user) |
| `src/pages/TeacherPage.jsx` | 신규 | 3탭 대시보드 (클래스 관리 / 학생 목록 / 학습 통계) |
| `src/pages/AdminPage.jsx` | 수정 | 회원 목록에 선생님 뱃지 표시 (`TEACHER_EMAILS` 매칭) |
| `src/pages/MyPage.jsx` | 수정 | "내 클래스" 섹션 (코드 입력, 참여/탈퇴, 목록) |
| `src/styles/teacher.css` | 신규 | 선생님 페이지 + 마이페이지 클래스 UI 스타일 |
| `src/styles/admin.css` | 수정 | `.admin-role-badge.teacher` 선생님 뱃지 스타일 + 다크모드 |
| `src/index.css` | 수정 | `teacher.css` import 추가 |

## 역할 판별 방식

### v2 — DB 기반 동적 역할 (현재)
- `pymaster_users` 테이블에 `role` 컬럼 추가 (`TEXT DEFAULT 'student'`)
- `AuthContext`에서 로그인 시 DB에서 `role` 조회 → `userRole` 상태 → `isTeacher = userRole === 'teacher'`
- 관리자가 AdminPage 회원 관리에서 역할 토글 가능 (학생 ↔ 선생님)
- `set_user_role` RPC 함수로 관리자만 역할 변경 가능

### v1 — 하드코딩 배열 (폐기)
- ~~`TEACHER_EMAILS` 배열로 이메일 매칭~~ → DB 기반으로 전환

## 관리자 회원 관리 역할 토글

관리자 페이지(`/admin`) → 회원 관리 탭에서 역할 관리:
- **관리자 계정** (`aebon@kakao.com`): 주황색 "관리자" 뱃지 표시, 토글 불가
- **선생님**: 보라색 "선생님" 버튼 → 클릭 시 학생으로 변경
- **학생**: 회색 "학생" 버튼 → 클릭 시 선생님으로 변경
- RPC 호출: `supabase.rpc('set_user_role', { target_user_id, new_role })`

## Supabase 역할 변경 (수동 실행)

```sql
-- role 컬럼 추가
ALTER TABLE pymaster_users ADD COLUMN role TEXT DEFAULT 'student';

-- 기존 선생님 마이그레이션
UPDATE pymaster_users SET role = 'teacher' WHERE email = 'pch93472016@gmail.com';

-- 관리자만 역할 변경 가능한 RPC
CREATE OR REPLACE FUNCTION set_user_role(target_user_id UUID, new_role TEXT)
RETURNS void AS $$
DECLARE
  caller_email TEXT;
BEGIN
  SELECT email INTO caller_email FROM auth.users WHERE id = auth.uid();
  IF caller_email != 'aebon@kakao.com' THEN
    RAISE EXCEPTION 'Unauthorized: only admin can change roles';
  END IF;
  IF new_role NOT IN ('student', 'teacher') THEN
    RAISE EXCEPTION 'Invalid role: must be student or teacher';
  END IF;
  UPDATE pymaster_users SET role = new_role WHERE id = target_user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
```

## Supabase 테이블 (수동 실행)

### pymaster_classes (클래스)
```sql
CREATE TABLE pymaster_classes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  class_name TEXT NOT NULL,
  class_code TEXT UNIQUE NOT NULL,
  teacher_id UUID NOT NULL,
  teacher_email TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_classes_teacher ON pymaster_classes(teacher_id);
ALTER TABLE pymaster_classes ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can read classes" ON pymaster_classes FOR SELECT USING (true);
CREATE POLICY "Teachers manage own classes" ON pymaster_classes FOR ALL USING (auth.uid() = teacher_id);
```

### pymaster_class_members (클래스 멤버)
```sql
CREATE TABLE pymaster_class_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  class_id UUID NOT NULL REFERENCES pymaster_classes(id) ON DELETE CASCADE,
  student_id UUID NOT NULL,
  joined_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(class_id, student_id)
);

CREATE INDEX idx_class_members_class ON pymaster_class_members(class_id);
CREATE INDEX idx_class_members_student ON pymaster_class_members(student_id);
ALTER TABLE pymaster_class_members ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Read class members" ON pymaster_class_members FOR SELECT TO authenticated USING (true);
CREATE POLICY "Teachers manage members" ON pymaster_class_members FOR DELETE USING (
  class_id IN (SELECT id FROM pymaster_classes WHERE teacher_id = auth.uid())
);
CREATE POLICY "Students can join" ON pymaster_class_members FOR INSERT WITH CHECK (auth.uid() = student_id);
```

## TeacherPage 구조

### 3개 탭
1. **클래스 관리** — 클래스 생성 (이름 입력 → 6자리 코드), 카드 목록 (코드 복사, 삭제)
2. **학생 목록** — 클래스별 필터 드롭다운, 학생 테이블 (구분/이름/이메일/클래스/가입일), 클릭 → 상세 모달
3. **학습 통계** — 총 학생 수, 평균 퀴즈 점수, 평균 레슨 완료율, 클래스별 요약 테이블

### 학생 상세 모달
AdminPage의 모달 로직을 동일하게 구현:
- `pymaster_user_progress` + `pymaster_quiz_scores` 병합 조회
- 프로필 / 학습 통계 4종 / 배지 / 퀴즈 성적표

## MyPage 클래스 참여 UI

### 위치
프로필 카드 바로 아래, 학습 통계 위

### 기능
- 6자리 코드 입력 (자동 대문자, maxLength=6)
- 참여 버튼 → 코드 조회 → 중복 체크 → INSERT
- 참여 중인 클래스 목록 (클래스명 + 선생님 이메일 + 탈퇴 버튼)
- 성공/오류 메시지 표시

## 코드 생성 규칙
```js
// 혼동 방지: I, O, 0, 1 제외
const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'
// 6자리 → 약 9억 가지 조합
```

## CSS 재사용
- TeacherPage는 `admin-page` 클래스 기반 → admin.css의 탭, 테이블, 모달 스타일 재사용
- 추가 스타일만 `teacher.css`에 정의 (클래스 카드, 코드 표시, 복사 버튼 등)
- 다크모드 + 반응형 (768px, 480px) 대응
