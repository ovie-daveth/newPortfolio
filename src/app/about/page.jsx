import Image from 'next/image'
import React from 'react'
import Me from 'public/me.jpg'

const About = () => {
  return (
    <div className="flex gap-[100px] py-[5rem] px-[10rem]">
     <div className=''>
      <Image src={Me} width={1100} height={1000}/>
     </div>
     <div className='flex flex-col gap-16'>
        <div className="block w-[80%]">
            <h1 className='text-3xl mb-5'>Hey,<span className='text-[brown] '> David</span> Here 👋</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugit vel tempora iste fugiat, voluptates, quisquam earum recusandae assumenda velit harum saepe ex neque esse repudiandae quas aspernatur deserunt expedita odit possimus animi. Molestiae, ullam qui veritatis numquam sequi temporibus officia cupiditate. Cumque obcaecati ipsa veniam assumenda delectus, repellendus nobis?</p>
        </div>
        <div className="block w-[80%]">
          <h1 className='text-3xl mb-5'>I am at <span className='text-[brown] '>your servive</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur distinctio, est incidunt ea sunt veniam saepe culpa itaque pariatur ullam velit? Delectus laboriosam ea officiis placeat nemo quidem deleniti harum.</p>
        </div>
     </div>
    </div>
  )
}

export default About
