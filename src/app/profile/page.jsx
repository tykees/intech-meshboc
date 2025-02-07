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
    <div className='bg-black pt-20'>
      <h1 className='pl-32 text-[30px] pt-10 text-slate-200 font-medium'>Student Overview</h1>
        <div className='flex justify-around'>
        <div className='grid grid-cols-3 items-center gap-2 border border-slate-700 bg-black w-[1000px] p-8 rounded-xl'>
           <div className=''>
              <Image className='w-[100px] h-[100px] shadow-2xl rounded-full' src={user?.imageUrl} width={100} height={100} alt="userImage"/>
              <p className='text-left text-[16px] text-slate-300 font-medium'>{user?.fullName}</p>
            </div>
            <div className='flex items-center gap-3'>
            <div>
            <Image className='w-[80px] bg-slate-900 p-2 rounded-full' src={"/grade.svg"} width={80} height={80} alt='grade'/>
            </div>
            <div className=''>
            {
              userGrade.map((item, index)=>(
                <div key={index}>
                  <div className=' text-[30px] text-slate-300 font-medium'>
                    {item.grade}/100
                  </div>
                </div>
              ))
            }
            <p className='text-[14px] text-slate-500'>Course Grade</p>
            </div>
            </div>

            <div className='flex items-center gap-3'>
              <div>
              <Image className='w-[80px] bg-slate-900 rounded-full' src={"/attendance.svg"} width={80} height={80} alt='grade'/>
              </div>
              <div>
              {
              userAttendance.map((item, index)=>(
                <div key={index}>
                  <div className='text-[30px] text-slate-300 font-medium'>
                    {item.attendance}/100
                  </div>
                </div>
              ))
            }
             <p className='text-[14px] text-slate-500'>Attendance</p>
              </div>
            </div>

            <div className='flex items-center w-[250px] gap-3 border border-slate-800 p-3 rounded-2xl'>
            <div>
              <Image className='w-[80px] bg-slate-900 rounded-full' src={"/attendance.svg"} width={80} height={80} alt='grade'/>
            </div>
            <div>
            {
              userAttendance.map((item, index)=>(
                <div key={index}>
                  <div className='text-[30px] text-slate-300 font-medium'>
                    {item.attendance}
                  </div>
                </div>
              ))
            }
            <p className='text-[14px] text-slate-500'>Earning Points</p>
            </div>           
            </div>

            <div className='flex items-center gap-3'>
              <div>
              <Image className='w-[80px] bg-slate-900 rounded-full' src={"/link.svg"} width={80} height={80} alt='grade'/>
              </div>
              <div>
              {
                userEnrolledCourses.map((item, index)=>(
                  <div key={index}>
                    <div className='text-[20px] text-slate-300'>
                   {item.name}
                 </div>
                  </div>
                ))
              }
                <p className='text-[14px] text-slate-500'>Course</p>
              </div>           
            </div>
            {
              user&&userEnrolledCourses ?
              <Button className="rounded-xl h-[50px] bg-secondary text-[20px] hover:text-white">Join</Button>
              :
              <Button className="rounded-xl h-[50px] bg-secondary text-[20px] hover:text-white">Enrol</Button>
            }
            </div>
            {/* Second Div */}
            <div className=''>
              <Image className='w-[350px]' src={"/prof2.png"} width={300} height={300} alt='work'/>
            </div>
        </div>
        <div className='flex gap-40 bg-slate-200 mt-10'>
        <div className='ml-28 w-[1000px] bg-white rounded-xl mt-10 p-5 mb-10'>
        <Calendar/>
        </div> 
        <div className='mt-10 w-[400px] h-[400px] bg-white rounded-xl pt-5 px-5'>
              <div className='flex gap-4 border-b border-slate-400 items-center'>
              <h1 className='text-[28px] font-bold'>Projects</h1>
              <Image className='w-[50px]' src={"/case.gif"} width={300} height={300} alt='work'/>
              </div>
              <p>No Assignment or Project Yet</p>
              {/* <div className='flex items-center gap-3'>
                <Image className='w-[50px] bg-slate-100 p-2 rounded-lg' src={"/js.png"} width={100} height={100} alt='js'/>
                <div>
                  <h2 className='font-bold'>Basic Javascript</h2>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <p className='border-b pt-5 border-gray-400'></p> */}
              {/* Next */}
        </div>
        </div>   
          
    </div>
  )
}

export default Profile