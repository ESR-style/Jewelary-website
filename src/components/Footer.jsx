import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row flex-wrap justify-center items-start">
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Our Address</h2>
          <p>Vijaynagar 3rd stage</p>
          <p>Mysore City, KA 573001</p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
          </div>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-xl font-bold mb-2">Contact Us</h2>
          <p>Email: esrsamarth@gmail.com</p>
          <p>Phone: 1234567890</p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-6">
        <p>&copy; 2024 Style Jewelers. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;