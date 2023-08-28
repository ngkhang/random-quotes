import React from 'react';
import Footer from '~/components/generic/Footer';
import Header from '~/components/generic/Header';

function DefaultLayout({ children }: { children: React.ReactElement }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex-grow flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLayout;
