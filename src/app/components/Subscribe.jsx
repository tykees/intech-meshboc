import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

function Subscribe() {
   const {user, isLoaded} = useUser();

  return (
    <div className='md:px-8 px-8'>
        <div className='pt-20'>
            <div className='flex justify-around items-start py-10 bg-trans rounded-2xl h-[600px] shadow'>
              <div>
              <p className='text-[80px] mt-12 text-start text-white leading-none font-bold'>Subscribe for fresh <br/> <span className='md:text-[80px] text-[40px] font-bold '>content and updates</span></p>
              <p className=' w-[500px] text-start pt-5 block mt-5 text-white'> We offer services that navigate your business to the next phase of sales and create a stable online presence without breaking the Bank. Your visibility is certain with us.</p>
              <div>
              <input className='w-[600px] h-[62px] rounded-full mt-10 px-5' type='text' placeholder='Enter Your Email'/>
              <Button variant="outline"  className="text-black ml-[-150px] bg-secondary border-secondary w-[150px] h-[60px]">Subscribe</Button>
              </div>
              </div>
              <div>
              <Image className='m-auto pt-[50px]' src="/png4.png" width={580} height={580} alt='computer'/>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Subscribe