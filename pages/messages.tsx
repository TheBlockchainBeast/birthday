import React from 'react';
import Header from '../components/Header';
import Messages from '../components/Messages';
import Footer from '../components/Footer';

const MessagesPage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fcfa] group/design-root overflow-x-hidden" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <Messages />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MessagesPage; 