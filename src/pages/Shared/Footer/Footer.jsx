import React from 'react';
import brandLogo from '../../../assets/images/logo/logo-default.png';

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white">
      <div className="container mx-auto py-8 pl-5">
        <div className="flex flex-wrap">
          <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4 sm:mb-0">
            <h4 className="text-lg font-bold">Future Force Cricket Academy</h4>
            <img src={brandLogo} className='rounded-2xl' alt="" />
            <p className="mt-2 text-sm">
              Train with the best, become the best!
            </p>
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