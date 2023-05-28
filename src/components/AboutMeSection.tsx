import { LanguageContext } from "@/contexts/LanguageContext"
import dayjs from "dayjs"
import { useContext } from "react"

const AboutMeSection = () => {
  
  const { t } = useContext(LanguageContext)
  
  return (
    <section id="aboutme" className="flex flex-col items-center justify-center w-screen h-screen text-white bg-zinc-900">
      <h1 className="text-6xl font-extrabold text-purple-600 max-sm:text-4xl">
        {t('aboutme')}
      </h1>
      <div className="flex flex-col w-2/5 gap-4 pt-4 max-sm:w-2/3">
        <p className="leading-relaxed" dangerouslySetInnerHTML={{
          __html: t('firstText', { age: dayjs(new Date()).diff('2008-04-21', 'y')})
        }}>
        </p>
        <p className="leading-relaxed">
          {t('secondText')}
        </p>
      </div>
    </section>
  )
}

export default AboutMeSection