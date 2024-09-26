const Collection = () => {
    return (
      <div className="text-center p-4 sm:p-8 bg-black text-white">
        <hr className="border-gold m-4 sm:mb-8" />
        <h2 className="text-3xl sm:text-5xl font-bold m-12 sm:m-24">Discover Our Exclusive Collections</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center sm:items-end gap-4 sm:gap-8 mb-4 sm:mb-8">
          <div className="relative w-2/3 sm:w-1/3 h-48 sm:h-96 overflow-hidden border-2 border-gold bg-white transform transition-transform hover:scale-105 p-2 sm:p-4 rounded-full sm:rounded-none">
            <img src="src/assets/posters/image2.jpg" alt="Collection 1" className="w-full h-full object-cover rounded-full sm:rounded-none" />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-gold px-2 sm:px-4 py-1 rounded font-bold">Elegant Necklace</p>
          </div>
          <div className="relative w-2/3 sm:w-1/3 h-48 sm:h-96 overflow-hidden border-2 border-gold bg-white transform transition-transform hover:scale-105 -translate-y-2 sm:-translate-y-5 p-2 sm:p-4 rounded-full sm:rounded-none">
            <img src="src/assets/posters/image3.jpg" alt="Collection 2" className="w-full h-full object-cover rounded-full sm:rounded-none" />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-gold px-2 sm:px-4 py-1 rounded font-bold">Luxury Bracelet</p>
          </div>
          <div className="relative w-2/3 sm:w-1/3 h-48 sm:h-96 overflow-hidden border-2 border-gold bg-white transform transition-transform hover:scale-105 p-2 sm:p-4 rounded-full sm:rounded-none">
            <img src="src/assets/posters/image1.jpg" alt="Collection 3" className="w-full h-full object-cover rounded-full sm:rounded-none" />
            <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-gold px-2 sm:px-4 py-1 rounded font-bold">Stylish Earrings</p>
          </div>
        </div>
        <button className="mt-4 sm:mt-8 px-4 sm:px-6 py-2 bg-gold-500 text-white font-bold rounded hover:bg-gold-600 mb-4 sm:mb-8" onClick={() => window.location.href='/shop'}>Browse More</button>
      </div>
    );
}

export default Collection;