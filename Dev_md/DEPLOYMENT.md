# PyMaster - 배포 가이드

## 배포 환경
- **호스팅**: GitHub Pages
- **빌드 도구**: Vite 7.3
- **배포 도구**: gh-pages
- **URL**: https://python-study.dreamitbiz.com/
- **GitHub**: https://github.com/aebonlee/python-study

## 로컬 개발

### 설치
```bash
npm install
```

### 개발 서버
```bash
npm run dev
```
http://localhost:5173 에서 실행

### 빌드
```bash
npm run build
```
결과물: `dist/` 폴더

### 미리보기
```bash
npm run preview
```

## 배포 방법

### 방법 1: gh-pages (수동 배포)
```bash
npm run build
npm run deploy
```
`gh-pages -d dist` 명령으로 gh-pages 브랜치에 배포됩니다.

### 방법 2: GitHub Actions (자동 배포)
`main` 브랜치에 푸시하면 `.github/workflows/deploy.yml`이 자동 실행됩니다.

## GitHub Pages 설정
1. Repository Settings -> Pages
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **(root)**
4. Save

## 커스텀 도메인
- `public/CNAME` 파일에 `python-study.dreamitbiz.com` 설정
- DNS에서 CNAME 레코드 설정 필요

## OG 이미지 갱신
```bash
node scripts/generate-og.mjs
```
`public/og-image.png`이 생성됩니다.

## Supabase 설정
1. `.env.example`을 `.env`로 복사
2. Supabase 프로젝트 URL과 Anon Key 입력
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
3. `.env` 미설정 시 localStorage만 사용 (정상 작동)

## OAuth 설정 (Google/Kakao)
1. Supabase Dashboard -> Authentication -> Providers
2. Google: Client ID/Secret 입력
3. Kakao: REST API Key 입력
4. Redirect URI: `https://[project-ref].supabase.co/auth/v1/callback`

## 다국어(i18n) 설정
- 기본 언어: 한국어 (`ko`)
- 지원 언어: 한국어/영어 (`ko` / `en`)
- localStorage 키: `pymaster-lang`
- Navbar의 지구본(fa-globe) 아이콘 클릭으로 전환
- 새로고침 후에도 선택 언어 유지

## 체크리스트
- [x] vite.config.js base: '/' (커스텀 도메인)
- [x] CNAME 파일 설정
- [x] 404.html SPA 리디렉트
- [x] GitHub Actions 워크플로우
- [x] OG 메타태그 + 이미지
- [x] gh-pages 배포 스크립트
- [x] Font Awesome 6 CDN
- [x] Supabase .env 설정
- [x] Google/Kakao OAuth 클라이언트 코드
- [x] 다국어(i18n) 한국어/영어 지원
