import React from 'react';
import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';
import SectionTitle from '../../../components/SectionTitle';
import PopularInstructors from '../PopularInstructors/PopularInstructors';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className='max-w-6xl mx-auto my-5'>
        <section className='mb-4'> 
          <SectionTitle
            heading={'Popular Classes'}
          ></SectionTitle>
          <Popular></Popular>
        </section>
        <section className='mb-4'> 
          <SectionTitle
            heading={'Popular Instructors'}
          ></SectionTitle>
          <PopularInstructors></PopularInstructors>
        </section>
      </div>
    </div>
  );
};

export default Home;