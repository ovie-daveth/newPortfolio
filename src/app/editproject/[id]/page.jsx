"use client"

import React, {useState, useEffect} from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-hot-toast'

const EditProject = ({params}) => {

    const CLOUD_NAME = 'dd3ss8q5n'
    const UPLOAD_PRESET = 'portfolio_blog'


    const routers = useRouter()

    const {id} = params

    const [data, setData] = useState({})
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [github, setGithub] = useState( '');
  const [livelink, setLivelink] = useState('');
  const [category, setCategory] = useState('frontend-heavy');
  const [imgUrl, setImgUrl] = useState('')

    console.log(data.title);
  
    useEffect(() => {
      const getProject = async () => {
        try {
          const res = await axios.get(`/api/portfolio/${id}`);
          const portfolio = res.data[0]
          setData(portfolio);
          setTitle(portfolio.title);
          setDesc(portfolio.desc)
          setGithub(portfolio.github)
          setLivelink(portfolio.livelink)
          setCategory(portfolio.category)
        } catch (err) {
          console.error('Error fetching blog data:', err);
        }
      };
    
      getProject();
    }, []);

    
    const sendPort = async (e) => {
      e.preventDefault();
      let imageUrl = await uploadImage()

      if(imageUrl === data.imageUrl) {
        imageUrl = data.imageUrl
      } else{
        imageUrl = await uploadImage()
      }
     
      console.log('Uploading',imageUrl)

      try {
        const res = await axios.put(`/api/portfolio?id=${id}`, {
          title,
          desc,
          github,
          livelink,
          category,
          imageUrl
        }); // Update blog data by ID
    
        if (res.status === 200) {
          toast.success("Updated portfolio")
          routers.push(`/portfolio`); // Navigate back to the blog page
        } else {
          console.error('Error updating blog data');
        }
      } catch (error) {
        console.error('Error updating blog data:', error);
      }
    };

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
        <input className="py-3 px-2 bg-transparent border-[1.4px] rounded-md border-[white] shadow-custom-shadow "  name="imgUrl"
          onChange={(e) => setImgUrl(e.target.files[0])} type="file"  />
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

export default EditProject
