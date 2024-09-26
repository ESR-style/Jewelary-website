import React from 'react';
import { Link } from 'react-router-dom';

const Video = () => {
  return (
    <div className="relative w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] overflow-hidden z-0">
      <video autoPlay muted loop className="absolute top-0 left-0 w-full h-full object-cover z-0">
        <source src="src/assets/videos/A World Of Stylish Designs - BlueStone.com(720P_HD).mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-start justify-center p-8 md:p-16 space-y-6 z-10">
        <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white animate-fadeInUp leading-tight text-glow">
          Discover <br /> The Elegance <br /> Of Fine Jewelry
        </h1>
        
        <Link to={'/shop'}>
          <button className="bg-white bg-opacity-20 backdrop-blur-lg text-white font-semibold py-3 px-8 rounded-lg hover:bg-opacity-30 transition duration-300">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Video;