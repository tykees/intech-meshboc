import React from 'react';
import Image from 'next/image';

function Project() {
  return (
    <div>
        <div className='container mt-[50px]'>
            <p className='text-[12px] text-gray-500'>| our projects |</p>
            <p className='text-[30px] text-gray-700 raleway leading-[35px]'>Our motto isn&apos;t just a statement, <br/>See what we are building</p>
            <div className='flex justify-center mt-10 gap-5 items-center flex-wrap'>
                <div>
                     <Image className='border-slate-100 w-[340px] m-auto md:w-[650px] border-[20px] shadow-lg' src={"/pocketshuttle.png"} width={650} height={650} alt='logo'/>
                    <p className='text-[12px] text-gray-500 w-[300px] md:w-[500px] pt-5'>PocketShuttle Management App is a comprehensive solution designed to enhance the safety, convenience, and efficiency of school transportation.</p>
                </div>
                <div>
                 <Image className='border-slate-100 w-[340px] m-auto md:w-[650px] border-[20px] shadow-lg' src={"/bullchord.png"} width={650} height={650} alt='logo'/>
                 <p className='text-[12px] text-gray-500 w-[300px] md:w-[500px] pt-5'>PocketShuttle Management App is a comprehensive solution designed to enhance the safety, convenience, and efficiency of school transportation.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project