import Image from 'next/image'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black container mx-auto py-24 px-12">
      <div>
        <HeroSection/>
        <AboutMe/>
      </div>
    </main>
  )
}
