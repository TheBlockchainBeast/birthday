import React from 'react';

const AboutContent = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex p-4 @container">
        <div className="flex w-full flex-col gap-4 items-center">
          <div className="flex gap-4 flex-col items-center">
            <div
              className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
              style={{'backgroundImage': 'url("/dadphotos/photo 4.jpg")'}}
            ></div>
            <div className="flex flex-col items-center justify-center justify-center">
              <p className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Happy 70th Birthday, Papa!</p>
              <p className="text-[#b8ab9d] text-base font-normal leading-normal text-center">
                Join us in celebrating a remarkable man, a loving father, and a true inspiration. This page is dedicated to sharing stories, memories, and heartfelt messages
                for Papa on his special day.
              </p>
              <p className="text-[#b8ab9d] text-base font-normal leading-normal text-center">Born on July 15, 1954</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Photos</h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{'backgroundImage': 'url("/dadphotos/photo 1.jpg")'}}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{'backgroundImage': 'url("/dadphotos/photo 2.jpg")'}}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{'backgroundImage': 'url("/dadphotos/photo 3.jpg")'}}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{'backgroundImage': 'url("/dadphotos/photo 4.jpg")'}}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{'backgroundImage': 'url("/dadphotos/photo 5.jpg")'}}
          ></div>
        </div>
        <div className="flex flex-col gap-3">
          <div
            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
            style={{'backgroundImage': 'url("/dadphotos/photo 6.jpg")'}}
          ></div>
        </div>
      </div>
     
    </div>
  );
};

export default AboutContent; 