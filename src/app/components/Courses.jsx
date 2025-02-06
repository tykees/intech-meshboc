import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'


function Courses() {
  return (
    <div className='my-20 mb-56'>
        <div className='flex justify-around items-start'>
            {/* <div className='flex gap-3 items-center shadow rounded-xl w-[500px]'>
                <Image className='bg-secondary p-6 ml-3 border-slate-100 border-2 m-4 shadow rounded-xl' src={"/js.gif"} width={150} height={150} alt='img'/>
                <div>
                    <h1 className='text-[22px] text-slate-800 font-bold'>Complete JavaScript</h1>
                    <p className='text-[12px]'>Small text</p>
                </div>
            </div>
            <div className='flex gap-3 items-center shadow rounded-xl w-[500px]'>
                <div className='ml-10'>
                    <h1 className='text-[22px] text-slate-800 font-bold'>Front-End Development</h1>
                    <p className='text-[12px] text-right'>Small text</p>
                </div>
                <Image className='bg-secondary p-6  border-slate-100 border-2 m-4 shadow rounded-xl' src={"/front.gif"} width={150} height={150} alt='img'/>
            </div> */}
        </div>
        
        <div className='flex justify-around items-start mt-4'>
            <div className='text-center w-[400px] h-[420px] border rounded-t-2xl'>
                <div className='bg-secondary'>
                <Image className='p-6 m-auto border-slate-100 border-2 shadow rounded-xl' src={"/full.gif"} width={150} height={150} alt='img'/>
                </div>
                <div className=''>
                    <h1 className='text-[22px] text-slate-800 font-bold'>Become A Full-Stack <br/> <span className='text-[42px]'>Developer</span> </h1>
                    <p className='text-[12px] text-center'>in 16 weeks</p>
                    <div className='flex justify-around items-center'>
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
                    <Button className="w-[100%] rounded-t-sm mt-8 hover:bg-lime-300 text-[26px] bg-secondary h-[60px]">Enroll Now</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Courses