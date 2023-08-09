"use client"

import React, {useEffect, useState} from 'react'
import WorkCard from "./WorkCard"
import Link from 'next/link'
import axios from 'axios'
import Skeleton from '../Skeleton'

export default function Works(){

  const [port, setPort] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const getPortfolio = async () => {
       try {
        setLoading(true)
        const res = await axios.get('/api/portfolio/')
        const data = await res.data
        console.log(data)
        setPort(data)
       } catch (error) {
        console.log(error)
       } finally {
        setLoading(false)
       }
    }

    getPortfolio()
},[])

const limitedPort = port.slice(0, 6);
    return (
      <main className="relative">
        <h1 className="md:text-3xl font-bold mb-4">Latest Work</h1>
        {
          loading ? (
            
              <div className="grid grid-cols-2 gap-3 mt-10 md:gap-5 md:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} />
              ))}
            </div>
          
          ) : (
            <div className="grid md:grid-cols-4 grid-cols-2 gap-3">
            {
             limitedPort?.map((item) => {
               return (
                 <WorkCard key={item?._id} img={item.imageUrl} title={item.title} stack={item.category === 'frontend-heavy' ? "frontend" : item.category === 'backend-heavy' ? "backend" : "mobile app" } link={item.livelink} />
               )
             })
            }
         </div>
          )
        }
        <Link href="/portfolio" className="absolute right-0 -bottom-6 md:text-lg  text-md  font-semibold hover:text-[green]">See more of my  works...</Link>
      </main>
    )
}