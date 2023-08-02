"use client"

import React, {useContext, useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import Image from 'next/image';
import {FcGoogle} from "react-icons/fc"
import {IoLogoFacebook} from "react-icons/io";
import {AiFillTwitterCircle, AiFillGithub, AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import Authimg from 'public/auth.jpg'
import Button from '../../../components/buttons/Button';
import { ThemeContext } from '../../../../context/ThemeContext';
import { Router } from 'next/router';
import { toast } from 'react-hot-toast';


const Login = () => {

  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const signUpButtonStyle = {
    padding: '10px 3rem',
  };

  const signInButtonStyle = {
    padding: '10px 3rem',
  };

  const {mode} = useContext(ThemeContext)
  const [user, setUser] = useState({
    email: '',
    password: "",
  })

  const [showpassword, setShowPassword] = useState(false)

  const onSignIn =async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const res = await axios.post("/api/users/signin/", user)
      toast.success("LoggedIn successfully")
      router.push("/dashboard")
    } catch (error) {
      console.log("Login failed", error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="flex flex-col mx-auto py-[4rem]  w-[70%]">
        <div className={`flex justify-center font-bold shadow-custom-shadow ${mode==="light" && "bg-gray-100"}`}>
          <div className=" flex flex-col gap-5 text-center items-center p-5">
            <h1 className={`md:text-3xl text-lg ${mode==='light' ? "text-green-600" : "text-white"}`}>SignIn to your Account</h1>
            <div className="flex items-center gap-3 md:text-3xl text-xl">
              <span className="cursor-pointer hover:scale-105 transition-transform duration-500"><FcGoogle /></span>
              <span className="cursor-pointer hover:scale-105 transition-transform duration-500"><IoLogoFacebook /></span>
              <span className="cursor-pointer hover:scale-105 transition-transform duration-500"><AiFillTwitterCircle /></span>
              <span className="cursor-pointer hover:scale-105 transition-transform duration-500"><AiFillGithub /></span>
            </div>
            <small className={`${mode==='light' ? "text-black" : "text-[goldenrod]"}`}>or use your email to signin</small>
            <form className="flex  flex-col gap-4 w-[100%]">
                <div className="flex flex-col gap-4 mb-6">
                  <input type="email" placeholder="email" value={user.email} onChange={(e) => setUser({ ...user, email:e.target.value})} className={` ${mode==="light" ? "bg-green-300 text-black placeholder:text-black" : "bg-white  text-gray-600"} outline-none h-[40px] px-2 rounded-md`} />
                  <div className="relative w-[100%]">
                      <input type="password" placeholder="Passsword" value={user.password} onChange={(e) => setUser({ ...user, password:e.target.value})}  className={` ${mode==="light" ? "bg-green-300 text-black placeholder:text-black" : "bg-white  text-gray-600"} outline-none h-[40px] px-2 rounded-md w-full`} />
                      <div onClick={() => setShowPassword(!showpassword)} className="absolute right-2 bottom-2 text-xl text-black">
                        {
                            !showpassword ? (
                              <span><AiFillEye /></span>
                            ) : (
                              <span><AiFillEyeInvisible /></span>
                            )
                        }
                      </div>
                  </div>
                </div>
                <div className="flex text-center gap-5 justify-center mt-10">
                  <Button  onClick={onSignIn} title={`${loading ? "Loading...": "SignIn"}`} style={signUpButtonStyle} customstyle="filled" />
                  <Link href="/dashboard/register" className="bg-transparent border-[2px] border-[green] px-[3rem] py-[10px] rounded-md">SignUp</Link>
                </div>
            </form>
          </div>
          <div className="w-[50%]">
            <Image src={Authimg} alt="auth" className="w-full h-[550px] object-cover"  />
          </div>
        </div>
    </section>
  )
}

export default Login
