import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../lib/firebase';
import CustomAlert from './CustomAlert';

const RSVPForm = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [attendance, setAttendance] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState<'success' | 'error'>('success');

  const handleCloseAlert = () => {
    setShowAlert(false);
    setAlertMessage('');
    setAlertType('success'); // Reset to default
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (name.trim() === '' || attendance.trim() === '') {
      setAlertMessage("Please fill out your name and attendance.");
      setAlertType('error');
      setShowAlert(true);
      return;
    }

    try {
      // Add RSVP data to Firestore
      await addDoc(collection(db, "rsvps"), {
        name: name.trim(),
        guests: guests,
        attendance: attendance,
        dietaryRestrictions: dietaryRestrictions.trim(),
        timestamp: serverTimestamp(), // Use serverTimestamp for accurate time
      });

      console.log('RSVP Submitted:', { name, guests, attendance, dietaryRestrictions });
      setAlertMessage("Thank you for your RSVP!");
      setAlertType('success');
      setShowAlert(true);

      // Reset form fields
      setName('');
      setGuests(1);
      setAttendance('');
      setDietaryRestrictions('');
    } catch (error) {
      console.error("Error submitting RSVP: ", error);
      setAlertMessage("Failed to submit RSVP. Please try again.");
      setAlertType('error');
      setShowAlert(true);
    }
  };

  return (
    <div className="layout-content-container flex flex-col py-5 flex-1">
      <h2 className="text-white tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">RSVP</h2>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">Your Name</p>
            <input
              placeholder="Enter your name"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#53473c] bg-[#26211c] focus:border-[#53473c] h-14 placeholder:text-[#766656] p-4 text-base font-normal leading-normal"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">Number of Guests</p>
            <input
              placeholder="Enter number of guests"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#53473c] bg-[#26211c] focus:border-[#53473c] h-14 placeholder:text-[#766656] p-4 text-base font-normal leading-normal"
              type="number"
              value={guests}
              onChange={(e) => setGuests(parseInt(e.target.value, 10))}
            />
          </label>
        </div>
        <div className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">Attendance</p>
            <select
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#53473c] bg-[#26211c] focus:border-[#53473c] h-14 bg-[image:var(--select-button-svg)] placeholder:text-[#766656] p-4 text-base font-normal leading-normal"
              value={attendance}
              onChange={(e) => setAttendance(e.target.value)}
            >
              <option value="">Select Attendance</option>
              <option value="attending">Attending</option>
              <option value="not-attending">Not Attending</option>
            </select>
          </label>
        </div>
        <div className="flex flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="text-white text-base font-medium leading-normal pb-2">Dietary Restrictions</p>
            <textarea
              placeholder="Please let us know if you have any dietary restrictions"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#53473c] bg-[#26211c] focus:border-[#53473c] min-h-36 placeholder:text-[#766656] p-4 text-base font-normal leading-normal"
              value={dietaryRestrictions}
              onChange={(e) => setDietaryRestrictions(e.target.value)}
            ></textarea>
          </label>
        </div>
        <div className="flex px-4 py-3">
          <button
            type="submit"
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 flex-1 bg-[#b76514] text-white text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Submit</span>
          </button>
        </div>
      </form>

      {/* Render custom alert */}
      {showAlert && (
        <CustomAlert
          message={alertMessage}
          type={alertType}
          onClose={handleCloseAlert}
        />
      )}
    </div>
  );
};

export default RSVPForm; 