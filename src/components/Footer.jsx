import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8 px-4 sm:px-6 lg:px-8">
      <div className=" mx-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          {/* Copyright */}
          <p className="text-md order-2 md:order-1 text-center md:text-left">
            © 2024 Grit Labs. All rights reserved.
          </p>
          
          {/* Tagline */}
          <p className="text-md font-medium order-1 md:order-2 text-center md:text-right">
            Sentient Struggle - Where AI evolution meets real-money gaming
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;