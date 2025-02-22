import React from 'react';
import Image from 'next/image';

function Instructor() {
  return (
    <div>
        <div className='md:h-[600px] w-[100%] bg-secondary md:mx-8 mx-0 pb-10 rounded-2xl'>
            <Image className='m-auto pt-10' src={"/meshboc1.png"} width={100} height={100} alt='logo'/>
            <div className='container mx-auto text-center mt-10'>
                <div className='md:text-[62px] text-[22px] font-medium'>Join the number of Students</div>
          `  <div className='flex justify-center items-center mt-[-10px] mb-2'> <div className='md:text-[62px] text-[0px] font-medium'>learning on Intech</div> <div className='flex'><Image className='w-[50px] h-[50px] md:w-[100px] md:h-[100px]' src={"/diva.png"} width={100} height={100} alt='img'/> <Image className='ml-[-12px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]' src={"/pod.png"} width={100} height={100} alt='img'/> <Image className='ml-[-12px] w-[50px] h-[50px] md:w-[100px] md:h-[100px]' src={"/tima.png"} width={100} height={100} alt='img'/> <p className='md:text-[62px] text-[0px] font-medium'>Meshboc and</p> </div>
          </div>
          <div className='md:text-[62px] text-[20px] font-medium'>become a great developer creating real life solutions.</div>
            </div>
        </div>
    </div>
  )
}

export default Instructor