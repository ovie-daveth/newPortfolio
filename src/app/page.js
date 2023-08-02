"use client" 
import Image from 'next/image'
import Link from 'next/link'
import Hero from 'public/mee.jpg'
import { ThemeContext } from '../../context/ThemeContext'
import { useContext } from 'react'
import About from "../components/about/About"
import Socials from "../components/socials/Socials"
import Mystack from "../components/stacks/Mystack"
import Blogs from "../components/blogs/Blogs"
import Works from "../components/works/Works"

export default function Home() {
  const {mode } = useContext(ThemeContext)
  return (
    <main className="">
      <section className={`py-[8rem] flex flex-col items-center gap-10 ${mode === "light" ? "home2" : "home"}`}>
        <Image src={Hero} alt="me" className="w-[190px] h-[190px] rounded-full object-cover shadow-xl img" />
        <div className="flex flex-col items-center gap-5">
          <h1 className="md:text-5xl font-bold gradient wave">Omokefe Ovie David</h1>
          <p className={`font-bold ${mode === "light" ? "text-[#50b329]" : "text-[goldenrod]"}`}> <span className="wave">FullStack</span> <span className='wave2'>(MERN)</span> <span className="wave">Developer</span></p>
        </div>
      </section>
      <section className="flex justify-between px-[10rem] py-[3rem] gap-6">
        <div className="w-[50%]">
            <About />
        </div>
        <div className="w-[50%]">
            <Socials />
        </div>
      </section>
      <section className="py-[3rem]">
        <Mystack />
      </section>
      <section className="py-[3rem] px-[10rem]">
        <Blogs />
      </section>
      <section className="py-[3rem] px-[10rem]">
        <Works />
      </section>
    </main>
  )
  
}
