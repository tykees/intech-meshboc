"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { FaCheckCircle } from "react-icons/fa";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useUser } from '@clerk/nextjs';
import GlobalApi from '../_utils/GlobalApi';
import Link from 'next/link';


const Page = () => {
    const { user, isLoaded}  = useUser();
    const router = useRouter();
    console.log(user)
    
    const createUserCourse = (name) => {
        const email = user?.primaryEmailAddress?.emailAddress;
        console.log(email)
        GlobalApi.createCourse(email, name).then(resp => {
          console.log(resp);

          if (resp?.createCourse?.name === "Full-Stack Development") {
            toast("You have successfully Enrolled", {
              description: "Happy Learning!",
            });
            router.push('https://paystack.com/pay/1u-33d0yxi');
          }
        }).catch(error => {
          toast.error("Enrollment failed. Please try again later.");
          console.error("Enrollment error:", error);
        });
        
      };
  return (
    <div className='pt-10 web_page pb-20 bg-primary text-center'>
            <div className='bg-white cour-border'>
          <h2 className='font-bold leading-tight pt-10 md:text-[80px] text-[40px]'>Learn from the <span className='text-secondary'>Professional</span><br/><span className=''>Developers</span></h2>
        <div className='flex justify-center items-center'>
          <p className='w-[250px] text-left text-[0] md:text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ducimus?</p>
            <div className='md:bg-slate-100 rounded-t-full mb-0 w-[700px]'>
            <Image className='mt-[-100px] w-[600px]' src='/Michy2.png' width={500} height={500} alt='img'/>
            </div>
            <p className='w-[250px] text-right text-[0] md:text-[16px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, expedita.</p>
        </div>
        </div>

        {/* <p>Courses and Plans</p>
        <h2>If you need a more flexible plan, get in touch.</h2> */}
        <div className='bg-primary p-4 flex justify-around items-center flex-wrap'>
              <div className='w-[400px] text-left'>
                <h2 className='text-[40px] font-bold leading-10 text-white mt-3'>Download the Course Curriculum</h2>
                <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam natus sunt non omnis, nostrum id.</p>
                <div className='flex gap-3 mt-6'>
                  <Image src={"/arrow-up.gif"} width={50} height={50} alt='arrow' />
                  <p className='text-[35px] text-white font-bold'>90%<span className='font-thin'>|</span></p>
                  <p className='text-slate-200'>of our past students now work with Tech Companies.</p>
                </div>
                <Button className="border-secondary border w-[100%] rounded-2xl h-[50px] hover:bg-secondary hover:text-primary text-secondary mt-6 text-[20px]">Download Curriculum</Button>
              </div>
            <div className='border mt-6 w-[400px] p-4 bg-inherit  my-1 hover:shadow-xl border-secondary bg-white h-[350px] shadow-md rounded-2xl'>
            <Image className='' src={"/full2.gif"} width={100} height={100} alt='arrow' />
            <p className='text-[25px] text-black text-left'>Full Stack <span className='font-bold'>Development</span> </p>
                <div className=''>
                <h4 className='text-left text-[48px] font-extrabold'>N100,000</h4>
                <p className='text-left'>Duration: 16 Weeks</p>
                </div>
                <div className='mt'>
                  {
                    user&&isLoaded ?
                    <Button variant="outline" className="text-black w-[100%] mt-5 h-[50px] text-[20px] border-black rounded-2xl hover:bg-secondary" onClick={() => createUserCourse('Full-Stack Development')} >Make Payment</Button>
                    :
                    <Link href={"/sign-up"}> <Button variant="outline" className="text-black w-[100%] mt-5 h-[50px] text-[20px] bg-secondary border-none rounded-2xl shadow hover:bg-primary hover:text-white">Apply Now</Button> </Link>  
                  }
               
                </div>
            </div>  
       </div>
    </div>
  )
}

export default Page