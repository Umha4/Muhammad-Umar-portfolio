'use client'
import React from 'react';
import { BsArrowUpRightCircle } from "react-icons/bs";
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/footer';

const Projects = () => {
  return (
    <>
      <main className='max-w-screen-2xl mx-auto bg-white  overflow-x-hidden '>
        <div className=''>
          <h1 className='justify-center gap-3 flex font-extrabold text-3xl font-sans text-black pt-12'>
            My Awesome <span className='text-blue-900'> Projects</span>
          </h1>
          <p className='text-black font-medium lg:font-semibold text-serif text-center lg:mx-[13rem] md:mx-[8rem] sm:mx-[6rem] mx-[4rem] mt-6'>
            I build modern, responsive websites with Next.js, TypeScript, and Tailwind CSS, delivering clean code and seamless user experiences.
          </p>
        </div>

        {/* Project Cards */}
        <div>
  {/* Common Styles */}
  <style jsx>{`
    .card-gradient {
      background:#1e3a8a;
    }
    .card-title {
      color: #ffffff; /* Tailwind's white */
    }
    .card-text {
      color: #ffffff; /* Tailwind's white */
    }
  `}</style>

  {/* Card 1 */}
  <div className="o1 mt-8 lg:mx-[10rem] rounded-lg card-gradient h-[150px] flex items-center shadow-lg">
    <div className="ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-white text-3xl md:text-5xl font-bold">01</div>
    <div className="ml-3 md:ml-10">
      <Image
        className="h-[130px] w-[380px] md:w-[300px] rounded-md"
        height={500}
        width={500}
        src="/project1.png"
        alt="Image"
      />
    </div>
    <div className="md:ml-14 ml-4">
      <h3 className="font-bold text-[16px] md:text-[20px] lg:text-[25px] card-title">Coffee Website</h3>
      <p className="font-medium text-[14px] sm:text-[16px] card-text">
        Built with Next.js and Tailwind CSS, our Coffee site offers a fast, responsive, and seamless experience.
      </p>
    </div>
    <div className="text-white text-4xl font-extrabold md:mr-8 hover:text-gray-300 mr-3">
      <Link href="https://coffee-website-five-pink.vercel.app/" target="_blank" rel="noopener noreferrer">
        <BsArrowUpRightCircle />
      </Link>
    </div>
  </div>

  {/* Card 2 */}
  <div className="o1 mt-8 lg:mx-[10rem] rounded-lg card-gradient h-[150px] flex items-center shadow-lg">
    <div className="ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-white text-3xl md:text-5xl font-bold">02</div>
    <div className="ml-3 md:ml-10">
      <Image
        className="h-[130px] w-[380px] md:w-[300px] rounded-md"
        height={500}
        width={500}
        src="/project2.png"
        alt="Image"
      />
    </div>
    <div className="md:ml-14 ml-4">
      <h3 className="font-bold text-[16px] md:text-[20px] lg:text-[25px] card-title">Pizza Website</h3>
      <p className="font-medium text-[14px] sm:text-[16px] card-text">
        Built with Next.js and Tailwind CSS, our Pizza website showcases creativity and responsiveness.
      </p>
    </div>
    <div className="text-white text-4xl font-extrabold md:mr-8 hover:text-gray-300 mr-3">
      <Link href="https://portfolio-web.vercel.app/" target="_blank" rel="noopener noreferrer">
        <BsArrowUpRightCircle />
      </Link>
    </div>
  </div>

  {/* Card 3 */}
  <div className="o1 mt-8 lg:mx-[10rem] rounded-lg card-gradient h-[150px] flex items-center shadow-lg">
    <div className="ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-white text-3xl md:text-5xl font-bold">03</div>
    <div className="ml-3 md:ml-10">
      <Image
        className="h-[130px] w-[380px] md:w-[300px] rounded-md"
        height={500}
        width={500}
        src="/project3.png"
        alt="Image"
      />
    </div>
    <div className="md:ml-14 ml-4">
      <h3 className="font-bold text-[16px] md:text-[20px] lg:text-[25px] card-title">Honey Website</h3>
      <p className="font-medium text-[14px] sm:text-[16px] card-text">
        Built with Next.js and Tailwind CSS, our Honey  platform offers a smooth shopping experience.
      </p>
    </div>
    <div className="text-white text-4xl font-extrabold md:mr-8 hover:text-gray-300 mr-3">
      <Link href="https://ecommerce-shopping-web.vercel.app/" target="_blank" rel="noopener noreferrer">
        <BsArrowUpRightCircle />
      </Link>
    </div>
  </div>

  {/* Card 4 */}
  <div className="o1 mt-8 lg:mx-[10rem] rounded-lg card-gradient h-[150px] flex items-center shadow-lg">
    <div className="ml-4 md:ml-7 h-[80px] flex items-center flex-1 text-white text-3xl md:text-5xl font-bold">04</div>
    <div className="ml-3 md:ml-10">
      <Image
        className="h-[130px] w-[380px] md:w-[300px] rounded-md"
        height={500}
        width={500}
        src="/project4.png"
        alt="Image"
      />
    </div>
    <div className="md:ml-14 ml-4">
      <h3 className="font-bold text-[16px] md:text-[20px] lg:text-[25px] card-title">Resume builder</h3>
      <p className="font-medium text-[14px] sm:text-[16px] card-text">
        Created with Next.js and Tailwind CSS, this  platform provides a dynamic user experience.
      </p>
    </div>
    <div className="text-white text-4xl font-extrabold md:mr-8 hover:text-gray-300 mr-3">
      <Link href="https://blogging-platform.vercel.app/" target="_blank" rel="noopener noreferrer">
        <BsArrowUpRightCircle />
      </Link>
    </div>
  </div>
</div>

      </main>
      <div className='bg-white h-[100px] md:h-[150px] w-full max-w-screen-2xl mx-auto'></div>
      <Footer />
    </>
  );
};

export default Projects;
