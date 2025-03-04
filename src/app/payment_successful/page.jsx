import Image from 'next/image';
import { Button } from "@/components/ui/button";
import React from 'react'
import Link from 'next/link';

function Payment() {
  return (
    <div className='pt-20'>
        <div className='m-auto w-[350px] h-[600px]'>
            <div className='bg-primary pt-10 rounded-3xl h-[270px]'>
                <Image className='m-auto border-4 border-white rounded-full' src={'/mark.gif'} width={100} height={100} alt="mark"/>
                <p className='text-center text-[25px] font-medium text-white pt-5'>Payment Successful</p>
            </div>
            <div className=''>
                <p className='text-center text-slate-500'>Wish to log your payment on our support desk?</p>
                <p className='text-center text-green-800 underline'><Link href={"http://wa.me/2348105197239"}>Log here</Link></p>
                <Button variant="outline" className="text-white mt-4 border border-white rounded-2xl w-[350px] text-[23px] h-[50px] bg-primary">Back to Profile</Button>
            </div>
        </div>
    </div>
  )
}

export default Payment