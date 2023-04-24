import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const MainSection = () => {
  return (
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
          <Image src='/photo.jpg' priority alt='' width={250} height={250} className="p-2 rounded-full ring-purple-700 ring-4 max-sm:w-1/3 max-sm:h-1/3 max-sm:ring-2 max-sm:p-1"/>
        </div>
      </div>
      <Link href="#aboutme" aria-label="Link to About me section" className="absolute p-2 rounded-full bottom-6 bg-zinc-700 animate-bounce">
        <ChevronDown size={32} color='#ffffff' className="pt-[3px]"/>
      </Link>
    </section>
  )
}

export default MainSection