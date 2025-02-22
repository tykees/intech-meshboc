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
            <div className='md:flex justify-around items-start py-10 bg-primary rounded-2xl h-[1100px] md:h-[700px] p-4 flex-wrap shadow'>
              <div>
              <p className='md:text-[100px] text-[40px] mt-12 text-start text-white leading-none font-bold'>Learn. Build. <span className='text-secondary'> Succeed.</span> <br/> <span className='md:text-[38px] text-[12px] font-bold '>Hands-on Training | Expert Instructors | Job-Ready Skills</span></p>
              <p className='md:w-[500px] w-[350px] text-start pt-5 block mt-5 text-white'>Master in-demand tech skills and transform your career with Meshboc – your gateway to a thriving digital future.</p>
              <div className='flex justify-start pt-5	 text-center md:gap-8 gap-4 mt-5'>
                {
                  user?
                  <Link href={"/website"}><Button variant="outline"  className="text-secondary border border-secondary w-[150px] h-[50px]">LEARN MORE</Button></Link>  :
                  <Link href={"/sign-up"}><Button variant="outline"  className="text-secondary border border-secondary w-[150px] h-[50px]">GET STARTED</Button></Link> 
                }
             <Link href={"/"}> <Button radius="full" variant="soft" className="text-primary w-[150px] h-[50px] bg-secondary">REGISTER <span><Image className='bg-primary rounded-full p-2 ml-5' src={"/arrow.gif"} width={50} height={50}></Image></span> </Button></Link>
              </div>
              <div className='flex items-start md:gap-10 gap-5 pt-16 text-white'>
                  <div>
                    <h2 className='md:text-[60px] text-[30px] text-center'>150+</h2>
                    <p className='font-thin text-center'>Happy Clients</p>
                  </div>
                  <p className='text-[70px] font-thin'>|</p>
                  <div>
                    <h2 className='md:text-[60px] text-[30px] text-center'>200+</h2>
                    <p className='font-thin text-center'>Grads</p>
                  </div>
                  <p className='text-[70px] font-thin'>|</p>

                  <div>
                    <h2 className='md:text-[60px] text-[30px] text-center'>7+</h2>
                    <p className='font-thin text-center'>Years Experience</p>
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