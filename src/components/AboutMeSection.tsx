import dayjs from "dayjs"

const AboutMeSection = () => {
  return (
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
  )
}

export default AboutMeSection