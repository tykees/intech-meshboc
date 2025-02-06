import React from 'react';
import Image from 'next/image';

function Instructor() {
  return (
    <div>
        <div className='h-[600px] bg-secondary mx-8 rounded-2xl'>
            <Image className='m-auto rounded-full mt-20' src={"/meshboc1.png"} width={100} height={100} alt='logo'/>
            <div className='container mx-auto text-center mt-20'>
                <div className='text-[62px] font-medium'>We have students all around Africa</div>
          `  <div className='flex'> <div className='text-[62px] font-medium'>This of the text to</div> <div className='flex'><Image src={"/diva.png"} width={100} height={100} alt='img'/> <Image className='ml-[-12px]' src={"/pod.png"} width={100} height={100} alt='img'/> <Image className='ml-[-12px]' src={"/tima.png"} width={100} height={100} alt='img'/> <p className='text-[62px] font-medium'>This is to set it</p> </div>
          </div>
          <div className='text-[62px] font-medium'>Lorem ipsum dolor sit adipisicing elit. Atque!</div>

            </div>
        </div>
    </div>
  )
}

export default Instructor