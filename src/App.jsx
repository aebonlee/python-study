import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { ProgressProvider } from './contexts/ProgressContext'
import { BadgeProvider } from './contexts/BadgeContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import LevelPage from './pages/LevelPage'
import LessonPage from './pages/LessonPage'
import BadgeCollection from './pages/BadgeCollection'
import QuizCenter from './pages/QuizCenter'

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:level" element={<LevelPage />} />
          <Route path="/:level/:lessonId" element={<LessonPage />} />
          <Route path="/badges" element={<BadgeCollection />} />
          <Route path="/quiz" element={<QuizCenter />} />
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
            <AppLayout />
          </BadgeProvider>
        </ProgressProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
