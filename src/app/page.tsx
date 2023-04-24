import { Exo_2 } from 'next/font/google'
import MainSection from '@/components/MainSection'
import AboutMeSection from '@/components/AboutMeSection'
import Footer from '@/components/Footer'
const exo = Exo_2({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden text-white bg-center scroll-smooth bg-zinc-900 bg-background">
      <MainSection />
      <AboutMeSection />
      <Footer />
      
    </main>
  )
}
