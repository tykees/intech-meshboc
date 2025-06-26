"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";

function Subscribe() {
  const { user, isLoaded } = useUser();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async () => {
    setError(""); // Clear previous errors

    if (!email) {
      setError("Please enter an email.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    console.log("Subscribing with email:", email);
    const response = await GlobalApi.createSubMail(email);

    if (response) {
      console.log("API Response:", response);
      alert("Subscribed successfully!");
      setEmail(""); // Clear input after submission
    } else {
      setError("Subscription failed. Try again.");
    }
  };

  return (
    <div className="">
      <div className="pt-20">
        <div className="flex justify-around border border-primary items-start py-10 md:h-[600px] h-[100%] lg:flex-nowrap flex-wrap shadow">
          <div className="">
            <p className="md:text-[70px] text-[30px] mt-12 text-start text-black leading-none font-bold raleway">
              Subscribe for fresh <br />
              <span className="md:text-[70px] text-[30px] font-bold">
                content and updates
              </span>
            </p>
            <p className="md:w-[500px] w-[320px] text-start pt-5 block mt-5 text-gray-800 poppins">
            Stay updated with Intech Meshboc! Subscribe to get the latest tech training updates, career opportunities, and industry insights delivered straight to your inbox.
            </p>
            <div className="mt-10">
              <input
                className="md:w-[600px] w-[320px] h-[62px] rounded-full px-5 text-black border border-gray-800 focus:border-primary outline-none"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="outline"
                className="bg-black ml-[-150px] text-white w-[150px] h-[60px]"
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
            {error && <p className="text-yellow-800 mt-2">{error}</p>}
          </div>
          <div>
            <Image
              className="m-auto pt-[20px]"
              src="/prof3.png"
              width={550}
              height={550}
              alt="computer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
