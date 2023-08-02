"use client"

import Image from 'next/image'
import React from 'react'
import Contact1 from 'public/contact.png'
import { ThemeContext } from '../../../context/ThemeContext' 
import { useContext } from 'react'

const Contact = () => {
  const {mode } = useContext(ThemeContext)
  return (
    <div className="block px-[10rem] py-[4rem]">
      <h1 className="text-center mb-10  md:text-4xl font-bold">Let's Keep in Touch</h1>
      <div className="flex justify-between">
      <div className="flex-1">
          <Image src={Contact1} alt="contact" lazyBoundary='' width={400} height={300} className='img'/>
      </div>
      <div className="flex-1">
        <form className='flex flex-col gap-4'>
          <input type="text" className={`bg-transparent border-[1.2px] rounded-md py-3 px-5 placeholder:text-lg text-md ${mode==='light'?"text-black":"text-white"} outline-none`} placeholder="name" />
          <input type="text" className={`bg-transparent border-[1.2px] rounded-md py-3 px-5 placeholder:text-lg text-md ${mode==='light'?"text-black":"text-white"} outline-none`} placeholder="email" />
          <textarea type="text" className={`bg-transparent border-[1.2px] rounded-md py-1 px-5 placeholder:text-lg text-md ${mode==='light'?"text-black":"text-white"} outline-none`} placeholder="message" rows={8} />
          <button className={`${mode === 'light' ? "hover:border-[#111] text-white hover:text-black" : "border-white text-white"} w-[20%] bg-[brown] border-[1.5px] px-6 py-2 rounded-md hover:bg-transparent  mt-12 `}>Send</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
