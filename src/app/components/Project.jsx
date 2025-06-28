import React from 'react';
import Image from 'next/image';

function Project() {
  return (
    <div>
        <div className='container mt-[50px]'>
            <p className='text-[12px] text-gray-500'>| our projects |</p>
            <p className='text-[30px] text-gray-700 raleway leading-[35px]'>It&apos;s more than a motto <br/>— it&apos;s our mission in motion.</p>
            <div className='flex justify-center mt-10 gap-5 items-center flex-wrap'>
                <div>
                     <Image className='border-gray-300 w-[340px] m-auto md:w-[650px] border-[20px] shadow-lg' src={"/pocketshuttle.png"} width={650} height={650} alt='logo'/>
                    <p className='text-[12px] text-gray-500 w-[300px] md:w-[500px] pt-5'>PocketShuttle Management App is a comprehensive solution designed to enhance the safety, convenience, and efficiency of school transportation.</p>
                </div>
                <div>
                 <Image className='border-gray-300 w-[340px] m-auto md:w-[650px] border-[20px] shadow-lg' src={"/bullchord.png"} width={650} height={650} alt='logo'/>
                 <p className='text-[12px] text-gray-500 w-[300px] md:w-[500px] pt-5'>BullChord is a Web3-powered platform focused on empowering music artists and their listeners through decentralized engagement and token rewards.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project