import React from 'react'
import Image from 'next/image'

function Companies() {
  return (
    <div className='mt-2'>
        <div className='flex justify-between px-14 items-center'>
            <Image src={"/google.png"} width={100} height={100} alt='logo'/>
            <Image src={"/konami.png"} width={100} height={100} alt='logo'/>
            <Image src={"/yahoo.png"} width={100} height={100} alt='logo'/>
            <Image src={"/skype.png"} width={100} height={100} alt='logo'/>
        </div>
    </div>
  )
}

export default Companies