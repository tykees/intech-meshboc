import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import AutoScroll from 'embla-carousel-auto-scroll'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [AutoScroll()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container w-[700px] container mx-auto my-20 py-20">
        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div className='py-10 px-10'>
          <Image src={"/diva.png"} width={200}  height={200} alt='image' />
          <p className='text-center text-[16px] font-medium'>James Tope</p>
          <p className='text-center text-[12px]'>Front-end Developer</p>
          </div>
          <p className='pr-10 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure est iusto aut doloribus architecto, dolor eius. Voluptates earum expedita perspiciatis.</p>
        </div>

        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div className='py-10 px-10'>
          <Image src={"/diva.png"} width={200}  height={200} alt='image' />
          <p className='text-center text-[22px] font-medium'>James Tope</p>
          <p className='text-center text-[12px]'>Front-end Developer</p>
          </div>
          <p className='pr-10 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure est iusto aut doloribus architecto, dolor eius. Voluptates earum expedita perspiciatis.</p>
        </div>
        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div className='py-10 px-10'>
          <Image src={"/diva.png"} width={200}  height={200} alt='image' />
          <p className='text-center text-[22px] font-medium'>James Tope</p>
          <p className='text-center text-[12px]'>Front-end Developer</p>
          </div>
          <p className='pr-10 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure est iusto aut doloribus architecto, dolor eius. Voluptates earum expedita perspiciatis.</p>
        </div>
        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div className='py-10 px-10'>
          <Image src={"/diva.png"} width={200}  height={200} alt='image' />
          <p className='text-center text-[22px] font-medium'>James Tope</p>
          <p className='text-center text-[12px]'>Front-end Developer</p>
          </div>
          <p className='pr-10 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure est iusto aut doloribus architecto, dolor eius. Voluptates earum expedita perspiciatis.</p>
        </div>
        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div className='py-10 px-10'>
          <Image src={"/diva.png"} width={200}  height={200} alt='image' />
          <p className='text-center text-[22px] font-medium'>James Tope</p>
          <p className='text-center text-[12px]'>Front-end Developer</p>
          </div>
          <p className='pr-10 text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure est iusto aut doloribus architecto, dolor eius. Voluptates earum expedita perspiciatis.</p>
        </div>

      </div>
    </div>
  )
}
