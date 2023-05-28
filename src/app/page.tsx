'use client'
import MainSection from '@/components/MainSection'
import AboutMeSection from '@/components/AboutMeSection'
import Footer from '@/components/Footer'
import { LanguageProvider } from '@/contexts/LanguageContext'
import { LanguageButton } from '@/components/LanguageButton'

function Home ()  {
  return (
    <LanguageProvider>
      <main className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden text-white bg-center scroll-smooth bg-zinc-900 bg-background">
        <MainSection />
        <AboutMeSection />
        <Footer />
        <LanguageButton />
        
      </main>
    </LanguageProvider>  
  )
}

export default Home