"use client"
import React, { useContext } from 'react'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import { ThemeContext } from '../../../context/ThemeContext'

const Theme = () => {
    const {toggleMode, mode} = useContext(ThemeContext)
  return (
    <div className={`flex items-center gap-2 px-1 border-[1px] cursor-pointer ${mode==="light"?" border-white ":"md:border-white border-[#641264]"} shadow-custom-shadow rounded-full relative py-[4px] md:py-[0]`}
    onClick={toggleMode}>
        <div className="text-lg text-orange-400"><BsFillSunFill /></div>
        <div className="text-lg text-orange-400"><BsFillMoonFill /></div>
        <div className={`bg-gray-400 md:w-[20px] md:h-[20px] w-[24px] h-[20px] rounded-full absolute ${mode === 'light' ? "md:left-[2px] left-0" : "md:right-[2px] right-0"}`}></div>
    </div>
  )
}

export default Theme
