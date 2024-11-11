import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-black text-slate-300">
      <div className="max-w-screen-2xl mx-auto py-10 px-5">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-8">
          <Link href="https://github.com/Umha4" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full">
              <FaGithub size={24} />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/umm-e-habiba-86bb722b6/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full">
              <FaLinkedin size={24} />
            </a>
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61561757791609" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full">
              <FaFacebook size={24} />
            </a>
          </Link>
          <Link href="https://x.com/UmmeHabiba1312" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full">
              <FaSquareXTwitter size={24} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/umm_e_habiba_official5/" legacyBehavior>
            <a target="_blank" rel="noopener noreferrer" className="p-4 bg-gray-800 hover:bg-gray-700 rounded-full">
              <FaSquareInstagram size={24} />
            </a>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-8 mb-10 text-lg">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="text-white hover:text-pink-500 transition-colors duration-200">
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Footer Credits */}
      <div className="bg-gray-900 py-5 text-center text-sm">
        <p>Crafted with passion and precision by Muhammad Umar.</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved by Muhammad Umar</p>
      </div>
    </footer>
  );
};

export default Footer;
