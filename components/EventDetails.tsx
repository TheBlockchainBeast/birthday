import React from 'react';

const EventDetails = () => {
  const eventDetails = {
    date: "15th of June, 2025",
    time: "1pm",
    location: "Jesus The Ark Bible Church, 55, alhaji saubana ogundipe street, Agbelekale, Abule-Egba, Lagos.",
    dressCode: "Semi-Formal",
    rsvpInfo: "See invitation"
  };

  // Assuming eventData has fields like date, time, location, dressCode, rsvpInfo
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Party Details</h2>
      <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">Date</p>
          <p className="text-white text-sm font-normal leading-normal">{eventDetails.date}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">Time</p>
          <p className="text-white text-sm font-normal leading-normal">{eventDetails.time}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">Location</p>
          <p className="text-white text-sm font-normal leading-normal">{eventDetails.location}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">Dress Code</p>
          <p className="text-white text-sm font-normal leading-normal">{eventDetails.dressCode}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">RSVP</p>
          <p className="text-white text-sm font-normal leading-normal">{eventDetails.rsvpInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails; 