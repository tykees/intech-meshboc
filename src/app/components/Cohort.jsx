import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button";


function Cohort() {
  return (
    <div>
        <div className='bg-black md:text-left text-center flex gap-1 md:gap-5 py-4 justify-around items-center flex-wrap-reverse'>
          <div>
              <p className='text-white text-center md:text-left text-[20px] md:text-[40px] leading-[25px] md:leading-[50px] raleway'>Join Our September 2025 Full Stack <br/> Engineering Course</p>
              <Image className='w-[150px] py-3 md:w-[150px] m-auto md:m-0' src={"/mern.png"} width={1000} height={1000}/>
             <Link href={"/enrol"}><Button variant="outline"  className="text-white bg-primary border border-gray-800 poppins w-[150px] h-[50px] hover:text-white hover:border-white">Enrol Now</Button></Link> 
          </div>
          
              <Image className='w-[300px] md:w-[400px]' src={"/prof2.png"} width={1000} height={1000}/>
        </div>
    </div>
  )
}

export default Cohort