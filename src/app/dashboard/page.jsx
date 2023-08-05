"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../../context/UserContext';
import WorkCard from '../../components/works/WorkCard';
import AI from 'public/ai.jpg'
import APP from 'public/app.jpg'
import blog from 'public/blog.jpg'
import machine from 'public/machine.jpg'

const Dashboard = () => {

  const { user } = useUserContext();

  const courses = [
    {
      id:1,
      link: "https:www.youtube.com/watch/",
      title: "4hrs html and css course - Build a fully responsive UI",
      img:AI,
      stack: 'React'
    },
    {
      id:2,
      link: "https:www.youtube/",
      title: "Complete React Props Course - 2hrs",
      img:machine,
      stack: 'React'
    },
    {
      id:3,
      link: "https:www.youtube/",
      title: "Complete React Props Course - 2hrs",
      img:blog,
      stack: 'React'
    },
    {
      id:4,
      link: "https:www.youtube/",
      title: "The Ultimate React-Native Course - 7hrs",
      img: APP,
      stack: 'Native'
    },
    {
      id:5,
      link: "https:www.youtube/",
      title: "Complete React Props Course - 2hrs",
      img: blog,
      stack: 'React'
    },
    {
      id:6,
      link: "https:www.youtube/",
      title: "Complete React Props Course - 2hrs",
      img: machine,
      stack: 'React'
    },
  ]

  return (
    <div className='pt-28 px-[10rem]'>
        <div className="flex flex-col gap-3">
          <h1 className="lg:text-3xl md:text-xl text-lg font-bold">Welcome <span className="capitalize">{user?.username}</span></h1>
         <h1 className="text-2xl mt-10"> Learning resources</h1>
          <h1 className="text-2xl">A collection of all my created resources for free!</h1>
          <div className="flex flex-wrap gap-10 mt-10">
              {
                courses.map((course)=>(
                  <WorkCard key={course.id} stack={course.stack} img={course.img} title={course.title} link={course.link} />
                ))
              }
          </div>
        </div>

    </div>
  )
}

export default Dashboard
