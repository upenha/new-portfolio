'use client'
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, useEffect, useState } from "react";

import en_US from "@/locales/en-us";
import pt_BR from "@/locales/pt-br";

interface LanguageContextType {
  language: string;
  t: (key: string, values?: Record<string, any>) => string
  changeLanguage: () => void
}

export const LanguageContext = createContext({} as LanguageContextType)

export const LanguageProvider = ({ children }: any) => {
  const [ language, setLanguage ] = useState<string>('en-us')
  useEffect(() => {

    const { 'upenha.language': lang } = parseCookies()

    if(language) {
      setLanguage(lang)
    } else {
      setCookie(undefined, 'upenha.language', language, {
        maxAge: 31536000
      })
      setLanguage(lang)
    }
  }, [])

  const t = (key: string, values?: Record<string, any>): string => {
    const isPtBr = language == 'pt-br'
    const languageObject: Record<string, string> = isPtBr ? pt_BR : en_US 
    let message =  languageObject[key]
    
    // console.log(message)
    if (values) {
      for (const [replacer, replacerContent] of Object.entries(values)) {
        message = message.replace(`{{${replacer}}}`, replacerContent)
      } 
    }
    return message
  }
  
  const changeLanguage = () => {
    const isPtBr = language == 'pt-br'

    destroyCookie(undefined, 'upenha.language')
    setLanguage(isPtBr ? 'en-us' : 'pt-br')
    setCookie(undefined, 'upenha.language', isPtBr ? 'en-us' : 'pt-br', {
      maxAge: 31536000
    })
  }

  return (
    <LanguageContext.Provider value={{ language, t, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}