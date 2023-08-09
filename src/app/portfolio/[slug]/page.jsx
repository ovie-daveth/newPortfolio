"use client"

import React, {useEffect, useState} from 'react'
import websites from "public/websites.jpg"
import Link from 'next/link'
import Image from "next/image"
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../../context/ThemeContext';
import { useContext } from 'react'
import axios from 'axios';
import { useUserContext } from '../../../../context/UserContext';
import Skeleton from "../../../components/Skeleton"

export default function PortfolioDetails({params}) {
    // const portfolio = [
    //     {
    //         id: 1,
    //         name: "Creative Portfolio",
    //         description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
    //         img: websites
    //     },
    //     {
    //         id: 2,
    //         name: "Creative Portfolio",
    //         description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
    //         img: websites
    //     },
    //     {
    //         id: 3,
    //         name: "Creative Portfolio",
    //         description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
    //         img: websites
    //     },
    //     {
    //         id: 4,
    //         name: "Creative Portfolio",
    //         description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
    //         img: websites
    //     },
    //     {
    //         id: 5,
    //         name: "Creative Portfolio",
    //         description: "lorem Turning your ideas into reality. We give you 24/7 support during and after consultation",
    //         img: websites
    //     },
    // ]

    const [portfolio, setPortfolio] = useState()
    const { user } = useUserContext();
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const getPortfolio = async () => {
           try {
            setLoading(true);
            const res = await axios.get('/api/portfolio/')
            const data = await res.data
            console.log(data)
            const filteredData = data.filter((item) => item.category === params.slug)
            setPortfolio(filteredData)
           } catch (error) {
            console.log(error)
           } finally {
            setLoading(false)
           }
        }

        getPortfolio()
    },[])
    const {mode } = useContext(ThemeContext)
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <div className="lg:px-[10rem] md:px-[4rem] px-[0.8rem] py-[3rem] min-h-screen relative">
         {
      user?.email === 'omokefeovie1@gmail.com' && <button className="bg-[goldenrod] md:px-10 px-3 font-bold py-2 rounded-md hover:bg-yellow-400 mb-[0.6rem] absolute right-5 top-24"> <Link href="/portcreate"  >Add Project</Link></button>
        }
       <h1 className="md:text-5xl text-xl font-bold mt-10 mb-4">Our Works</h1>
       <p className="font-bold md:text-xl mb-2 text-[goldenrod]">{params.slug}</p>
       {
        loading ? (
            <div className="grid grid-cols-2 gap-3 mt-10 md:gap-5 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} />
              ))}
            </div>
        ) : (
            <div className="flex flex-col gap-10 ">
           {
            portfolio && portfolio.length >= 1 ? (
                    portfolio?.map((item, index)=>(
                        <motion.div key={item._id} className={`flex flex-col-reverse md:flex-row justify-between gap-4 md:gap-0 md:items-center ${index % 2 === 0 && 'md:flex-row-reverse md:gap-10'} `}
                        initial="hidden"
                        animate="visible"
                        variants={itemVariants}
                        transition={{ duration: 1 }}
                        >
                            <div className="md:w-[50%] w-full flex flex-col md:gap-2">
                                <h1 className="md:text-3xl  font-bold md:w-[70%]">{item.title}</h1>
                                <p className="md:w-[70%] md:text-md text-sm">{item.desc}</p>
                                <div className="flex items-center gap-3">
                                    <a href={item.github} target="_blank" className={`${mode === 'light' ? "hover:border-[#111] text-white hover:text-black" : "border-white text-white"} bg-[goldenrod] border-[1.5px] px-6 py-2 rounded-md hover:bg-transparent  mt-12 `}>Buy me a coffe</a>
                                    <a href={item.livelink} target="_blank" className={`${mode === 'light' ? "hover:border-[#111] text-white hover:text-black" : "border-white text-white"} bg-[goldenrod] border-[1.5px] px-6 py-2 rounded-md hover:bg-transparent  mt-12 `}>Live</a>
                                </div>
                            </div>
                            <div className="md:w-[50%] w-full overflow-hidden group">
                                <Image src={item.imageUrl} alt={item.title} width={300} height={300} className="w-[100%] group-hover:scale-105 transition-all duration-500 ease-in-out" />
                            </div>
                        </motion.div>
                    ))
            )  : (
                <divc className="flex flex-col gap-3 font-bold">
                    <h1 className="text-3xl">No Project for {params.slug} yet.</h1>
                    <p>But Hey, I'm working on it &#x1F609;</p>
                </divc>
            )
           }
       </div>
        )
       }
    </div>
  )
  
}
