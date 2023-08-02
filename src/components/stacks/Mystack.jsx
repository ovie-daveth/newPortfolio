import React from 'react'
import Image from 'next/image'

const Mystack = () => {
  return (
   <div className="flex flex-col items-center gap-5 flex-wrap justify-center">
    <h1 className="md:text-3xl text-xl font-bold">My stacks</h1>
         <div className="flex items-center gap-10 flex-wrap justify-center">
            <a href=""><Image src="/html.png" className="bg-white wave hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/css.png" className="bg-white wave2 hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/js.png" className="bg-white wave hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/sass.png" className="bg-white wave2 hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/react.png" className="bg-white wave hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/next.png" className="bg-white wave2 hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/webpack.png" className="bg-white wave hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/node.png" className="bg-white wave2 hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/vscode.png" className="bg-white wave hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/firebase.png" className="bg-white wave2 hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
            <a href=""><Image src="/mongo.png" className="bg-white wave hover:scale-125 transition-transform duration-500 ease-in-out lg:w-[50px] md:w-[30px] w-[30px] h-[auto]" width={50} height={50} /></a>
    </div>
   </div>
  )
}

export default Mystack
