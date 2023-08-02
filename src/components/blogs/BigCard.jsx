import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'

const BigCard = ({img, title, content, date, imgtitle, stack}) => {
  const {mode} = useContext(ThemeContext)
    return (
    <Link href="#" className={`group h-screen flex flex-col justify-between gap-5 relative ${mode === "light" ? "home2" : "card border-[gray]"} border-[1.6px]  rounded-xl px-4 py-4`}>
      <h1 className={`absolute top-0 left-0 py-1 px-4 ${stack === "Nextjs" ? "bg-[goldenrod]" : stack === "css" ? "bg-[yellow]" : stack === "html" ? "bg-[green]": "bg-[lightblue]"} rounded-tl-xl font-bold`}>{stack}</h1>
        <div className="block mt-[6rem] group-hover:-rotate-12 group-hover:scale-110 group-hover:translate-x-6 transition-transform duration-500">
        {
            imgtitle ?  (
            <div className="flex flex-col gap-5 items-center justify-center">
                    <h1 className="gradient md:text-4xl text-xl font-bold text-center">{imgtitle}</h1>
                    <Image src={img}  alt="img-title" width={230} height={120}  />
            </div>
            ) : (
                <div className="flex flex-col gap-5 items-center justify-center">
                <Image src={img}  alt="img-title" width={300} height={120} />
                </div>
            )
        }
        </div>
        <div className="flex flex-col gap-3">
            <small className={`${mode==="light"?"text-black":"text-gray-300"}  font-medium`}>{date}</small>
            <h1 className="md:text-2xl text-lg font-bold">{title}</h1>
            <p>{content}</p>
            <span className="gradient group-hover:text-[green]">Read More ...</span>
        </div>
    </Link>
  )
}

export default BigCard
