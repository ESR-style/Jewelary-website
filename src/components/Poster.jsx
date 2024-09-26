import React, { useState, useEffect } from 'react';

const Poster = () => {
  const posters = [
    'src/assets/posters/poster1.jpg',
    'src/assets/posters/poster2.jpg',
    'src/assets/posters/poster3.jpg'
  ];
  const [currentPoster, setCurrentPoster] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prevPoster) => (prevPoster + 1) % posters.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [posters.length]);

  return (
    <div className="bg-black p-5">
      <hr className="my-5 border-white" />
      <div className="relative text-center mb-5">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 bg-black bg-opacity-50 p-5 rounded">
          <h2 className="text-4xl font-bold text-shadow-lg mb-5">
            Amazing Deals<br />Just for You!
          </h2>
          <button className="px-5 py-2 bg-white bg-opacity-20 text-white border-2 border-white cursor-pointer backdrop-blur-md z-10 text-lg font-bold">
            Shop Now
          </button>
        </div>
        <div className="flex justify-center">
          <img src={posters[currentPoster]} alt="Poster" className="w-full h-auto max-h-screen" />
        </div>
      </div>
    </div>
  );
}

export default Poster;