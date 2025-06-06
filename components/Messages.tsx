import React from 'react';

const Messages = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#0c1c17] tracking-light text-[32px] font-bold leading-tight min-w-72">Well Wishes & Messages</p>
      </div>
      <div className="flex flex-col gap-5 p-4">
        {/* Placeholder for individual messages */}
        <div className="flex flex-col gap-2 border-b border-b-[#cde9df] pb-4">
          <h3 className="text-[#0c1c17] text-lg font-bold leading-tight tracking-[-0.015em]">Sending You Love!</h3>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">
            Dear Dad, Happy 70th Birthday! Wishing you a day filled with joy, laughter, and everything you love. So grateful for all your wisdom and kindness over the years.
          </p>
          <p className="text-[#46a080] text-sm font-normal leading-normal">- [Name]</p>
        </div>
        <div className="flex flex-col gap-2 border-b border-b-[#cde9df] pb-4">
          <h3 className="text-[#0c1c17] text-lg font-bold leading-tight tracking-[-0.015em]">Happy Birthday!</h3>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">
            Wishing you the happiest of birthdays, Dad! Thank you for everything you do. Looking forward to celebrating with you soon!
          </p>
          <p className="text-[#46a080] text-sm font-normal leading-normal">- [Name]</p>
        </div>
        {/* Add more messages here */}
      </div>
    </div>
  );
};

export default Messages; 