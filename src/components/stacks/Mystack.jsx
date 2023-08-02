import React from 'react'
import Image from 'next/image'

const Mystack = () => {
  return (
   <div className="flex flex-col items-center gap-5 flex-wrap justify-center">
    <h1 className="md:text-3xl text-xl font-bold">My stacks</h1>
         <div className="flex items-center gap-10 flex-wrap justify-center">
            <a href=""><Image src="/html.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/css.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/js.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/sass.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/react.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/next.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/webpack.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/node.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/vscode.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/firebase.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={50} height={50} /></a>
            <a href=""><Image src="/mongo.png" className="hover:scale-125 transition-transform duration-500 ease-in-out" width={70} height={70} /></a>
    </div>
   </div>
  )
}

export default Mystack
