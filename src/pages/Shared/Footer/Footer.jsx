import React from 'react';
import useTheme from '../../../hooks/useTheme';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer className={`${isDarkMode ? "bg-black" : "bg-gray-500"} text-white`}>
      <div className="container mx-auto py-8 pl-5">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
            <h4 className="text-lg font-bold">Future Force Cricket Academy</h4>
            <p className="mt-2 text-sm">Follow Us On</p>
            <div>
              <div className="flex gap-4 mt-4">
                <div className="text-2xl hover:text-[#04AA6D]">
                  <FaFacebookF></FaFacebookF>
                </div>
                <div className="text-2xl hover:text-[#04AA6D]">
                  <FaTwitter></FaTwitter>
                </div>
                <div className="text-2xl hover:text-[#04AA6D]">
                  <FaInstagram></FaInstagram>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
            <h4 className="text-lg font-bold">Contact</h4>
            <p className="mt-2 text-sm">Email: contact@example.com</p>
            <p className="mt-1 text-sm">Phone: 123-456-7890</p>
          </div>
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
            <h4 className="text-lg font-bold">Address</h4>
            <p className="mt-2 text-sm">123 Street Name</p>
            <p className="mt-1 text-sm">City, State, Zip Code</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 text-center py-4">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Website. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;