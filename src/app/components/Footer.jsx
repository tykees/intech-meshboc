import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { CiMail } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiInstagram } from "react-icons/si";

function Footer() {
  const today = new Date();
  const year = today.getFullYear()
  return (
    <>
    <div className='py-20 bg-black border-t border-gray-800'>
        <div className='flex justify-between md:justify-around items-start flex-wrap mx-4 gap-10'>
              <div>
                  <Image className='w-[150px]' src={"/bluewithname.png"} width={160} height={160} alt='logo'/>
                  <p className='w-[260px] text-[15px] pt-5 text-gray-400 raleway leading-relaxed'>We teach the skills that builds the future.</p>
                  <div className='flex items-center text-white text-[18px] gap-3 mt-6'>
                 <a className='border border-gray-700 p-3 rounded-full hover:border-primary hover:text-primary transition-all duration-300' href='https://x.com/meshboc' target='_blank'><BsTwitterX /></a>
                 <a className='border border-gray-700 p-3 rounded-full hover:border-primary hover:text-primary transition-all duration-300' href='https://web.facebook.com/meshboc' target='_blank'><SlSocialFacebook /></a>
                 <a className='border border-gray-700 p-3 rounded-full hover:border-primary hover:text-primary transition-all duration-300' href='#' target='_blank'><SlSocialLinkedin /></a>
                 <a className='border border-gray-700 p-3 rounded-full hover:border-primary hover:text-primary transition-all duration-300' href='#' target='_blank'><SiInstagram /></a>
                  </div>
              </div>
              <div className='flex justify-between gap-16 items-start flex-wrap'>
                <div className='text-gray-50'>
                  <h2 className='text-[12px] font-semibold pb-4 raleway uppercase tracking-widest text-gray-400'>Resources</h2>
                  <ul className='poppins text-[14px] text-gray-500 space-y-2'>
                    <li className='hover:text-white transition-colors duration-200'><Link href={'/privacy'}>Privacy policy</Link></li>
                    <li className='hover:text-white transition-colors duration-200'><Link href={'/terms'}>Terms of service</Link></li>
                    <li className='hover:text-white transition-colors duration-200'><Link href={'/blogs'}>Our Blog</Link></li>
                    <li className='text-gray-700 cursor-default'>Scholarships</li>
                  </ul>
                </div>
                <div className='text-gray-50'>
                  <h2 className='text-[12px] font-semibold pb-4 raleway uppercase tracking-widest text-gray-400'>Company</h2>
                  <ul className='poppins text-[14px] text-gray-500 space-y-2'>
                    <li className='hover:text-white transition-colors duration-200'><Link href={'/contact'}>Contact us</Link></li>
                    <li className='hover:text-white transition-colors duration-200'><Link href={'/about'}>About us</Link></li>
                  </ul>
                </div>
                <div className='text-gray-50'>
                  <h2 className='text-[12px] font-semibold pb-4 raleway uppercase tracking-widest text-gray-400'>Contact</h2>
                  <ul className='poppins text-[14px] text-gray-500 space-y-3'>
                    <li className='flex items-center gap-2 hover:text-white transition-colors duration-200'>
                      <CiMail className='text-[18px] flex-shrink-0' />
                      <a href="mailto:office@meshboc.cc">office@meshboc.cc</a>
                    </li>
                    <li className='flex items-center gap-2 hover:text-white transition-colors duration-200'>
                      <LuPhone className='text-[16px] flex-shrink-0' />
                      <a href="tel:+2348105197239">+234 810 519 7239</a>
                    </li>
                  </ul>
                </div>
              </div>
        </div>
    </div>
    <div className='bg-black border-t border-gray-800'>
      <p className='text-center text-gray-600 text-[12px] py-6 p-2 raleway'>© {year} Meshboc. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer
