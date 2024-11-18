import Link from 'next/link';
import React from 'react';

const AboutMe = () => {
  return (
    <main className='bg-white  text-center  overflow-x-hidden max-w-screen-2xl mx-auto'>
      <div className='pt-20 pb-20'>
        <h2 className='font-bold text-3xl text-blue-900'>About Me</h2>
        <p className='text-black px-6 md:px-20 lg:px-60 pt-7 text-lg'>
          Hello! I am <span className='text-blue-900 font-semibold'> Muhammad Umar</span>, a passionate full stack web developer.
          I thrive on creating dynamic, responsive, and user-centric web applications, blending creativity with technical expertise.
          My journey in development has been fueled by a curiosity for continuous learning and a commitment to solving real-world
          problems through clean, efficient code.
        </p>
        <Link href='/about'>
          <button className=' rounded-3xl py-2 px-6 text-white font-bold  bg-blue-900 hover:bg-blue-700 mt-14 inline-block'>
            Explore More!
          </button>
        </Link>
      </div>
    </main>
  );
};

export default AboutMe;

