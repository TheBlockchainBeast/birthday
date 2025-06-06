import React from 'react';

const WishList = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1 p-4">
      <h2 className="text-[#0c1c17] tracking-light text-[32px] font-bold leading-tight min-w-72 mb-4">Dad's Wish List</h2>
      <ul className="list-disc list-inside text-[#0c1c17] text-base font-normal leading-normal">
        <li>New gardening tools</li>
        <li>A comfortable reading chair</li>
        <li>Gift certificate to his favorite restaurant</li>
        <li>Tickets to a [mention a hobby, e.g., sporting event or concert]</li>
        <li>A donation to his favorite charity in his name</li>
      </ul>
      <p className="text-[#46a080] text-sm font-normal leading-normal mt-4">If you'd like to contribute to a gift or get something not on the list, feel free to coordinate with [Your Name] or [Another Family Member's Name].</p>
    </div>
  );
};

export default WishList; 