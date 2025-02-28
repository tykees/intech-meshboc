import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container md:w-[700px] w-[500px] container mx-auto my-10 py-10">
        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div className='py-8 px-8'>
          <Image src={"/emma.png"} width={200}  height={200} alt='image' />
          <p className='w-[150px] text-center text-[16px] font-medium mt-2'>Emmanuel Raji</p>
          <p className='text-center text-[12px]'>Full Stack Developer</p>
          </div>
          <p className='pr-10 text-[15px] italic'>Intech Meshboc provided a well-rounded experience in full stack development. The hands-on projects helped me understand how front-end and back-end work together, and the mentors were always available to guide me. I now feel confident building complete web applications from scratch!</p>
        </div>

        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div className='py-8 px-8'>
          <Image  src={"/michael.png"} width={200}  height={200} alt='image' />
          <p className='w-[150px] text-center text-[16px] font-medium mt-2'>Michael Oche</p>
          <p className='text-center text-[12px]'>Backend Developer</p>
          </div>
          <p className='pr-10 text-[15px] italic'>As someone focused on backend development, I appreciated how Intech Meshboc deep-dived into server-side logic, databases, and API integrations. The training on Node.js and database management was practical and industry-relevant. I now understand how to build scalable and secure systems!</p>
        </div>
        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div className='py-8 px-8'>
          <Image src={"/yinka.png"} width={200}  height={200} alt='image' />
          <p className='w-[150px] text-center text-[16px] font-medium mt-2'>Olayinka Aderonke</p>
          <p className='text-center text-[12px]'>Front-end Developer</p>
          </div>
          <p className='pr-10 text-[15px] italic'>The frontend development training at Intech Meshboc was fantastic! I learned React, Tailwind CSS, and best UI/UX practices, which helped me create modern and responsive websites. The hands-on projects and real-world scenarios made the learning experience even more engaging.</p>
        </div>
      </div>
    </div>
  )
}
