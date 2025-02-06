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
            router.push('/confirm');
          }
        }).catch(error => {
          toast.error("Enrollment failed. Please try again later.");
          console.error("Enrollment error:", error);
        });
        
      };
  return (
    <div className='pt-10 web_page pb-20 bg-primary text-center'>
            <div className='bg-white cour-border'>
          <h2 className='font-bold text-seconary text-[80px]'>Learn from the Professional <br/> <span className=''>Dev</span></h2>
        <div className='flex justify-center items-center'>
          <p className='w-[200px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, ducimus?</p>
            <div className='bg-slate-200 rounded-t-full mb-0 w-[700px]'>
            <Image className='mt-[-60px] w-[800px]' src='/Michy.png' width={500} height={500}/>
            </div>
            <p className='w-[200px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, expedita.</p>
        </div>
        </div>

        {/* <p>Courses and Plans</p>
        <h2>If you need a more flexible plan, get in touch.</h2> */}
        <div className='bg-primary flex justify-around items-center'>
              <div className='w-[400px] text-left'>
                <h2 className='text-[40px] font-bold leading-10 text-white'>Download the Course Curriculum</h2>
                <p className='text-slate-300'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam natus sunt non omnis, nostrum id.</p>
              </div>
            <div className='border mt-10 w-[400px] p-4 bg-inherit  my-1 hover:shadow-xl border-secondary bg-secondary h-[300px] shadow-md rounded-2xl'>
            <p className='text-[25px] text-black text-left'>Full Stack <span className='font-bold'>Development</span> </p>
                <div className=''>
                <h4 className='text-left text-primary text-[48px] font-extrabold'>N100,000</h4>
                <p className='text-left'>Duration: 16 Weeks</p>
                </div>
                <div className='mt'>
                  {
                    user&&isLoaded ?
                    <Button variant="outline" className="text-primary w-[100%] mt-5 h-[50px] text-[20px] border-primary rounded-2xl hover:bg-secondary" onClick={() => createUserCourse('Full-Stack Development')} >Make Payment</Button>
                    :
                    <Link href={"/sign-up"}> <Button variant="outline" className="text-slate-300  w-[100%] mt-5 h-[50px] text-[20px] rounded-2xl  border-secondary hover:bg-secondary">Apply Now</Button> </Link>  
                  }
               
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                {/* <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Host Plan</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Domain</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Managed by ScuttleAds</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Shared Hosting</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> SEO</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Customer Support</li>
                </ul> */}
                </div>
            </div>  
       </div>
    </div>
  )
}

export default Page