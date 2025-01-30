import React from 'react'
import Image from 'next/image'


function Courses() {
  return (
    <div className='my-32'>
        <div className='flex justify-around items-start'>
            <div className='flex gap-3 items-center shadow rounded-xl w-[500px]'>
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
            </div>
        </div>
        
        <div className='flex justify-around items-start mt-4'>
            <div className='flex gap-3 items-center shadow rounded-xl w-[500px]'>
                <Image className='bg-secondary p-6 ml-3 border-slate-100 border-2 m-4 shadow rounded-xl' src={"/backend.gif"} width={150} height={150} alt='img'/>
                <div>
                    <h1 className='text-[22px] text-slate-800 font-bold'>Back-End Development</h1>
                    <p className='text-[12px]'>Small text</p>
                </div>
            </div>
            <div className='flex gap-3 items-center shadow rounded-xl w-[500px]'>
                <div className='ml-10'>
                    <h1 className='text-[22px] text-slate-800 font-bold'>Full-Stack Development</h1>
                    <p className='text-[12px] text-right'>Small text</p>
                </div>
                <Image className='bg-secondary p-6  border-slate-100 border-2 m-4 shadow rounded-xl' src={"/full.gif"} width={150} height={150} alt='img'/>
            </div>
        </div>
    </div>
  )
}

export default Courses