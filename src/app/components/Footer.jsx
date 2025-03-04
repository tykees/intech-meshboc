import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Button } from '@/components/ui/button';

function Footer() {
  const today = new Date();
  const year = today.getFullYear()
  return (
    <>
    <div className='my-20'>
      <div className='md:text-[60px] text-[28px] font-medium text-center text-slate-800 raleway'>WANNA BUILD AND IDEA? <br/> <span className='md:text-[250px] text-[55px]'> GET<span className='text-primary'>IN</span>TOUCH</span></div>
     <Link href={'tel:08105197239'}> <Button className="mx-auto block w-[250px] h-[60px] mb-20 text-white text-[20px]">Place a Call Now</Button></Link>
        <div className='flex justify-between items-center flex-wrap mx-4'>
              <div>
                  <Image src={"/meshboc1.png"} width={160} height={160} alt='logo'/>
                  <p className='md:w-[350px] w-[300px] text-[20px] pt-5 raleway'>We teach the skills that builds the future.</p>
                  <div className='flex items-center gap-2 mt-6'>
                 <a href='https://x.com/meshboc' target='_blank'><Image className='w-[60px] h-[60px] border-slate-300 border rounded-full p-2' src={"/x.gif"} width={100} height={100} alt='logo'/></a> 
                  <Image className='w-[60px] h-[60px] border-slate-300 border rounded-full p-2'  src={"/youtube.gif"} width={100} height={100} alt='logo'/>
                  <Image className='w-[60px] h-[60px] border-slate-300 border rounded-full p-2'  src={"/facebook.gif"} width={100} height={100} alt='logo'/>
                  <Image className='w-[60px] h-[60px] border-slate-300 border rounded-full p-2'  src={"/insta.gif"} width={100} height={100} alt='logo'/>
                  </div>
              </div>
              <div className='flex justify-between gap-20 items-start flex-wrap'>
              <div>
                  <h2 className='text-[24px] font-bold raleway'>Resources</h2>
                  <ul className='poppins'>
                    <li> <Link href={'/privacy'}> Privacy policy</Link></li>
                    <li> <Link href={'/terms'}> Terms of service</Link></li>
                    <li> <Link href={'/blogs'}> Our Blog</Link></li>
                    <li>Scholarships</li>
                  </ul>
                </div>
                <div>
                  <h2 className='text-[24px] font-bold raleway'>About</h2>
                  <ul className='poppins'>
                    <li> <Link href={'/contact'}> Contact us</Link></li>
                    <li> <Link href={'/about'}>About us</Link></li>
                  </ul>
                </div>
                <div>
                  <h2 className='text-[24px] font-bold raleway'>Companies</h2>
                  <ul className='poppins'>
                    <li>Hire our Grads</li>
                    <li>Collaborate with us</li>
                  </ul>
                </div>
              </div>
        </div>
    </div>
    <div className='bg-slate-900'>
      <p className='text-center text-white text-[14px] p-2'>All Rights Reserved {year}</p>
    </div>
    </>
  )
}

export default Footer