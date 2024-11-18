import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareInstagram, FaSquareXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-slate-300  overflow-x-hidden max-w-screen-2xl mx-auto">
      <div className="max-w-screen-2xl mx-auto py-4 px-5"> {/* Reduced top padding */}
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-2 items-center pt-3"> {/* Adjusted bottom margin */}
          <Link href="https://github.com/Umha4" legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <FaGithub size={22} /> {/* Slightly smaller icon */}
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-umar-b70207338/?trk=opento_sprofile_topcard" legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={22} />
            </a>
          </Link>
          <Link href="https://www.google.com" legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <FaFacebook size={22} />
            </a>
          </Link>
          <Link href="https://x.com" legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <FaSquareXTwitter size={22} />
            </a>
          </Link>
          <Link href="https://www.instagram.com/muhaammad_umar_2/?next=%2F" legacyBehavior>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full shadow-md transition-transform transform hover:scale-110"
            >
              <FaSquareInstagram size={22} />
            </a>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center space-x-6 mb-3 text-base"> {/* Smaller text */}
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div> {/* Reduced top/bottom margin */}

      {/* Footer Credits */}
      <div className="bg-gray-900 py-4 text-center text-sm  overflow-x-hidden max-w-screen-2xl mx-auto"> {/* Smaller padding */}
        <p>Crafted with passion and precision by Muhammad Umar.</p>
        <p>&copy; {new Date().getFullYear()} All Rights Reserved by Muhammad Umar</p>
      </div>
    </footer>
  );
};

export default Footer;
