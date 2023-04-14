import Image from 'next/image'
import { Exo_2 } from 'next/font/google'
import { ChevronDown } from 'lucide-react'

const exo = Exo_2({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${exo.className} flex h-screen w-screen bg-zinc-900 text-white justify-center flex-col items-center`}>
      <div className="flex flex-row items-center justify-around w-screen">
        <div className="flex flex-col gap-1 ml-56">
          <p className="text-xl font-semibold text-white">howdy!</p>
          <h1 className="text-6xl font-extrabold text-purple-600">
            i&apos;m lucas
          </h1>
          <h1 className="text-5xl font-bold">
            kouzoukian
          </h1>
          <p className="text-lg text-zinc-400">design and software engineer</p>
          <button className="h-12 mt-2 bg-purple-700 border-2 border-purple-500 rounded-lg w-36 hover:bg-purple-900 hover:border-purple-700">
            
            learn more
          </button>
        </div>
        <div className="flex flex-col h-full gap-1 mr-56 ">
          <Image src='/photo.jpg' alt='' width={250} height={250} className="p-2 border-4 border-purple-700 rounded-full"/>
        </div>

      </div>
      <div className="absolute p-2 rounded-full bottom-6 bg-zinc-700 animate-bounce">
        <ChevronDown size={32} color='#ffffff' className="pt-[3px]"/>
      </div>
    </main>
  )
}
