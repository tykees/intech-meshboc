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
    <div className="md:px-8 px-8">
      <div className="pt-20">
        <div className="flex justify-around items-start py-10 bg-trans rounded-2xl h-[600px] shadow">
          <div>
            <p className="text-[80px] mt-12 text-start text-white leading-none font-bold">
              Subscribe for fresh <br />
              <span className="md:text-[80px] text-[40px] font-bold">
                content and updates
              </span>
            </p>
            <p className="w-[500px] text-start pt-5 block mt-5 text-white">
              We offer services that navigate your business to the next phase of sales and create a stable online presence without breaking the bank. Your visibility is certain with us.
            </p>
            <div className="mt-10">
              <input
                className="w-[600px] h-[62px] rounded-full px-5 text-black border-2 border-gray-300 focus:border-secondary outline-none"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                variant="outline"
                className="text-black ml-[-150px] bg-secondary border-secondary w-[150px] h-[60px]"
                onClick={handleSubscribe}
              >
                Subscribe
              </Button>
            </div>
            {error && <p className="text-yellow-300 mt-2">{error}</p>}
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
