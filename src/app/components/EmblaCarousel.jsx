import React, { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container container mx-auto my-20 py-20">
        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 items-center shadow-lg">
          <div>
          <Image src={"/png1.png"} width={200}  height={200} alt='image' />
          <p>Name</p>
          <p>Role</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis?</p>
        </div>

        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 ml-60 items-center shadow-lg">
          <div>
          <Image src={"/png1.png"} width={200}  height={200} alt='image' />
          <p>Name</p>
          <p>Role</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis?</p>
        </div>


        <div className="embla__slide flex justify-center rounded-xl border-slate-200 border-2 ml-60 items-center shadow-lg">
          <div>
          <Image src={"/png1.png"} width={200}  height={200} alt='image' />
          <p>Name</p>
          <p>Role</p>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nobis?</p>
        </div>
      </div>
    </div>
  )
}
