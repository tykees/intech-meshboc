import React from 'react';
import Image from 'next/image';
import { IoRocketSharp } from "react-icons/io5";
import Link from 'next/link';


const values = [
  {
    title: "Pioneering Across Fields",
    content: "Our vision is to shape the future of technology by driving innovation across diverse domains — from transforming web and mobile experiences to pushing the boundaries of AI, machine learning, cybersecurity, and blockchain development."
  },

    {
    title: "Engineering the Future",
    content: "While innovation drives us, our deeper purpose is to create meaningful change and improve lives through technology."
  },
    {
    title: "Value at the Core",
    content: "At IntechMeshboc, innovation isn’t just what we aim for — it’s who we are. We cultivate a culture where creativity thrives and tech solutions are born with purpose. Our goal is to build a future where technology drives progress and delivers real value to society."
  },

]

function Page() {
  return (
    <div className='pt-[100px]'>
        <div className='relative group px-[20px] md:px-[200px] h-[350px] py-[50px] overflow-hidden bg-primary transition-colors shadow text-white text-start'>
          <div className="absolute inset-0 opacity-30 group-hover w-[600px] transition-opacity duration-300 pointer-events-none z-0 bg-[url('/grid.svg')] bg-cover"></div>
          <div className="relative">
          <h1 className='md:text-[80px] text-[35px] font-bold raleway text-white'>About Us!</h1>
          <p className='w-auto md:w-[850px] font-medium text-[16px] text-gray-100 dm'> At IntechMeshboc, our mission goes beyond technological innovation. We&apos;re committed to using tech skills and startup development to create real solutions that uplift individuals, empower communities, and drive meaningful global impact.</p>
        </div>
        </div>
        <div className='flex justify-center items-center mt-[100px] gap-10 flex-wrap'>
            <div className='w-[600px] bg-purple-200 p-8'>
              <h3 className='text-primary text-[24px] raleway pb-4'>Fueling Innovation, Empowering Lives</h3>
              <p className='text-[16px] dm'>At IntechMeshboc, we do more than teach tech — we ignite transformation. By combining hands-on skill development with startup incubation, we empower individuals to create real-world solutions. Our mission is to build talent, launch innovations, and drive lasting impact in communities and industries alike.</p>
            </div>
            <div className='w-[600px] p-8'>
              <h3 className='text-primary text-[24px] raleway pb-4'>Shaping the Digital Generation</h3>
              <p className='text-[16px] dm'>We&apos;re passionate about solving real-world problems through smart, scalable tech solutions. From aspiring founders to growing enterprises, we empower individuals and teams to turn ideas into impactful ventures. With a focus on innovation, execution, and mentorship, IntechMeshboc is with you — from concept to launch and beyond.</p>
            </div>
        </div>
        {/* .... */}
        <div className='flex justify-around p-[20px] md:p-[80px] items-center flex-wrap'>
            <h2 className='text-[60px] text-primary raleway mb-3 leading-[70px]'>How It All <br/> Began</h2>
            <p className='w-[700px] text-[16px] dm'>IntechMeshboc was founded with a mission to bridge the gap between tech skills and real-world impact.
Rooted in innovation, empowerment, and community, we set out to equip individuals with the tools to solve today&apos;s challenges and build tomorrow&apos;s startups.
Today, we continue to grow — nurturing talent, launching ventures, and staying committed to transforming lives through technology.</p>
        </div>
        <div className='flex rounded-2xl py-10 justify-center'>
        <Image className='w-[1250px]' src={'/dive.png'} width={1000} height={1000} alt='' />
        </div>
        {/* ... */}
        <div className='flex justify-center items-center flex-wrap'>
          <div className='relative w-auto md:w-[1000px] h-auto md:h-[700px] overflow-hidden bg-primary shadow text-white'>
  {/* Background Grid */}
  <div className="absolute inset-0 opacity-30 group-hover transition-opacity duration-300 pointer-events-none z-0 bg-[url('/grid.svg')] bg-cover"></div>

  {/* Centered Content */}
  <div className="relative z-10 flex items-center justify-center h-full px-8 text-left">
    <p className='w-auuto md:max-w-[700px] font-medium text-[18px] md:text-[25px] text-white raleway'>
     At IntechMeshboc, we empower minds through tech. We turn learners into creators, and creators into founders. This is where skills meet innovation — and startups begin.
      
          <p className='pt-[16px]'>Femi Michael - Tech Lead & Founder</p>
    </p>
  </div>
</div>

        <div>
          <Image className='w-auto md:w-[689px] h-auto md:h-[700px]' src={'/mich.jpeg'} width={1000} height={1000} alt='' />
        </div>
        </div>
       
       <div className='flex justify-around items-start p-[20px] mt-[80px] flex-wrap'>
        <div className='w-[500px]'>
          <h3 className='text-[65px] raleway text-primary leading-[75px]'>What we <br/> stand for</h3>
          <p className='text-[15px] dm'>Our mission is bold and future-driven. At IntechMeshboc, we strive to break barriers and evolve into a leading force in technology — shaping innovation, empowering talent, and leaving a lasting impact across the tech landscape.</p>
        </div>
        <div className='w-[500px]'>
          {values.map((item, index)=>(
            <div key={index}>
              <div className='flex gap-3 items-center py-4'>
                <div className='text-primary text-[30px]'><IoRocketSharp/></div>
                <div className='text-primary text-[20px] raleway'>{item.title}</div>
              </div>
              <div className='dm'>{item.content}</div>
            </div>
          ))}
        </div>
       </div>

       {/* ...... */}
       <div className='bg-primary h-[500px] mt-[50px] w-[100%] text-center flex justify-center items-center flex-col'>
          <h3 className='text-white text-[32px] raleway'>Got a vision? Let&apos;s bring it to life!</h3>
          <p className='text-gray-50 text-[15px] py-2 dm'>Partner with us to turn ideas into impactful solutions.</p>
         <Link href={"/contact"}> <button className='bg-secondary w-[320px] text-primary text-[20px] raleway h-[70px]'>Send us a Message</button></Link>
       </div>
        {/* <h1 className='text-center text-[70px] py-10 raleway'>Values</h1>
        <div className='flex poppins justify-center gap-20 items-center flex-wrap'>
          <div className='flex justify-center text-center flex-col items-center'>
          <Image className='bg-secondary p-10 rounded-full' src={'/about (1).gif'} width={150} height={150} alt='img' />
          <p className='w-[120px] text-[20px]'>Accessibility</p>
          </div>
          <div className='flex justify-center text-center flex-col items-center'>
          <Image className='bg-blue-300 p-10 rounded-full' src={'/about (4).gif'} width={150} height={150} alt='img' />
          <p className='w-[120px] text-[20px]'>Practical</p>
          </div>
          <div className='flex justify-center text-center flex-col items-center'>
          <Image className='bg-red-200 p-10 rounded-full' src={'/about (3).gif'} width={150} height={150} alt='img' />
            <p className='w-[120px] text-[20px]'>Collaboration</p>
          </div>
          <div className='flex justify-center text-center flex-col items-center'>
          <Image className='bg-purple-400 p-10 rounded-full' src={'/about (2).gif'} width={150} height={150} alt='img' />
            <p className='w-[120px] text-[20px]'>Innovation</p>
          </div>
        </div> */}
    </div>
  )
}

export default Page