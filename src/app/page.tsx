import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Achievements from '@/components/Achievements'
import Contact from '@/components/Contact'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
    </main>
  )
}
