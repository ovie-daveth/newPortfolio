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
import Button from '../../../components/buttons/Button'
import { ThemeContext } from '../../../../context/ThemeContext';
import { Router } from 'next/router';
import { toast } from 'react-hot-toast';


const Register = () => {

  const router = useRouter()

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
    comfirm: "",
    username: '',
  })

  const [loading, setLoading] = useState(false)

  const [showpassword, setShowPassword] = useState(false)

  const onSignup =async (e) => {
    e.preventDefault()
    if(user.password === user.comfirm){
      if(!user.username){
        toast.error("Please enter your username")
      } else if(!user.password){
        toast.error("Please enter a password")
      }else if(user.password.length < 6){
        toast.error("Password must be at least 6 characters")
      } else if(!user.email){
        toast.error("Please enter your email")
      } else{   
          try {
            setLoading(true)
            const response = await axios.post("/api/users/signup", user);
            if(response.error) {
              console.log("failed", response.data);
              toast.success("failed", response.error);
            } else{
              console.log("success", response.data);
            toast.success("Registered succesfully");
            }
            router.push("/dashboard/login");
          } catch (error) {
            toast.error("Signup failed", error)
            console.log("failed", error);
            setLoading(false)
          } finally{
            setLoading(false)
          }
      }
    } else {
      toast.error("Passwords do not match")
    }
  
  }

  return (
    <section className="flex flex-col mx-auto py-[4rem]  w-[70%]">
        <div className={`flex justify-center font-bold shadow-custom-shadow ${mode==="light" && "bg-gray-100"}`}>
          <div className=" flex flex-col gap-5 text-center items-center p-5">
            <h1 className={`md:text-3xl text-lg ${mode==='light' ? "text-green-600" : "text-white"}`}>Create Account</h1>
            <div className="flex items-center gap-3 md:text-3xl text-xl">
              <span className="cursor-pointer hover:scale-105 transition-transform duration-500"><FcGoogle /></span>
              <span className="cursor-pointer hover:scale-105 transition-transform duration-500"><IoLogoFacebook /></span>
              <span className="cursor-pointer hover:scale-105 transition-transform duration-500"><AiFillTwitterCircle /></span>
              <span className="cursor-pointer hover:scale-105 transition-transform duration-500"><AiFillGithub /></span>
            </div>
            <small className={`${mode==='light' ? "text-black" : "text-[goldenrod]"}`}>or use your email for registration</small>
            <form className="flex  flex-col gap-4 w-[100%]">
                <div className="flex flex-col gap-4 mb-6">
                  <input type="email" placeholder="email" value={user.email} onChange={(e) => setUser({ ...user, email:e.target.value})} className={` ${mode==="light" ? "bg-green-300 text-black placeholder:text-black" : "bg-white  text-gray-600"} outline-none h-[40px] px-2 rounded-md`} />
                  <input type="text" placeholder="username" value={user.username} onChange={(e) => setUser({ ...user, username:e.target.value})}  className={` ${mode==="light" ? "bg-green-300 text-black placeholder:text-black" : "bg-white  text-gray-600"} outline-none h-[40px] px-2 rounded-md`} />
                  <div className="flex gap-3 w-[100%]">
                  <div className="relative w-[100%]">
                      <input type="password" placeholder="Passsword" value={user.password} onChange={(e) => setUser({ ...user, password:e.target.value})}  className={` ${mode==="light" ? "bg-green-300 text-black placeholder:text-black" : "bg-white  text-gray-600"} outline-none h-[40px] px-2 rounded-md w-full`} />
                      <div onClick={() => setShowPassword(!showpassword)} className="absolute right-2 bottom-2 text-[black] text-xl">
                        {
                            !showpassword ? (
                              <span><AiFillEye /></span>
                            ) : (
                              <span><AiFillEyeInvisible /></span>
                            )
                        }
                      </div>
                  </div>
                  <div className="relative w-[100%]">
                      <input type="password" placeholder="Comfirm passsword" value={user.comfirm} onChange={(e) => setUser({ ...user, comfirm:e.target.value})}  className={` ${mode==="light" ? "bg-green-300 text-black placeholder:text-black" : "bg-white  text-gray-600"} outline-none h-[40px] px-2 rounded-md w-full`} />
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
                </div>
                <div className="flex items-center justify-center">
                  <input type="checkbox" className="w-[60px] h-[20px]" />
                  <label htmlFor="check">I agree to the <a href="#">Terms</a> and <a href="#">Privacy Policy</a></label>
                </div>
                <div className="flex text-center gap-5 justify-center mt-10">
                  <Button  onClick={onSignup} title={loading ? "Loading..." : "SignUp"} style={signUpButtonStyle} customstyle="filled" />
                  <Link href="/dashboard/login" className="bg-transparent border-[2px] border-[green] px-[3rem] py-[10px] rounded-md">SignIn</Link>
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

export default Register
