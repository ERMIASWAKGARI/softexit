import AboutSection from '../components/AboutSection'
import ExamsSection from '../components/ExamsSection'
import HeroSection from '../components/HeroSection'
import JoinGroup from '../components/JoinGroup'
// import Navbar from '../components/Navbar'
import Resources from '../components/Resources'
// import { useExam } from '../contexts/ExamContext'
// import { exams as examData } from '../data/exams'

export default function Home() {
  // const { setExams } = useExam()

  // useEffect(() => {
  // Load exam data into context
  // setExams(examData)
  // }, [setExams])

  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      {/* <Navbar /> */}
      <main className="pt-16">
        {' '}
        {/* Add padding to account for fixed navbar */}
        <HeroSection />
        <ExamsSection />
        <JoinGroup />
        <Resources />
        <AboutSection />
      </main>
    </div>
  )
}
