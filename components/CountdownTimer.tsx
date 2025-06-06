import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('June 15, 2025 00:00:00').getTime(); // Assuming the birthday is next year on June 15th

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeRemaining({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeRemaining({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="text-center text-[#0c1c17] text-xl font-bold leading-tight tracking-[-0.015em] mt-4">
      {timeRemaining.days} Days, {timeRemaining.hours} Hours, {timeRemaining.minutes} Minutes, {timeRemaining.seconds} Seconds until the big day!
    </div>
  );
};

export default CountdownTimer; 