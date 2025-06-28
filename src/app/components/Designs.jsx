import React from 'react';

const services = [
  {
    title: "User Research and Usability",
    content:
      "Gaining deep insight into user needs and behaviors to guide impactful product development.",
  },
  {
    title: "User Interface Design",
    content:
      "Design visually compelling interfaces that elevate user interaction and deliver seamless digital experiences.",
  },
  {
    title: "User Experience Design",
    content:
      "Designing smooth, intuitive interactions that connect users with digital products effortlessly.",
  },
  {
    title: "Concept Strategy and Design Sprint",
    content:
      "Establish a strong foundation for successful digital products through strategic concept development and focused design sprints.",
  },
  {
    title: "Digital Prototyping",
    content:
      "Bring ideas to life with interactive digital prototypes, enabling early exploration and validation of product features.",
  },
  {
    title: "Data Visualization",
    content:
      "Convert complex data into clear, visually engaging representations that enhance insight and communication.",
  },
];

function Designs() {
  return (
    <div className="py-10 px-4">
      <div className="text-center">
        <p className="text-[35px] raleway">Product Design</p>
        <p className="text-[14px] dm">
          Transforming Visions into Reality with the Power of Product Engineering
        </p>
      </div>
      <div className="mt-[30px]">
        <div className="grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="relative group overflow-hidden bg-purple-50 hover:bg-primary border-primary border transition-colors p-6 w-auto md:w-[430px] h-[200px] rounded-xl shadow text-black hover:text-white flex flex-col items-start justify-center text-start"
            >
              {/* Hover net design background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none z-0 bg-[url('/grid.svg')] bg-cover"></div>

              {/* Card Content */}
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

export default Designs;
