import AboutSection from '../components/AboutSection'
import ExamsSection from '../components/ExamsSection'
import HeroSection from '../components/HeroSection'
import JoinGroup from '../components/JoinGroup'
import Resources from '../components/Resources'

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900">
      <main className="pt-16">
        <HeroSection />
        <ExamsSection />
        <JoinGroup />
        <Resources />
        <AboutSection />
      </main>
    </div>
  )
}
