import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { ExamProvider } from './contexts/ExamContext'
import { ThemeProvider } from './contexts/ThemeContext'
// import Exam from './pages/Exam'
// import History from './pages/History'
// import Results from './pages/Results'
import Home from './pages/Home'

export default function App() {
  return (
    <ThemeProvider>
      <ExamProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/exam/:examId" element={<Exam />} />
              <Route path="/results" element={<Results />} />
              <Route path="/history" element={<History />} /> */}
            </Routes>
          </div>
        </Router>
      </ExamProvider>
    </ThemeProvider>
  )
}
