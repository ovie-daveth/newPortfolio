"use client"

import React from 'react'
import websites from "public/websites.jpg"
import Image from "next/image"
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../../context/ThemeContext';
import { useContext } from 'react'

export default function PortfolioDetails({params}) {
    const portfolio = [
        {
            id: 1,
            name: "Creative Portfolio",
            description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
            img: websites
        },
        {
            id: 2,
            name: "Creative Portfolio",
            description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
            img: websites
        },
        {
            id: 3,
            name: "Creative Portfolio",
            description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
            img: websites
        },
        {
            id: 4,
            name: "Creative Portfolio",
            description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
            img: websites
        },
        {
            id: 5,
            name: "Creative Portfolio",
            description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
            img: websites
        },
    ]
    const {mode } = useContext(ThemeContext)
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <div className="px-[10rem] py-[3rem]">
       <h1 className="md:text-5xl text-xl font-bold mt-10 mb-4">Our Works</h1>
       <p className="font-bold md:text-xl mb-2 text-[brown]">{params.slug}</p>
       <div className="flex flex-col gap-10 ">
            {
                portfolio.map((item)=>(
                    <motion.div key={item.id} className={`flex justify-between items-center ${item.id % 2 === 0 && 'flex-row-reverse gap-10'} `}
                    initial="hidden"
                    animate="visible"
                    variants={itemVariants}
                    transition={{ duration: 1 }}
                    >
                        <div className="w-[50%] flex flex-col gap-2">
                            <h1 className="md:text-3xl font-bold w-[70%]">{item.name}</h1>
                            <p className="w-[70%]">{item.description}</p>
                            <div className="flex items-center gap-3">
                                <a href="#" className={`${mode === 'light' ? "hover:border-[#111] text-white hover:text-black" : "border-white text-white"} bg-[brown] border-[1.5px] px-6 py-2 rounded-md hover:bg-transparent  mt-12 `}>Buy me a coffe</a>
                                <a href="#" className={`${mode === 'light' ? "hover:border-[#111] text-white hover:text-black" : "border-white text-white"} bg-[brown] border-[1.5px] px-6 py-2 rounded-md hover:bg-transparent  mt-12 `}>Live</a>
                            </div>
                        </div>
                        <div className="w-[50%] overflow-hidden group">
                            <Image src={item.img} alt={item.name} className="w-[100%] group-hover:scale-105 transition-all duration-500 ease-in-out" />
                        </div>
                    </motion.div>
                ))
            }
       </div>
    </div>
  )
  
}
