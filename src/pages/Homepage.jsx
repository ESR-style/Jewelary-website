import React from 'react';
import Navbar from '../components/Navbar';
import Video from '../components/Video';
import Collection from '../components/Collection';
import Poster from '../components/Poster';
import CategoryStrip from '../components/CategoryStrip';
import useIntersectionObserver from '../components/useIntersectionObserver';
import Footer from '../components/Footer';



const AnimatedComponent = ({ children }) => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <div ref={ref} className={isVisible ? 'animate-fadeInUp' : ''}>
      {children}
    </div>
  );
};

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <CategoryStrip />
      <Video />
      <Collection />
      <Poster />
      <Footer />
    </div>
  );
};

export default Homepage;