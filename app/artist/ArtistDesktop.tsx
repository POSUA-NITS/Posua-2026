"use client";
import React, { useState, useRef } from 'react';
import Carousel from '../../components/Carousel';
import { useSong } from '../../components/providers/song-context';

const ArtistDesktop = () => {
  const images1 = [
    { id: 1, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743509260/1_hvqht0.webp", alt: "Nilotpal Borah", tit: "Singer" },
    { id: 2, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/ZubeenGarg_ybmmad.webp", alt: "Zubeen Garg", tit: "Singer" },
    { id: 3, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607390/Priyanka_Bharali_fzetdl.webp", alt: "Priyanka Bharali", tit: "Singer" },
    { id: 4, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607391/SrimantaShekhar_xtzq9z.webp", alt: "Simanta Shekhar", tit: "Singer" },
  //  { id: 5, url: "https://res.cloudinary.com/dybzo3xly/image/upload/v1743607398/PaponMahanta_hg0shr.webp", alt: "Angaraag Mahanta", tit: "Singer" },
  ];

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupClass, setPopupClass] = useState("translate-x-full");

  const { pauseSong, startSong, isPlaying } = useSong();
  const upoharRef = useRef<HTMLAudioElement | null>(null);
  const akakheRef = useRef<HTMLAudioElement | null>(null);
  const bgWasPlaying = useRef(false);
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);

  const getAudio = (track: string) => {
    if (typeof window === 'undefined') return null;
    if (track === 'upohar') {
      if (!upoharRef.current) {
        const audio = new Audio('/Upohar.mp3');
        audio.loop = false;
        upoharRef.current = audio;
      }
      return upoharRef.current;
    } else if (track === 'akakhe') {
      if (!akakheRef.current) {
        const audio = new Audio('/Akakhe Botahe.mp3');
        audio.loop = false;
        akakheRef.current = audio;
      }
      return akakheRef.current;
    }
    return null;
  };

  const openPopup = (artist: string) => {
    bgWasPlaying.current = isPlaying;
    if (isPlaying) pauseSong();
    
    const audioTrack = artist === 'bishrut' ? 'upohar' : 'akakhe';
    const audio = getAudio(audioTrack);
    if (audio) {
      audio.currentTime = 0;
      void audio.play().catch(() => { });
    }
    
    setSelectedArtist(artist);
    setIsPopupOpen(true);
    setTimeout(() => {
      setPopupClass("translate-x-0");
    }, 10);
  };

  const closePopup = () => {
    const audioTrack = selectedArtist === 'bishrut' ? 'upohar' : 'akakhe';
    const audio = getAudio(audioTrack);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    if (bgWasPlaying.current) startSong();
    setPopupClass("translate-x-full");
    setTimeout(() => {
      setIsPopupOpen(false);
      setSelectedArtist(null);
    }, 500);
  };


  return (
    <div className="w-screen bg-[#ffffff] overflow-y-scroll overflow-x-hidden flex flex-col no-scrollbar min-h-screen">
      <div className="w-full flex-grow flex flex-col items-center justify-start relative">
        {/* Fixed Background Images */}


        <div className=" bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742923319/rightPhool_mfgw4o.png')] absolute bg-right bg-contain bg-no-repeat w-[40rem] h-[40rem] top-[48rem] right-0 filter brightness-80 z-10 pointer-events-none"></div>
        <div className=" bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742922616/Phool_qmsxwd.png')] absolute bg-left bg-contain bg-no-repeat w-[40rem] h-[40rem] top-[48rem] left-0 filter brightness-80 z-10 pointer-events-none"></div>

        <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742965608/rightJapi_qlsahv.png')] bg-contain bg-no-repeat w-[44rem] h-[44rem] xl:w-[42rem] xl:h-[42rem] top-[38rem] right-[4rem] xl:right-[55%] filter  z-1 opacity-50 pointer-events-none"></div>
        <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742922616/japi3_2_inf4pz.png')] bg-contain bg-no-repeat w-[44rem] h-[44rem] xl:w-[42rem] xl:h-[42rem] top-[38rem] left-[4rem] xl:left-[55%] filter  opacity-50  z-1 pointer-events-none"></div>

        {/* Heading Upcoming Artists */}
        <div className="w-full h-[10rem] flex flex-col justify-center items-center mt-[4rem]">
          <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg' className="block w-[15rem] h-[4rem] object-cover object-center" alt='heading' />
          <p className="mt-[-0.5rem] h-[1rem] w-[80%] text-3xl font-medium text-[#cb2229] text-center font-moglan relative z-20">UPCOMING ARTISTS</p>
        </div>

        {/* Artist Wrapper Grid */}
        <div className="w-full h-auto min-h-[16rem] flex justify-center items-center mt-[8rem] lg:mt-[5rem] gap-12 lg:gap-8 flex-col lg:flex-row">
          <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742923319/rightGamusa_aadl38.png')] bg-contain bg-right  bg-no-repeat w-[75.689rem] h-[42.575rem] top-[4rem] right-0 filter brightness-80 opacity-20 z-10 pointer-events-none"></div>
          <div className="absolute bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742922617/LeftGamusa_q8plub.png')] bg-contain bg-left bg-no-repeat w-[75.689rem] h-[42.575rem] top-[4rem] left-0  filter brightness-80 opacity-20 z-10 pointer-events-none"></div>
          {/* Artist 1 */}
          <div className="w-[45rem] h-[16rem] flex justify-center items-start transition-transform duration-300 cursor-pointer group scale-75 lg:scale-100 xl:scale-100 hover:scale-90 lg:hover:scale-110" onClick={() => openPopup('bishrut')}>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className="mt-[1.05rem] w-[6rem] h-[6rem] object-cover object-top -rotate-45 mix-blend-multiply -z-10 opacity-0 group-hover:opacity-100 transition-opacity" alt='leftMusic' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className="inline-block mt-[1.05rem] w-[6rem] h-[6rem] -mr-[0.5rem] object-cover object-top transition-all duration-300 group-hover:-mr-[1rem] group-hover:scale-105 group-hover:rotate-[30deg]" alt='LeftPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg' className="mt-[2rem] inline-block w-[8rem] h-[16rem] -ml-[2rem] -mr-[2rem] object-fill object-center scale-150" alt='LeftDhol' />

            <div className="w-[12rem] h-[16rem] bg-[#b02227] bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742914160/bgSvg_mzeadi.svg')] bg-[length:100%_100%] z-20 scale-125 rounded-lg flex flex-col justify-end items-center transition-transform duration-300">
              <img src='https://instagram.fgau4-1.fna.fbcdn.net/v/t39.30808-6/469104934_18465127516011645_8070797185138041947_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzMyMTQ1ODMyMDU2MDA2MDU1NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=cWneImrhUs4Q7kNvwFl5jEK&_nc_oc=AdrMippDSr9gscqRtSkY2qR0EMXhhXGzjoOzLTRc1N7GPCpp0uG2sTCkZS86W0_YHVE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgau4-1.fna&_nc_gid=Y3tJVlSRkNCjTsH7ei_oOQ&_nc_ss=7a32e&oh=00_Af1WOZ6zhv9V22Exc7xF2rrP7FVcDFhuRkzPy7SFVFnGHg&oe=69D30415' className="inline-block w-[11rem] h-[13rem] object-cover object-center pt-[0.7rem] rounded-lg" alt='Zubeen Garg' />
              <div className="w-[12rem] h-[3rem] z-30 text-[#c35d5a] bg-[url('https://res.cloudinary.com/dmezugavw/image/upload/v1743686989/textFrame-Picsart-BackgroundRemover-removebg-preview_foo4lb.webp')] bg-[length:100%_100%] flex flex-col items-center justify-center">
                <p className='text-[#b02227] font-semibold text-sm'>Bishrut Saikia</p>
                <div className='border-[#b02227] border-t-2 border-dashed h-[0.8px] tablet:h-[1.5px] w-[60%]' />
                <p className='text-[10px] text-[#b02227] font-semibold'>Singer</p>
              </div>
            </div>

            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/RightDhol_wvr36b.svg' className="-mr-[2rem] -ml-[2rem] inline-block w-[8rem] h-[20rem] object-fill object-center scale-150 z-10" alt='RightDhol' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/papRight_vdsite.svg' className="inline-block mt-[1.05rem] w-[6rem] h-[6rem] -ml-[0.5rem] object-cover object-top transition-all duration-300 group-hover:-ml-[1rem] group-hover:scale-105 group-hover:-rotate-[30deg]" alt='RightPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className="mt-[1.05rem] w-[6rem] h-[6rem] object-cover object-top rotate-45 mix-blend-multiply -z-10 opacity-0 group-hover:opacity-100 transition-opacity" alt='rightMusic' />
          </div>

          {/* Artist 2 — Subasana Dutta */}
          <div className="w-[45rem] h-[16rem] flex justify-center items-start transition-transform duration-300 cursor-pointer group scale-75 lg:scale-100 xl:scale-100 hover:scale-90 lg:hover:scale-110" onClick={() => openPopup('subasana')}>
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className="mt-[1.05rem] w-[6rem] h-[6rem] object-cover object-top -rotate-45 mix-blend-multiply -z-10 opacity-0 group-hover:opacity-100 transition-opacity" alt='leftMusic' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914466/papLeft_esh2ke.svg' className="inline-block mt-[1.05rem] w-[6rem] h-[6rem] -mr-[0.5rem] object-cover object-top transition-all duration-300 group-hover:-mr-[1rem] group-hover:scale-105 group-hover:rotate-[30deg]" alt='LeftPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914464/LeftDhol_mqch8f.svg' className="mt-[2rem] inline-block w-[8rem] h-[16rem] -ml-[2rem] -mr-[2rem] object-fill object-center scale-150" alt='LeftDhol' />

            <div className="w-[12rem] h-[16rem] bg-[#b02227] bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742914160/bgSvg_mzeadi.svg')] bg-[length:100%_100%] z-20 scale-125 rounded-lg flex flex-col justify-end items-center transition-transform duration-300">
              <img src='https://instagram.fgau4-1.fna.fbcdn.net/v/t51.82787-15/541945920_18396622597186112_3595118594704550435_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=106&ig_cache_key=MzcxNTU4NjI2MTU1OTQ3MjYzMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=NCFLwzc7QCMQ7kNvwH3KNDv&_nc_oc=AdphMYtp6hqbhProo4_X4fGwiLUGWAUnk99lqeRRMFaGDWXM9_cvJxl6JLcfWoIqr8A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgau4-1.fna&_nc_gid=IJQ8JGIEP1--M5YGNGixsg&_nc_ss=7a32e&oh=00_Af3d9q6iuJxnDZLB4duBXG0ymF-daQMSZ0aiHPm4DUYyVw&oe=69D5379E' className="inline-block w-[11rem] h-[13rem] object-cover object-center pt-[0.7rem] rounded-lg" alt='Subasana Dutta' />
              <div className="w-[12rem] h-[3rem] z-30 text-[#c35d5a] bg-[url('https://res.cloudinary.com/dmezugavw/image/upload/v1743686989/textFrame-Picsart-BackgroundRemover-removebg-preview_foo4lb.webp')] bg-[length:100%_100%] flex flex-col items-center justify-center">
                <p className='text-[#b02227] font-semibold text-sm'>Subasana Dutta</p>
                <div className='border-[#b02227] border-t-2 border-dashed h-[0.8px] tablet:h-[1.5px] w-[60%]' />
                <p className='text-[10px] text-[#b02227] font-semibold'>Singer</p>
              </div>
            </div>

            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914468/RightDhol_wvr36b.svg' className="-mr-[2rem] -ml-[2rem] inline-block w-[8rem] h-[20rem] object-fill object-center scale-150 z-10" alt='RightDhol' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742914467/papRight_vdsite.svg' className="inline-block mt-[1.05rem] w-[6rem] h-[6rem] -ml-[0.5rem] object-cover object-top transition-all duration-300 group-hover:-ml-[1rem] group-hover:scale-105 group-hover:-rotate-[30deg]" alt='RightPepa' />
            <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742922021/Music-ezgif.com-gif-maker_e5ygsd.gif' className="mt-[1.05rem] w-[6rem] h-[6rem] object-cover object-top rotate-45 mix-blend-multiply -z-10 opacity-0 group-hover:opacity-100 transition-opacity" alt='rightMusic' />
          </div>
        </div>

        {/* Heading Previous Artists */}
        <div className="w-full h-[10rem] flex flex-col justify-center items-center mt-[4rem]">
          <img src='https://res.cloudinary.com/dybzo3xly/image/upload/v1742913661/Heading_ndgrgs.svg' className="block w-[15rem] h-[4rem] object-cover object-center" alt='heading' />
          <p className="mt-[-0.5rem] h-[1rem] w-[80%] text-3xl font-medium text-[#cb2229] text-center font-moglan relative z-20">PREVIOUS ARTISTS</p>
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
        {isPopupOpen && (
          <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center z-[1000] transition-transform duration-500 ease-in-out ${popupClass} bg-black/40 backdrop-blur-sm`} onClick={closePopup}>
            <div className="w-[80vw] max-w-[1200px] max-h-[85vh] flex flex-row justify-start items-start bg-[#f4e0b9] p-[3rem] z-20 relative border-[12px] border-[#e7bb67]  pr-3 bg-[#f4e0b9] rounded-xl shadow-xl rounded-[1rem]" onClick={(e) => e.stopPropagation()}>
              <button className="absolute top-[10px] right-[15px] h-[3rem] w-[3rem] text-[2rem] border-none rounded-full bg-transparent cursor-pointer flex justify-center items-center hover:bg-[#e7bb67] text-[#5f1516] z-[50]" onClick={closePopup}>
                &times;
              </button>
              
              {/* Left: Image Container */}
              <div className="w-[30%] flex-shrink-0 flex justify-center items-start pt-[2rem]">
                <div className="w-[12rem] h-[16rem] bg-[url('https://res.cloudinary.com/dybzo3xly/image/upload/v1742914160/bgSvg_mzeadi.svg')] bg-cover z-25 rounded-[1rem] flex flex-col justify-end items-center">
                  <img src={selectedArtist === 'bishrut' ? 
                    'https://instagram.fgau4-1.fna.fbcdn.net/v/t39.30808-6/469104934_18465127516011645_8070797185138041947_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=101&ig_cache_key=MzMyMTQ1ODMyMDU2MDA2MDU1NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTgwMC5zZHIuQzMifQ%3D%3D&_nc_ohc=cWneImrhUs4Q7kNvwFl5jEK&_nc_oc=AdrMippDSr9gscqRtSkY2qR0EMXhhXGzjoOzLTRc1N7GPCpp0uG2sTCkZS86W0_YHVE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgau4-1.fna&_nc_gid=Y3tJVlSRkNCjTsH7ei_oOQ&_nc_ss=7a32e&oh=00_Af1WOZ6zhv9V22Exc7xF2rrP7FVcDFhuRkzPy7SFVFnGHg&oe=69D30415' : 'https://instagram.fgau4-1.fna.fbcdn.net/v/t51.82787-15/541945920_18396622597186112_3595118594704550435_n.jpg?stp=dst-jpg_e35_p640x640_sh0.08_tt6&_nc_cat=106&ig_cache_key=MzcxNTU4NjI2MTU1OTQ3MjYzMw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=NCFLwzc7QCMQ7kNvwH3KNDv&_nc_oc=AdphMYtp6hqbhProo4_X4fGwiLUGWAUnk99lqeRRMFaGDWXM9_cvJxl6JLcfWoIqr8A&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fgau4-1.fna&_nc_gid=IJQ8JGIEP1--M5YGNGixsg&_nc_ss=7a32e&oh=00_Af3d9q6iuJxnDZLB4duBXG0ymF-daQMSZ0aiHPm4DUYyVw&oe=69D5379E'} className="inline-block w-[10rem] h-[13rem] object-cover object-center pt-[0.5rem] rounded-[1rem]" alt={selectedArtist === 'bishrut' ? 'Bishrut Saikia' : 'Subasana Dutta'} />
                  <div className="w-[8rem] h-[4rem] z-30 text-[#c35d5a] flex flex-col items-center justify-center text-sm bg-[url('https://res.cloudinary.com/dmezugavw/image/upload/v1743686989/textFrame-Picsart-BackgroundRemover-removebg-preview_foo4lb.webp')] bg-[length:100%_100%] scale-150">
                    <p className='text-[#b02227] font-semibold text-sm'>{selectedArtist === 'bishrut' ? 'Bishrut Saikia' : 'Subasana Dutta'}</p>
                    <div className='border-[#b02227] border-t-2 border-dashed h-[0.8px] tablet:h-[1.5px] w-[60%]' />
                    <p className='text-[10px] text-[#b02227] font-semibold'>Singer</p>
                  </div>
                </div>
              </div>

              {/* Right: Text Container */}
              <div className="flex-1 pl-[2rem] flex flex-col justify-start items-center relative">
                <p className="font-moglan text-[3rem] font-[800] text-center p-[1rem] text-[#5f1516] whitespace-nowrap">{selectedArtist === 'bishrut' ? 'Bishrut Saikia' : 'Subasana Dutta'}</p>
                
                <p className="text-[15px] font-gotham text-justify text-[#5f1516] font-[300] indent-[1rem]">
                  {selectedArtist === 'bishrut' 
                    ? `শীতল দুই ওঁঠৰ স্মৃতি সোঁৱৰাই, পৰশৰ পিয়াসী হুমুনিয়াই কৈ যায়,পূৰ্ণতাৰে আৱৰাৰ দৰে তুমিও যে মোক কিমান ভাল পোৱা। দুচকুতে দুচকু থলে, লাজে চকু ঢাকি যায়।কেতিয়াবা তোমাক কন্দুৱাও যদি ক্ষমা কৰি দিবা তুমি, তুমি যেন উপহাৰ এটি। উপহাৰৰ দৰে সংগীতৰ সৃষ্টিৰে সাম্প্ৰতিক সময়ত নৱ প্ৰজন্মৰ হৃদয়ত এক সুৰৰ আলোড়নেৰে প্ৰেম ভালপোৱাৰ সুবাস বিয়পাই এক বিশেষ স্থান দখল কৰা প্ৰতিভাশালী কণ্ঠশিল্পী বিশ্ৰুত শইকীয়া, এইবাৰ ‘পছোৱা’ৰ মঞ্চলৈ আহি আছে এক শক্তিশালী আৰু বৈচিত্র্যময় সুৰৰে কিছু ক্ষণ জীপাল কৰি তুলিবলৈ।`
                    : `"আকাশে বতাহে তোমাকে দেখিছোঁ, অচিনা আৱেশত ওপচি পৰিছোঁ। কিযে ঢৌ উঠিছে, বুকুতে সঘনে, কঁপনি তুলিছে, দেহাত শিহৰণে.."
প্ৰিয়জনৰ মৌন উপস্থিতি আকাশ-বতাহৰ প্ৰতিটো কোণত অনুভৱ কৰিবলৈ আপোনাৰ হৃদয় ব্যাকুল নে? অসমীয়া সংগীত আকাশৰ এক উজ্জ্বল নক্ষত্ৰ, যাৰ কণ্ঠত নিমিষতে প্ৰাণ পাই উঠে হেজাৰজনৰ আৱেগ । এটি বিশেষ সুৰীয়া উপহাৰ লৈ এইবাৰ 'পছোৱা'ৰ মঞ্চলৈ আহি আছে সকলোৰে মৰমৰ সুবাসনা দত্ত।`}
                </p>
                <p className="mt-[1rem] text-[16px] font-gotham text-justify text-[#5f1516] font-[600] indent-[1rem]">
                  {selectedArtist === 'bishrut'
                    ? `The memory of those gentle lips lingers on, whispering a quiet longing for your touch softly reminding me how deeply you love me, like a warmth that wraps around completeness itself. When our eyes meet, shyness takes over, and the gaze turns away. If ever I make you cry, forgive me for you are nothing less than a precious gift in my life.
                       With melodies as heartfelt as a gift, the immensely talented singer Bishrut Saikia who has captured the hearts of the younger generation with his soulful voice and romantic aura is all set to grace the stage of Posua this time.`
                    : `Subhasana Dutta, a versatile and soulful singer known for her ability to bring deep emotions to life through her melodious voice, is all set to grace the stage of Posua 2026 with a performance that promises to be nothing short of magical. There’s a gentle warmth in her voice, something that doesn’t just reach your ears, but settles softly in your heart. Her music has a lovely way of weaving the past and present into something truly timeless and unforgettable.`}
                </p>
              </div>
              
            </div>
          </div>
        )}


      </div>
    </div>
  );
};

export default ArtistDesktop;