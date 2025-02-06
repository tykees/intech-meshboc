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

  const [userAttendance, setUserAttendance] = useState([]);
  useEffect(()=>{
    user&&getYourAttendance();
  },[user])

  const getYourAttendance = ()=> {
      GlobalApi.getAttendance(user?.primaryEmailAddress?.emailAddress).then(resp =>{
        console.log(resp)
        setUserAttendance(resp.yourAttendances)
      })
    }

    const [userGrade, setUserGrade] = useState([]);
  useEffect(()=>{
    user&&getYourGrade();
  },[user])

  const getYourGrade = ()=> {
      GlobalApi.getGrade(user?.primaryEmailAddress?.emailAddress).then(resp =>{
        console.log(resp)
        setUserGrade(resp.yourGrades)
      })
    }

  return (
    <div className='bg-primary pt-20'>
      <h1 className='text-center'>Hello</h1>
      <p className='text-center text-[20px] font-medium'>{user?.fullName}</p>
        <div className='container m-auto flex justify-center items-center gap-2 '>
           <div className='border bg-secondary w-[200px] h-[140px] rounded-xl shadow-2xl'>
              <Image className='w-[100%] h-[100%] rounded-xl' src={user?.imageUrl} width={130} height={130} alt="userImage"/>
            </div>
            <div className='border bg-white w-[200px] h-[140px] rounded-xl shadow-2xl'>
            <div className='pt-6'>
            <p className='text-[20px] text-slate-500 pl-3'>Course Grade</p>
            </div>
       
            {
              userGrade.map((item, index)=>(
                <div key={index}>
                  <div className='flex gap-4 items-center text-[30px] text-slate-500 pl-3 font-medium'>
                    {item.grade}/100
                    <Image className='w-[60px]' src={"/grade.svg"} width={80} height={80} alt='grade'/>
                  </div>
                </div>
              ))
            }
            </div>

            <div className='border pt-6 bg-white w-[200px] h-[140px] rounded-xl shadow-2xl'>
            <p className='text-[20px] text-slate-500 pl-3'>Attendance</p>
            {
              userAttendance.map((item, index)=>(
                <div key={index}>
                  <div className='flex gap-4 items-center text-[30px] text-slate-500 pl-3 font-medium'>
                    {item.attendance}/100
                    <Image className='w-[60px]' src={"/attendance.svg"} width={80} height={80} alt='grade'/>
                  </div>
                </div>
              ))
            }
            </div>

            <div className='border pt-6 bg-white w-[200px] h-[140px] rounded-xl shadow-2xl'>
            <p className='text-[20px] text-slate-500 pl-3'>Class Link</p>
            {
              userAttendance.map((item, index)=>(
                <div key={index}>
                  <div className='flex gap-4 items-center text-[30px] text-slate-500 pl-3 font-medium'>
                    {item.attendance}/100
                    <Image className='w-[60px]' src={"/link.svg"} width={80} height={80} alt='grade'/>
                  </div>
                </div>
              ))
            }
            </div>

            <div className='border pt-6 bg-white w-[200px] h-[140px] rounded-xl shadow-2xl'>
            <p className='text-[20px] text-slate-500 pl-3'>Course</p>
            {
                userEnrolledCourses.map((item, index)=>(
                  <div key={index}>
                    <div className='text-[20px] text-slate-500 pl-3'>
                   {item.name}
                 </div>
                  </div>
                ))
              }
            </div>
            </div>


        <div className='container mx-auto w-[1130px] bg-primary rounded-xl mt-10 pt-5 mb-10'>
        <Calendar/>
        </div>
             
    </div>
  )
}

export default Profile