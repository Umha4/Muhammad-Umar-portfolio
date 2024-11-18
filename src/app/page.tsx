"use client";
import React from "react";
import { FaFacebookSquare, FaLinkedin, FaGithubSquare, FaTwitterSquare } from "react-icons/fa";
import Link from "next/link";
import AfterHero from "@/components/afterhero";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import AboutMe from "@/components/aboutus";
import Skills from "@/components/myskills";

const Home = () => (
  <>
    <main className="max-w-screen-2xl mx-auto font-sans bg-white h-auto w-full  overflow-x-hidden ">
      <div className="flex w-full h-auto py-16 px-4 lg:px-16">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
          <p className="text-gray-900 text-2xl md:text-4xl font-bold">
            Hello, I am
          </p>
          <h1 className="text-blue-900 text-3xl md:text-5xl font-bold">
            <Typewriter
              options={{
                strings: ["Muhammad Umar", "Front-end Developer " , "Back-end  Developer"],
                autoStart: true,
                loop: true,
                delay: 80,
              }}
            />
          </h1>
          <p className="text-gray-800 font-medium text-lg md:text-xl">
            I am a full stack developer skilled in Next.js, TypeScript, and Tailwind CSS, crafting seamless web experiences from design to deployment.
          </p>

          {/* Download CV Button */}
          <Link href="/mycv-png.pdf" target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-900 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition duration-200 hover:scale-105">
              DOWNLOAD CV
            </button>
          </Link>

          {/* Social Media Icons */}
          <div className="flex gap-4 justify-center pt-6 text-3xl text-gray-800">
            <Link href="/" target="_blank">
              <FaFacebookSquare className="hover:text-blue-600 transition duration-150" />
            </Link>
            <Link href="/" target="_blank">
              <FaTwitterSquare className="hover:text-blue-400 transition duration-150" />
            </Link>
            <Link href="https://www.linkedin.com/in/muhammad-umar-b70207338/?trk=opento_sprofile_topcard" target="_blank">
              <FaLinkedin className="hover:text-blue-700 transition duration-150" />
            </Link>
            <Link href="https://github.com/Umha4" target="_blank">
              <FaGithubSquare className="hover:text-gray-600 transition duration-150" />
            </Link>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            className="rounded-full shadow-2xl border-4 border-white"
            height={400}
            width={400}
            src="/hero2.png"
            alt="profile picture"
          />
        </div>
      </div>
      
      {/* Additional Sections */}
      <AfterHero />
      <AboutMe />
      {/* <Services /> */}
      <Skills />
    </main>
  </>
);

export default Home;
