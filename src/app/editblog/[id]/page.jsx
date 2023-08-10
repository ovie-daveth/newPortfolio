'use client'
import React, { useState, useEffect, useContext } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { useParams } from 'next/navigation';
import { ThemeContext } from '../../../../context/ThemeContext';

const EditBlog = () => {
  const router = useParams();
  const routers = useRouter();
  const { mode } = useContext(ThemeContext);

  const { id } = router; // Extract the blog ID from the router query

  const [photo, setPhoto] = useState('')

  const [blogData, setBlogData] = useState({
    title: '',
    summary: '',
    desc: '',
    category: '',
    videoUrl: '',
  });

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await axios.get(`/api/blogs/${id}`); // Fetch blog data by ID
        const blog = res.data;
        console.log(blog);
        setBlogData(blog);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      }
    };

    fetchBlogData();
  }, [id]);

  // console.log("datatobeupdated",blogData) 

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/blogs?id=${id}`, blogData); // Update blog data by ID
      if (res.status === 200) {
        routers.push(`/blog/${id}`); // Navigate back to the blog page
      } else {
        console.error('Error updating blog data');
      }
    } catch (error) {
      console.error('Error updating blog data:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="lg:px-[10rem] md:px-[5rem] px-[1rem] py-[4rem] mt-9">
      <form
        onSubmit={handleFormSubmit}
        className={`border-[2px] px-5 py-3 ${
          mode === 'light' ? 'border-gray' : 'border-white'
        }`}
      >
        <div className="flex md:flex-row flex-col gap-10">
          <div className="flex flex-col gap-3 w-full">
            <input
              name="title"
              value={blogData.title}
              onChange={(e) => handleInputChange(e)}
              type="text"
              placeholder="Title..."
              className={`w-[100%] h-[50px] bg-transparent border-[2px] ${
                mode === 'light' ? 'border-gray' : 'border-white'
              } rounded-md px-5 outline-none`}
            />
            <input
              name="summary"
              value={blogData.summary}
              onChange={(e) => handleInputChange(e)}
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
              } rounded-md px-5 outline-none`} value={blogData.category}  onChange={(e) => handleInputChange(e)}>
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
            value={blogData.videoUrl}
            onChange={(e) => handleInputChange(e)}
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
            value={blogData.desc}
            onChange={(e) => handleInputChange(e)}
            rows="10"
            placeholder="Content..."
            className={`w-[100%] h-[180px] py-2 bg-transparent border-[2px] ${
              mode === 'light' ? 'border-gray' : 'border-white'
            } rounded-md px-5 outline-none mt-10`}
          ></textarea>
        </div>
        <button className="bg-[goldenrod] border-none px-10 py-2 mt-10 rounded-md text-white font-bold md:text-lg">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditBlog;
