import React from 'react';
import MenuBar from '../components/MenuBar/MenuBar';
import Carousel from '../components/Carousel/Carousel';
import NFTCollection from '../components/NFTCollection/NFTCollection';
import NFTCalendar from '../components/NFTCalendar/NFTCalendar';

const Home = () => {
  return (
    <>
      <Carousel />
      <MenuBar />
      <NFTCollection />
      <NFTCalendar />
    </>
  );
};

export default Home;
