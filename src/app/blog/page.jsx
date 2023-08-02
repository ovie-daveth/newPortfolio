"use client"

import React from 'react'
import websites from "public/websites.jpg"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../context/ThemeContext' 
import { useContext } from 'react'

export default function Blog() {
    const blogpost = [
        {
            id: 1,
            name: "My First blogMy First blogMy First blogMy First blogMy First blogMy First blog",
            description: "lorem Turning your ideas into reality. We give you 24/7 lorem Turning your ideas into reality. We give you 24/7 support during and after consultationWe give you 24/7 support during and after consultationWe give you 24/7 support during and after consultation",
            img: websites
        },
        {
            id: 2,
            name: "My First blogMy First blogMy First blogMy First blogMy First blogMy First blog",
            description: "lorem Turning your ideas into reality. We give you 24/7 lorem Turning your ideas into reality. We give you 24/7 support during and after consultationWe give you 24/7 support during and after consultationWe give you 24/7 support during and after consultation",
            img: websites
        },
        {
            id: 3,
            name: "My First blogMy First blogMy First blogMy First blogMy First blogMy First blog",
            description: "lorem Turning your ideas into reality. We give you 24/7 lorem Turning your ideas into reality. We give you 24/7 support during and after consultationWe give you 24/7 support during and after consultationWe give you 24/7 support during and after consultation",
            img: websites
        },
        {
            id: 4,
            name: "My First blogMy First blogMy First blogMy First blogMy First blogMy First blog",
            description: "lorem Turning your ideas into reality. We give you 24/7 lorem Turning your ideas into reality. We give you 24/7 support during and after consultationWe give you 24/7 support during and after consultationWe give you 24/7 support during and after consultation",
            img: websites
        },
        {
            id: 5,
            name: "My First blogMy First blogMy First blogMy First blogMy First blogMy First blog",
            description: "lorem Turning your ideas into reality. We give you 24/7 lorem Turning your ideas into reality. We give you 24/7 support during and after consultationWe give you 24/7 support during and after consultationWe give you 24/7 support during and after consultation",
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
       <div className="flex flex-col gap-10 ">
            {
                blogpost.map((item)=>(
                  <motion.div key={item.id}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ duration: 1 }}>
                    <Link Link href={`/blog/${item.id}`}  className={`flex gap-9 items-center`}
                    >
                      <div className="w-[70%] overflow-hidden group">
                            <Image src={item.img} alt={item.name} className="w-[100%] group-hover:scale-105 transition-all duration-500 ease-in-out" />
                        </div>
                        <div className=" flex flex-col gap-2">
                            <h1 className="md:text-2xl font-bold ">{item.name}</h1>
                            <p className={`${mode==='light'?"text-gray-800":"text-gray-300"}`}>{item.description}</p>
                        </div>
                        
                    </Link>
                    </motion.div>
                ))
            }
       </div>
    </div>
  )
  
}
