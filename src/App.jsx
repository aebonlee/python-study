import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { ProgressProvider } from './contexts/ProgressContext'
import { BadgeProvider } from './contexts/BadgeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const Home = lazy(() => import('./pages/Home'))
const LevelPage = lazy(() => import('./pages/LevelPage'))
const LessonPage = lazy(() => import('./pages/LessonPage'))
const BadgeCollection = lazy(() => import('./pages/BadgeCollection'))
const QuizCenter = lazy(() => import('./pages/QuizCenter'))

function PageLoader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '40vh' }}>
      <div className="loading-spinner-small" style={{ width: 32, height: 32, borderWidth: 3, borderColor: 'rgba(48,105,152,0.2)', borderTopColor: '#306998' }} />
    </div>
  )
}

function LazyRoute({ element }) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<PageLoader />}>
        {element}
      </Suspense>
    </ErrorBoundary>
  )
}

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LazyRoute element={<Home />} />} />
          <Route path="/:level" element={<LazyRoute element={<LevelPage />} />} />
          <Route path="/:level/:lessonId" element={<LazyRoute element={<LessonPage />} />} />
          <Route path="/badges" element={<LazyRoute element={<BadgeCollection />} />} />
          <Route path="/quiz" element={<LazyRoute element={<QuizCenter />} />} />
          <Route path="*" element={
            <div className="not-found-page">
              <div className="not-found-content">
                <div className="not-found-code">404</div>
                <h2 className="not-found-title">페이지를 찾을 수 없습니다</h2>
                <p className="not-found-desc">요청하신 페이지가 존재하지 않습니다.</p>
                <a href="/" className="btn btn-primary">홈으로 돌아가기</a>
              </div>
            </div>
          } />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ProgressProvider>
          <BadgeProvider>
            <ErrorBoundary>
              <AppLayout />
            </ErrorBoundary>
          </BadgeProvider>
        </ProgressProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
