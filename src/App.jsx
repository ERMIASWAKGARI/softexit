import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ExamProvider } from './contexts/ExamContext'
import Home from './pages/Home'
import InstantExamPage from './pages/InstantExam'
import ReviewExamPage from './pages/ReviewExam' // import History from './pages/History'

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
          </Routes>
        </div>
      </Router>
    </ExamProvider>
  )
}
