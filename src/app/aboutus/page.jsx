import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div className='pt-40 md:px-20 px-10'>
        <div className='flex justify-between pb-10 items-center flex-wrap'>
          <h1 className='md:text-[80px] text-[45px]'>About Us</h1>
          <p className='w-[650px] font-medium text-[20px]'> Intech Meshboc is a tech training platform dedicated to equipping aspiring developers with in-demand skills in frontend, backend, and full stack development. Through hands-on learning and real-world projects, we prepare students for successful careers in the tech industry. Join us and turn your passion for coding into a thriving profession!</p>
        </div>
        <div className='flex  bg-primary rounded-2xl py-10 justify-center'>
        <Image className='w-[500px]' src={'/about.png'} width={300} height={300} alt='' />
        </div>
        <h1 className='text-center text-[70px] py-10'>Values</h1>
        <div className='flex justify-center gap-20 items-center flex-wrap'>
          <div className='flex justify-center text-center flex-col items-center'>
          <Image className='bg-secondary p-10 rounded-full' src={'/about (1).gif'} width={150} height={150} alt='img' />
          <p className='w-[120px] text-[20px]'>Accessibility</p>
          </div>
          <div className='flex justify-center text-center flex-col items-center'>
          <Image className='bg-blue-300 p-10 rounded-full' src={'/about (4).gif'} width={150} height={150} alt='img' />
          <p className='w-[120px] text-[20px]'>Practical</p>
          </div>
          <div className='flex justify-center text-center flex-col items-center'>
          <Image className='bg-red-200 p-10 rounded-full' src={'/about (3).gif'} width={150} height={150} alt='img' />
            <p className='w-[120px] text-[20px]'>Collaboration</p>
          </div>
          <div className='flex justify-center text-center flex-col items-center'>
          <Image className='bg-purple-400 p-10 rounded-full' src={'/about (2).gif'} width={150} height={150} alt='img' />
            <p className='w-[120px] text-[20px]'>Innovation</p>
          </div>
        </div>
    </div>
  )
}

export default Page