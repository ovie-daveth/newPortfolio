"use client"
import Image from 'next/image'
import React from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

const Footer = () => {
  const {mode} = useContext(ThemeContext)
  return (
    <div className={`flex md:flex-row flex-col items-center gap-4 mt-10 justify-between lg:px-[10rem] md:px-[3rem] px-[1rem] py-[5rem] ${mode === "dark" ? "bg-[#2c072c]" : "bg-gray-200 shadow-custom-shadow"}`}>
     <p className="lg:w-[50%]"> &copy;2023, <span className="text-[goldenrod] font-bold">Daveton.</span> All rights reserved</p>
     <div className="flex gap-4 items-center lg:w-[50%]">
        <a href="https://www.facebook.com/omokefe.david" target="_blank"><Image src="/1.png" width={20} height={30} /></a>
        <a href="https://www.instagram.com/daveton_academy" target="_blank"><Image src="/2.png" width={20} height={30} /></a>
        <a href="https://www.twitter.com/ovie_omokefe" target="_blank"><Image src="/3.png" width={20} height={30} /></a>
        <a href="https://www.youtube.com/" target="_blank"><Image src="/4.png" width={20} height={30} /></a>
     </div>
    </div>
  )
}

export default Footer
