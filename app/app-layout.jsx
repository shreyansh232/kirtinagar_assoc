'use client';

import React, { useEffect, useState } from 'react';
import NextTopLoader from 'nextjs-toploader';
import NextSessionProvider from '../components/Provider';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Preloader from '../components/preloader';

const AppLayout = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <NextSessionProvider>
      <NextTopLoader />
      {isLoading ? (
        <Preloader />
      ) : (
        <div>
          <Navbar />
          {children}
          <Footer />
        </div>
      )}
    </NextSessionProvider>
  );
};

export default AppLayout;
