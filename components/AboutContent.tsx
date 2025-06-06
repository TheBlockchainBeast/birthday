import React from 'react';

const AboutContent = () => {
  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-center">
            <div className="flex gap-4 flex-col items-center">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-full min-h-32 w-32"
                style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDB78DYUErbCSYgvDSEjUUa6ddAWgZrhXR_5hk5VhiI2Hm_6aY4mYjNwFd5AZPkv_OF0tVMsujowXo4Rs_OIdBGzgxozCgQ0I_I_M3HsLgM-4gc7KEpS5do-t1GYZN4TA-7C_aoJG-TrRfuXUG2ZxcJWxdPxFU6Q7hp3Qww2a-Nw64-SOxG7UNqcwIScMWT77oRlGsNDV3uDqYVu_g_LZEsPaAuv9fus4-y-ZtzmdC98MgpFGfFewUNEUKEs1fDdFrOJm7HsBrQhS8")'}}
              ></div>
              <div className="flex flex-col items-center justify-center justify-center">
                <p className="text-[#0c1c17] text-[22px] font-bold leading-tight tracking-[-0.015em] text-center">Happy 70th Birthday, Dad!</p>
                <p className="text-[#46a080] text-base font-normal leading-normal text-center">
                  Join us in celebrating a remarkable man, a loving father, and a true inspiration. This page is dedicated to sharing stories, memories, and heartfelt messages
                  for Dad on his special day.
                </p>
                <p className="text-[#46a080] text-base font-normal leading-normal text-center">Born on July 15, 1954</p>
              </div>
            </div>
          </div>
        </div>
        <h2 className="text-[#0c1c17] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Stories and Memories</h2>
        <p className="text-[#0c1c17] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Share your favorite memories, funny anecdotes, and heartfelt stories about Dad. Let's fill this space with love and appreciation for all he's done.
        </p>
        <div className="flex items-center px-4 py-3 gap-3 @container">
          <label className="flex flex-col min-w-40 h-full flex-1">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="flex border border-[#cde9df] bg-[#f8fcfa] justify-end pl-[15px] pr-[15px] pt-[15px] rounded-l-lg border-r-0">
                <div
                  className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 shrink-0"
                  style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCOo405pT-YzTcBAGcvOjINAtus2n2kYi-lAsUw2d3mb1uKQkIwQWoy7e_mc_z7lqDU8obvmTVvoKHY60l7VyJ36UUU8j220F8rcOhoHiMAgYS_BrgBiRnoiOP3gOM2BI_cCQ7kIBCUZBLb1zpSSfTZmPaO5W6NyBcNpXN2qxQKWHVxzQGKx35psn_ZUocxzNF6-rIMCtTL4HPY8zMTqLP3oZuELrAR327cBggU414Cb0PUXF-WT4LTSwWEWWsyz5gIxhnHQAP12-E")'}}
                ></div>
              </div>
              <div className="flex flex-1 flex-col">
                <textarea
                  placeholder="Share your story..."
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
        <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDCokMtrc5nLZ2f_hQzjxYD_uM-sNa4VhPYTlc_KcbGJOuKlWrtoffLD9m_y9WWlqZ5R223CwjTcSePmT8-M4G_S32oTp2lIfwYgzvzyQOnMzCAADiWaA9Mx37ywET29DF8VaYTLtyclLN62ACtNqJ1JDXV7JTnTerJg1qYqpPudFEcpKoMGeZQ-_agDGb8P4dzKN21WPkwfQ9JpvTQQsp2hkmfvlPkDYmz53zLI2LFXALiRFWaRkkU94EULXcKF7hMuGxpXCDONh8")'}}
          ></div>
          <div className="flex h-full flex-1 flex-col items-start justify-start">
            <div className="flex w-full flex-row items-start justify-start gap-x-3">
              <p className="text-[#0c1c17] text-sm font-bold leading-normal tracking-[0.015em]">Emily Carter</p>
              <p className="text-[#46a080] text-sm font-normal leading-normal">July 15, 2024</p>
            </div>
            <p className="text-[#0c1c17] text-sm font-normal leading-normal">
              Dad, I'll never forget the time we went camping and you taught me how to fish. Those are some of my fondest memories. Thank you for always being there for me.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-row items-start justify-start gap-3 p-4">
          <div
            className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0"
            style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZiA4B9q8Pu1XbfH4I7HNRlVoTbpy85GsF7IxXqQwP-ozO-Az1Lw7HqTuUTst7GYI9hflG3rHmjrvs9LTi_r8W1qEtTTectwjDpgUqTcNk-NYDWBrvSj0TbHdpaWR9CPeCckBe4sh_tZWNHk2ogNcaRAWlq0l_j0HzjVxzv368LfEAJ2JjwCtBEa8T2awGHH9cdp9tK2Jfeou5ZtVvtVs0CJwskbdQEa6wf4MNSZzNnJIuC194lNE4PGAz9Zh2kqXG4WTSBz9kHJc")'}}
          ></div>
          <div className="flex h-full flex-1 flex-col items-start justify-start">
            <div className="flex w-full flex-row items-start justify-start gap-x-3">
              <p className="text-[#0c1c17] text-sm font-bold leading-normal tracking-[0.015em]">David Carter</p>
              <p className="text-[#46a080] text-sm font-normal leading-normal">July 15, 2024</p>
            </div>
            <p className="text-[#0c1c17] text-sm font-normal leading-normal">
              Happy Birthday, Dad! Your guidance and support have shaped me into the person I am today. I'm so grateful for everything you've done.
            </p>
          </div>
        </div>
        <h2 className="text-[#0c1c17] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Photos</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDeMtUHHpEBbgm0ySRf1gJWycU9mK0NtOvXYK1tH-L92C4ojNU5s5YCHeQTj3kykaPLXALqNN4rFcYvGclsCUOhO06ho09Hk7AYflzLGsYZMVdAl4UK_U0KrJwNgpRWTxn2rgAwRg0e9nSu2p90TmJCdszJQKmpOLG6eRTixlxKehOK9sfiADKvcN7QDc7-FtI8mFsw98vb4YcojyaEEL75IChHN7WNjFlHuaXTc7ukaHWUHjNO5GP67Sn40gVZR66V3EwtkpN6798")'}}
            ></div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuABjZYvOH2ljguMopTfy1Jdz4hSHqsi7Bx8UZR-dqfboYBrBQx7MYwugNrmC7CFiHFgTSFUlF0BTkaxmcLdGjlKrXsLa5xL-0Ki9xorhEEmsxy30zIAtajaoje24FK6EGMUfQ1QPaC653Hm3hqm9aZH1I7CvHrQ1l18lfJqMK2IwtaHg91vEizrbxFNePq0a7tAdGfu8Vm93U0xLdWAz8GJSAm5x3E_KWAxodS5RPIPN66IBDZH--8Clpekgk10jz8A44NEXJi_UbI")'}}
            ></div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC5DEXWaC_s7YTHcqDKC1crH6DWBh383FE9oKpRQ_36kMiX5XIfAV2yYqwpeBb2K6J1Fat9CEQc-gmXnFL8nGlXmQW1-Vg0U4vyU_XjF-wf-zXCEiBVavr_r2sIdUEN7lLaMoTzYicXC3LmiD5AJTvH7wrb1wcmdIYu9zr0R8t_-JvGHlVNNs9s4WN4m5HWCAH2MeQHDF4Mp4icqoT1WgSmSSp3lpXw5AfCr4WgRIgLOiiKb36zwAWaqNbYR4Vbw69SBo9vm9ETM5s")'}}
            ></div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA687IS67QEy6cd6JcEciXOgQB-R-SbmsS0HPsBCcnS2MEJ97XTrcSb18nZhlDMFM-ovpz9eWxuyf9-yqTx2920MgAdpP18k7zoqi-Mll45g4ernc0oEyl4F7xTC8ilsSccjbMGuCtpFYr4Qq21cbPkkbYZmSe5FS6omjFgyISb0YsxaCKKiXadvrDIiD5eZI1HO8UfZIUI06z4i0098mZnt0HfMO7-1WcGwys3DPUvX-WiWqR5n57XNVldE2CVhFXM5ImjuWQA0-0")'}}
            ></div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOuZgIzrh8zUr2ycPeMPFF4qO9Gb1joUQlzUn1aEIMtGLgJasjSpTjCAtg6i66egwiiwiIhCkCbxAnO3ETsSV8BswAzVGRLtit1n0U0FOUPtg0u5svsq5rZFI3u562OoUyTtF0I3qZDFgTj8eFAUuB8Y-zAqvmqd1Kbr01ve8g8ips5RYt-mVmKJMcG5ElBOMyKzC4oZ6gmFHbjZwbmQQiDWgFSozMK6UBL-oq4h4C4dR1R1Uw0zVWMpjZDU7ikazybKxB9NYo3nc")'}}
            ></div>
          </div>
          <div className="flex flex-col gap-3">
            <div
              className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-lg"
              style={{'backgroundImage': 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC_jLM_WJGzDqAuGUcAnRyqBRKKM8rC4TR_KZT0SG1_HeiwIzZ51abnLm16lDh5RUuifgbjsI3m7iegYbLmuDPNaPhWU6BhMZ11bFq61JdpFA-gfXBrIgMl8auHOK7nNxHGqGIzTOnkhEe-i96wA6RL8ppDPEIV6lLWqYI4_PyWSTgnXyz13vCc3vxdon-uCeA4gbBid-_7Za2LyxA4HZ-e6JVckazc6pdwOkhFVZ2VFlUtLtK9ULF6dsXlgXEfDs9kizb4Z975jZw")'}}
            ></div>
          </div>
        </div>
        <h2 className="text-[#0c1c17] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Messages</h2>
        <p className="text-[#0c1c17] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Leave a birthday message for Dad! Share your well wishes, express your love, and let him know how much he means to you.
        </p>
        <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
          <label className="flex flex-col min-w-40 flex-1">
            <textarea
              placeholder="Write your message here..."
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0c1c17] focus:outline-0 focus:ring-0 border border-[#cde9df] bg-[#f8fcfa] focus:border-[#cde9df] min-h-36 placeholder:text-[#46a080] p-[15px] text-base font-normal leading-normal"
            ></textarea>
          </label>
        </div>
        <div className="flex px-4 py-3 justify-end">
          <button
            className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#019863] text-[#f8fcfa] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span className="truncate">Send Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutContent; 