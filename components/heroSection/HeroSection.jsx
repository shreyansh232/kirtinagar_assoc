import React from 'react';
import styles from '../page.module.css';
import SearchSection from './SearchSection';
import EventSection from './EventSection';

const HeroSection = () => {
  return (
    <div className={`grid grid-rows-[600px,1fr] gap-4 h-[100%] md:h-screen md:grid-cols-8 pt-[30px] px-[22px] ${styles['hero-bg']} mb-3`}>
      <SearchSection />
      <EventSection />
    </div>
  );
};

export default HeroSection;