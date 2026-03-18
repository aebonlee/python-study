# PyMaster - 배포 가이드

## 배포 환경
- **호스팅**: GitHub Pages
- **빌드 도구**: Vite 7.3
- **URL**: https://aebonlee.github.io/python-study/

## 로컬 개발

### 설치
```bash
npm install
```

### 개발 서버
```bash
npm run dev
```
개발 서버는 http://localhost:5173 에서 실행됩니다.

### 빌드
```bash
npm run build
```
빌드 결과물은 `dist/` 폴더에 생성됩니다.

### 미리보기
```bash
npm run preview
```
빌드된 결과물을 로컬에서 미리 확인합니다.

## GitHub Pages 배포

### 방법 1: GitHub Actions (자동 배포)
`main` 브랜치에 푸시하면 자동으로 빌드 및 배포됩니다.

### 방법 2: 수동 배포
```bash
npm run build
# gh-pages 패키지 사용 시
npx gh-pages -d dist
```

## Vite 설정 (GitHub Pages)
```js
// vite.config.js
export default defineConfig({
  base: '/python-study/',  // 리포지토리 이름
  plugins: [react()]
})
```

## 환경 변수
현재 프로젝트는 외부 API를 사용하지 않으므로 환경 변수가 필요하지 않습니다.

## SPA 라우팅 처리
GitHub Pages에서 SPA 라우팅을 지원하기 위해 404.html 리디렉션을 사용합니다.

## 체크리스트
- [x] vite.config.js에 base 경로 설정
- [x] GitHub Actions 워크플로우 설정
- [ ] 커스텀 도메인 (선택)
- [x] HTTPS 활성화 (GitHub Pages 기본)
