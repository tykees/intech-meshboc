import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

function Hero() {
   const {user, isLoaded} = useUser();


  return (
    <div className='md:px-8'>
        <div className='pt-20'>
            <div className='md:flex justify-around items-start py-10 bg-primary rounded-2xl h-[940px] md:h-[700px] p-4 flex-wrap shadow'>
              <div>
              <p className='md:text-[95px] text-[40px] mt-12 text-start text-white leading-none font-bold raleway'>Learn. Build. <span className='text-secondary'> Succeed.</span> <br/> <span className='md:text-[33px] text-[13px] font-bold '>Hands-on Training | Expert Instructors | Job-Ready Skill</span></p>
              <p className='md:w-[500px] w-[350px] text-start pt-5 block mt-1 text-white poppins'>Master in-demand tech skills and transform your career with Meshboc – your gateway to a thriving digital future.</p>
              <div className='flex justify-start pt-5	 text-center md:gap-8 gap-4 mt-5'>
                {
                  user&&isLoaded?
                  <Link href={"/enrol"}><Button variant="outline"  className="text-secondary border border-secondary poppins w-[150px] h-[50px] hover:text-secondary">LEARN MORE</Button></Link>  :
                  <Link href={"/sign-up"}><Button variant="outline"  className="text-secondary border border-secondary poppins w-[150px] h-[50px] hover:text-secondary">GET STARTED</Button></Link> 
                }
             <Link href={"/"}> <Button radius="full" variant="soft" className="text-primary w-[150px] h-[50px] poppins bg-secondary">REGISTER <span><Image className='bg-primary rounded-full p-2 ml-5' src={"/arrow.gif"} width={50} height={50} alt='img'></Image></span> </Button></Link>
              </div>
              <div className='flex items-start md:gap-10 gap-5 pt-16 text-white'>
                  <div>
                    <h2 className='md:text-[60px] text-[30px] text-center raleway'>100+</h2>
                    <p className='font-thin text-center poppins md:text-[16px] text-[9px]'>Happy Clients</p>
                  </div>
                  <p className='md:text-[70px] text-[40px] font-thin'>|</p>
                  <div>
                    <h2 className='md:text-[60px] text-[30px] text-center raleway'>100+</h2>
                    <p className='font-thin text-center poppins md:text-[16px] text-[9px]'>Grads</p>
                  </div>
                  <p className='md:text-[70px] text-[40px] font-thin'>|</p>

                  <div>
                    <h2 className='md:text-[60px] text-[30px] text-center raleway'>7+</h2>
                    <p className='font-thin text-center poppins md:text-[16px] text-[9px]'>Years Experience</p>
                  </div>
                </div>
              </div>
              <div>
              <Image className='m-auto w-[600px] pt-[50px]' src="/homegirl2.png" width={500} height={500} alt='computer'/>
            </div>
            </div>
           
        </div>
    </div>
  )
}

export default Hero