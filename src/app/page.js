"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies";
import Courses from "./components/Courses";
import Instructor from "./components/Instructor";
import { EmblaCarousel } from "./components/EmblaCarousel";
import Subscribe from "./components/Subscribe";


export default function Home() {
  const router = useRouter();
  const {user, isLoaded} = useUser()
  useEffect(()=>{
    if(user) {
      router.push("/")
    } 
    else {
      isLoaded&&router.push("/")
    }
  },[user, isLoaded, router])

  return (
    <div>
     <UserButton afterSignOutUrl="/sign-in" />
     <Hero/>
     <Companies/>
     <Courses/>
     <Instructor/>
     <EmblaCarousel/>
     <Subscribe/>
    </div>
  );
}
