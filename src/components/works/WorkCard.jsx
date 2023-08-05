import React from 'react'
import Image from "next/image"
import Link from 'next/link'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

export default function WorkCard({stack,img,title,link}){
    const {mode} = useContext(ThemeContext)
    return (
     <Link href={link ? link : ""} target="_blank" className={`relative group flex flex-col items-start md:w-[24%] pb-5 rounded-2xl shadow-custom-shadow ${mode==="light" ? "" : "bg-[#2c072c]"} overflow-hidden wave`}>
        <h1 className={`absolute left-0 top-0 rounded-tl-2xl rounded-br-2xl ${stack ===  "NextJs"  || stack === "React"  ? 'bg-[#c97f10]' : "bg-[#d8411c]"} px-5 py-1 font-bold w-[130px] group-hover:w-full transition-all duration-500 ease-in-out text-white z-50`}>{stack}</h1>
        <div className="block overflow-hidden">
            <Image src={img} alt="workimg" className="rounded-t-2xl group-hover:scale-x-105 transition-all duration-500 ease-in-out" />
        </div>
        <div className="block mt-3 ml-2 font-bold gradient group-hover:text-[green] transition-all duration-500 ease-in-out md:text-left text-center px-2">
            <h1>{title}</h1>
        </div>
     </Link>
    )
}