# PyMaster - 프로젝트 계획서

## 프로젝트 개요
- **프로젝트명**: PyMaster (파이마스터)
- **목적**: 파이썬 학습자를 위한 체계적이고 인터랙티브한 웹 기반 학습 플랫폼
- **대상 사용자**: 파이썬 입문자부터 데이터 분석까지 학습하고자 하는 사람
- **개발 기간**: 2026년 3월
- **GitHub**: https://github.com/aebonlee/python-study
- **배포 URL**: https://python-study.dreamitbiz.com/

## 핵심 기능

### 1. 단계별 학습 시스템
- **기초 (Basics)**: 변수, 자료형, 조건문, 반복문, 리스트, 함수 등 9개 레슨
- **중급 (Intermediate)**: OOP, 예외 처리, 정규표현식, 표준 라이브러리, Turtle 등 13개 레슨
- **고급 (Advanced)**: 데코레이터, 제너레이터, 동시성 등 5개 레슨
- **응용 (Applied)**: NumPy, Pandas, Matplotlib, Scikit-learn, TensorFlow/PyTorch 등 8개 레슨

### 2. 파이썬 학습 (Python Learning)
- 11개 단계별 레슨 (01~11) - 한국공학대학교 Python 강의 기반
- 파이썬 설치/환경 → 입출력/변수 → 자료형 → IPO → Turtle → 순서도 → 조건문 → 반복문 → 함수 → 예외처리 → 리스트
- 레슨 간 이전/다음 네비게이션
- 코드 블록, 테이블, 실습 과제, 핵심 정리 박스

### 3. 파이썬 실습 (Python Practice)
- **Pyodide** (Python WebAssembly) 기반 브라우저 내 실제 Python 실행
- Web Worker로 메인 스레드 블로킹 방지
- 12단계 실습 (step1~10, stepAdvanced, stepAdvanced2)
- input() 함수 대화형 입력 지원
- Turtle Graphics SVG 모의 렌더링
- 코드 에디터 (라인 넘버, 복사, 다운로드)
- 기본값/직접입력 모드 전환

### 4. 레슨별 코드 에디터
- 브라우저 내 파이썬 코드 에디터
- 라인 넘버 표시, Tab 키 지원
- 코드 실행 시뮬레이션 (print, 변수, f-string, for loop)
- **input() 함수 지원**: 코드 내 input() 호출 자동 감지, 입력 패널 UI 제공
- **Turtle Graphics SVG 렌더러**: turtle 명령어를 파싱하여 SVG로 실시간 시각화
- 예상 출력과 비교 기능, 힌트 제공

### 5. 도장깨기 배지 시스템
- 25개 배지 (브론즈 5, 실버 6, 골드 10, 플래티넘 4)
- 자동 배지 획득 평가, 배지 알림 팝업
- 배지 컬렉션 페이지

### 6. 퀴즈 센터
- 4개 단계별 퀴즈 (각 10문제)
- 타이머, 해설, 점수 기록 및 재도전

### 7. 진도 관리
- 레슨 완료 체크, 단계별 진도율
- 연속 학습일 (스트릭)
- localStorage 기반 데이터 저장 + Supabase 동기화 준비

### 8. 사용자 인증
- Supabase Auth 기반 Google/Kakao OAuth 로그인
- AuthContext로 전역 인증 상태 관리
- 로그인 페이지 (/login), Navbar 유저 UI

### 9. 역할 기반 접근 제어
- **관리자** (`aebon@kakao.com`): 전체 회원/데이터 조회, 커뮤니티 관리 → `/admin`
- **선생님** (`pch93472016@gmail.com`): 클래스 생성, 담당 학생 관리 → `/teacher`
- **학생** (일반 사용자): 마이페이지, 클래스 코드 입력하여 참여 → `/my`
- 클래스 코드 방식: 선생님이 클래스 생성 → 6자리 코드 → 학생이 코드 입력 → 참여

### 10. 안정성 기능
- Error Boundary (런타임 에러 복구 UI)
- React.lazy + Suspense (코드 스플리팅)

### 11. SNS 공유
- Open Graph 메타태그 (Kakao, Facebook, Twitter)
- 자동 생성 OG 이미지 (1200x630)

## 비기능 요구사항
- 반응형 디자인 (데스크톱, 태블릿, 모바일)
- 다크 모드 지원
- 클라이언트 사이드 렌더링 (SPA)
- 빠른 초기 로딩 (Vite + 코드 스플리팅)
- GitHub Pages 배포 + 커스텀 도메인
- Font Awesome 6 아이콘 (이모지 대신 아이콘 폰트)

## 마일스톤
1. ~~프로젝트 초기 설정~~ ✅
2. ~~CSS 스타일 시스템 구축~~ ✅
3. ~~컴포넌트 개발~~ ✅
4. ~~페이지 개발~~ ✅
5. ~~데이터 및 컨텐츠 작성~~ ✅
6. ~~빌드 및 배포~~ ✅
7. ~~이모지 정리, 컬러 통일~~ ✅
8. ~~Error Boundary, Lazy Loading~~ ✅
9. ~~OG 메타태그, Supabase 설정~~ ✅
10. ~~이모지 → Font Awesome 6 아이콘 교체~~ ✅
11. ~~사용자 인증 (Google/Kakao OAuth)~~ ✅
12. ~~Navbar 메뉴 개별화 (1열 평탄 구조)~~ ✅
13. ~~Matplotlib/Seaborn, Scikit-learn, TensorFlow/PyTorch 과정 추가~~ ✅
14. ~~Navbar 라이브러리 드롭다운 메뉴~~ ✅
15. ~~표준 라이브러리 + Turtle Graphics 과정 추가~~ ✅
16. ~~input() 지원, Turtle SVG 렌더러, 라이브러리 카테고리화~~ ✅
17. ~~파이썬 학습 (11개 레슨) + 파이썬 실습 (Pyodide) 추가~~ ✅
18. ~~학습 데이터 클라우드 동기화~~ ✅ (pymaster_user_progress 테이블)
19. ~~마이페이지 + 관리자 페이지~~ ✅ (프로필/통계/배지/성적표 + 회원관리)
20. ~~퀴즈 응시 기록 테이블~~ ✅ (최근 3회 이력 + 응시일)
21. ~~학생 개별 결과 모달~~ ✅ (관리자 회원 관리 → 클릭 → 상세)
22. ~~선생님 역할 시스템~~ ✅ (클래스 코드 기반, TeacherPage 대시보드)
23. ~~사용설명서 페이지~~ ✅ (/guide 정적 페이지, 12개 섹션 + FAQ)
24. 수료증 발급 - 예정
