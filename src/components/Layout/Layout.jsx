import { Header } from 'components/Header/Header';
import { Loader } from 'components/Loader/Loader';
import { MobileHeader } from 'components/MobileHeader/MobileHeader';
import React, { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 1200px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1200px)');
    const handleResize = e => setIsMobile(e.matches);

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <>
      {isMobile ? <MobileHeader /> : <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
        <ToastContainer />
      </main>
    </>
  );
};

export default Layout;
