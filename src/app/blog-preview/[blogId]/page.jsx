"use client"
import React, { useEffect, useState } from 'react';
import GlobalApi from '@/app/_utils/GlobalApi';

function page({ params }) {
    const [blogInfo, setBlogInfo] = useState();
    const [blogInfoSlug, setBlogInfoSlug] = useState();
    useEffect(() => {
        if (params?.blogId) {
          console.log("Fetching blog for slug:", params.blogId);
          getBlogBySlugName();
        }
      }, [params]);
      
      const getBlogBySlugName = () => {
        GlobalApi.getBlogBySlug(params.blogId).then(resp => {
          console.log("API Response:", resp);
          setBlogInfoSlug(resp?.blogs?.[0]);  // Take first item if it's an array
        });
      };
      
  return (
        <div className='pt-20'>
           
    </div>
  )
}

export default page