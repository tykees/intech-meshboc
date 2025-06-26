import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";


function Cohort() {
  return (
    <div>
        <div className='bg-primary flex gap-5 py-4 justify-center items-center flex-wrap'>
               <Image className=' w-[150px] md:w-[100px]' src={"/full2.gif"} width={100} height={100}/>
            <p className='text-center text-white text-[20px] raleway'>Join Our August 2025 Full Stack Engineering Course</p>
             <Link href={"/sign-up"}><Button variant="outline"  className="text-white bg-gray-800 border border-gray-800 poppins w-[150px] h-[50px] hover:text-white hover:border-white">Enrol Now</Button></Link> 
        </div>
    </div>
  )
}

export default Cohort