import Image from 'next/image'
import React from 'react'
import website from "public/websites.jpg"
import Link from "next/link"
import mobile from "public/apps.jpg"
import ux from "public/illustration.png"

const Portfolio = () => {
  return (
    <div className="py-[5rem] px-[10rem]">
      <h1 className="md:text-5xl text-xl font-bold mt-10 mb-4">My Works</h1>
      <p className="font-bold mb-2">Choose a gallery</p>
      <div className="flex flex-wrap gap-6">
          <Link href="portfolio/websites" className="block relative group border-[1.4px] rounded-sm overflow-hidden">
            <Image src={website} alt="site" width={300}  className='group-hover:scale-110 transition-transform ease-in-out duration-400 object-cover h-[100%]' />
            <p className="absolute text-white bottom-0 right-2 group-hover:text-[brown] text-3xl font-bold group-hover:scale-105 transition-all ease-in-out duration-500">Websites</p>
          </Link>
          <Link href="portfolio/mobile" className="block relative group border-[1.4px] rounded-sm overflow-hidden">
            <Image src={mobile} alt="site" width={300} className='group-hover:scale-110 transition-transform ease-in-out duration-400 h-[100%] object-cover' />
            <p className="absolute text-white bottom-0 right-2 group-hover:text-[brown] text-3xl font-bold group-hover:scale-105 transition-all ease-in-out duration-500">Mobile Apps</p>
          </Link>
          <Link href="portfolio/ux" className="block relative group border-[1.4px] rounded-sm overflow-hidden">
            <Image src={ux} alt="site" width={300} height={500}  className='group-hover:scale-110 transition-transform ease-in-out duration-400' />
            <p className="absolute text-white bottom-0 right-2 group-hover:text-[brown] text-3xl font-bold group-hover:scale-105 transition-all ease-in-out duration-500">UI/UX</p>
          </Link>
      </div>
    </div>
  )
}

export default Portfolio
