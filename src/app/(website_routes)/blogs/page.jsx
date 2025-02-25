"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';
import BlogItem from '../_components/BlogItem';
import Link from 'next/link';

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
  )
}

export default Page