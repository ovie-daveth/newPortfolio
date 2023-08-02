"use client"
import Image from 'next/image'
import React from 'react'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

const Footer = () => {
  const {mode} = useContext(ThemeContext)
  return (
    <div className={`flex items-center justify-between px-[10rem] py-[5rem] ${mode === "dark" ? "bg-[#2c072c]" : "bg-gray-200 shadow-custom-shadow"}`}>
     <p> &copy;2023, <span className="text-[goldenrod] font-bold">Daveton.</span> All rights reserved</p>
     <div className="flex gap-4 items-center ">
        <a href=""><Image src="/1.png" width={20} height={30} /></a>
        <a href=""><Image src="/2.png" width={20} height={30} /></a>
        <a href=""><Image src="/3.png" width={20} height={30} /></a>
        <a href=""><Image src="/4.png" width={20} height={30} /></a>
     </div>
    </div>
  )
}

export default Footer
