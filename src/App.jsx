import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ExamProvider } from './contexts/ExamContext'
import History from './pages/History'
import Home from './pages/Home'
import InstantExamPage from './pages/InstantExam'
import ReviewExamPage from './pages/ReviewExam'

export default function App() {
  return (
    <ExamProvider>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exam/instant/:examId" element={<InstantExamPage />} />
            <Route path="/exam/review/:examId" element={<ReviewExamPage />} />
            <Route path="/history" element={<History />} />
          </Routes>
        </div>
      </Router>
    </ExamProvider>
  )
}
