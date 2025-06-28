import React from 'react';
import Image from 'next/image';
import { IoRocketSharp } from "react-icons/io5";


function Bout() {
  return (
    <div className='container mt-[50px] lg:mt-[200px] mx-auto'>
        <p className='text-sm text-gray-500 w-[150px]'>| ABOUT US |</p>
       <div className='flex justify-around gap-5 items-center lg:flex-nowrap flex-wrap'>
        <div className='col_1'>
          <h2 className='text-[25px] md:text-[50px] text-gray-500 raleway leading-9 md:leading-[60px]'>Empower, Innovate, and <br/> Grow.</h2>
          <p className=' w-[280px] md:w-[600px] mt-[20px] text-gray-500 dm font-thin'>At Meshboc, we&apos;re driven by a passion for delivering exceptional results and staying ahead in the ever-evolving tech landscape. Our talented team blends creativity with practical expertise to build tailored solutions that meet the unique needs of each client. We&apos;re not just about technology—we&apos;re about making it work for you.</p>
        </div>
        
        <div className='col_2  bg-gray-100 w-auto md:w-[400px] h-[300px] p-[30px] '>
            <div className='flex justify-start items-center '>
              <div className='flex justify-start gap-3 items-center'>
                <div className='bg-gradient-to-r from-purple-600 via-purple-600 to-lime-300 text-white p-[15px] text-[20px] rounded-full'>
                <IoRocketSharp />
                </div>
              <p>START STRONG <br/> GROW FAST</p>
              </div>
            </div>
            <p className='pt-[30px] text-[15px]'>We develop custom software that empowers startups to validate ideas, engage customers, secure investment, and scale efficiently.</p>
        </div>
         <div className='col_2 bg-gray-100 w-auto md:w-[400px] h-[300px] p-[30px] '>
            <div className='flex justify-start items-center '>
              <div className='flex justify-start gap-3 items-center'>
                <div className='bg-gradient-to-r from-purple-600 via-purple-600 to-lime-300 text-white p-[15px] text-[20px] rounded-full'>
                <IoRocketSharp />
                </div>
              <p>START STRONG <br/> GROW FAST</p>
              </div>
            </div>
            <p className='pt-[30px] text-[15px]'>From idea to impact — we craft software that fuels startup growth, captivates users, and secures investor confidence.</p>
        </div>
       </div>
       <h3 className='text-center text-[40px] pt-[30px] my-[50px] text-gray-500'>Great startups aren&apos;t born — they&apos;re built, step by step.</h3>
    </div>
  )
}

export default Bout