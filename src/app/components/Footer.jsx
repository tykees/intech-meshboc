import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <div className='my-20'>
      <div className='md:text-[250px] text-[50px] font-medium text-center text-slate-800'>GET<span className='text-primary italic'>IN</span>TOUCH</div>
        <div className='flex justify-between items-center flex-wrap mx-12'>
              <div>
                  <Image src={"/meshboc1.png"} width={100} height={100} alt='logo'/>
                  <p className='md:w-[400px] w-[320px] text-[20px] font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, suscipit.</p>
                  <div className='flex items-center gap-2 mt-6'>
                  <Image className='w-[60px] h-[60px] border-slate-300 border rounded-full p-2' src={"/x.gif"} width={100} height={100} alt='logo'/>
                  <Image className='w-[60px] h-[60px] border-slate-300 border rounded-full p-2'  src={"/youtube.gif"} width={100} height={100} alt='logo'/>
                  <Image className='w-[60px] h-[60px] border-slate-300 border rounded-full p-2'  src={"/facebook.gif"} width={100} height={100} alt='logo'/>
                  <Image className='w-[60px] h-[60px] border-slate-300 border rounded-full p-2'  src={"/insta.gif"} width={100} height={100} alt='logo'/>
                  </div>
              </div>
              <div className='flex justify-between gap-40 items-start flex-wrap'>
                <div>
                  <h2 className='text-[24px] font-medium'>About</h2>
                  <ul>
                    <li>Contact us</li>
                    <li>About us</li>
                  </ul>
                </div>
                <div>
                  <h2 className='text-[24px] font-medium'>Companies</h2>
                  <ul>
                    <li>Hire our Grads</li>
                    <li>Collaborate with us</li>
                  </ul>
                </div>
                <div>
                  <h2 className='text-[24px] font-medium'>Resources</h2>
                  <ul>
                    <li>Privacy policy</li>
                    <li>Terms of service</li>
                    <li>FAQS</li>
                    <li>Design</li>
                    <li>Our Blog</li>
                    <li>Scholarships</li>
                  </ul>
                </div>
              </div>
        </div>
    </div>
  )
}

export default Footer