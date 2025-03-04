import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll()])

  return (
    <>
    <h1 className='text-center text-[40px] raleway'>Reviews</h1>
    <div className="embla" ref={emblaRef}>
      <div className="embla__container w-[450px] container mx-auto py-5">
        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div className='flex flex-col justify-center items-center'>
          <div className='py-2 px-2'>
          <Image src={"/Emma.png"} width={120}  height={120} alt='image' />
          <p className='text-center text-[16px] font-bold mt-2 ubuntu'>Emmanuel Raji</p>
          <p className='text-center text-[12px]'>Full Stack Developer</p>
          </div>
          <p className='px-4 pb-2 text-[15px] text-justify raleway'>Intech Meshboc provided a well-rounded experience in full stack development. The hands-on projects helped me understand how front-end and back-end work together, and the mentors were always available to guide me. I now feel confident building complete web applications from scratch.</p>
          </div>
        </div>

        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
        <div className='flex flex-col justify-center items-center'>
          <div className='py-2 px-2'>
          <Image src={"/Michael.png"} width={120}  height={120} alt='image' />
          <p className='text-center text-[16px] font-bold mt-2 ubuntu'>Michael Uche</p>
          <p className='text-center text-[12px]'>Backend Developer</p>
          </div>
          <p className='px-4 pb-2 text-[15px] text-justify raleway'>As someone focused on backend development, I appreciated how Intech Meshboc deep-dived into server-side logic, databases, and API integrations. The training on Node.js and database management was practical and industry-relevant. I now understand how to build scalable and secure systems.</p>
          </div>
        </div>
        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
        <div className='flex flex-col justify-center items-center'>
          <div className='py-2 px-2'>
          <Image src={"/Yinka.png"} width={120}  height={120} alt='image' />
          <p className='text-center text-[16px] font-bold mt-2 ubuntu'>Olayinka Aderonke</p>
          <p className='text-center text-[12px]'>Frontend Developer</p>
          </div>
          <p className='px-4 pb-2 text-[15px] text-justify raleway'>The frontend development training at Intech Meshboc was fantastic! I learned React, Tailwind CSS, and best UI/UX practices, which helped me create modern and responsive websites. The hands-on projects and real-world scenarios made the learning experience even more engaging.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
