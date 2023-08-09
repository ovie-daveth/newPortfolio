import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useContext } from 'react'
import { ThemeContext } from '../../../context/ThemeContext'

const Socials = () => {
    const {mode } = useContext(ThemeContext)
  return (
    <main className={`${mode === "light"  ? "home2" : "home"} hidden md:block lg:pb-10 md:pb-[3.2rem] pt-3 lg:px-10 md:px-3 rounded-3xl shadow-custom-shadow`}>
      <h1 className={`${mode==="light"?"text-[green]":"gradient"} mb-6 lg:text-3xl md:text-2xl text-xl font-bold md:text-left text-center`}>Find me here</h1>
      <div className="flex md:justify-start justify-center lg:gap-2 gap-4">
            <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <a href="https://www.facebook.com/omokefe.david" target="_blank"><Image src="/1.png" className="hover:scale-105 transition-transform duration-500 ease-in-out" width={40} height={30} /></a>
                  <p>Facebook</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://www.instagram.com/daveton_academy" target="_blank"><Image src="/2.png" className="hover:scale-105 transition-transform duration-500 ease-in-out" width={40} height={30} /></a>
                  <p>Instagram</p>
                </div>
            </div>
            <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
                  <a href="https://www.twitter.com/ovie_omokefe" target="_blank"><Image src="/3.png" className="hover:scale-105 transition-transform duration-500 ease-in-out" width={40} height={30} /></a>
                  <p>Twitter</p>
                </div>
                <div className="flex items-center gap-3">
                  <a href="https://www.youtube.com/" target="_blank"><Image src="/4.png" className="hover:scale-105 transition-transform duration-500 ease-in-out" width={40} height={30} /></a>
                  <p>Youtube</p>
                </div>
            </div>
      </div>
      <h1 className="mt-6 lg:text-md font-semibold text-center lg:text-left">You can also mail at <a className="hover:text-[goldenrod]" href="mailto:davethsite@gmail.com">davethsite@gmail.com</a></h1>
    </main>
  )
}

export default Socials
