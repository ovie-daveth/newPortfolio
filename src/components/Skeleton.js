"use client"

import React from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";


const Skeleton = () => {
    const {mode} = useContext(ThemeContext)
  return (
    <div className={`min-w-[100px] shadow-custom-shadow ${mode==="light"?"bg-neutral-100":"bg-[#2e0b2e]"} rounded-md relative overflow-hidden snap-end md:p-3`}>
      <span className="grid gap-2">
        <span className={`block min-w-[100px] h-48 rounded-md ${mode==="light"?"bg-neutral-200":"bg-[#1d081d]"} animate-pulse md:h-64`}></span>
        <span className={`grid gap-2 p-3 pt-0 md:p-0`}>
          <span className={`block w-full h-4 ${mode==="light"?"bg-neutral-200":"bg-[#1d081d]"} rounded-sm animate-pulse`}></span>
          <span className={`block w-3/4 h-3 ${mode==="light"?"bg-neutral-200":"bg-[#1d081d]"} rounded-sm animate-pulse`}></span>
          <span className="grid grid-cols-[1fr_auto]">
            <span className={`block w-20 h-3 ${mode==="light"?"bg-neutral-200":"bg-[#1d081d]"} rounded-sm animate-pulse`}></span>
            <span className={`block w-5  h-3 ${mode==="light"?"bg-neutral-200":"bg-[#1d081d]"} rounded-sm animate-pulse`}></span>
          </span>
        </span>
      </span>
    </div>
  )
}

export default Skeleton
