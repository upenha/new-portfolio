import Image from 'next/image'
import { Exo_2 } from 'next/font/google'
import { ChevronDown, Moon, Sun } from 'lucide-react'
import { Stack } from '@/components/Stack'
import Link from 'next/link'
import dayjs from 'dayjs'
const exo = Exo_2({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${exo.className} scroll-smooth flex w-full h-full overflow-x-hidden bg-zinc-900 bg-background bg-center text-white justify-center flex-col items-center`}>
      <div className="absolute flex items-center justify-center w-12 h-12 border-2 rounded-lg top-8 right-8 bg-zinc-800 border-zinc-700">
        <Sun />
      </div>
      <section className="flex flex-col items-center justify-center w-screen h-screen text-white bg-center bg-background">
        <div className="flex flex-row items-center justify-around w-screen h-screen">
          <div className="flex flex-row items-center justify-around w-2/3 gap-1 max-sm:gap-0">
            <div>
              <p className="text-xl font-semibold text-white max-sm:text-base">howdy!</p>
              <h1 className="text-6xl font-extrabold text-purple-600 max-sm:text-3xl">
                <b className="text-white">i&apos;m</b> Lucas
              </h1>
              <h1 className="text-5xl font-bold text-purple-600 max-sm:text-2xl">
                kouzoukian
              </h1>
              <p className="mt-3 mb-6 text-lg max-sm:mt-2 max-sm:mb-4 text-zinc-400 max-sm:text-sm">designer and software engineer</p>
            </div>
            <Image src='/photo.jpg' alt='' width={250} height={250} className="p-2 rounded-full ring-purple-700 ring-4 max-sm:w-1/3 max-sm:h-1/3 max-sm:ring-2 max-sm:p-1"/>
          </div>
        </div>
        <Link href="#aboutme" aria-label="Link to About me section" className="absolute p-2 rounded-full bottom-6 bg-zinc-700 animate-bounce">
          <ChevronDown size={32} color='#ffffff' className="pt-[3px]"/>
        </Link>
      </section>
      
      <section id="aboutme" className="flex flex-col items-center justify-center w-screen h-screen text-white bg-zinc-900">
        <h1 className="text-6xl font-extrabold text-purple-600 max-sm:text-4xl">
          About me
        </h1>
        <div className="flex flex-col w-1/3 gap-4 pt-4 max-sm:w-2/3">
          <p>
            Hello! I&apos;m Lucas &quot;Upenha&quot; Kouzoukian, a {dayjs(new Date()).diff('2008-04-21', 'y')}yo autodidact developer and designer that love learning new things. I&apos;m currently using Next.js, React.js, Typescript, Node.js, Mongodb and other technologies! I have so many private projects including <a href="https://github.com/zorinbot/" className="font-bold underline decoration-white">@zorinbot</a> and non-remunerated works in <a href="https://squarecloud.app/" className="font-bold underline decoration-white">@squarecloud</a>  
          </p>
          <p>
            Since 2017 learning new languages and technologies to improve my learning skill and my coding skill! I&apos;m bilingual speaking Portuguese 🇧🇷 (Fluent) and English 🇦🇺 (Begineer). 
          </p>
        </div>
      </section>
      <footer className="flex flex-row items-center justify-center w-screen gap-8 p-4 bg-zinc-800">
        <a href="https://instagram.com/upeisalone">
          instagram
        </a>
        <a href="https://twitter.com/upenha_">
          twitter
        </a>
        <a href="https://discord.com/users/682349999715123265">
          discord
        </a>
        <a href="https://github.com/upenha">
          github
        </a>
      </footer>
    </main>
  )
}
