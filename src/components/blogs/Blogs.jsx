import React, { useEffect, useState } from 'react'
import BigCard from './BigCard'
import BlogCard from './BlogCard'
import node from 'public/node.png'
import Link from 'next/link'
import axios from 'axios'

const Blogs = () => {

    const [loading, setLoading] = useState(false)
    const [blogData, setBlogData]  = useState('')

    useEffect(()=>{
        try {
            setLoading(true)
            const getBlog =async () =>{
                const blog = await axios.get('/api/blogs')
                const data = await blog.data
                 // Sort the blog articles by their creation date
                const sortedBlogs = data?.sort((a, b) =>
                    new Date(b.createdAt) - new Date(a.createdAt)
                );

                setBlogData(sortedBlogs); // Store the sorted data in the 'blogs' state variable
            }
            getBlog()
        } catch (error) {
            console.log(error.message)
        } finally  {
            setLoading(false)
        }
    },[])
    if(loading) {
        return <h1>
            Loading...
        </h1>
    }
    function timeAgo(dateString) {
        const now = new Date();
        const date = new Date(dateString);
        const elapsedMilliseconds = now - date;
        const elapsedSeconds = Math.floor(elapsedMilliseconds / 1000);
        const elapsedMinutes = Math.floor(elapsedSeconds / 60);
        const elapsedHours = Math.floor(elapsedMinutes / 60);
        const elapsedDays = Math.floor(elapsedHours / 24);
      
        if (elapsedDays >= 7) {
          // If more than a week, display the date in MM/DD/YYYY format
          const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          });
          return formattedDate;
        } else if (elapsedHours >= 24) {
          // If more than 24 hours, display "X days ago"
          return `${elapsedDays} day${elapsedDays === 1 ? '' : 's'} ago`;
        } else if (elapsedMinutes >= 60) {
          // If more than 60 minutes, display "X hours ago"
          return `${elapsedHours} hour${elapsedHours === 1 ? '' : 's'} ago`;
        } else {
          // If less than an hour, display "X minutes ago"
          return `${elapsedMinutes} minute${elapsedMinutes === 1 ? '' : 's'} ago`;
        }
      }
      
      
  return (
   <main className="relative">
    <h1 className="md:text-3xl font-semibold mb-6">Latest Articles</h1>
      {
        blogData ?  (
            <div className="flex flex-col gap-5">
            <div className="flex md:flex-row flex-col gap-5">
                <div className="block md:w-[50%]">
                    <BigCard img={blogData[0]?.imageUrl} title={blogData[0]?.summary.slice(0,100)+"..."} content={blogData[0]?.desc.slice(0,100)+"..."} date={timeAgo(blogData[0]?.createdAt)} imgtitle={blogData[0]?.title} stack={blogData[0]?.category} link={`blog/${blogData[0]._id}`} />
                </div>
                <div className="flex md:flex-col flex-row flex-wrap gap-2 md:w-[50%]">
                    <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023" imgtitle="Generating seo images with nodejs scripts" stack="css" />
                    <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023"  stack="node" />
                    <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023"  stack="Nextjs" />
                </div>
            </div>
            <div className="md:flex hidden gap-5">
            <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023" imgtitle="Generating seo images with nodejs scripts" stack="Nextjs" />
            <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023" imgtitle="Generating seo images with nodejs scripts" stack="css" />
            </div>
        </div>
        ):(
            <h1>No Blogs  available yet</h1>
        )
      }
    <Link href="/blog" className="absolute -bottom-10 font-bold md:text-lg right-0 hover:text-[green] md:text-md text-sm">See more article...</Link>
   </main>
  )
}

export default Blogs
