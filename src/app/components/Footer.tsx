

import Link from 'next/link';
import React from 'react';
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, FaPinterest } from "react-icons/fa";
import { IoLogoSkype } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <div className='px-6 md:px-12 py-8 bg-green-900 mt-8'>
        <div className="flex flex-wrap gap-12 md:gap-[100px] lg:gap-[100px]">
          {/* Menu Section */}
          

          {/* Mailing List Section */}
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Travel and Adventure Pakistan</h1>
            <div className='mt-4'>
            <p className='w-[300px]'>Our mission is to showcase Pakistan's breathtaking destinations, rich culture, and thrilling adventures. We aim to inspire travelers to explore Pakistan's true beauty and hospitality.</p>
            </div>
          </div>
          <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Challenges and Learning Process</h1>
            <div className='mt-4'>
            <p className='w-[300px]'>Our mission is to showcase Pakistan's breathtaking destinations, rich culture, and thrilling adventures. We aim to inspire travelers to explore Pakistan's true beauty and hospitality.</p>
            </div>
          </div>
           {/* Mailing List Section */}
           <div className="text-white w-full sm:w-auto">
            <h1 className="text-lg md:text-xl font-bold">Enter Your Email here</h1>
            <div className='mt-4'>
              <input
                type="text"
                placeholder="your@email.com"
                className='w-full sm:w-[250px] lg:w-[300px] h-[48px] p-2 bg-transparent opacity-35 border border-white rounded-md'
              />
              <button className='mt-2 sm:mt-0 sm:ml-2 w-full sm:w-[100px] h-[48px] bg-white text-[#2A254B] rounded-md'>
                <Link href="/signIn">
                Submit
                </Link>
              </button>
            </div>
          </div>
        </div>

        <hr className='bg-[#4E4D93] my-8' />

        {/* Footer Bottom Section */}
        <div className='flex flex-wrap justify-between items-center text-white gap-4'>
          <div>
            <h1>Copyright 2024 Travel and Adventure Pakistan. All Rights Reserved.</h1>
          </div>
          <div className='flex gap-4'>
            <Link href={'https://www.linkedin.com/in/kashaf-tariq-1400072b6/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            <Link href={'/'}><IoLogoSkype size={20} /></Link>
            <Link href={'/'}><FaTwitter size={20} /></Link>
            <Link href={'/'}><FaPinterest size={20} /></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;