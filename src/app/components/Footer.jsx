import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";
import { Button } from '@/components/ui/button';

function Footer() {
  const today = new Date();
  const year = today.getFullYear()
  return (
    <>
    <div className='py-20 bg-black'>
      {/* <div className='md:text-[60px] text-[28px] font-medium text-center text-slate-800 raleway'>WANNA BUILD AN IDEA? <br/> <span className='md:text-[250px] text-[55px]'> GET<span className='text-primary'>IN</span>TOUCH</span></div>
     <Link href={'tel:08105197239'}> <Button className="mx-auto block w-[250px] h-[60px] mb-20 text-white text-[20px]">Place a Call Now</Button></Link> */}
        <div className='flex justify-around items-center flex-wrap mx-4'>
              <div>
                  <Image className='w-[120px]' src={"/meshbocw.png"} width={160} height={160} alt='logo'/>
                  <p className='w-[300px] text-[20px] pt-5 text-gray-50 raleway'>We teach the skills that builds the future.</p>
                  <div className='flex items-center text-white text-[20px] gap-4 mt-6'>
                 <a className='border border-gray-500 p-3 rounded-full' href='https://x.com/meshboc' target='_blank'><BsTwitterX /></a> 
                 <a className='border border-gray-500 p-3 rounded-full' href='https://web.facebook.com/meshboc' target='_blank'> <SlSocialFacebook /></a>
                 <a className='border border-gray-500 p-3 rounded-full' href='#' target='_blank'> <SlSocialLinkedin /></a>
                 <a className='border border-gray-500 p-3 rounded-full' href='#' target='_blank'> <SiInstagram /></a>
                  </div>
              </div>
              <div className='flex justify-between gap-20 items-start flex-wrap'>
              <div className=' text-gray-50'>
                  <h2 className='text-[20px] font-medium pb-2 raleway'>Resources</h2>
                  <ul className='poppins text-[14px] text-gray-300'>
                    <li> <Link href={'/privacy'}> Privacy policy</Link></li>
                    <li> <Link href={'/terms'}> Terms of service</Link></li>
                    <li> <Link href={'/blogs'}> Our Blog</Link></li>
                    <li>Scholarships</li>
                  </ul>
                </div>
                <div className=' text-gray-50'>
                  <h2 className='text-[20px]  font-medium pb-2  raleway'>About</h2>
                  <ul className='poppins text-[14px] text-gray-300'>
                    <li> <Link href={'/contact'}> Contact us</Link></li>
                    <li> <Link href={'/about'}>About us</Link></li>
                  </ul>
                </div>
                <div className=' text-gray-50'>
                  <h2 className='text-[20px]  font-medium pb-2  raleway'>Contact</h2>
                  <ul className='poppins text-[14px] text-gray-300'>
                    <li className='flex justify-start items-center gap-1' > <div className='text-[25px]'><CiMail /></div> <a href="mailto:office@intechmeshboc.com">office@intechmeshboc.com</a> </li>
                    <li className='flex justify-start items-center'><div className='text-[25px]'><LuPhone /></div> <a href="tel:+2348105197239">+2348105197239</a> </li>
                  </ul>
                </div>
              </div>
        </div>
    </div>
    <div className='bg-black'>
      <p className='text-center text-white text-[12px] py-[25px] p-2 raleway'>All Rights Reserved {year}</p>
    </div>
    </>
  )
}

export default Footer