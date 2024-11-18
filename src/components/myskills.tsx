import Footer from '@/components/footer'
import React from 'react'


const Skills = () => {
  return (

<>
<main className='max-w-screen-2xl mx-auto lg:h-[35rem] md:h-[40rem] h-[30rem] bg-white  w-full  overflow-x-hidden '>
  
  <div className='lg:pt-10 md:pt-20 sm:pt-[40px] pt-[30px]'>
    <h3 className='flex justify-center text-3xl sm:text-4xl lg:text-3xl font-extrabold text-gray-900'>
      My <span className='text-blue-900 pl-4'>Skills</span>
    </h3>
    <p className='pt-8 text-black font-medium flex justify-center mx-4 lg:mx-[14rem] text-[16px] sm:text-[17px]'>
      I am a full stack developer skilled in Next.js, TypeScript, and Tailwind CSS. I build dynamic, 
      <br /> responsive web apps with clean, efficient code, focusing on seamless user experiences.
    </p>
  </div>



  <div className="flex flex-wrap lg:mt-16 md:mt-20 sm:mt-15 mt-6 mx-4 items-center justify-evenly gap-6">
  {['75%', '85%', '80%', '85%'].map((percentage, index) => (
    <div
      key={index}
      className="animate-spin-slow xl:h-[14rem] xl:w-[14rem] lg:h-[12rem] sm:h-[9rem] lg:w-[12rem] sm:w-[9rem] md:h-[10rem] md:w-[10rem] h-[6rem] w-[6rem] rounded-full border-gray-950 lg:border-[1rem] sm:border-[0.7rem] border-[0.5rem] border-l-blue-900 flex justify-center items-center font-extrabold text-3xl text-gray-800 shadow-lg"
    >
      {percentage}
    </div>
  ))}
</div>
<div className="flex flex-wrap mx-8 items-center justify-evenly lg:font-bold font-semibold md:text-2xl mt-4 gap-4">
  <div className="flex-1 text-center transition-transform duration-300 hover:scale-110">
    <span className="text-blue-900">✔</span> Next.js
  </div>
  <div className="flex-1 text-center transition-transform duration-300 hover:scale-110">
    <span className="text-blue-900">✔</span> Tailwind CSS / CSS
  </div>
  <div className="flex-1 text-center transition-transform duration-300 hover:scale-110">
    <span className="text-blue-900">✔</span> TypeScript
  </div>
  <div className="flex-1 text-center transition-transform duration-300 hover:scale-110">
    <span className="text-blue-900">✔</span> HTML / JavaScript
  </div>
</div>


</main>
<Footer/>
    </>
  )
}

export default Skills