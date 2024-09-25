import React from 'react'
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import CatagoryCarousel from './CatagoryCarousel';
import LatestJob from './LatestJob';
import Others from './Others';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <CatagoryCarousel/>
      <LatestJob/>
      <Others/>
      <Footer/>
    </div>
  )
}

export default Home;
