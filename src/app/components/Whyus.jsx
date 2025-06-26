import React from 'react';

const why = [
    {
        title: " Proven Technical Expertise",
        content: "Our team brings years of experience in software development, tech training, and digital solutions — combining industry knowledge with real-world execution."
    },
    {
        title: "Results-Driven Education",
        content: "We deliver hands-on tech education that equips learners with in-demand skills, preparing them for real jobs, freelance work, and startup opportunities."
    },

    {
        title: "Custom Software That Solves Real Problems",
        content: "From internal tools to customer-facing platforms, we design and develop software tailored to your specific goals — not just off-the-shelf templates."
    },
    {
        title: " Built for Startups, Schools & Enterprises",
        content: "Whether you’re launching a product or transforming your institution, we adapt our solutions to your size, budget, and vision."
    },
    {
        title: "Transparent Process & Honest Communication",
        content: "We believe in clarity, timely updates, and delivering on our promises. No jargon, no surprises — just great work, done right."
    },
    {
        title: "A Long-Term Partner You Can Count On",
        content: "We don't just complete projects — we build relationships. Our success is tied to yours, and we’re here to grow with you."
    }
]

function Whyus() {
  return (
    <div className="py-10 px-4" >
         <div className="text-center">
        <p className="text-[35px] raleway">Why Us</p>
        <p className="text-[14px] dm">
          Transforming Visions into Reality with the Power of Product Engineering
        </p>
        </div>
        <div className="grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {why.map((item, index)=>(
                <div key={index}  className="relative group overflow-hidden bg-gray-200 hover:bg-primary border-white border transition-colors p-6 w-auto md:w-[450px] h-[300px] text-black hover:text-white flex flex-col items-start justify-center gap-6 text-start" >
                    <div className="mb-[20px] text-[20px] raleway">{item.title}</div>
                    <div className="text-[14px] dm">{item.content}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Whyus