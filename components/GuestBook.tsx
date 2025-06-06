import React from 'react';

const GuestBook = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#0c1c17] tracking-light text-[32px] font-bold leading-tight">Happy 70th Birthday, Robert!</p>
          <p className="text-[#46a080] text-sm font-normal leading-normal">
            Share your warmest wishes, fondest memories, and heartfelt messages for Robert as he celebrates this milestone birthday.
          </p>
        </div>
      </div>
      <div className="flex items-center px-4 py-3 gap-3 @container">
        <label className="flex flex-col min-w-40 h-full flex-1">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="flex border border-[#cde9df] bg-[#f8fcfa] justify-end pl-[15px] pr-[15px] pt-[15px] rounded-l-lg border-r-0">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0"
                style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYmiM6rsxxtYCrOgPQ3RokTmQftp3syFHYLVvmieSmwOF2Nw3SPq2WdOoRWlvvGV9o1UGbVl0D2AxrVivskKbnVdv-NN1_oPi2rq1ogLYvKthCffQ7r0YV3zBOgMJYQWh8BTCmZmYYWUGHaOrgGNOt6ObWKyGw6xg3ZE7rJATjiG4zwCsGPVnynJ696TTYg9njtuMTe1TUlfHrLOu9bWv7mD_18ZD3iGWlENgNFnA7KVDJANA-kXB0CVdSjaXV1FUuti-GYHqKtJk")' }}
              ></div>
            </div>
            <div className="flex flex-1 flex-col">
              <textarea
                placeholder="Leave a birthday message for Robert..."
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c1c17] focus:outline-0 focus:ring-0 border border-[#cde9df] bg-[#f8fcfa] focus:border-[#cde9df] h-auto placeholder:text-[#aadac9] rounded-l-none border-l-0 pl-2 rounded-b-none border-b-0 text-base font-normal leading-normal pt-[22px]"
              ></textarea>
              <div className="flex border border-[#cde9df] bg-[#f8fcfa] justify-end pr-[15px] rounded-br-lg border-l-0 border-t-0 px-[15px] pb-[15px]">
                <div className="flex items-center gap-4 justify-end">
                  <div className="flex items-center gap-1">
                    <button className="flex items-center justify-center p-1.5">
                      <div className="text-[#46a080]" data-icon="Image" data-size="20px" data-weight="regular">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                          <path
                            d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,16V158.75l-26.07-26.06a16,16,0,0,0-22.63,0l-20,20-44-44a16,16,0,0,0-22.62,0L40,149.37V56ZM40,172l52-52,80,80H40Zm176,28H194.63l-36-36,20-20L216,181.38V200ZM144,100a12,12,0,1,1,12,12A12,12,0,0,1,144,100Z"
                          ></path>
                        </svg>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </label>
      </div>
      <h2 className="text-[#0c1c17] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Messages</h2>
      <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCYTjm1zZRkU7KJu_fHQBnCTVmrphQr9Nc2lESvtOpSjnWImKCIiKMQSdAj5SlGG6_3UtGsHTsQpyaDizLpeRuQw0x0TQEVUIbG6xjFCzX12Xz3ibhDkyqsYSV4Lb4AJ6vbuaPdRvru2tlbpQ2q6Z1zKDceUjhdaBWin964Xp6_64LaPNCczBKRbR_4r2go62DBHi7v7bEVXboEHBJ1IMwCXPgUTcLezWO4dzMKCfk9UnXz4dOLMaQBCA0FLw_eJBuGtTWwYaSwo18")' }}
        ></div>
        <div className="flex h-full flex-1 flex-col items-start justify-start">
          <div className="flex w-full flex-row items-start justify-start gap-x-3">
            <p className="text-[#0c1c17] text-sm font-bold leading-normal tracking-[0.015em]">Emily Carter</p>
            <p className="text-[#46a080] text-sm font-normal leading-normal">2 days ago</p>
          </div>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">
            Happy Birthday, Robert! Wishing you a day filled with joy, laughter, and all your favorite things. Thank you for being such a wonderful father and grandfather. We
            love you!
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOxqny_w4nHRpwtTz5GXJv5q2KtRzhciYt6Jgf9kEv2v_IcVbUX7IUAKPgkKedTx57Y41y13uKxyp9lBNJCpuYwb1c7AZvcY1gvgyc7o6Q6u82fljoFqBVHTZOQ28K5f-esQdQBE6TTsYxTEoZxUyRiyD_46obASzDa8E7viQRuUB8o2zuh-rnVqKldswJsdntfEVvou5QD6ap0OeNMF8qXduRpGJujEAvPqbxn_SDBJiwZaBrGtlwMMOcQXe6RxFwCwSmzavLHrA")' }}
        ></div>
        <div className="flex h-full flex-1 flex-col items-start justify-start">
          <div className="flex w-full flex-row items-start justify-start gap-x-3">
            <p className="text-[#0c1c17] text-sm font-bold leading-normal tracking-[0.015em]">David Miller</p>
            <p className="text-[#46a080] text-sm font-normal leading-normal">3 days ago</p>
          </div>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">
            Robert, you're an inspiration to us all. Your wisdom, kindness, and strength have shaped our lives in countless ways. Here's to many more years of happiness and
            good health. Happy 70th!
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBpCfIF72Ro7eSbW2zAStat2_xle79K5hja-YSXxXSCb6hmx3Y4AFlqlqGBVqk2P1E3u1vmXikEnrVXpgtZ2vY2284utp5EGH1cGXOO8TCxbNshNUPkvbahlaG9OlNhEb2Cv5Wkvq5xEXsHZBkPHpIDIMk_2JaGfb0iNTCBd0o1z8I3lPD1UYU4z9NFkVb0B4fxz2QFB2xoLzZqND3ntPYjnV_nAPT2KBNlnWA3tfbWWBpXpZecX5kFIOG34HS1MmUHlvJ2D4ftuhI")' }}
        ></div>
        <div className="flex h-full flex-1 flex-col items-start justify-start">
          <div className="flex w-full flex-row items-start justify-start gap-x-3">
            <p className="text-[#0c1c17] text-sm font-bold leading-normal tracking-[0.015em]">Sophia Clark</p>
            <p className="text-[#46a080] text-sm font-normal leading-normal">4 days ago</p>
          </div>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">
            Dear Robert, I'm so grateful for all the love and support you've given me over the years. You've always been my rock, and I cherish every moment we've shared.
            Wishing you the happiest of birthdays!
          </p>
        </div>
      </div>
      <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
        <div
          className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
          style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAceCDojDXDCfjA6SOkekqmoamtLOfkfnxbTTv84ulZw33j0P8vQtciNQWwrVQ9NpRx1IxyWfjlbWbjZa-LMJ2z-vJD9YxJlIOIpIduzQgOXEL-dK2OaIjMMA988D1BYvCA1H7OPE35nYaZmJ5ZCtNGBWswjEVhDq3whfO5uvISmY7RRLNYD7jRZogpTlKBvxaNqIAH4iWD36g1U-y8G8pXwSto_zxu8enBBI3LH30N8owXxrS9fWURaAcV9w55Wh-w0aDOSIcDCT0")' }}
        ></div>
        <div className="flex h-full flex-1 flex-col items-start justify-start">
          <div className="flex w-full flex-row items-start justify-start gap-x-3">
            <p className="text-[#0c1c17] text-sm font-bold leading-normal tracking-[0.015em]">Ethan Walker</p>
            <p className="text-[#46a080] text-sm font-normal leading-normal">5 days ago</p>
          </div>
          <p className="text-[#0c1c17] text-sm font-normal leading-normal">
            Happy 70th Birthday, Robert! May this year bring you new adventures, cherished moments, and all the happiness you deserve. Thank you for everything you do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GuestBook; 