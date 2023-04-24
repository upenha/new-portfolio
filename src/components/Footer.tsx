import { Github, Instagram, MessageCircle, Twitter } from "lucide-react"

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-screen gap-2 p-2 bg-zinc-800">
      
      <div className="flex flex-row gap-4">
        <a className="flex flex-row items-center justify-center gap-2" href="https://instagram.com/upeisalone">
          <Instagram size={18}/>
          {/* instagram */}
        </a>
        <a className="flex flex-row items-center justify-center gap-2" href="https://twitter.com/upenha_">
          <Twitter size={18} />
          {/* twitter */}
        </a>
        <a className="flex flex-row items-center justify-center gap-2" href="https://discord.com/users/682349999715123265">
          <MessageCircle size={18} /> 
          {/* discord */}
        </a>
        <a className="flex flex-row items-center justify-center gap-2" href="https://github.com/upenha">
          <Github size={18} />
          {/* github */}
        </a>
      </div>
      <p className="text-xs font-light text-zinc-400">
        © 2023 All rights reserved.
      </p>
    </footer>
  )
}

export default Footer