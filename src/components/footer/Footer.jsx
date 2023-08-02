import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex items-center justify-between px-[10rem]">
     <p> &copy;2023, <span className="text-[brown]">Daveton.</span> All rights reserved</p>
     <div className="flex gap-4 items-center ">
        <a href=""><Image src="/1.png" width={20} height={30} /></a>
        <a href=""><Image src="/2.png" width={20} height={30} /></a>
        <a href=""><Image src="/3.png" width={20} height={30} /></a>
        <a href=""><Image src="/4.png" width={20} height={30} /></a>
     </div>
    </div>
  )
}

export default Footer
