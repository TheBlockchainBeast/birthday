"use client";

import React, { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#383029] px-4 md:px-10 py-3">
    <div className="flex items-center gap-4 text-white">
      <div className="size-4">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_6_330)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z"
              fill="currentColor"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0_6_330"><rect width="48" height="48" fill="white"></rect></clipPath>
          </defs>
        </svg>
      </div>
      <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">Celebrating Papa</h2>
    </div>
    <div className="flex flex-1 justify-end gap-4 md:gap-8">
      <div className="hidden md:flex items-center gap-9">
        <a className="text-white text-sm font-medium leading-normal" href="/">Home</a>
        <a className="text-white text-sm font-medium leading-normal" href="/gallery">Gallery</a>
        <a className="text-white text-sm font-medium leading-normal" href="/guestbook">GuestBook</a>
        <a className="text-white text-sm font-medium leading-normal" href="/rsvp">RSVP</a>
        <a className="text-white text-sm font-medium leading-normal" href="/events">Events</a>
        <a className="text-white text-sm font-medium leading-normal" href="/about">About</a>
      </div>
      <button className="md:hidden text-white" onClick={toggleMobileMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      <button
        className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#383029] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-2.5"
      >
        <div className="text-white" data-icon="Bell" data-size="20px" data-weight="regular">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
            <path
              d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"
            ></path>
          </svg>
        </div>
      </button>
     
    </div>

    {isMobileMenuOpen && (
      <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#181411] z-50 flex flex-col items-center justify-center gap-6">
        <button className="absolute top-4 right-4 text-white" onClick={toggleMobileMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <a className="text-white text-xl font-medium leading-normal" href="/" onClick={toggleMobileMenu}>Home</a>
        <a className="text-white text-xl font-medium leading-normal" href="/gallery" onClick={toggleMobileMenu}>Gallery</a>
        <a className="text-white text-xl font-medium leading-normal" href="/guestbook" onClick={toggleMobileMenu}>GuestBook</a>
        <a className="text-white text-xl font-medium leading-normal" href="/rsvp" onClick={toggleMobileMenu}>RSVP</a>
        <a className="text-white text-xl font-medium leading-normal" href="/events" onClick={toggleMobileMenu}>Events</a>
        <a className="text-white text-xl font-medium leading-normal" href="/about" onClick={toggleMobileMenu}>About</a>
      </div>
    )}
  </header>
  );
};

export default Header; 