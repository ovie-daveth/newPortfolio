import React from 'react'
import BigCard from './BigCard'
import BlogCard from './BlogCard'
import node from 'public/node.png'
import Link from 'next/link'

const Blogs = () => {
  return (
   <main className="relative">
    <h1 className="md:text-3xl font-semibold mb-6">Latest Articles</h1>
        <div className="flex flex-col gap-5">
            <div className="flex gap-5">
                <div className="block w-[50%]">
                    <BigCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023" imgtitle="Generating seo images with nodejs scripts" stack="Nextjs" />
                </div>
                <div className="flex flex-col gap-2 w-[50%]">
                    <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023" imgtitle="Generating seo images with nodejs scripts" stack="css" />
                    <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023"  stack="node" />
                    <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023"  stack="Nextjs" />
                </div>
            </div>
            <div className="flex gap-5">
            <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023" imgtitle="Generating seo images with nodejs scripts" stack="Nextjs" />
            <BlogCard img={node} title="Learn how to code a seo-proof fullstack nextjs app using mongodb database" content="compiled successfully in 1034 ms (382 modules) compiled successfully in 1034 ms (382 modules)" date="02/03/2023" imgtitle="Generating seo images with nodejs scripts" stack="css" />
            </div>
        </div>
        <Link href="/blog" className="absolute -bottom-10 font-bold md:text-lg right-0 hover:text-[green]">See more article...</Link>
   </main>
  )
}

export default Blogs
