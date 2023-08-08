"use client" 
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

export default function About() {
  const {mode } = useContext(ThemeContext)
  return (
    <main className={`${mode === "light"  ? "home2" : "home"} pb-12 pt-3 lg:px-10 px-3 rounded-3xl shadow-custom-shadow md:text-left text-center`}>
        <h1 className={`${mode==="light"?"text-[green]":"gradient"} mb-6 lg:text-3xl md:text-2xl text-xl font-bold`}>About Me</h1>
        <p className="text-md md:text-lg lg:text-justify font-semibold lg:tracking-tighter leading-[22px]">I'm David, a seasoned Full Stack MERN Developer specializing in Next.js, with over 2 years of experience. I excel in crafting lightning-fast, user-centric web applications that seamlessly integrate innovative design with robust functionality. My commitment to quality and efficiency is matched only by my collaborative spirit, enabling me to thrive in diverse team environments. Passionate about staying ahead in the ever-evolving web landscape, I bring creativity and technical precision to every project. Let's connect and explore the endless possibilities of web development together!</p>
    </main>
  )
  
}
