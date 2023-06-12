import React from 'react';
import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';
import SectionTitle from '../../../components/SectionTitle';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-6xl mx-auto my-4'>
        <section>
          <SectionTitle
            heading={'Popular Classes'}
          ></SectionTitle>
          <Popular></Popular>
        </section>
      </div>
    </div>
  );
};

export default Home;