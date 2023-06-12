import React from 'react';
import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-6xl mx-auto my-4'>
        <Popular></Popular>
      </div>
    </div>
  );
};

export default Home;