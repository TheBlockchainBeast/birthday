import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import CountdownTimer from '../components/CountdownTimer';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8fcfa] group/design-root overflow-x-hidden bg-gray-200" style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}>
      <Header />
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="@container">
              <div className="@[480px]:px-4 @[480px]:py-3">
                <div
                  className="bg-cover bg-center flex flex-col justify-end overflow-hidden bg-[#f8fcfa] @[480px]:rounded-lg min-h-80"
                  style={{ backgroundImage: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPw6efo4D8AbRTlLEbn38xmd0y2ZdooDKhk0W2YCF4y9kgKJ1i-APJCKhRYCPu5wRTqlg-gSKBojf1Jt6Hm-iIqStt6lLhLsnuWEhSHn1dRzycRCSP--bnnBXnlyNBZpyp88qiAOY89YXsZui98Bfo86u4NQPUWz0CP5GykHEqrHYHZohXoOhLrXYMHnYNceeYgayEQC6zHKYgKKbxPTbhGLcQ7yg_sIpXDVQkI_bj740xGB6xkkbOqYPzA0EtYjSTrb-eDZduJec")' }}
                >
                  <div className="flex p-4"><p className="text-white tracking-light text-[28px] font-bold leading-tight">Happy 70th Birthday, Dad!</p></div>
                </div>
              </div>
            </div>
            <CountdownTimer />
            <p className="text-[#0c1c17] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
              Join us in celebrating the incredible life and legacy of a truly remarkable man. This website is dedicated to sharing memories, stories, and well wishes for a very
              special 70th birthday.
            </p>
            <div className="flex px-4 py-3 justify-center">
              <Link href="/gallery">
                <button
                  className="flex min-w-[84px] max-w-[480px] items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#019863] text-[#f8fcfa] text-sm font-bold leading-normal tracking-[0.015em]"
                >
                  <span className="truncate">View Gallery</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage; 