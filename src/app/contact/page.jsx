import React from 'react';
import Image from 'next/image';
import { LuMailCheck } from "react-icons/lu";
import { Button } from '@/components/ui/button';


function Page() {
  return (
    <div className='mt-20'>
        <h1 className='text-center text-[36px] px-10 font-bold'>Get In Touch with Our Team</h1>
        <p className='text-center text-slate-600'>We have a team of Developers that can build your ideas and get your a 10x result</p>
        <div className='flex justify-center'>
            <Image src={'/mp.png'} width={600} height={600} alt='img'/>
        </div>
        <div className='flex justify-center gap-14 items-center flex-wrap'>
            <div className='border w-[250px] h-[240px] p-4 shadow-md hover:shadow-xl rounded-lg'>
            <div className='text-[30px]'><LuMailCheck /></div>
            <p className='mt-8 text-[20px] font-bold'>Chat with Devs</p>
            <p className='my-3'>Speak with our friendly team</p>
            <Button className="text-white rounded-lg bg-slate-500 hover:bg-secondary hover:text-black w-[100%]">devs@intechmeshboc.com</Button>
            </div>

            <div className='border w-[250px] h-[240px] p-4 shadow-md hover:shadow-xl rounded-lg'>
            <div className='text-[30px]'><LuMailCheck /></div>
            <p className='mt-8 text-[20px] font-bold'>Chat with Support</p>
            <p className='my-3'>Speak with our friendly team</p>
            <Button className="text-white rounded-lg bg-slate-500 hover:bg-primary w-[100%]">support@intechmeshboc.com</Button>
            </div>

            <div className='border w-[250px] h-[240px] p-4 shadow-md hover:shadow-xl rounded-lg'>
            <div className='text-[30px]'><LuMailCheck /></div>
            <p className='mt-8 text-[20px] font-bold'>Visit Us</p>
            <p className='my-3'>Speak with our friendly team</p>
            <Button className="text-white rounded-lg bg-slate-500 hover:bg-primary w-[100%]">Locate on Google</Button>
            </div>

            <div className='border w-[250px] h-[240px] p-4 shadow-md hover:shadow-xl rounded-lg'>
            <div className='text-[30px]'><LuMailCheck /></div>
            <p className='mt-8 text-[20px] font-bold'>Call Us</p>
            <p className='my-3'>Speak with our friendly team</p>
            <Button className="text-white rounded-lg bg-slate-500 hover:bg-secondary hover:text-black w-[100%]">+2348105197239</Button>
            </div>
        </div>
    </div>
  )
}

export default Page