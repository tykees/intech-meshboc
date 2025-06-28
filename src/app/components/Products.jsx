import React from 'react';

const services = [
  {
    title: "Full Cycle Software Development",
    content:
      "End-to-end software solutions, from concept to launch, tailored for efficiency and impact.",
  },
  {
    title: "Web Apps and PWA",
    content:
      "We craft dynamic web apps that elevate your online presence and engage users on every device.",
  },
  {
    title: "Mobile and Cross-Platform Apps",
    content:
      "Building mobile apps that engage users and perform seamlessly across all platforms.",
  },
  {
    title: "Integrated Product, API and Data Platforms",
    content:
      "Seamless products, APIs, and data systems designed to unify and optimize your tech ecosystem.",
  },
  {
    title: "Data Science and Analytics",
    content:
      "Turning raw data into actionable insights through Data Science to accelerate business growth.",
  },
  {
    title: "Cloud and Dev Ops",
    content:
      "Enhancing infrastructure with cloud and DevOps for secure, scalable, and efficient development.",
  },
];

function Products() {
  return (
    <div className="py-10 px-4">
      <div className="text-center">
        <p className="text-[35px] raleway">Product Engineering</p>
        <p className="text-[18px] dm">
         Turning Ideas into Impact through Product Engineering
        </p>
      </div>
      <div className="mt-[30px]">
        <div className="grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-purple-50 hover:bg-primary border-primary border transition-colors p-6 w-auto md:w-[430px] h-[200px] rounded-xl shadow text-black hover:text-white flex flex-col items-start justify-center text-start"
            >
              {/* Net grid background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none z-0 bg-[url('/grid.svg')] bg-cover"></div>

              {/* Content */}
              <div className="relative">
                <div className="mb-[20px] text-[20px] raleway">{item.title}</div>
                <div className="text-[14px] dm">{item.content}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
