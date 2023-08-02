"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useUserContext } from '../../../context/UserContext';

const Dashboard = () => {

  const { user } = useUserContext();

  // const [user, setUser] = useState({})

  return (
    <div className='mt-28'>
     <h1>WELCOME {user?.username}</h1>
    </div>
  )
}

export default Dashboard
