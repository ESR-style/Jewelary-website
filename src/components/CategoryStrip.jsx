import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: 'Earrings',
    subcategories: ['Studs', 'Hoops', 'Drops', 'Jhumkas', 'Chandbalis']
  },
  {
    name: 'Necklaces',
    subcategories: ['Chokers', 'Chains', 'Pendants', 'Bib Necklaces', 'Rani Haar']
  },
  {
    name: 'Rings',
    subcategories: ['Engagement Rings', 'Wedding Bands', 'Casual Rings', 'Cocktail Rings']
  },
  {
    name: 'Bracelets',
    subcategories: ['Bangles', 'Cuffs', 'Charm Bracelets', 'Tennis Bracelets']
  },
  {
    name: 'Pendants',
    subcategories: ['Solitaire Pendants', 'Heart Pendants', 'Cross Pendants', 'Initial Pendants']
  },
  {
    name: 'Bangles',
    subcategories: ['Gold Bangles', 'Diamond Bangles', 'Platinum Bangles', 'Silver Bangles']
  },
];

const CategoryStrip = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const handleMouseEnter = (categoryName) => {
    setHoveredCategory(categoryName);
  };

  const handleMouseLeave = () => {
    setHoveredCategory(null);
  };

  return (
    <div className="hidden md:block bg-gradient-to-r from-gold-500 to-gold-600 shadow-md">
      <div className="container mx-auto flex justify-around p-2">
        {categories.map((category) => (
          <div
            className="relative group"
            key={category.name}
            onMouseEnter={() => handleMouseEnter(category.name)}
            onMouseLeave={handleMouseLeave}
          >
            <button className="text-white hover:text-gray-200 font-medium">
              {category.name}
            </button>
            <div
              className={`absolute left-4 top-full -mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-opacity duration-300 ease-in-out transform ${
                hoveredCategory === category.name ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
            >
              <div className="py-1">
                {category.subcategories.map((subcategory) => (
                  <Link
                    key={subcategory}
                    to={`/shop?category=${category.name.toLowerCase()}&subcategory=${subcategory.toLowerCase()}`}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryStrip;