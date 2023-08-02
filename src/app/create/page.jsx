"use client"
import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import axios  from "axios"

const CreateBlog = () => {
  const { mode } = useContext(ThemeContext);

  const [formdata, setFormData] = useState({
    title: '',
    summary: '',
    file: "",
    videofile: '',
    content: '',
  });

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData((prevState) => ({
        ...prevState,
        [name]: files[0], // Assuming you only need one file.
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };
  const { title, summary, file, videofile, content } = formdata;
  
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(title, summary, file, videofile, content);
    
  };

  return (
    <div className="px-[10rem] py-[4rem]">
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
              value={formdata.title}
              onChange={(e)=>handleFormChange(e)}
              type="text"
              placeholder="Title..."
              className={`w-[100%] h-[50px] bg-transparent border-[2px] ${
                mode === 'light' ? 'border-gray' : 'border-white'
              } rounded-md px-5 outline-none`}
            />
            <input
              name="summary"
              value={formdata.summary}
              onChange={(e)=>handleFormChange(e)}
              type="text"
              placeholder="Summary..."
              className={`w-[100%] h-[50px] bg-transparent border-[2px] ${
                mode === 'light' ? 'border-gray' : 'border-white'
              } rounded-md px-5 outline-none`}
            />
          </div>
          <div className="flex">
            <label
              htmlFor="cover"
              className={`${
                mode === 'light' ? 'border-gray bg-black' : 'border-white bg-goldenrod'
              } h-[120px] w-[200px] bg-white flex justify-center items-center font-bold md:text-xl`}
            >
              Add a cover
            </label>
            <input
              name="file"
              onChange={(e)=>handleFormChange(e)}
              id="cover"
              type="file"
              placeholder="cover image"
              className="hidden"
            />
          </div>
        </div>
        <div className="flex mt-10">
          <input
            name="videofile"
            value={formdata.videofile}
            onChange={(e)=>handleFormChange(e)}
            type="url"
            placeholder="Any video... url"
            className={`w-[100%] h-[50px] bg-transparent border-[2px] ${
              mode === 'light' ? 'border-gray' : 'border-white'
            } rounded-md px-5 outline-none`}
          />
        </div>
        <div className="flex">
          <textarea
            name="content"
            value={formdata.content}
            onChange={(e)=>handleFormChange(e)}
            rows="10"
            placeholder="Content..."
            className={`w-[100%] h-[180px] py-2 bg-transparent border-[2px] ${
              mode === 'light' ? 'border-gray' : 'border-white'
            } rounded-md px-5 outline-none mt-10`}
          ></textarea>
        </div>
        <button className="bg-goldenrod border-none px-10 py-2 mt-10 rounded-md text-white font-bold md:text-lg">
          Create post
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
