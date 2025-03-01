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
    <div className='bg-slate-100 md:h-[500px] h-[250px] p-3'>
    <div className='pt-20 flex justify-center gap-3 flex-wrap items-center'>
        <div className='md:text-[80px] text-[20px] font-bold'>Stay Ahead in </div>
        <div><Image className='md:w-[60px] w-[20px]' src={'/phone.gif'} width={60} height={60} alt='gif'></Image></div>
        <div><Image  className='md:w-[35px] w-[20px]' src={'/balls.png'} width={30} height={30} alt='gif'></Image></div>
        <div className='md:text-[80px] text-[20px] font-bold'>Tech</div>
    </div>
    <div className='flex justify-center gap-3 flex-wrap items-center'>
    <div className='md:text-[80px] text-[20px] font-bold'>Insights, Trends </div>
        <div><Image  className='md:w-[60px] w-[20px]' src={'/devabout.gif'} width={60} height={60} alt='gif'></Image></div>
        <div><Image  className='md:w-[60px] w-[20px]' src={'/inbtw.png'} width={120} height={120} alt='gif'></Image></div>
        <div className='md:text-[80px] text-[20px] font-bold'>& Tutorials</div>
    </div>
    <p className='text-center'>Explore expert tips, industry trends, and hands-on guides to boost your tech skills.</p>
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