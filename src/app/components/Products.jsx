import React from 'react';

const services = [
    {
        title: "Full Cycle Software Development",
        content: "Complete software solutions from concept to deployment for tailored and efficient products"
    },
      {
        title: "Web Apps and PWA",
        content: "Maximizing online presence and Developing dynamic web applications that offer engaging user experiences across devices."
    },
      {
        title: "Mobile and Cross-Platform Apps",
        content: "Crafting innovative mobile applications that cater to diverse platforms, enhancing user engagement and accessibility."
    },
      {
        title: "Integrated Product, API and Data Platforms",
        content: "Complete software solutions from concept to deployment for tailored and efficient products"
    },
       {
        title: "Data Science and Analytics",
        content: "Complete software solutions from concept to deployment for tailored and efficient products"
    },
       {
        title: "Cloud and Dev Ops",
        content: "Complete software solutions from concept to deployment for tailored and efficient products"
    },
]


function Products() {
  return (
    <div className='py-10 px-4'>
        <div className='text-center'>
        <p className='text-[35px] raleway'>Product Engineering</p>
        <p className='text-[14px] dm'>Transforming Visions into Reality with the Power of Product Engineering</p>
        </div>
        <div className='mt-[30px]'>
            <div className='grid w-fit mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {services.map((item, index)=>(
                <div key={index} className='bg-purple-50 hover:bg-primary border-primary border transition-colors p-6 w-[280px] md:w-[400px] h-[200px] rounded-xl shadow text-black hover:text-white flex flex-col items-start justify-center text-start'>
                   <div className='mb-[20px] text-[20px] raleway'>{item.title}</div>
                   <div className='text-[14px] dm'>{item.content}</div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Products