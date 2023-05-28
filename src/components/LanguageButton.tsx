import { LanguageContext } from "@/contexts/LanguageContext"
import { useContext, useState } from "react"
import { EuaFlag } from "../../public/eua-flag"
import { BrazilFlag } from "../../public/brazil-flag"
import { ChevronDown } from "lucide-react"


export const LanguageButton = () => {
  const { changeLanguage, language } = useContext(LanguageContext)
  return (
    <button 
      onClick={changeLanguage} 
      className={`fixed rounded-xl items-center justify-center top-4 right-4 p-2 bg-zinc-800`}
    >
      <div className="h-8 w-8">

        {language === 'pt-br' ? <BrazilFlag /> : <EuaFlag />}
      </div>
    </button>
  )
}