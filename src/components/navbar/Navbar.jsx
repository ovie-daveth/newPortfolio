'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import style from './navbar.module.css'
import Theme from '../theme/Theme'



const Navbar = () => {
    const [loggedin, setLoggedin] = useState(false)
    
  return (
    <div className={style.nav}>
        <Link href='/' className={style.logo}><h1 className={style.logo1}>D</h1><h1 className={style.logo2}>A</h1></Link>
        <div className={style.link}>
            <Theme />
            <Link href="/" >Home</Link>
            <Link href="/portfolio" >Portfolio</Link>
            <Link href="/blog" >Blog</Link>
            <Link href="/contact" >Contact</Link>
            <Link href="/dashboard" >Learn</Link>
            {
                loggedin ? (
                    <button>Logout</button>
                ) : (
                    <Link href="dashboard/login">Login</Link>
                )
            }
        </div>
    </div>
  )
}

export default Navbar
