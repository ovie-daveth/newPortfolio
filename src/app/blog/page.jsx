"use client"

import React from 'react'
import websites from "public/websites.jpg"
import Image from "next/image"
import Link from "next/link"
import { motion } from 'framer-motion';
import { ThemeContext } from '../../../context/ThemeContext' 
import { useContext, useEffect, useState } from 'react'
import { useUserContext } from '../../../context/UserContext'
import axios from 'axios'
import Skeleton from '../../components/Skeleton'

export default function Blog() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const getBlogs = async () =>  {
           try {
                setLoading(true)
                const res = await axios.get("/api/blogs/")
                const blogs = res.data
                console.log(blogs)
                setData(blogs)
           } catch (error) {
            console.log("getblog error", error)
           } finally{
            setLoading(false)
           }
        }
        getBlogs()
    }, [])

    const {mode } = useContext(ThemeContext)
    const { user } = useUserContext();
    console.log("my",user?.email)
    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      };

      if(loading){
        return (
          <div className="min-h-screen lg:px-[10rem] md:px-[5rem] px-[4rem]  grid grid-cols-2 gap-3 py-[8rem] md:gap-5 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} />
              ))}
            </div>
        )
      }

  return (
    <div className="lg:px-[10rem] md:px-[5rem] px-[3rem] py-[4rem] mt-12 min-h-screen">
     {
      user?.email === 'omokefeovie1@gmail.com' && <button className="bg-[goldenrod] md:px-10 px-5 text-white font-bold py-2 rounded-md hover:bg-yellow-400 mb-[0.6rem]"> <Link href="/create"  >Create Blog</Link></button>
     }
       <div className="flex flex-col gap-10 ">
            {
                data.map((item)=>(
                  <motion.div key={item.id}
                  initial="hidden"
                  animate="visible"
                  variants={itemVariants}
                  transition={{ duration: 1 }}>
                    <Link Link href={`/blog/${item._id}`}  className={`flex md:flex-row flex-col gap-4 md:gap-10 `}
                    >
                      <div className="md:w-[70%] w-full overflow-hidden group">
                            <Image src={item.imageUrl} alt={item.name} width={450} height={400} className=" group-hover:scale-105 transition-all duration-500 ease-in-out" />
                        </div>
                        <div className=" flex flex-col md:items-start items-center gap-2 w-[100%]">
                            <h1 className="md:text-2xl font-bold ">{item.title}</h1>
                            <p className={`${mode === 'light' ? "text-gray-800" : "text-gray-300"} hidden md:block`}>{item.desc.split(' ').slice(0, 60).join(' ')}{item.desc.split(' ').length > 60 ? '...' : ''}</p>
                        </div>
                        
                    </Link>
                    </motion.div>
                ))
            }
       </div>
    </div>
  )
  
}
