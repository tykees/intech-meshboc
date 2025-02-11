import React from 'react';
import Image from 'next/image';

function BlogItem({blog}) {
  return (
    <>
    <div className='flex justify-center p-4'>
    <div className='border w-[400px] h-[300px] rounded-xl hover:shadow-md cursor-pointer shadow-gray-300'>
        <Image src={blog?.imageOne?.url} width={400} height={400} alt="Banner" className='w-[400px] rounded-t-xl'/>
        <div className='flex flex-col gap-1 p-2'>
        <h2 className='font-medium text-center text-[16px] md:text-[24px]'>{blog?.blogTitle}</h2>
      </div>
    </div>
    </div>
    </>
  )
}

export default BlogItem