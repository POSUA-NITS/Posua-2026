"use client";
import React, { useState } from "react";
import Carousel from '../../components/Carousel';

const ArtistMobileView = () => {
  const [popupClass, setPopupClass] = useState("translate-x-full");
  const [popupClass2, setPopupClass2] = useState("translate-x-full");

  const closePopup = () => {
    setPopupClass("translate-x-full");
  };

  const closePopup2 = () => {
    setPopupClass2("translate-x-full");
  };

  const images1 = [
    { id: 1, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509260/1_hvqht0.webp", alt: "Nilotpal Borah", tit: "Singer" },
    { id: 2, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/ZubeenGarg_ybmmad.webp", alt: "Zubeen Garg", tit: "Singer" },
    { id: 3, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/Priyanka_Bharali_fzetdl.webp", alt: "Priyanka Bharali", tit: "Singer" },
    { id: 4, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607391/SrimantaShekhar_xtzq9z.webp", alt: "Simanta Shekhar", tit: "Singer" },
    { id: 5, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607398/PaponMahanta_hg0shr.webp", alt: "Angaraag Mahanta", tit: "Singer" },
  ];

  return (
    <div className=" min-h-screen m-0 overflow-x-hidden overflow-y-scroll bg-[#ffffff] flex flex-col no-scrollbar">
      <div className="w-full min-h-screen flex flex-col items-center flex-grow relative pb-[4rem] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742923319/rightGamusa_aadl38.png')] bg-contain bg-right  bg-no-repeat w-[45rem] h-[25rem] top-[7rem] right-0 filter brightness-80 opacity-20 z-10 pointer-events-none"></div>
        <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742922617/LeftGamusa_q8plub.png')] bg-contain bg-left bg-no-repeat w-[45rem] h-[25rem] top-[7rem] left-0  filter brightness-80 opacity-20 z-10 pointer-events-none"></div>

        <div className=" bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742923319/rightPhool_mfgw4o.png')] absolute bg-right bg-contain bg-no-repeat w-[20rem] h-[20rem] top-[30rem] right-0 filter brightness-80 z-10 pointer-events-none"></div>
        <div className=" bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742922616/Phool_qmsxwd.png')] absolute bg-left bg-contain bg-no-repeat w-[20rem] h-[20rem] top-[30rem] left-0 filter brightness-80 z-10 pointer-events-none"></div>

        <div className=" bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742998824/taal_hve4gt.webp')] absolute bg-left bg-contain bg-no-repeat w-[14rem] h-[20rem] top-[80rem] right-0 filter brightness-80 z-1 pointer-events-none"></div>


        <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742965608/rightJapi_qlsahv.png')] bg-contain bg-no-repeat w-[14rem] h-[14rem] xl:w-[12rem] xl:h-[12rem] top-[58rem] right-[10rem] xl:right-[55%] filter  z-1 opacity-50 pointer-events-none"></div>
        <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742922616/japi3_2_inf4pz.png')] bg-contain bg-no-repeat w-[14rem] h-[14rem] xl:w-[12rem] xl:h-[12rem] top-[58rem] left-[10rem] xl:left-[55%] filter  opacity-50  z-1 pointer-events-none"></div>
        {/* Section 1 Upcoming Artists */}
        <div className="w-full h-[10rem] flex flex-col justify-center items-center mt-[4rem]">
          <img
            src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg"
            className="inline-block w-[15rem] h-[4rem] object-cover object-center"
            alt="Heading Image"
          />
          <p className="mt-[-0.5rem] h-[1rem] w-[80%] text-3xl font-medium font-moglan text-[#cb2229] text-center z-[4]">
            UPCOMING ARTISTS
          </p>
        </div>

        {/* Upcoming Artists Placeholder */}
        <div className="w-full flex justify-center items-center mt-[2rem] mb-[2rem] px-4 relative z-20">
          <div className="rounded-2xl border-2 border-[#cb2229]/40 bg-[#fff8ec]/85 px-6 py-8 shadow-[0_0_24px_rgba(203,34,41,0.18)] backdrop-blur-sm">
            <p className="font-moglan text-center text-3xl sm:text-4xl tracking-[0.12em] text-[#cb2229] animate-pulse">
              REVEALING SOON
            </p>
          </div>
        </div>

        {/* Section 3 Previous Artists Heading */}
        <div className="w-full h-[10rem] flex flex-col justify-center items-center mt-[1rem]">
          <img
            src="https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg"
            className="inline-block w-[15rem] h-[4rem] object-cover object-center"
            alt="Heading Image"
          />
          <p className="mt-[-0.5rem] h-[1rem] w-[80%] text-3xl font-medium font-moglan text-[#cb2229] text-center z-4">
            PREVIOUS ARTISTS
          </p>
        </div>

        {/* Section 4 Carousel */}
        <div className="w-full h-[30rem] flex justify-center items-center mt-[0rem] mb-[2rem]">
          <div className="w-full h-[30rem] flex justify-center items-center pointer-events-auto">
            <Carousel>
              {images1.map((image, index) => (
                <div key={index} className="w-[12rem] h-[18rem] flex flex-col justify-start items-center text-center rounded-[15px] shadow-lg bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742961127/GamusaFrame_zbbg30.webp')] bg-[length:100%_100%] hover:-translate-y-2 transition-transform duration-300 pointer-events-auto">
                  <img
                    src={image.url}
                    alt={image.alt || `Image ${index + 1}`}
                    className="pt-[2rem] w-[80%] h-[74%] object-cover z-10 rounded-[10px_10px_0_0]"
                  />
                  <div className="w-[80%] h-[15%] bg-[#f8ead0] bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/textFrame_bkdxll.webp')] bg-[length:108%_110%] p-2 flex flex-col justify-around items-center">
                    <p className="text-[0.6rem] h-[40%] w-full text-[#b02227] font-normal m-0 font-gotham">{image.alt}</p>
                    <p className="h-[30%] w-full text-[0.4rem] text-[#b02227] font-normal">{image.tit}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>

        {/* Popup 1 */}
        <div className={`fixed top-0 left-0 w-full h-[100dvh] flex justify-center items-center z-[1000] transition-transform duration-500 ease-in-out ${popupClass} bg-black/40 backdrop-blur-sm`}>
          <div className="w-[85vw] max-h-[85vh] overflow-y-auto flex flex-col justify-start items-center bg-[#f4e0b9] p-[2rem] z-20 relative border-[8px] border-[#e7bb67] rounded-xl no-scrollbar">
            <button className="absolute top-[5px] right-[5px] h-[2.5rem] w-[2.5rem] text-[2.5rem] leading-none border-none rounded-full bg-transparent cursor-pointer flex justify-center items-center hover:bg-[#e7bb67] text-[#5f1516]" onClick={closePopup}>
              &times;
            </button>
            <div className="w-[12rem] h-[16rem] bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742914160/bgSvg_mzeadi.svg')] bg-cover z-25 rounded-[1rem] flex flex-col justify-end items-center mt-2">
              <img src='https://res.cloudinary.com/dp4sknsba/image/upload/v1773251606/0c06a19334af7de38a40496e01092e71df322348_g0ympi.webp' className="inline-block w-[10rem] h-[13rem] object-cover object-center pt-[0.5rem] rounded-[1rem]" alt='Zubeen Garg' />
              <div className="w-[8rem] h-[4rem] z-30 text-[#c35d5a] flex flex-col items-center justify-center text-sm bg-[url('https://res.cloudinary.com/dmezugavw/image/upload/v1743686989/textFrame-Picsart-BackgroundRemover-removebg-preview_foo4lb.webp')] bg-[length:100%_100%] scale-150">
                <p className="text-[#b02227] font-semibold text-[10px]">Zubeen Garg</p>
                <div className='border-[#c35d5a] border-t-2 border-dashed h-[0.8px] w-[80%]' />
                <p className="text-[#b02227] font-semibold text-[8px]">Singer</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-6">
              <p className="font-moglan text-[2.2rem] font-[800] text-center text-[#5f1516] leading-tight">Zubeen Garg</p>
              <p className="text-[14px] font-gotham text-justify text-[#5f1516] font-[300] mt-4 max-w-full">
                “আজি কিয় হিয়া কঁপে... (Assamese text abbreviated for brevity, replace with full block from Posua 2025)”
              </p>
              <p className="mt-[1rem] text-[14px] font-gotham text-justify text-[#5f1516] font-[600] max-w-full">
                Spring arrives with a whispering breeze... (English text abbreviated for brevity, replace with full block from Posua 2025)
              </p>
            </div>
          </div>
        </div>

        {/* Popup 2 */}
        <div className={`fixed top-0 left-0 w-full h-[100dvh] flex justify-center items-center z-[1000] transition-transform duration-500 ease-in-out ${popupClass2} bg-black/40 backdrop-blur-sm`}>
          <div className="w-[85vw] max-h-[85vh] overflow-y-auto flex flex-col justify-start items-center bg-[#f4e0b9] p-[2rem] z-20 relative border-[8px] border-[#e7bb67] rounded-xl no-scrollbar">
            <button className="absolute top-[5px] right-[5px] h-[2.5rem] w-[2.5rem] text-[2.5rem] leading-none border-none rounded-full bg-transparent cursor-pointer flex justify-center items-center hover:bg-[#e7bb67] text-[#5f1516]" onClick={closePopup2}>
              &times;
            </button>
            <div className="w-[12rem] h-[16rem] bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742914160/bgSvg_mzeadi.svg')] bg-cover z-25 rounded-[1rem] flex flex-col justify-end items-center mt-2">
              <img src='https://res.cloudinary.com/dp4sknsba/image/upload/v1773251606/0c06a19334af7de38a40496e01092e71df322348_g0ympi.webp' className="inline-block w-[10rem] h-[13rem] object-cover object-center pt-[0.5rem] rounded-[1rem]" alt='Patkai band' />
              <div className="w-[8rem] h-[4rem] z-30 text-[#c35d5a] flex flex-col items-center justify-center text-sm bg-[url('https://res.cloudinary.com/dmezugavw/image/upload/v1743686989/textFrame-Picsart-BackgroundRemover-removebg-preview_foo4lb.webp')] bg-[length:100%_100%] scale-150">
                <p className="text-[#b02227] font-semibold text-[10px]">Zubeen Garg</p>
                <div className='border-[#c35d5a] border-t-2 border-dashed h-[0.8px] w-[80%]' />
                <p className="text-[#b02227] font-semibold text-[8px]">Band</p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center mt-6">
              <p className="font-moglan text-[2.2rem] font-[800] text-center text-[#5f1516] leading-tight">Patkai</p>
              <p className="text-[14px] font-gotham text-justify text-[#5f1516] font-[300] mt-4 max-w-full">
                সূর্য অস্ত যোৱা আৰু সন্ধিয়াৰ মৃদু বতাহে পৃথিৱীৰ প্ৰতিধ্বনি...
              </p>
              <p className="mt-[1rem] text-[14px] font-gotham text-justify text-[#5f1516] font-[600] max-w-full">
                As the sun sets and the evening breeze carries the echoes of our land...
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ArtistMobileView;

