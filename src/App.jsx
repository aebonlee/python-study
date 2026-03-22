import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import { ProgressProvider } from './contexts/ProgressContext'
import { BadgeProvider } from './contexts/BadgeContext'
import { AuthProvider, useAuth } from './contexts/AuthContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

const Home = lazy(() => import('./pages/Home'))
const LevelPage = lazy(() => import('./pages/LevelPage'))
const LessonPage = lazy(() => import('./pages/LessonPage'))
const BadgeCollection = lazy(() => import('./pages/BadgeCollection'))
const QuizCenter = lazy(() => import('./pages/QuizCenter'))
const Login = lazy(() => import('./pages/Login'))
const MyPage = lazy(() => import('./pages/MyPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))
const TeacherPage = lazy(() => import('./pages/TeacherPage'))
const PythonLearning = lazy(() => import('./pages/PythonLearning'))
const PythonPractice = lazy(() => import('./pages/PythonPractice'))
const Guide = lazy(() => import('./pages/Guide'))
const Community = lazy(() => import('./pages/community/Community'))
const CommunityPost = lazy(() => import('./pages/community/CommunityPost'))
const CommunityWrite = lazy(() => import('./pages/community/CommunityWrite'))
const PythonLesson01 = lazy(() => import('./pages/python-learning/PythonLesson01'))
const PythonLesson02 = lazy(() => import('./pages/python-learning/PythonLesson02'))
const PythonLesson03 = lazy(() => import('./pages/python-learning/PythonLesson03'))
const PythonLesson04 = lazy(() => import('./pages/python-learning/PythonLesson04'))
const PythonLesson05 = lazy(() => import('./pages/python-learning/PythonLesson05'))
const PythonLesson06 = lazy(() => import('./pages/python-learning/PythonLesson06'))
const PythonLesson07 = lazy(() => import('./pages/python-learning/PythonLesson07'))
const PythonLesson08 = lazy(() => import('./pages/python-learning/PythonLesson08'))
const PythonLesson09 = lazy(() => import('./pages/python-learning/PythonLesson09'))
const PythonLesson10 = lazy(() => import('./pages/python-learning/PythonLesson10'))
const PythonLesson11 = lazy(() => import('./pages/python-learning/PythonLesson11'))

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

function AdminRoute({ children }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()
  if (loading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!isAdmin) return <Navigate to="/" replace />
  return children
}

function TeacherRoute({ children }) {
  const { isAuthenticated, isTeacher, loading } = useAuth()
  if (loading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!isTeacher) return <Navigate to="/" replace />
  return children
}

function NotFoundPage() {
  const { t } = useLanguage()
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <div className="not-found-code">{t('notFound.code')}</div>
        <h2 className="not-found-title">{t('notFound.title')}</h2>
        <p className="not-found-desc">{t('notFound.desc')}</p>
        <a href="/" className="btn btn-primary">{t('notFound.home')}</a>
      </div>
    </div>
  )
}

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/login" element={<LazyRoute element={<Login />} />} />
          <Route path="/" element={<LazyRoute element={<Home />} />} />
          <Route path="/my" element={<LazyRoute element={<MyPage />} />} />
          <Route path="/admin" element={<AdminRoute><LazyRoute element={<AdminPage />} /></AdminRoute>} />
          <Route path="/teacher" element={<TeacherRoute><LazyRoute element={<TeacherPage />} /></TeacherRoute>} />
          <Route path="/python-learning" element={<LazyRoute element={<PythonLearning />} />} />
          <Route path="/python-learning/01" element={<LazyRoute element={<PythonLesson01 />} />} />
          <Route path="/python-learning/02" element={<LazyRoute element={<PythonLesson02 />} />} />
          <Route path="/python-learning/03" element={<LazyRoute element={<PythonLesson03 />} />} />
          <Route path="/python-learning/04" element={<LazyRoute element={<PythonLesson04 />} />} />
          <Route path="/python-learning/05" element={<LazyRoute element={<PythonLesson05 />} />} />
          <Route path="/python-learning/06" element={<LazyRoute element={<PythonLesson06 />} />} />
          <Route path="/python-learning/07" element={<LazyRoute element={<PythonLesson07 />} />} />
          <Route path="/python-learning/08" element={<LazyRoute element={<PythonLesson08 />} />} />
          <Route path="/python-learning/09" element={<LazyRoute element={<PythonLesson09 />} />} />
          <Route path="/python-learning/10" element={<LazyRoute element={<PythonLesson10 />} />} />
          <Route path="/python-learning/11" element={<LazyRoute element={<PythonLesson11 />} />} />
          <Route path="/python-practice" element={<LazyRoute element={<PythonPractice />} />} />
          <Route path="/guide" element={<LazyRoute element={<Guide />} />} />
          <Route path="/community" element={<LazyRoute element={<Community />} />} />
          <Route path="/community/write" element={<LazyRoute element={<CommunityWrite />} />} />
          <Route path="/community/:postId" element={<LazyRoute element={<CommunityPost />} />} />
          <Route path="/:level" element={<LazyRoute element={<LevelPage />} />} />
          <Route path="/:level/:lessonId" element={<LazyRoute element={<LessonPage />} />} />
          <Route path="/badges" element={<LazyRoute element={<BadgeCollection />} />} />
          <Route path="/quiz" element={<LazyRoute element={<QuizCenter />} />} />
          <Route path="*" element={<NotFoundPage />} />
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
        <LanguageProvider>
        <AuthProvider>
          <ProgressProvider>
            <BadgeProvider>
              <ErrorBoundary>
                <AppLayout />
              </ErrorBoundary>
            </BadgeProvider>
          </ProgressProvider>
        </AuthProvider>
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
