'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import style from './navbar.module.css'
import Theme from '../theme/Theme'
import { ThemeContext } from '../../../context/ThemeContext'
import { useContext } from 'react'
import {BiMenuAltRight} from "react-icons/bi"
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useRouter } from 'next/navigation';
import { useUserContext } from '../../../context/UserContext'


const Navbar = () => {
    const router = useRouter()
    // const [loggedin, setLoggedin] = useState(false)
    const {mode} = useContext(ThemeContext)
    const [show,  setShow]  = useState(false)
    const [loading, setLoading] = useState(false)
    // const [user, setUser] = useState('empty')

    const { user, logout } = useUserContext();

    const loggedin = !!user;
    
    const showMenu = () => {
        setShow(!show)
    }


    //   useEffect(() => {
    //     if(user === null){
    //         setLoggedin(false)
    //     } else{
    //         setLoggedin(true)
    //     }
    //   }, [user])

    const handleLogout = async () => {
        try {
            setLoading(true)
            await logout()
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }
    
  return (
    <div className={`${style.nav} ${mode==="light"?"bg-white":"bg-[#2c072c]"} fixed top-0 left-0 w-full z-50 shadow-xl`}>
        <Link href='/' className={style.logo}><h1 className={style.logo1}>D</h1><h1 className={style.logo2}>A</h1></Link>
        <div className={`${style.link} ${mode==="light"?"bg-white":"bg-[#2c072c]"} ${show && style.linkdisp }`}>
            <Theme />
            <Link href="/" >Home</Link>
            <Link href="/portfolio" >Portfolio</Link>
            <Link href="/blog" >Blog</Link>
            <Link href="/contact" >Hire me</Link>
            <Link href="/dashboard" >Learn</Link>
            {
                loggedin ? (
                    <button onClick={handleLogout}>{loading ? "Logging out...":"Logout"}</button>
                ) : (
                    <Link href="/dashboard/login">Login</Link>
                )
            }
        </div>
        <div className={style.menu} onClick={showMenu}><BiMenuAltRight /></div>
    </div>
  )
}

export default Navbar
