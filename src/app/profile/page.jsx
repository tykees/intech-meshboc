"use client"
import { useUser } from '@clerk/nextjs';
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import GlobalApi from '../_utils/GlobalApi';
import { TiMessages } from "react-icons/ti";
import { CgWebsite } from "react-icons/cg";
import Calendar from '../components/Calender';




function Profile({}) {

  const { user } = useUser();
  console.log(user)
  const [userEnrolledCourses, setUserEnrolledCourses] = useState([]);
  useEffect(()=>{
    user&&getYourCourses();
  },[user])

  const getYourCourses = ()=> {
    GlobalApi.getCourses(user?.primaryEmailAddress?.emailAddress).then(resp =>{
      console.log(resp);
      setUserEnrolledCourses(resp.courses)
    })
  }

  return (
    <div className='bg-primary'>
        <div className='pt-40 container m-auto flex justify-center items-center gap-2 '>
           <div className='border bg-white border-slate-600 w-[240px] h-[180px] p-5'>
              <p className='text-right text-[10px] font-medium'>{user?.fullName}</p>
              <Image className='m-auto' src={user?.imageUrl} width={130} height={130} alt="userImage"/>
              <p className='text-center mt-[-30px] text-[20px] font-medium'>{user?.fullName} James</p>
            </div>

            <div className='border border-slate-600 w-[240px] h-[180px] p-5 '>
            <p className=' text-[16px]'>ETS</p>
            <p className='pt-20 text-[20px] font-medium'>{user?.fullName}</p>
            </div>

            <div className='border border-slate-600 w-[240px] h-[180px] p-5 '>
            <p className=' text-[16px]'>Attendance</p>
            <p className='pt-20 text-[20px] font-medium'>{user?.fullName}</p>
            </div>

            <div className='border border-slate-600 w-[240px] h-[180px] p-5 '>
            <p className=' text-[16px]'>Rating</p>
            <p className='pt-20 text-[20px] font-medium'>{user?.fullName}</p>
            </div>

            <div className='border border-slate-600 w-[240px] h-[180px] p-5 '>
            {
                userEnrolledCourses.map((item, index)=>(
                  <div key={index}>
                    <div className=''>
                   {item.name}
                   <Image src={item.image.url} width={100} height={100} alt='image'/>
                 </div>
                  </div>
                ))
              }
            </div>
            </div>


        <div className='container mx-auto w-[1200px]'>
        <Calendar/>
        </div>
             
    </div>
  )
}

export default Profile