import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from '../lib/firebase';

const GuestBook = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  // const defaultAvatarUrl = '/dadphotos/photo 4.jpg'; // Removed as we are using SVG

  useEffect(() => {
    const messagesCollection = collection(db, "guestbook_messages");
    const q = query(messagesCollection, orderBy("timestamp", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messagesList);
    }, (error) => {
      console.error("Error fetching messages: ", error);
      // TODO: Display an error message to the user
    });

    // Cleanup function to detach the listener
    return () => unsubscribe();
  }, []); // Empty dependency array means this effect runs once on mount

  const handlePostMessage = async () => {
    if (name.trim() === '' || message.trim() === '') {
      alert("Please enter your name and message."); // Basic validation
      return;
    }

    try {
      await addDoc(collection(db, "guestbook_messages"), {
        name: name.trim(),
        message: message.trim(),
        timestamp: serverTimestamp(),
        // avatar: defaultAvatarUrl, // Removed as we are using SVG
      });
      setName('');
      setMessage('');
    } catch (error) {
      console.error("Error posting message: ", error);
      alert("Failed to post message. Please try again."); // Basic error feedback
    }
  };

  // SVG Avatar component (simple placeholder)
  const SvgAvatar = () => (
    <svg className="rounded-full size-10 shrink-0 bg-[#53473c] p-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="8" r="4" fill="#b8ab9d"/>
      <path d="M20 21C19.4 17.9524 16.5262 15.5 12 15.5C7.47379 15.5 4.6 17.9524 4 21" stroke="#b8ab9d" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );

  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-white tracking-light text-[32px] font-bold leading-tight">Happy 70th Birthday, Rev. Ekeleme Ifenkwe!</p>
          <p className="text-[#b8ab9d] text-sm font-normal leading-normal">
            Share your warmest wishes, fondest memories, and heartfelt messages for Rev. Ekeleme Ifenkwe as he celebrates this milestone birthday.
          </p>
        </div>
      </div>
      <div className="flex items-start px-4 py-3 gap-3 @container">
        {/* SVG Avatar beside input */}
        <SvgAvatar />
        <div className="flex flex-1 flex-col gap-3">
          {/* Name input */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input w-full rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#53473c] bg-[#26211c] focus:border-[#53473c] placeholder:text-[#766656] px-4 py-2 text-base font-normal leading-normal"
          />
          {/* Message textarea */}
          <textarea
            placeholder="Leave a birthday message for Rev. Ekeleme Ifenkwe..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-input w-full min-h-24 resize-none rounded-xl text-white focus:outline-0 focus:ring-0 border border-[#53473c] bg-[#26211c] focus:border-[#53473c] placeholder:text-[#766656] px-4 py-2 text-base font-normal leading-normal"
          ></textarea>
          {/* Post button */}
          <div className="flex justify-end">
            <button
              onClick={handlePostMessage}
              className="flex cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 bg-[#383029] text-white gap-2 text-sm font-bold leading-normal tracking-[0.015em] min-w-0 px-4 py-2"
            >
              Post Message
            </button>
          </div>
        </div>
      </div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Messages</h2>
      {
        messages.map(message => (
          <div key={message.id} className="flex w-full flex-row items-start justify-start gap-3 p-4">
            {/* Display message avatar */}
            {/* Using a simple SVG placeholder avatar */}
            <SvgAvatar />
            <div className="flex h-full flex-1 flex-col items-start justify-start">
              <div className="flex w-full flex-row items-start justify-start gap-x-3">
                {/* Display sender's name */}
                <p className="text-white text-sm font-bold leading-normal tracking-[0.015em]">{message.name || 'Anonymous'}</p>
                {/* Display timestamp (consider formatting) */}
                <p className="text-[#b8ab9d] text-sm font-normal leading-normal">{message.timestamp ? new Date(message.timestamp.toDate()).toLocaleString() : 'No date'}</p>
              </div>
              {/* Display message content */}
              <p className="text-white text-sm font-normal leading-normal">
                {message.message}
              </p>
            </div>
          </div>
        ))
      }
    </div>
  );
};

export default GuestBook; 