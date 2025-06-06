import React, { useState, useEffect } from 'react';
import { doc, getDoc } from "firebase/firestore";
import { db } from '../lib/firebase';

const EventDetails = () => {
  const [eventData, setEventData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Assuming a fixed event ID for now
  const eventId = "main-event";

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const eventRef = doc(db, "events", eventId);
        const eventSnap = await getDoc(eventRef);

        if (eventSnap.exists()) {
          setEventData(eventSnap.data());
        } else {
          setError("Event not found");
        }
      } catch (err: any) {
        console.error("Error fetching event details: ", err);
        setError("Failed to load event details.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [eventId]); // Depend on eventId, though it's fixed for now

  if (loading) {
    return <div className="text-white text-center py-5">Loading event details...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-5">Error: {error}</div>;
  }

  if (!eventData) {
    return <div className="text-white text-center py-5">No event details available.</div>;
  }

  // Assuming eventData has fields like date, time, location, dressCode, rsvpInfo
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Party Details</h2>
      <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">Date</p>
          <p className="text-white text-sm font-normal leading-normal">{eventData.date}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">Time</p>
          <p className="text-white text-sm font-normal leading-normal">{eventData.time}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">Location</p>
          <p className="text-white text-sm font-normal leading-normal">{eventData.location}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">Dress Code</p>
          <p className="text-white text-sm font-normal leading-normal">{eventData.dressCode}</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#53473c] py-5">
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">RSVP</p>
          <p className="text-white text-sm font-normal leading-normal">{eventData.rsvpInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails; 