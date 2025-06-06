import React from 'react';
import Header from '../components/Header';
import WishList from '../components/WishList';
import Footer from '../components/Footer';

const WishListPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fcfa] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      <div className="layout-container flex h-full grow flex-col mt-20">
        <div className="px-40 flex flex-1 justify-center py-5">
          <WishList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default WishListPage; 