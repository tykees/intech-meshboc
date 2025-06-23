"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies";
import Subscribe from "./components/Subscribe";
import Project from "./components/Project";
import Cohort from "./components/Cohort";
import Bout from "./components/Bout";
import Products from "./components/Products";
import Designs from "./components/Designs";


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
     <Cohort/>
     <Companies/>
     <Project/>
     <Bout/>
     <Products/>
     <Designs/>
     <Subscribe/>
    </div>
  );
}
