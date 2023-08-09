"use client"

import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const CreatePort = () => {

    const CLOUD_NAME = 'dd3ss8q5n'
    const UPLOAD_PRESET = 'portfolio_blog'

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [github, setGithub] = useState('')
    const [livelink, setLivelink] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [category, setCategory] = useState('frontend-heavy')


    const sendPort = async (e) => {
        e.preventDefault()
        const imageUrl = await uploadImage();
        console.log(title,desc,imageUrl,category)
        try {
            const res = await axios.post('/api/portfolio/', {
                title, 
                desc, 
                imageUrl, 
                category,
                github,
                livelink
            })
             if (res.status !== 200) {
                throw new Error("Error occurred");
              }
          
              toast.success("Blog successfully created");
          
              const data = res.data; // Use res.data directly
              console.log(data);
        } catch (error) {
           console.log(error) 
        }
    }

    const uploadImage = async () => {
        if(!imgUrl) return
  
        const formData = new FormData()
        formData.append("file", imgUrl)
        formData.append("upload_preset", UPLOAD_PRESET)
  
        try {
          const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`, {
            method: "POST",
            body: formData
          })
  
          const data = await res.json()
  
          const imageUrl = data['secure_url']
  
          console.log("imageUrl", imageUrl)
  
          return imageUrl
        } catch (error) {
          console.log(error)
        }
    }
  return (
    <div className='lg:px-[10rem] md:px-[5rem] px-[3rem] py-[4rem] mt-12 min-h-screen'>
        <h1 className="text-lg md:text-xl font-bold mb-10">Add Project</h1>
      <form className="flex flex-col gap-3 lg:w-[70%] w-full">
        <input className="py-3 px-2 bg-transparent border-[1.4px] rounded-md border-[white] shadow-custom-shadow " name="title" value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title...' />
        <input className="py-3 px-2 bg-transparent border-[1.4px] rounded-md border-[white] shadow-custom-shadow " name="desc" value={desc} onChange={(e) => setDesc(e.target.value)} type="text" placeholder='desc...' />
        <input className="py-3 px-2 bg-transparent border-[1.4px] rounded-md border-[white] shadow-custom-shadow " name="github" value={github} onChange={(e) => setGithub(e.target.value)} type="url" placeholder='github link...' />
        <input className="py-3 px-2 bg-transparent border-[1.4px] rounded-md border-[white] shadow-custom-shadow " name="live" value={livelink} onChange={(e) => setLivelink(e.target.value)} type="url" placeholder='Live link...' />
        <input className="py-3 px-2 bg-transparent border-[1.4px] rounded-md border-[white] shadow-custom-shadow " name="imgUrl" onChange={(e) => setImgUrl(e.target.files[0])} type="file"  />
        <select className="py-3 px-2 bg-transparent border-[1.4px] rounded-md border-[white] shadow-custom-shadow " name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="frontend-heavy">Frontend Heavy</option>
            <option value="backend-heavy">Backend Heavy</option>
            <option value="mobile-app">Mobile Application</option>
        </select>
        <button className="bg-[goldenrod] px-10 py-3 text-white rounded-md active:bg-orange-700" onClick={sendPort}>send</button>
      </form>
    </div>
  )
}

export default CreatePort
