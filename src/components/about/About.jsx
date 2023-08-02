"use client" 
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

export default function About() {
  const {mode } = useContext(ThemeContext)
  return (
    <main className={`${mode === "light"  ? "home2" : "home"} pb-12 pt-3 px-10 rounded-3xl shadow-custom-shadow`}>
        <h1 className={`${mode==="light"?"text-[green]":"gradient"} mb-6 md:text-3xl text-xl font-bold`}>About Me</h1>
        <p className="md:text-lg text-justify tracking-tighter">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit odio reiciendis repellat. Illum, nostrum tempore. Rem ipsa earum neque error, accusamus, nobis magnam, molestias quia ab omnis nostrum voluptatem. Asperiores exercitationem placeat illum aut accusantium sunt beatae dolores, minima tenetur.</p>
    </main>
  )
  
}
