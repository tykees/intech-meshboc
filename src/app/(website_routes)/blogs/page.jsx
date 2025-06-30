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
    <div className='pt-[100px]'>
   <div className='relative group px-[20px] text-center md:px-[200px] h-[350px] py-[50px] overflow-hidden bg-primary transition-colors shadow text-white'>
          <div className="absolute inset-0 opacity-30 group-hover w-[600px] transition-opacity duration-300 pointer-events-none z-0 bg-[url('/grid.svg')] bg-cover"></div>
          <div className="relative">
          <h1 className='md:text-[80px] text-[35px] font-bold raleway text-white'>Our Blog<span className='text-secondary'>.</span></h1>
          <p className=' text-center font-medium text-[16px] text-gray-100 dm'> The IntechMeshboc Blog is a go-to resource for aspiring developers, tech enthusiasts, entrepreneurs, and innovators — delivering essential tutorials, <br/> industry insights, startup guides, and the latest in emerging technologies.</p>
        </div>
        </div>
    </div>
    <div>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 mt-20 px-[100px]'>
        {getBlogs.map((item, index)=>(
              
              <div className='raleway' key={index}>
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