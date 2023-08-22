"use client"
import emailjs from 'emailjs-com'
import React, { useRef } from 'react'
import { ThemeContext } from '../../../context/ThemeContext' 
import { useContext } from 'react'
import { toast } from 'react-hot-toast'

const Contact = () => {
  const {mode } = useContext(ThemeContext)

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      console.log(e.value)
      // emailjs.sendForm('service_2iv0skk', 'template_cnc0h81', )
      emailjs.sendForm("service_2iv0skk","template_cwhprik",form.current, 'AaotaKtbMYsT0L4Jd')
        .then((result) => {
            console.log(result.text);
            toast.success("Message sent successfully")
        }, (error) => {
            console.log(error.text);
            toast.error("Couldn't send message, pls try again in few minutes")
        });
        e.target.reset()
    };
  return (
    <div className="block lg:px-[10rem] md:px-[4rem] py-[4rem] mt-[2rem] relative overflow-hidden">
       <div className="absolute hidden md:block top-0 left-0 w-full h-full -z-0  overflow-hidden">
       <iframe src="https://giphy.com/embed/kYGUOGjTjs91nrxRkL" width="100%" height="100%" frameBorder="0" className=" object-cover" class="giphy-embed" allowFullScreen></iframe>
        </div>
      <h1 className={`text-center mb-10  md:text-4xl text-xl font-bold ${mode==="light"?"md:text-white text-black ":"text-white"}z-50`}>I'm available for hire</h1>
      <div className="flex md:flex-row flex-col justify-between relative  md:gap-[unset] gap-10">
      <div className="flex-1 flex items-center justify-center">
        <h1 className="lg:text-5xl md:text-3xl text-2xl font-bold md:text-left text-center lg:w-[80%] md:leading-[50px] md:tracking-[10px] tracking-[5px] text-white">Have a project? we would love to help!</h1>
      </div>
      <div className={`flex-1 ${mode=== "light" ? "home2" : "home"} py-10 px-5`}>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-4'>
          <input type="text" className={`bg-transparent border-[1.2px] rounded-md py-3 px-5 placeholder:text-lg text-md ${mode==='light'?"text-black":"text-white"} outline-none`} placeholder="name" name='from_name' />
          <input type="text" className={`bg-transparent border-[1.2px] rounded-md py-3 px-5 placeholder:text-lg text-md ${mode==='light'?"text-black":"text-white"} outline-none`} placeholder="email" name="email" />
          <textarea type="text" className={`bg-transparent border-[1.2px] rounded-md py-1 px-5 placeholder:text-lg text-md ${mode==='light'?"text-black":"text-white"} outline-none`} placeholder="message" name="message" rows={8} />
          <button className={`${mode === 'light' ? "hover:border-[#111] text-white hover:text-black" : "border-white text-white"} lg:w-[20%] bg-[goldenrod] border-[1.5px] px-6 py-2 rounded-md hover:bg-transparent  mt-12 `}>Send</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contact
