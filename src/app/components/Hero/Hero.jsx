import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import Link from 'next/link';
import { useUser } from '@clerk/nextjs';

function Hero() {
   const {user, isLoaded} = useUser();


  return (
    <div className='pd:px-8'>
        <div className='md:pt-[90px] pt-12'>
            <div className='py-10 h-[730px] md:h-[700px] p-4 flex-wrap'>
              <div>
              <p className='md:text-[75px] text-[40px] mt-[60px] text-center text-gray-800 font-bold tracking-wide leading-[50px] md:leading-[80px] raleway'>We Build <span className='font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-lime-300 bg-clip-text text-transparent'>Skills.</span> <br/>We Build <span className='font-bold bg-gradient-to-r from-blue-600 via-blue-600 to-lime-300 bg-clip-text text-transparent'> Softwares.</span></p>
              <p className='text-center pt-1 block mt-1 text-gray-800 poppins'>Master in-demand tech skills and transform your career.</p>
              <div className='flex justify-center pt-1	 text-center md:gap-8 gap-4 mt-5 flex-wrap'>
                {
                  user&&isLoaded?
                  <Link href={"/enrol"}><Button variant="outline"  className="text-secondary border border-secondary poppins w-[200px] h-[50px] hover:text-secondary">LEARN MORE</Button></Link>  :
                  <Link href={"/sign-up"}><Button variant="outline"  className="text-white bg-gray-800 border border-gray-800 poppins w-[200px] h-[50px] hover:text-primary hover:border-primary">BUILD A SKILL</Button></Link> 
                }
             <Link href={"/contact"}> <Button radius="full" variant="soft" className="text-primary w-[200px] h-[50px] poppins border-primary bg-transparent shadow-lg">BUILD A START UP<span><Image className='bg-primary rounded-full p-2 ml-5' src={"/arrow.gif"} width={50} height={50} alt='img'></Image></span> </Button></Link>
              </div>
            {/* sec 2 */}
              <div className='flex justify-center items-center md:gap-[20px] gap-5 pt-16 text-gray-800'>
                  <div>
                    <h2 className='md:text-[40px] text-[30px] text-center raleway'>100+</h2>
                    <p className='font-thin text-center poppins md:text-[16px] text-[9px]'>Happy Clients</p>
                  </div>
                  <p className='md:text-[50px] text-[40px] font-thin'>|</p>
                  <div>
                    <h2 className='md:text-[40px] text-[30px] text-center raleway'>100+</h2>
                    <p className='font-thin text-center poppins md:text-[16px] text-[9px]'>Grads</p>
                  </div>
                  <p className='md:text-[50px] text-[40px] font-thin'>|</p>

                  <div>
                    <h2 className='md:text-[40px] text-[30px] text-center raleway'>7+</h2>
                    <p className='font-thin text-center poppins md:text-[16px] text-[9px]'>Years Experience</p>
                  </div>
                </div>
              </div>
              {/* <div className="spinning_bg ml-[120px] pt-[150px] md:ml-[200px]">
              <Image className='m-auto w-[200px] md:w-[350px] pt-[50px]' src="/roundb.png" width={350} height={350} alt='computer'/>
            </div> */}
            </div>
           
        </div>
    </div>
  )
}

export default Hero