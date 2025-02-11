import React from 'react'
import Image from 'next/image'

function Companies() {
  return (
    <div className='mt-2'>
        <div className='flex justify-between md:px-14 px-4 gap-2 items-center'>
            <Image className='md:w-[100px] w-[65px]' src={"/google.png"} width={100} height={100} alt='logo'/>
            <Image className='md:w-[100px] w-[65px]' src={"/konami.png"} width={100} height={100} alt='logo'/>
            <Image className='md:w-[100px] w-[65px]' src={"/yahoo.png"} width={100} height={100} alt='logo'/>
            <Image className='md:w-[100px] w-[65px]' src={"/skype.png"} width={100} height={100} alt='logo'/>
        </div>
    </div>
  )
}

export default Companies