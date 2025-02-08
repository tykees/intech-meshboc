import React from 'react';
import Image from 'next/image';

function BlogItem({blog}) {
  return (
    <div className='border rounded-xl hover:shadow-md cursor-pointer shadow-gray-300'>
        <Image src={blog?.imageOne?.url} width={500} height={200} alt="Banner" className='rounded-t-xl'/>
        <div className='flex flex-col gap-1 p-2'>
        <h2 className='font-semibold'>{blog?.blogTitle}</h2>
      </div>
    </div>
  )
}

export default BlogItem