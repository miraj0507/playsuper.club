import React from 'react';
import '../../App.css';
//import Cards from '../Cards';
import Footer from '../Footer';
//import Cards from '../Cards';
//import HeroSection from '../HeroSection';
import Banner from '../Banner';
import GameOn from '../GameOn';
import Features from '../Features';
import GamesGallery from '../GamesGallery';
import WhyChooseUs from '../WhyChooseUs';
//import Footer from '../Footer';

function Home() {
  return (
    <>
      <Banner />
      <GameOn />
      <Features/>
      <GamesGallery/>
      <WhyChooseUs/>
      <Footer/>
    </>
  );
}

export default Home;