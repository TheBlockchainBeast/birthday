import React from 'react';

const EventDetails = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <h2 className="text-[#0c1c17] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Party Details</h2>
      <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cde9df] py-5">
          <p className="text-[#46a080] text-sm font-normal leading-normal">Date</p>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">Saturday, July 20th, 2024</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cde9df] py-5">
          <p className="text-[#46a080] text-sm font-normal leading-normal">Time</p>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">7:00 PM - 11:00 PM</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cde9df] py-5">
          <p className="text-[#46a080] text-sm font-normal leading-normal">Location</p>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">The Grand Ballroom, 123 Celebration Avenue, Anytown, USA</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cde9df] py-5">
          <p className="text-[#46a080] text-sm font-normal leading-normal">Dress Code</p>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">Semi-Formal</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#cde9df] py-5">
          <p className="text-[#46a080] text-sm font-normal leading-normal">RSVP</p>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">Please RSVP by July 1st to Sarah at sarah.miller@email.com or call 555-123-4567</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails; 