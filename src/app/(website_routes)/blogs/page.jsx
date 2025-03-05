"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import BlogItem from '../_components/BlogItem';
import Link from 'next/link';
import Image from 'next/image';

function Page() {
    const [getBlogs, setGetBlogs] = useState([]);

    useEffect(()=>{
        getAllBlogsHere();
    },[])


 const getAllBlogsHere = ()=> {
    GlobalApi.getAllBlogs().then(resp =>{
      console.log(resp);
      setGetBlogs(resp.blogs)
    })
   
  }
  return (
    <>
    <div className='bg-primary md:h-[500px] h-[280px] p-5'>
    <div className='pt-14 flex justify-start md:gap-2 raleway flex-wrap items-center'>
        <div className='md:text-[80px] text-[28px] font-bold text-slate-100'>Stay Ahead in </div>
        <div><Image className='md:w-[60px] w-[32px]' src={'/phone.gif'} width={60} height={60} alt='gif'></Image></div>
        <div><Image  className='md:w-[35px] w-[12px]' src={'/balls.png'} width={30} height={30} alt='gif'></Image></div>
        <div className='md:text-[80px] text-[28px] font-bold text-secondary'> Tech Insights,</div>
    </div>
    <div className='flex justify-start gap-3 flex-wrap raleway items-center'>
    <div className='md:text-[80px] text-[25px] font-bold text-secondary'>Trends </div>
        <div><Image  className='md:w-[60px] w-[20px]' src={'/devabout.gif'} width={60} height={60} alt='gif'></Image></div>
        <div><Image  className='md:w-[140px] w-[60px] shadow-2xl border rounded-full' src={'/inbtw.png'} width={120} height={120} alt='gif'></Image></div>
        <div className='md:text-[80px] text-[25px] font-bold text-slate-100'>& Tutorials</div>
    </div>
    <p className='text-start poppins text-white text-[12px] md:text-[18px] pt-4'>Explore expert tips, industry trends, and hands-on guides to boost your tech skills.</p>
    </div>
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 mt-20'>
        {getBlogs.map((item, index)=>(
              
              <div key={index}>
                    <Link href={"/blog-preview/"+item.slug}>
                  <BlogItem blog={item}/>
                  </Link>
              </div>
          ))
      }
        </div>

    </div>
    </>
  )
}

export default Page