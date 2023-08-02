"use client"
import React, { useContext } from 'react'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import { ThemeContext } from '../../../context/ThemeContext'

const Theme = () => {
    const {toggleMode, mode} = useContext(ThemeContext)
  return (
    <div className={`flex items-center gap-2 px-1 border-[1px] cursor-pointer ${mode==="light"?"border-black":"border-white"} rounded-full relative`}
    onClick={toggleMode}>
        <div className="text-lg text-orange-400"><BsFillSunFill /></div>
        <div className="text-lg text-orange-400"><BsFillMoonFill /></div>
        <div className={`bg-gray-400 w-[20px] h-[20px] rounded-full absolute ${mode === 'light' ? "left-[2px]" : "right-[2px]"}`}></div>
    </div>
  )
}

export default Theme
