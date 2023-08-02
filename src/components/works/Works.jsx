import React from 'react'
import WorkCard from "./WorkCard"
import AI from 'public/ai.jpg'
import APP from 'public/app.jpg'
import blog from 'public/blog.jpg'
import machine from 'public/machine.jpg'
import Link from 'next/link'

export default function Works(){
    return (
      <main className="relative">
        <h1 className="md:text-3xl font-bold mb-4">Latest Work</h1>
        <div className="flex items-center justify-center flex-wrap gap-3">
            <WorkCard img={AI} title="My-Dalle - AI customizing  app" stack="Next/threejs" />
            <WorkCard img={APP} title="My-Dalle - AI customizing  app" stack="Next/threejs" />
            <WorkCard img={blog} title="My-Dalle - AI customizing  app" stack="NextJs" />
            <WorkCard img={machine} title="My-Dalle - AI customizing  app" stack="NextJs" />
        </div>
        <Link href="/portfolio" className="absolute right-0 -bottom-6 text-lg  font-semibold hover:text-[green]">See more of my  works...</Link>
      </main>
    )
}