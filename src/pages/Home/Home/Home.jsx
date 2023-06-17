import React from 'react';
import Banner from '../Banner/Banner';
import Popular from '../Popular/Popular';
import SectionTitle from '../../../components/SectionTitle';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Feature from '../Feature/Feature';
import { Helmet } from 'react-helmet-async';
import useTheme from '../../../hooks/useTheme';

const Home = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <div className={`${isDarkMode ? 'bg-[#1d1c1c]' : ''}`}>
      <Helmet>
        <title>Cricket academy | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-6xl mx-auto py-5">
        <section className="mb-4">
          <SectionTitle heading={"Popular Classes"}></SectionTitle>
          <Popular></Popular>
        </section>
        <section className="mb-4">
          <SectionTitle heading={"Popular Instructors"}></SectionTitle>
          <PopularInstructors></PopularInstructors>
        </section>
        <section className="mb-4">
          <SectionTitle heading={"Feature"}></SectionTitle>
          <Feature></Feature>
        </section>
      </div>
    </div>
  );
};

export default Home;