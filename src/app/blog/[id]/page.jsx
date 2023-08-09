"use client"
import React from 'react'
import Blog from '../page'
import Image from 'next/image'
import web from 'public/websites.jpg'
import {AiFillLike} from 'react-icons/ai'
import {FcLike} from "react-icons/fc"
import {BsFillShareFill} from "react-icons/bs"
import Comments from '../../../components/comments/Comments'
import { ThemeContext } from '../../../../context/ThemeContext'
import { useUserContext } from '../../../../context/UserContext'
import { useContext,useState,useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import Skeleton from '../../../components/Skeleton'

const BlogPages = ({params}) => {
  
  console.log(params.id)
  const {mode } = useContext(ThemeContext)
  const {user} = useUserContext()
  const router = useRouter()

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

  const blog = data?.find((item) => item._id === params.id);

  const id = blog?._id

  const deleteBlog = async () => {
   try {
    await axios.put(`/api/blogs?id=${id}`)
    .then(() => {
      console.log("deleted");
      router.push("/blog")
    })
   } catch (error) {
      console.log(error);
   }
  }

  const editBlog = () => {
    router.push(`/editblog/${id}`); // Navigate to the edit page with the blog ID
  }

  if(loading){
    return (
      <div className="min-h-screen lg:px-[10rem] md:px-[3rem] px-[1rem] py-[8rem] flex flex-col gap-3">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-5 lg:px-[10rem] md:px-[5rem] px-[0.8rem] py-[4rem] mt-12">
     <div className="flex lg:flex-row flex-col gap-5 justify-between">
        <div className="flex flex-col gap-3 flex-1">
          <h1 className="md:text-3xl text-2xl font-bold">{blog?.title}</h1>
          <p className='lg:font-semibold italic'>{blog?.summary}</p>
          <div className='flex items-center gap-2'>
            <p>Omokefe Ovie</p>
            <p>{blog?.updatedAt}</p>
          </div>
        </div>
        <div className="lg:flex-1 w-full lg:w-[unset]">
          <Image src={blog?.imageUrl} alt="image" width={550} height={500} className="" />
        </div>
     </div>
     {
      user.email === 'omokefeovie1@gmail.com' && (
          <div className="flex items-center gap-4">
            <button className="bg-[goldenrod] px-10 font-bold py-2 rounded-md hover:bg-yellow-400" onClick={deleteBlog}>Delete</button>
            <button className="bg-red-600 text-white font-bold px-10 py-2 rounded-md hover:bg-orange-700" onClick={editBlog}>Edit</button>
        </div>
      )
     }
     <div className={`${mode==='light'?"text-gray-800":"text-gray-300"} md:text-lg flex flex-col gap-3`}>
      <p>{blog?.desc.split(' ').slice(0, 120).join(' ')}</p>
      <p>{blog?.desc.split(' ').slice(120, 200).join(' ')}</p>
      <p>{blog?.desc.split(' ').slice(200, 210).join(' ')}</p>
      <p>{blog?.desc.split(' ').slice(210, 280).join(' ')}</p>
      <p>{blog?.desc.split(' ').slice(280, 380).join(' ')}</p>
      <p>{blog?.desc.split(' ').slice(380, 460).join(' ')}</p>
     <p>{blog?.desc.split(' ').slice(460, ).join(' ')}</p>
     </div>
     <div className="flex items-center gap-3 md:text-2xl text-lg border-t-[1.4px] border-gray-400 py-5">
      <span><AiFillLike /></span>
      <span><FcLike /></span>
      <span><BsFillShareFill /></span>
     </div>
     <div className="flex flex-col gap-5">
      <h1>Comments</h1>
      <div className=''>
       {
        blog?.comments?.length >= 1 ? (
          blog.comment.map((item) => (
            <h1>comments</h1>
          ))
        ) :  (
          <h1>No Commnets</h1>
        )
       }
      </div>
     <div className="block w-[40%]">
       <Comments />
     </div>
     </div>
    </div>
  )
}

export default BlogPages
