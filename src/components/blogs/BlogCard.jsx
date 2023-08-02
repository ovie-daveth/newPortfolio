import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

const BlogCard = ({img, title, content, date, imgtitle, stack}) => {
  const {mode} = useContext(ThemeContext)
    return (
    <Link href="#" className={`group flex justify-between gap-5 relative ${mode === "light" ? "home2 " : "border-[#250525]"} border-[1.6px]  rounded-xl shadow-custom-shadow`}>
      <h1 className={`absolute w-[250px] text-center shadow-custom-shadow top-0 left-0 py-1 px-4 ${stack === "Nextjs" ? "bg-[goldenrod]" : stack === "css" ? "bg-[#bebe1e]" : stack === "html" ? "bg-[green]": "bg-[lightblue]"} md:text-xl rounded-tl-xl font-bold`}>{stack}</h1>
        <div className="block mt-[2rem] w-[100%]">
        {
            imgtitle ?  (
            <div className={`flex items-center rounded-bl-xl justify-center ${stack === "Nextjs" && mode  === "dark" ?  "home text-white" : stack === "Nextjs" && mode  === "light" ? "home2" : stack === "css" && mode  === "dark" ?  "home text-white" : stack === "css" && mode  === "light" ? "home2 text-[red]" : stack === "html" ? "bg-[green]": "gradient"} h-full`}>
                    <h1 className=" md:text-xl text-md font-bold text-center group-hover:-rotate-6 group-hover:scale-105 group-hover:translate-x-6 transition-transform duration-500">{imgtitle}</h1>
            </div>
            ) : (
                <div className={`flex flex-col gap-5 rounded-bl-xl items-center justify-center  ${stack === "Nextjs" && mode  === "dark" ?  "home text-white" : stack === "Nextjs" && mode  === "light" ? "home2" : stack === "css" ? "home text-[red]" : stack === "html" ? "bg-[green]": "gradient"} h-full`}>
                <Image src={img}  alt="img-title" width={200} height={120} className='group-hover:-rotate-12 group-hover:scale-110 group-hover:translate-x-6 transition-transform duration-500' />
                </div>
            )
        }
        </div>
        <div className="flex flex-col gap-3 W-[50%] py-3">
            <small className={`${mode==="light"?"text-black":"text-gray-300"} font-medium`}>{date}</small>
            <h1 className="md:text-lg text-md font-bold">{title}</h1>
            <p className="text-sm">{content}</p>
            <span className="gradient group-hover:text-[green]">Read More ...</span>
        </div>
    </Link>
  )
}

export default BlogCard
