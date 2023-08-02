import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

const Socials = () => {
    const {mode } = useContext(ThemeContext)
  return (
    <main className={`${mode === "light"  ? "home2" : "home"} pb-10 pt-3 px-10 rounded-3xl shadow-custom-shadow`}>
      <h1 className={`${mode==="light"?"text-[green]":"gradient"} mb-6 md:text-3xl text-xl font-bold`}>Find me here</h1>
      <div className="flex gap-20">
            <div className="flex flex-col gap-5">
                <a href=""><Image src="/1.png" className="hover:scale-105 transition-transform duration-500 ease-in-out" width={40} height={30} /></a>
                <a href=""><Image src="/2.png" className="hover:scale-105 transition-transform duration-500 ease-in-out" width={40} height={30} /></a>
            </div>
            <div className="flex flex-col gap-5">
                <a href=""><Image src="/3.png" className="hover:scale-105 transition-transform duration-500 ease-in-out" width={40} height={30} /></a>
                <a href=""><Image src="/4.png" className="hover:scale-105 transition-transform duration-500 ease-in-out" width={40} height={30} /></a>
            </div>
      </div>
      <h1 className="mt-6 md:text-lg font-semibold">You can also mail at <a className="hover:text-[goldenrod]" href="mailto:davethsite@gmail.com">davethsite@gmail.com</a></h1>
    </main>
  )
}

export default Socials
