"use client"

import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast'

const UserContext = createContext();

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter()

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await axios.get("/api/users/me");
        setUser(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getUserDetails();
  }, [user]);

  const register = async(user) => {
    try{
      const response = await axios.post("/api/users/signup", user);
      if(response.error) {
        console.log("failed", response.data);
        toast.success("failed", response.error);
      } else{
        console.log("success", response.data);
        toast.success("Registered succesfully");
        router.push("/dashboard/login");
      }
    } catch(error){
      console.log("error:", error)
    }
  }

  const login = async (user) => {
    const res = await axios.post("/api/users/signin/", user);

    // Check if the login was successful (based on the response or token presence)
    if (res?.data?.success || (res?.data?.message === "Login Succcesfull" && res?.headers?.["set-cookie"])) {
      toast.success("LoggedIn successfully");
      console.log("loggedin", res.data.user)
      setUser(user)
      router.push("/dashboard");
    } else if(res?.data?.error || res?.data?.error === "Invalid password"){
      toast.error("Invalid password");
    } else{
      toast.error("User not found")
    }
  }

  const logout = async() => {
     const res = await axios.get('/api/users/logout')
     if(res.data.success){
      toast.success(res.data.message)
        setUser(null)
        router.push("/")
        window.location.reload()
     } else {
      toast.error("Unable to log  out")
     }
  }

  return (
    <UserContext.Provider value={{ user, register, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
