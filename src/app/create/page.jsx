"use client"
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import axios  from "axios"
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

const CreateBlog = () => {
  const { mode } = useContext(ThemeContext);
  const router = useRouter()

  const CLOUD_NAME = 'dd3ss8q5n'
  const UPLOAD_PRESET = 'portfolio_blog'

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [desc, setDesc] = useState('')
  const [category, setCategory] = useState("next")
  const [photo, setPhoto] = useState('')
  const [videoUrl, setVideoUrl] = useState('')
  const [loading, setLoading] = useState(false)

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(title, summary, videoUrl, desc, category, photo);
  
    if (!photo || !title || !category || !desc) {
      toast.error("All fields are required");
      return;
    }
  
    try {

      setLoading(true)
      const imageUrl = await uploadImage(); // Wait for the image to upload
  
      const res = await axios.post("/api/blogs/", {
        title,
        summary,
        videoUrl,
        desc,
        category,
        imageUrl,
      });
  
      if (res.status !== 200) {
        throw new Error("Error occurred");
      }
  
      toast.success("Blog successfully created");
  
      const blog = res.data; // Use res.data directly

  
      router.push(`/blog/${blog._id}`);
    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
  };
  
  const uploadImage = async () => {
      if(!photo) return

      const formData = new FormData()
      formData.append("file", photo)
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
    <div className="lg:px-[10rem] md:px-[5rem] px-[3rem] py-[4rem] mt-9">
      <form
        onSubmit={handleFormSubmit}
        className={`border-[2px] px-5 py-3 ${
          mode === 'light' ? 'border-gray' : 'border-white'
        }`}
      >
        <div className="flex gap-10">
          <div className="flex flex-col gap-3 w-full">
            <input
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Title..."
              className={`w-[100%] h-[50px] bg-transparent border-[2px] ${
                mode === 'light' ? 'border-gray' : 'border-white'
              } rounded-md px-5 outline-none`}
            />
            <input
              name="summary"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              type="text"
              placeholder="Summary..."
              className={`w-[100%] h-[50px] bg-transparent border-[2px] ${
                mode === 'light' ? 'border-gray' : 'border-white'
              } rounded-md px-5 outline-none`}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="image"
              className={`${
                mode === 'light' ? 'border-gray bg-black' : 'border-white bg-goldenrod'
              } h-[120px] w-[200px] bg-white flex justify-center items-center font-bold md:text-xl`}
            >
              Add a cover
            </label>
            <input
              id='image' type="file" onChange={(e) => setPhoto(e.target.files[0])}
              placeholder="cover image"
              className="hidden"
            />
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <h1 className="font-semibold text-lg">Category</h1>
          <select className={`w-[50%] h-[50px] bg-transparent border-[2px] ${
                mode === 'light' ? 'border-gray' : 'border-white'
              } rounded-md px-5 outline-none`} value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="next">NextJs</option>
                        <option value="css">CSS</option>
                        <option value="html">HTML</option>
                        <option value="react">ReactJs</option>
                        <option value="node">Nodejs</option>
                        <option value="express">Express</option>
                        <option value="mongo">Mongodb</option>
                        <option value="firebase">Firebase</option>
                    </select>
        </div>
        <div className="flex mt-10">
          <input
            name="videoUrl"
            value={videoUrl}
            onChange={(e)=> setVideoUrl(e.target.value)}
            type="url"
            placeholder="Any video... url"
            className={`w-[100%] h-[50px] bg-transparent border-[2px] ${
              mode === 'light' ? 'border-gray' : 'border-white'
            } rounded-md px-5 outline-none`}
          />
        </div>
        <div className="flex">
          <textarea
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)} 
            rows="10"
            placeholder="Content..."
            className={`w-[100%] h-[180px] py-2 bg-transparent border-[2px] ${
              mode === 'light' ? 'border-gray' : 'border-white'
            } rounded-md px-5 outline-none mt-10`}
          ></textarea>
        </div>
        <button className="bg-[goldenrod] border-none px-10 py-2 mt-10 rounded-md text-white font-bold md:text-lg">
          {
            loading ? "Loading..." : "Create post"
          }
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
