import React, { useState } from 'react';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [attendance, setAttendance] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle RSVP submission logic here (e.g., sending data to Firebase)
    console.log('RSVP Submitted:', { name, guests, attendance, dietaryRestrictions });
    // Reset form fields
    setName('');
    setGuests(1);
    setAttendance('');
    setDietaryRestrictions('');
  };

  return (
    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 flex-1">
      <h2 className="text-[#0c1c17] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">RSVP</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#0c1c17] text-base font-medium leading-normal pb-2">Your Name</p>
            <input
              placeholder="Enter your name"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c1c17] focus:outline-0 focus:ring-0 border-none bg-[#e6f4ef] focus:border-none h-14 placeholder:text-[#46a080] p-4 text-base font-normal leading-normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#0c1c17] text-base font-medium leading-normal pb-2">Number of Guests</p>
            <input
              placeholder="Enter number of guests"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c1c17] focus:outline-0 focus:ring-0 border-none bg-[#e6f4ef] focus:border-none h-14 placeholder:text-[#46a080] p-4 text-base font-normal leading-normal"
              type="number"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value, 10))}
            />
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#0c1c17] text-base font-medium leading-normal pb-2">Attendance</p>
            <select
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c1c17] focus:outline-0 focus:ring-0 border-none bg-[#e6f4ef] focus:border-none h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#46a080] p-4 text-base font-normal leading-normal"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
            >
              <option value="">Select Attendance</option>
              <option value="attending">Attending</option>
              <option value="not-attending">Not Attending</option>
            </select>
          </label>
        </div>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-[#0c1c17] text-base font-medium leading-normal pb-2">Dietary Restrictions</p>
            <textarea
              placeholder="Please let us know if you have any dietary restrictions"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c1c17] focus:outline-0 focus:ring-0 border-none bg-[#e6f4ef] focus:border-none min-h-36 placeholder:text-[#46a080] p-4 text-base font-normal leading-normal"
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="flex px-4 py-3">
          <button
            type="submit"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 flex-1 bg-[#019863] text-[#f8fcfa] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Submit</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default RSVPForm; 