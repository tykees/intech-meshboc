import { SignUp } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return (
    <section className="bg-gray-900">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <section className="relative flex h-72 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
      <Image
        alt=""
        src="/signup.png"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
        width={500}
        height={500}
      />

      <div className="hidden lg:relative lg:block lg:p-12">
       

        <h2 className="mt-6 text-xl font-thin text-white sm:text-3xl md:text-3xl">
          Welcome to Intech Meshboc
        </h2>

        <p className="mt-4 leading-relaxed text-white/90">
        </p>
      </div>
    </section>

    <main
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <div className="relative -mt-16 block lg:hidden">
      

          <h1 className="mt-10 text-2xl font-thin text-slate-200 sm:text-3xl md:text-4xl">
          Welcome to Intech Meshboc 
          </h1>

          <p className="mt-4 leading-relaxed text-gray-500">
          </p>
        </div>

        <SignUp />
      </div>
    </main>
  </div>
</section>
  )
  
}
