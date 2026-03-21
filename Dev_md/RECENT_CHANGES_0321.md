# 최근 변경 사항 — 2026-03-21

## 커밋 범위: 6889183 ~ 9ef389d

---

## 1. 관리자 학생 개별 결과 페이지 (6889183)

### 변경 내용
- 관리자(선생님/멘토)가 **회원 관리 탭에서 학생 이름 클릭** → 개인 결과 모달 표시
- 모달은 MyPage와 동일한 레이아웃으로 학생 데이터를 표시:
  - 프로필 카드 (이름, 이메일, 아바타, 로그인 방식)
  - 학습 통계 4종 (완료 레슨, 퀴즈 평균, 코드 실행 수, 연속 학습일)
  - 획득 배지 목록
  - 퀴즈 성적표 (최근 3회차 점수, 최종 상태, 최초/최종 응시일)

### Supabase 신규 테이블
- `pymaster_user_progress` — 학생 진행 데이터 통합 저장 (완료 레슨, 코드 실행 수, 스트릭, 배지, 퀴즈 시도 이력)

### 변경 파일
- `src/config/supabase.js` — `USER_PROGRESS` 테이블 이름 추가
- `src/contexts/ProgressContext.jsx` — Supabase 자동 동기화 추가
- `src/contexts/BadgeContext.jsx` — Supabase 자동 동기화 추가
- `src/pages/AdminPage.jsx` — 학생 결과 모달 구현
- `src/styles/admin.css` — 모달 스타일 (다크모드/반응형 포함)

---

## 2. 동기화 데이터 불일치 수정 (9730abb)

### 문제
- 마이페이지(localStorage)와 관리자 모달(Supabase) 데이터가 불일치

### 원인 및 해결

| 원인 | 해결 |
|------|------|
| 2초 디바운스로만 동기화 → 초기 데이터 누락 | 로그인 시 **즉시 동기화** 추가 |
| BadgeContext 별도 upsert → INSERT 시 빈 배열로 덮어씀 | ProgressContext가 **localStorage 배지 읽어서 통합 전송** |
| 기존 quiz_scores 테이블 데이터를 모달이 안 읽음 | **두 테이블 동시 조회 후 병합** |

### 변경 파일
- `src/contexts/ProgressContext.jsx` — 즉시 동기화 + 배지 통합 전송
- `src/contexts/BadgeContext.jsx` — 별도 Supabase 동기화 제거 (단순화)
- `src/pages/AdminPage.jsx` — `pymaster_user_progress` + `pymaster_quiz_scores` 병합 조회

---

## 3. 회원 관리 테이블 컬럼 변경 (9ef389d)

### 변경 내용
- 기존: 아바타 / 이름 / 이메일 / 로그인 방식 / 마지막 접속
- 변경: **구분 / 이름 / 이메일 / 로그인 방식 / 가입일 / 마지막 접속**

| 컬럼 | 데이터 | 포맷 |
|------|--------|------|
| 구분 | 순번 (1, 2, 3...) | 숫자 |
| 이름 | member.name | 텍스트 |
| 이메일 | member.email | 텍스트 |
| 로그인 방식 | member.provider | 아이콘 + 라벨 |
| 가입일 | member.created_at | YYYY.MM.DD |
| 마지막 접속 | member.updated_at | 상대 시간 (방금 전, N분 전...) |

### 변경 파일
- `src/pages/AdminPage.jsx` — 테이블 헤더/바디 변경
- `src/styles/admin.css` — `.admin-member-num` 스타일 추가

---

## 빌드 결과 (최종 9ef389d)
- CSS: 106.21KB
- index.js: 452.34KB
- AdminPage.js: 16.24KB
- 총 46개 청크
- GitHub Pages 배포 완료
