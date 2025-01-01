"use client"
import Link from 'next/link';
import { Articles } from '../components/Articles';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
    <div className='bg-gray-50'>
      <Header/>
      <h1 className='flex justify-center text-center py-7 text-4xl font-bold text-black'>Top Destinations to Visit</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-4 p-6 shadow-lg">
      {Articles.map((article) => (
        
        <div key={article.slug} className="border rounded-lg shadow-lg shadow-blue-600 p-4">
          <Image
            src={article.image}
            alt={article.title}
            width={400}
            height={400}
            className="w-full h-40  rounded-t-lg"
          />
          <h2 className="text-xl font-bold mt-2">{article.title}</h2>
          <button><Link href={`/blog/${article.slug}`}
             className="text-white  bg-blue-950 px-4 py-2 rounded-xl hover:bg-blue-700 scale-100 hover:scale-110 mt-6 block">Read More
          </Link></button>
          </div>
          ))}
        </div>
       
    <Footer/>
    
    </div>
  )
}

export default HomePage;
