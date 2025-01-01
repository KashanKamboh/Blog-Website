import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaLinkedin, FaInstagram, FaFacebookSquare, FaTwitter, } from "react-icons/fa";

import Image from "next/image";
import Link from "next/link";

export default function About(){
    return(
        <div >
            <Header/>
            <div className="max-w-5xl mx-auto bg-gray-100 p-10 rounded font-sans mt-15">
        <div>
         
          <div className='flex justify-center items-center'>
          <Image src={"/images/hero.png"} alt={"profile pic"} width={200} height={200}  className="  rounded-full " />
          </div>
          <h2 className="text-gray-800 text-3xl font-bold mb-4 ">About Us</h2>
          <p className="text-gray-800 text-2x1 font-normal mb-4 ">Welcome to Travel and Adventure Pakistan, your ultimate guide to exploring the beauty and adventure of Pakistan!</p>

          <h2 className="text-gray-800 text-3xl font-bold mb-4 ">About Kashaf Tariq – Founder</h2>
          <p className="text-gray-800 leading-relaxed text-3x1 mt-6">
          Hi, I’m Kashaf Tariq, the founder of Travel and Adventure Pakistan. I’m a front-end developer and a student at GIAIC.
           Passionate about both technology and travel, I created this blog to share my love for Pakistan’s stunning landscapes,
            rich culture, and thrilling adventures. My goal is to inspire fellow travelers to explore the hidden gems of Pakistan and experience its true beauty
          </p>

          <h2 className="text-gray-800 text-3xl font-bold mb-4 mt-6 ">What We Do</h2>
          <div className="text-gray-800 leading-relaxed text-3x1 mt-6">
          <li>Travel Guides: In-depth travel tips for Pakistan’s top destinations.</li>
          <li>Adventure: Guides for trekking, hiking, and outdoor adventures in Pakistan’s mountains.</li>
          <li> Cultural Insights: Discover the rich history and culture of Pakistan.</li>
          <li> Photography: Stunning visuals showcasing Pakistan’s landscapes and people.</li>
          <li>Travel Tips: Practical advice on how to travel safely and make the most of your trip.</li>
          </div>

          <h2 className="text-gray-800 text-3xl font-bold mb-4 mt-6 ">Join the Journey</h2>
          <p className="text-gray-800 leading-relaxed text-3x1 mt-6">Follow along as we explore the wonders of Pakistan, and let us inspire your next adventure!</p>

          <h2 className="text-gray-800 text-2xl font-bold mb-4 mt-4 ">Contact with Us:</h2>
          <li> Email: kashaftariq8768@gamil.com</li>
          <li>Instagram: @TravelAndAdventurePakistan</li>
          <li>Facebook: Travel and Adventure Pakistan</li>
          
        
      </div>
      <div className='flex gap-4 mt-6'>
            <Link href={'https://www.linkedin.com/in/kashaf-tariq-1400072b6/'}><FaLinkedin size={20} /></Link>
            <Link href={'/'}><FaFacebookSquare size={20} /></Link>
            <Link href={'/'}><FaInstagram size={20} /></Link>
            
            <Link href={'/'}><FaTwitter size={20} /></Link>
           
          </div>
          </div>
      <Footer/>
        </div>
    )
}