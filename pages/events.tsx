import React from 'react';
import Header from '../components/Header';
import EventDetails from '../components/EventDetails';
import Footer from '../components/Footer';

const EventsPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#181411] dark group/design-root overflow-x-hidden" style={{ fontFamily: "'Noto Serif', 'Noto Sans', sans-serif" }}>
      <Header />
      <div className="layout-container flex h-full grow flex-col mt-20">
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-40">
            <EventDetails />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage; 