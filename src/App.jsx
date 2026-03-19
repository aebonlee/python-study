import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
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
const PythonLearning = lazy(() => import('./pages/PythonLearning'))
const PythonPractice = lazy(() => import('./pages/PythonPractice'))
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

function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth()
  if (loading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  return children
}

function AdminRoute({ children }) {
  const { isAuthenticated, isAdmin, loading } = useAuth()
  if (loading) return <PageLoader />
  if (!isAuthenticated) return <Navigate to="/login" replace />
  if (!isAdmin) return <Navigate to="/" replace />
  return children
}

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/login" element={<LazyRoute element={<Login />} />} />
          <Route path="/" element={<ProtectedRoute><LazyRoute element={<Home />} /></ProtectedRoute>} />
          <Route path="/my" element={<ProtectedRoute><LazyRoute element={<MyPage />} /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminRoute><LazyRoute element={<AdminPage />} /></AdminRoute>} />
          <Route path="/python-learning" element={<ProtectedRoute><LazyRoute element={<PythonLearning />} /></ProtectedRoute>} />
          <Route path="/python-learning/01" element={<ProtectedRoute><LazyRoute element={<PythonLesson01 />} /></ProtectedRoute>} />
          <Route path="/python-learning/02" element={<ProtectedRoute><LazyRoute element={<PythonLesson02 />} /></ProtectedRoute>} />
          <Route path="/python-learning/03" element={<ProtectedRoute><LazyRoute element={<PythonLesson03 />} /></ProtectedRoute>} />
          <Route path="/python-learning/04" element={<ProtectedRoute><LazyRoute element={<PythonLesson04 />} /></ProtectedRoute>} />
          <Route path="/python-learning/05" element={<ProtectedRoute><LazyRoute element={<PythonLesson05 />} /></ProtectedRoute>} />
          <Route path="/python-learning/06" element={<ProtectedRoute><LazyRoute element={<PythonLesson06 />} /></ProtectedRoute>} />
          <Route path="/python-learning/07" element={<ProtectedRoute><LazyRoute element={<PythonLesson07 />} /></ProtectedRoute>} />
          <Route path="/python-learning/08" element={<ProtectedRoute><LazyRoute element={<PythonLesson08 />} /></ProtectedRoute>} />
          <Route path="/python-learning/09" element={<ProtectedRoute><LazyRoute element={<PythonLesson09 />} /></ProtectedRoute>} />
          <Route path="/python-learning/10" element={<ProtectedRoute><LazyRoute element={<PythonLesson10 />} /></ProtectedRoute>} />
          <Route path="/python-learning/11" element={<ProtectedRoute><LazyRoute element={<PythonLesson11 />} /></ProtectedRoute>} />
          <Route path="/python-practice" element={<ProtectedRoute><LazyRoute element={<PythonPractice />} /></ProtectedRoute>} />
          <Route path="/community" element={<ProtectedRoute><LazyRoute element={<Community />} /></ProtectedRoute>} />
          <Route path="/community/write" element={<ProtectedRoute><LazyRoute element={<CommunityWrite />} /></ProtectedRoute>} />
          <Route path="/community/:postId" element={<ProtectedRoute><LazyRoute element={<CommunityPost />} /></ProtectedRoute>} />
          <Route path="/:level" element={<ProtectedRoute><LazyRoute element={<LevelPage />} /></ProtectedRoute>} />
          <Route path="/:level/:lessonId" element={<ProtectedRoute><LazyRoute element={<LessonPage />} /></ProtectedRoute>} />
          <Route path="/badges" element={<ProtectedRoute><LazyRoute element={<BadgeCollection />} /></ProtectedRoute>} />
          <Route path="/quiz" element={<ProtectedRoute><LazyRoute element={<QuizCenter />} /></ProtectedRoute>} />
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
        <AuthProvider>
          <ProgressProvider>
            <BadgeProvider>
              <ErrorBoundary>
                <AppLayout />
              </ErrorBoundary>
            </BadgeProvider>
          </ProgressProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
