"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
// import AdPlans from '../_components/AdPlans';
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

          if (resp?.createUserCourseRequest?.name === "One Page Sales/Contact") {
            toast("You have successfully Enrolled", {
              description: "Happy Learning!",
            });
            router.push('/onepage');
          } else if(resp?.createUserCourseRequest?.name === "6 Pages Standard") {

            toast("You have successfully Enrolled", {
              description: "Happy Learning!",
            });

            router.push('/sixpage');
          } else if(resp?.createUserCourseRequest?.name === "Extendable") {
            toast("You have Enrolled", {
              description: "Happy Learning!",
            });

            router.push('/extendable');
          }
        }).catch(error => {
          toast.error("Enrollment failed. Please try again later.");
          console.error("Enrollment error:", error);
        });
        
      };
  return (
    <div className='pt-40 web_page bg-primary pb-20 text-center'>
        <h2 className='text-slate-400'>Cheapest Way to get your business online.</h2>
        <h1 className='text-secondary text-[50px] font-extrabold'>Over 50% OFF</h1>
        <p className='text-slate-400'>On All Responsive Website and UI designs</p>
        <p className='text-slate-400'>Mobile + Desktop + Tablet</p>
        <div className='flex justify-center items-center'>
            <Image src='/pngegg.png' width={500} height={500}/>
        </div>
        {/* <AdPlans/> */}
        <div className='grid md:grid-cols-4 grid-cols-1 place-items-center justify-center items-center'>
            <div className='border mt-10 w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-secondary h-[480px] shadow-md rounded-br-3xl rounded-tl-3xl'>
            <p className='text-[15px] text-slate-300 text-left'>Complete JavaScript Course</p>
                <div className=''>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>N40,000</h4>
                <p className='text-left'>Duration: 2 Months</p>
                </div>
                <div className='mt'>
                  {
                    user&&isLoaded ?
                    <Button variant="outline" className="text-slate-300 w-[100%] mt-5 h-[50px] text-[20px] border-secondary hover:bg-secondary" onClick={() => createUserCourse('One Page Sales/Contact')} >Get Started</Button>
                    :
                    <Link href={"/sign-up"}> <Button variant="outline" className="text-slate-300  w-[100%] mt-5 h-[50px] text-[20px]  border-secondary hover:bg-secondary">Get Started</Button> </Link>  
                  }
               
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Host Plan</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Domain</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Managed by ScuttleAds</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Shared Hosting</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> SEO</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Customer Support</li>
                </ul>
                </div>
            </div>
            <div className='border mt-10 w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-secondary h-[480px] shadow-md rounded-br-3xl rounded-tl-3xl'>
            <p className='text-slate-300 text-[15px] text-left'>Front End Development</p>
                <div className=''>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>N100,000</h4>
                <p className='text-left'>Duration: 4 Months</p>
                </div>
                <div className='mt'>
                  {
                    user&&isLoaded? 
                    <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-400" onClick={() => createUserCourse('6 Pages Standard')}>Get Started</Button>
                    :
                    <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-teal-400">Get Started</Button> </Link>  
                  }
               
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                <li className='flex items-center gap-2'><FaCheckCircle />1 Year Host Plan</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Domain</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Dashboard</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Hosting</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 4 Subdomains</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 10 Business mail</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />SEO</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Manage by ScuttleAds/Owner</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> More Customer Support</li>
                </ul>
                </div>
            </div>
            <div className='border mt-10 w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-secondary h-[480px] shadow-md rounded-br-3xl rounded-tl-3xl'>
            <p className='text-slate-300 text-[15px] text-left'>Backend Development</p>
                <div className=''>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>#120,000</h4>
                <p className='text-left'>Duration: 4 Months</p>
                </div>
                <div className='mt'>
                  {
                    user&&isLoaded?
                    <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-400" onClick={() => createUserCourse('Extendable')}>Get Started</Button>
                    :
                    <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-400">Get Started</Button> </Link> 
                  }
               
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                <li className='flex items-center gap-2'><FaCheckCircle />1 Year Host Plan</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Domain</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Dashboard</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Hosting</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 5 Subdomains</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 10 Business mail</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />SEO</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Manage by ScuttleAds/Owner</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Piority Customer Support</li>
                </ul>
                </div>
            </div>
            <div className='border mt-10 w-[300px] p-4 bg-inherit  my-1 hover:shadow-xl border-secondary h-[480px] shadow-md rounded-br-3xl rounded-tl-3xl'>
            <p className='text-slate-300 text-[15px] text-left'>Full Stack Development</p>
                <div className=''>
                <h4 className='text-left text-slate-300 text-[48px] font-extrabold'>#200,000</h4>
               <p className='text-left'>Duration: 6 Months</p>
                </div>
                <div className='mt'>
                  {
                    user&&isLoaded?
                    <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-400" onClick={() => createUserCourse('Extendable')}>Get Started</Button>
                    :
                    <Link href={"/sign-up"}> <Button variant="outline" className="text-black border-none w-[100%] mt-5 h-[50px] text-[20px] bg-green-400">Get Started</Button> </Link> 
                  }
               
                </div>
                <div className=' pt-4 text-slate-300 text-[15px] text-left'>
                <ul>
                <li className='flex items-center gap-2'><FaCheckCircle />1 Year Host Plan</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />1 Year Domain</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Dashboard</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> WP Hosting</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 5 Subdomains</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> 10 Business mail</li>
                    <li className='flex items-center gap-2'><FaCheckCircle />SEO</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Manage by ScuttleAds/Owner</li>
                    <li className='flex items-center gap-2'><FaCheckCircle /> Piority Customer Support</li>
                </ul>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Page