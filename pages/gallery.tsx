import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GalleryPage = () => {
  const images = {
    earlyYears: [
      "/dadphotos/photo 1.jpg",
      "/dadphotos/photo 2.jpg",
      "/dadphotos/photo 3.jpg",
      "/dadphotos/photo 4.jpg",
    ],
    adventures: [
      "/dadphotos/photo 5.jpg",
      "/dadphotos/photo 6.jpg",
      "/dadphotos/photo 7.jpg",
      "/dadphotos/photo 1.jpg",
    ],
    family: [
      "/dadphotos/photo 2.jpg",
      "/dadphotos/photo 3.jpg",
      "/dadphotos/photo 4.jpg",
      "/dadphotos/photo 5.jpg",
    ],
    laterYears: [
      "/dadphotos/photo 6.jpg",
      "/dadphotos/photo 7.jpg",
      "/dadphotos/photo 1.jpg",
      "/dadphotos/photo 2.jpg",
    ],
  };

  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setExpandedImage(imageUrl);
  };

  const closeExpandedImage = () => {
    setExpandedImage(null);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#181411] dark group/design-root overflow-x-hidden" style={{ fontFamily: '"Noto Serif", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <div className="flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1 px-4 md:px-40">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight min-w-72">A Life in Pictures</p>
            </div>

            {/* Early Years Section */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Early Years</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {images.earlyYears.map((imageUrl, index) => (
                <div key={index} className="flex flex-col gap-3 cursor-pointer" onClick={() => handleImageClick(imageUrl)}>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${imageUrl}")` }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Adventures Section */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Adventures</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {images.adventures.map((imageUrl, index) => (
                <div key={index} className="flex flex-col gap-3 cursor-pointer" onClick={() => handleImageClick(imageUrl)}>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${imageUrl}")` }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Family Section */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Family</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {images.family.map((imageUrl, index) => (
                <div key={index} className="flex flex-col gap-3 cursor-pointer" onClick={() => handleImageClick(imageUrl)}>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${imageUrl}")` }}
                  ></div>
                </div>
              ))}
            </div>

            {/* Later Years Section */}
            <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Later Years</h3>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {images.laterYears.map((imageUrl, index) => (
                <div key={index} className="flex flex-col gap-3 cursor-pointer" onClick={() => handleImageClick(imageUrl)}>
                  <div
                    className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                    style={{ backgroundImage: `url("${imageUrl}")` }}
                  ></div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Expanded Image Modal */}
        {expandedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4"
            onClick={closeExpandedImage}
          >
            <div className="relative max-w-full max-h-full rounded-lg overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold z-10 hover:text-gray-300 focus:outline-none"
                onClick={closeExpandedImage}
                aria-label="Close"
              >
                &times;
              </button>
              <img src={expandedImage} alt="Expanded" className="max-w-full max-h-[85vh] object-contain mx-auto" />
              <div className="absolute bottom-0 left-0 right-0 text-center p-3 bg-black bg-opacity-50">
                <a
                  href={expandedImage}
                  download
                  className="inline-block text-white underline hover:no-underline transition-colors duration-200"
                >
                  Download Image
                </a>
              </div>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default GalleryPage; 