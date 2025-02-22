import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


function Courses() {
  return (
    <div className='pb-40 bg-white'>
        <div className='flex justify-around items-start'>
        </div>
        <div className='flex justify-around items-start mt-4'>
            <div className='text-center w-[380px] h-[480px] bg-slate-50 border rounded-t-2xl'>
                <div className='bg-secondary'>
                <Image className='p-6 m-auto border-slate-50 border-2 shadow rounded-xl' src={"/full.gif"} width={150} height={150} alt='img'/>
                </div>
                <div className=''>
                    <h1 className='text-[22px] text-slate-800 font-medium'>Join Our Full-Stack <br/> <span className='text-[26px]'>Development Course</span> </h1>
                    <div className='flex justify-around mt-10 items-center'>
                    <Image className='bg-slate-100 p-2 rounded-b-2xl w-[50px] h-[50px]' src={"/html.png"} width={80} height={80} alt='img'/>
                    <Image className='bg-slate-100 p-2 rounded-b-2xl w-[50px] h-[50px]' src={"/css.png"} width={80} height={80} alt='img'/>
                    <Image className='bg-slate-100 p-2 rounded-b-2xl w-[50px] h-[50px]' src={"/js.png"} width={80} height={80} alt='img'/>
                    <Image className=' bg-slate-100 p-2 rounded-b-2xl w-[50px] h-[50px]' src={"/tailwind.png"} width={80} height={80} alt='img'/>
                    <Image className=' bg-slate-100 p-2 rounded-b-2xl w-[50px] h-[50px]' src={"/react.png"} width={80} height={80} alt='img'/>
                    </div>
                    <div className='flex justify-around items-center mt-5'>
                    <Image className=' bg-slate-100 p-2 rounded-b-2xl w-[80px] h-[50px]' src={"/git.png"} width={80} height={80} alt='img'/>
                    <Image className='bg-slate-100 p-2 rounded-b-2xl w-[50px] h-[50px]' src={"/next.png"} width={80} height={80} alt='img'/>
                    <Image className='bg-slate-100 p-2 rounded-b-2xl w-[50px] h-[50px]' src={"/node.png"} width={80} height={80} alt='img'/>
                    <Image className='bg-slate-100 p-2 rounded-b-2xl w-[50px] h-[50px]' src={"/mongo.png"} width={80} height={80} alt='img'/>
                    </div>
                    <p className='text-[12px] text-center pt-3'>Course Duration: 16 weeks</p>
                    <Button className="w-[100%] rounded-t-sm mt-10 hover:bg-lime-300 text-[26px] bg-secondary h-[60px]">Enroll Now</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses