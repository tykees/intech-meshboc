import React from 'react';
import Image from 'next/image';

function Page() {
  return (
    <div className='pt-[100px]'>
        <div className='relative group px-[20px] md:px-[200px] h-[350px] py-[50px] overflow-hidden bg-primary transition-colors shadow text-white text-start'>
          <div className="absolute inset-0 opacity-30 group-hover w-[600px] transition-opacity duration-300 pointer-events-none z-0 bg-[url('/grid.svg')] bg-cover"></div>
          <div className="relative">
          <h1 className='md:text-[80px] text-[35px] font-bold raleway text-white'>About Us!</h1>
          <p className='w-auto md:w-[850px] font-medium text-[16px] text-gray-100 dm'> Intech Meshboc is a tech training platform dedicated to equipping aspiring developers with in-demand skills in frontend, backend, and full stack development. Through hands-on learning and real-world projects, we prepare students for successful careers in the tech industry. Join us and turn your passion for coding into a thriving profession!</p>
        </div>
        </div>
        <div className='flex justify-center items-center mt-[100px] gap-10 flex-wrap'>
            <div className='w-[600px] bg-purple-200 p-8'>
              <h3 className='text-primary text-[24px] raleway pb-4'>Innovation at the Core</h3>
              <p className='text-[16px] dm'>At Ginoid, we take pride in delivering solutions that are not just innovative but transformative. By combining cutting-edge technology with deep expertise, we empower businesses to excel in an ever-evolving digital landscape. Our mission is to create solutions that drive growth, efficiency, and sustainable impact.</p>
            </div>
            <div className='w-[600px] p-8'>
              <h3 className='text-primary text-[24px] raleway pb-4'>Innovation at the Core</h3>
              <p className='text-[16px] dm'>At Ginoid, we take pride in delivering solutions that are not just innovative but transformative. By combining cutting-edge technology with deep expertise, we empower businesses to excel in an ever-evolving digital landscape. Our mission is to create solutions that drive growth, efficiency, and sustainable impact.</p>
            </div>
        </div>
        <div className='flex rounded-2xl py-10 justify-center'>
        <Image className='w-[500px]' src={'/about.png'} width={300} height={300} alt='' />
        </div>
        {/* ... */}
        <div className='flex justify-center items-center flex-wrap'>
          <div className='relative w-auto md:w-[1000px] h-auto md:h-[700px] overflow-hidden bg-primary shadow text-white'>
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-30 group-hover transition-opacity duration-300 pointer-events-none z-0 bg-[url('/grid.svg')] bg-cover"></div>

  {/* Centered Content */}
  <div className="relative z-10 flex items-center justify-center h-full px-8 text-left">
    <p className='w-auuto md:max-w-[700px] font-medium text-[18px] md:text-[25px] text-white raleway'>
      Intech Meshboc is a tech training platform dedicated to equipping aspiring developers with in-demand skills in frontend, backend, and full stack development. Through hands-on learning and real-world projects, we prepare students for successful careers in the tech industry. Join us and turn your passion for coding into a thriving profession!
      
          <p className='pt-[20px]'>Femi Michael - Tech Lead & Founder</p>
    </p>
  </div>
</div>

        <div>
          <Image className='w-auto md:w-[700px] h-auto md:h-[700px]' src={'/mich.jpeg'} width={1000} height={1000} alt='' />
        </div>
        </div>
       
        <h1 className='text-center text-[70px] py-10 raleway'>Values</h1>
        <div className='flex poppins justify-center gap-20 items-center flex-wrap'>
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