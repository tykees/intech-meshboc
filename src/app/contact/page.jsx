import React from 'react';
import Image from 'next/image';
import { LuMailCheck, LuHeadphones, LuPhone, LuCode2 } from "react-icons/lu";
import { TiLocationOutline } from "react-icons/ti";
import { Button } from '@/components/ui/button';
import Link from 'next/link';


function Page() {
  return (
    <div className='mt-20 pb-24'>
        <h1 className='text-center text-[36px] px-10 font-bold raleway'>Get In Touch with Our Team</h1>
        <p className='text-center text-slate-500 poppins mt-2'>We have a team of Developers that can build your ideas and get you a 10x result</p>
        <div className='flex justify-center my-4'>
            <Image src={'/mp.png'} width={500} height={500} alt='contact illustration'/>
        </div>
        <div className='flex justify-center gap-6 items-stretch flex-wrap px-4'>
            <div className='border w-[250px] p-6 shadow-md hover:shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col'>
              <div className='text-[28px] text-primary'><LuCode2 /></div>
              <p className='mt-6 text-[18px] font-bold raleway'>Chat with Devs</p>
              <p className='my-3 poppins text-[14px] text-slate-500'>Chat with our friendly developers</p>
              <Button className="text-white rounded-lg bg-primary hover:bg-primary/90 w-full mt-auto">
                <a href="mailto:office@meshboc.cc">office@meshboc.cc</a>
              </Button>
            </div>

            <div className='border w-[250px] p-6 shadow-md hover:shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col'>
              <div className='text-[28px] text-primary'><LuHeadphones /></div>
              <p className='mt-6 text-[18px] font-bold raleway'>Chat with Support</p>
              <p className='my-3 poppins text-[14px] text-slate-500'>Chat with our support team</p>
              <Button className="text-white rounded-lg bg-primary hover:bg-primary/90 w-full mt-auto">
                <a href="mailto:office@meshboc.cc">office@meshboc.cc</a>
              </Button>
            </div>

            <div className='border w-[250px] p-6 shadow-md hover:shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col'>
              <div className='text-[28px] text-primary'><TiLocationOutline /></div>
              <p className='mt-6 text-[18px] font-bold raleway'>Visit Us</p>
              <p className='my-3 poppins text-[14px] text-slate-500'>Come meet our friendly team</p>
              <Link href={'https://maps.app.goo.gl/uRVpocwDwkK1wHLs7'} className='mt-auto'>
                <Button className="text-white rounded-lg bg-primary hover:bg-primary/90 w-full">Locate on Google</Button>
              </Link>
            </div>

            <div className='border w-[250px] p-6 shadow-md hover:shadow-xl rounded-xl transition-all duration-300 hover:-translate-y-1 flex flex-col'>
              <div className='text-[28px] text-primary'><LuPhone /></div>
              <p className='mt-6 text-[18px] font-bold raleway'>Call Us</p>
              <p className='my-3 poppins text-[14px] text-slate-500'>Speak directly with our team</p>
              <Link href={'tel:+2348105197239'} className='mt-auto'>
                <Button className="text-white rounded-lg bg-primary hover:bg-primary/90 w-full">+234 810 519 7239</Button>
              </Link>
            </div>
        </div>
    </div>
  )
}

export default Page
