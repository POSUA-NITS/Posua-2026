"use client";
import React, { useState } from 'react';
import Carousel from '../../components/Carousel';

const ArtistDesktop = () => {
  const images1 = [
    { id: 1, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509260/1_hvqht0.webp", alt: "Nilotpal Borah", tit: "Singer" },
    { id: 2, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/ZubeenGarg_ybmmad.webp", alt: "Zubeen Garg", tit: "Singer" },
    { id: 3, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/Priyanka_Bharali_fzetdl.webp", alt: "Priyanka Bharali", tit: "Singer" },
    { id: 4, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607391/SrimantaShekhar_xtzq9z.webp", alt: "Simanta Shekhar", tit: "Singer" },
    { id: 5, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607398/PaponMahanta_hg0shr.webp", alt: "Angaraag Mahanta", tit: "Singer" },
  ];

  const [popupClass, setPopupClass] = useState("translate-x-full");
  const [popupClass2, setPopupClass2] = useState("translate-x-full");

  const closePopup = () => {
    setPopupClass("translate-x-full");
  };

  return (
    <div className=" bg-[#ffffff] overflow-y-hidden overflow-x-hidden flex flex-col no-scrollbar min-h-screen relative top-0 left-0">
      <div className="w-full flex-grow flex flex-col items-center justify-center relative top-0 left-0">
        {/* Fixed Background Images */}


        <div className=" bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742923319/rightPhool_mfgw4o.png')] absolute bg-right bg-contain bg-no-repeat w-[40rem] h-[40rem] top-[48rem] right-0 filter brightness-80 z-10 pointer-events-none"></div>
        <div className=" bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742922616/Phool_qmsxwd.png')] absolute bg-left bg-contain bg-no-repeat w-[40rem] h-[40rem] top-[48rem] left-0 filter brightness-80 z-10 pointer-events-none"></div>

        <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742965608/rightJapi_qlsahv.png')] bg-contain bg-no-repeat w-[44rem] h-[44rem] xl:w-[42rem] xl:h-[42rem] top-[38rem] right-[4rem] xl:right-[55%] filter  z-1 opacity-50 pointer-events-none"></div>
        <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742922616/japi3_2_inf4pz.png')] bg-contain bg-no-repeat w-[44rem] h-[44rem] xl:w-[42rem] xl:h-[42rem] top-[38rem] left-[4rem] xl:left-[55%] filter  opacity-50  z-1 pointer-events-none"></div>

        {/* Heading Upcoming Artists */}
        <div className="w-full h-[10rem] flex flex-col justify-center items-center mt-[4rem]">
          <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg' className="block w-[15rem] h-[4rem] object-cover object-center" alt='heading' />
          <p className="mt-[-0.5rem] h-[1rem] w-[80%] text-3xl font-medium text-[#cb2229] text-center font-moglan">UPCOMING ARTISTS</p>
        </div>

        {/* Upcoming Artists Placeholder */}
        <div className="w-full mt-[4rem] mb-[2rem] flex justify-center items-center relative">
          <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742923319/rightGamusa_aadl38.png')] bg-contain bg-right  bg-no-repeat w-full max-w-[100%] h-[42.575rem] top-[-6rem] right-0 filter brightness-80 opacity-20 z-10 pointer-events-none"></div>
          <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742922617/LeftGamusa_q8plub.png')] bg-contain bg-left bg-no-repeat w-full max-w-[100%] h-[42.575rem] top-[-6rem] left-0  filter brightness-80 opacity-20 z-10 pointer-events-none"></div>
          <div className="relative z-20 rounded-2xl border-2 border-[#cb2229]/40 bg-[#fff8ec]/80 px-10 py-10 backdrop-blur-sm shadow-[0_0_40px_rgba(203,34,41,0.18)]">
            <p className="font-moglan text-center text-4xl lg:text-5xl tracking-[0.14em] text-[#cb2229] animate-pulse">
              REVEALING SOON
            </p>
          </div>
        </div>

        {/* Heading Previous Artists */}
        <div className="w-full h-[10rem] flex flex-col justify-center items-center mt-[4rem]">
          <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg' className="block w-[15rem] h-[4rem] object-cover object-center" alt='heading' />
          <p className="mt-[-0.5rem] h-[1rem] w-[80%] text-3xl font-medium text-[#cb2229] text-center font-moglan">PREVIOUS ARTISTS</p>
        </div>

        {/* Previous Artists Carousel */}
        <div className="w-full h-[48rem] flex justify-center items-center mt-[-4rem] pb-[4rem] overflow-hidden">
          <Carousel>
            {images1.map((image, index) => (
              <div key={index} className="w-[22rem] h-[30rem] flex flex-col justify-start items-center text-center rounded-[15px] shadow-lg mx-[1.5rem] bg-orange-400 bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742961127/GamusaFrame_zbbg30.webp')] bg-[length:100%_100%] hover:-translate-y-2 transition-transform duration-300 scale-70 lg:scale-[0.8] xl:scale-100">
                <img src={image.url} alt={image.alt || `Image ${index + 1}`} className="pt-[2rem] w-[80%] h-[74%] object-cover z-10 rounded-[10px_10px_0_0]" />
                <div className="w-[80%] h-[15%] bg-[#f8ead0] bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/textFrame_bkdxll.webp')] bg-[length:108%_110%] p-2 flex flex-col justify-around items-center">
                  <p className="text-[1.2rem] h-[40%] w-full text-[#b02227] font-normal m-0 pt-2 font-gotham">{image.alt}</p>
                  <p className="h-[30%] w-full text-[0.8rem] text-[#b02227] font-normal pb-4">{image.tit}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Popup 1 */}
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000] transition-transform duration-500 ease-in-out ${popupClass}`}>
          <div className="w-[70vw] h-max flex flex-row justify-center items-center bg-[#f4e0b9] p-[3rem] z-20 relative border-[12px] border-[#e7bb67]">
            <button className="absolute top-[10px] right-[15px] h-[3rem] w-[3rem] text-[2rem] border-none rounded-full bg-transparent cursor-pointer flex justify-center items-center hover:bg-[#e7bb67]" onClick={closePopup}>
              &times;
            </button>
            <div className="w-[40%] h-fit">
              <div className="w-[12rem] h-[16rem] bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742914160/bgSvg_mzeadi.svg')] bg-cover z-25 rounded-[1rem] flex flex-col justify-end items-center">
                <img src='https://res.cloudinary.com/dp4sknsba/image/upload/v1773251606/0c06a19334af7de38a40496e01092e71df322348_g0ympi.jpg' className="inline-block w-[10rem] h-[13rem] object-cover object-center pt-[0.5rem] rounded-[1rem]" alt='Zubeen Garg' />
                <div className="w-[8rem] h-[4rem] z-30 text-[#c35d5a] flex flex-col items-center justify-center text-sm bg-[url('https://res.cloudinary.com/dmezugavw/image/upload/v1743686989/textFrame-Picsart-BackgroundRemover-removebg-preview_foo4lb.webp')] bg-[length:100%_100%] scale-150">
                  <p className='text-[#b02227] font-semibold text-sm'>Zubeen Garg</p>
                  <div className='border-[#b02227] border-t-2 border-dashed h-[0.8px] tablet:h-[1.5px] w-[60%]' />
                  <p className='text-[10px] text-[#b02227] font-semibold'>Band</p>
                </div>
              </div>
            </div>
            <div className="w-[80vw] h-fit flex flex-col justify-center items-center pl-[2rem]">
              <p className="font-moglan text-[3rem] font-[800] text-center p-[1rem] text-[#5f1516] whitespace-nowrap">Zubeen Garg</p>
              <p className="text-[15px] font-gotham text-justify text-[#5f1516] font-[300] indent-[1rem]">
                “আজি কিয় হিয়া কঁপে... (Assamese text abbreviated for brevity, replace with full block from Posua 2025)”
              </p>
              <p className="mt-[1rem] text-[16px] font-gotham text-justify text-[#5f1516] font-[600] indent-[1rem]">
                Spring arrives with a whispering breeze... (English text abbreviated for brevity, replace with full block from Posua 2025)
              </p>
            </div>
          </div>
        </div>

        {/* Popup 2 */}
        <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000] transition-transform duration-500 ease-in-out ${popupClass2}`}>
          <div className="w-[70vw] h-max flex flex-row justify-center items-center bg-[#f4e0b9] p-[3rem] z-20 relative border-[12px] border-[#e7bb67]">
            <button className="absolute top-[10px] right-[15px] h-[3rem] w-[3rem] text-[2rem] border-none rounded-full bg-transparent cursor-pointer flex justify-center items-center hover:bg-[#e7bb67]" onClick={() => {
              setPopupClass2("translate-x-full");
            }}>
              &times;
            </button>
            <div className="w-[40%] h-fit">
              <div className="w-[12rem] h-[16rem] bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742914160/bgSvg_mzeadi.svg')] bg-cover z-25 rounded-[1rem] flex flex-col justify-end items-center">
                <img src='https://res.cloudinary.com/dp4sknsba/image/upload/v1773251606/0c06a19334af7de38a40496e01092e71df322348_g0ympi.jpg' className="inline-block w-[10rem] h-[13rem] object-cover object-center pt-[0.5rem] rounded-[1rem]" alt='Patkai band' />
                <div className="w-[8rem] h-[4rem] z-30 text-[#c35d5a] flex flex-col items-center justify-center text-sm bg-[url('https://res.cloudinary.com/dmezugavw/image/upload/v1743686989/textFrame-Picsart-BackgroundRemover-removebg-preview_foo4lb.webp')] bg-[length:100%_100%] scale-150">
                  <p className='text-[#b02227] font-semibold text-sm'>Zubeen Garg</p>
                  <div className='border-[#b02227] border-t-2 border-dashed h-[0.8px] tablet:h-[1.5px] w-[60%]' />
                  <p className='text-[10px] text-[#b02227] font-semibold'>Band</p>
                </div>
              </div>
            </div>
            <div className="w-[80vw] h-fit flex flex-col justify-center items-center pl-[2rem]">
              <p className="font-moglan text-[3rem] font-[800] text-center p-[1rem] text-[#5f1516] whitespace-nowrap">Zubeen Garg</p>
              <p className="text-[15px] font-gotham text-justify text-[#5f1516] font-[300] indent-[1rem]">
                সূর্য অস্ত যোৱা আৰু সন্ধিয়াৰ মৃদু বতাহে পৃথিৱীৰ প্ৰতিধ্বনি...
              </p>
              <p className="mt-[1rem] text-[16px] font-gotham text-justify text-[#5f1516] font-[600] indent-[1rem]">
                As the sun sets and the evening breeze carries the echoes of our land...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistDesktop;
