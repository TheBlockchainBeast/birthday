import React from 'react';
import Header from '../components/Header';
import RSVPForm from '../components/RSVPForm';
import Footer from '../components/Footer';

const RSVPPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#181411] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}>
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1 px-4 md:px-0">
            <RSVPForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RSVPPage; 