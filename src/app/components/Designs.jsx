import React from 'react';

const services = [
  {
    title: "User Research and Usability",
    content:
      "Complete software solutions from concept to deployment for tailored and efficient products",
  },
  {
    title: "User Interface Design",
    content:
      "Maximizing online presence and Developing dynamic web applications that offer engaging user experiences across devices.",
  },
  {
    title: "User Experience Design",
    content:
      "Crafting innovative mobile applications that cater to diverse platforms, enhancing user engagement and accessibility.",
  },
  {
    title: "Concept Strategy and Design Sprint",
    content:
      "Complete software solutions from concept to deployment for tailored and efficient products",
  },
  {
    title: "Digital Prototyping",
    content:
      "Complete software solutions from concept to deployment for tailored and efficient products",
  },
  {
    title: "Data Visualization",
    content:
      "Complete software solutions from concept to deployment for tailored and efficient products",
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
