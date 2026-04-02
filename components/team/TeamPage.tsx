"use client";

import React from "react";
import UnionBodyCard from "./UnionBodyCard";
import TeamMemberCard from "./TeamMemberCard";

const PageHeader: React.FC = () => (
  <div className="flex flex-col items-center justify-center pb-4 relative w-full mt-4">
    <img
      src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930433/frame1-removebg-preview_5_vfkf5e.webp"
      alt=""
      aria-hidden="true"
      className="w-[120px] sm:w-[150px] md:w-[180px] h-auto object-contain mb-2 sm:mb-4"
    />
    <h1
      className="text-[#c43030] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-wide uppercase text-center"
      style={{ fontFamily: "'MoglanDemo', serif" }}
    >
      TEAM POSUA
    </h1>
  </div>
);

const TeamSectionHeader: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center py-6 sm:py-8 md:py-10 relative w-full group overflow-hidden">
      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930433/frame1-removebg-preview_5_vfkf5e.webp"
        alt=""
        aria-hidden="true"
        className="w-[80px] sm:w-[100px] md:w-[120px] lg:w-[150px] h-auto object-contain mb-3 sm:mb-4 transition-transform duration-500 group-hover:scale-110"
      />

      <div className="flex items-center justify-center gap-2 sm:gap-4 md:gap-10 w-full relative px-2 sm:px-4">
        <img
          src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930429/doo.-removebg-preview_1_jsythx.webp"
          alt=""
          className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] object-contain transition-transform duration-300 group-hover:-translate-x-2"
        />

        <h2
          className="text-[#7a1a1a] text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide transition-colors duration-300 group-hover:text-[#902020] text-center whitespace-nowrap"
          style={{ fontFamily: "'MoglanDemo', serif" }}
        >
          {title}
        </h2>

        <img
          src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930429/bohag_bihu-removebg-preview_1_kju2di.webp"
          alt=""
          className="w-[40px] sm:w-[60px] md:w-[80px] lg:w-[100px] object-contain transition-transform duration-300 group-hover:translate-x-2"
        />
      </div>
    </div>
  );
};

export default function TeamPage() {
  const unionBodyData = [
    {
      name: "Manabjyoti Das",
      role: "Convenor",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952434/MANABJYOTI_DAS_mkl7vy.webp",
    },
  ];

  const tresData = [
    {
      name: "Kaushik Dihingia",
      role: "Treasurer",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952446/KAUSHIK_DIHINGIA_zglniy.webp",
    },
  ];

  const chiefData = [
    {
      name: "Ankur Jyoti Neog",
      role: "Chief Coordinator",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952449/Ankur_Jyoti_Neog_lryreg.webp",
    },
    {
      name: "Pratyashi Nath",
      role: "Chief Coordinator",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952434/Pratyashi_Nath_xa5tj4.webp",
    },
    {
      name: "Nilpaban Kalita",
      role: "Chief Coordinator",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952437/NILPABAN_j2rcy1.webp",
    }
  ];

  const executiveHeadsData = [
    {
      name: "Arindom Sarmah",
      role: "Executive Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952441/ARINDOM_SARMAH_l0ha73.webp",
    },
    {
      name: "Sourav Deka",
      role: "Executive Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952456/SOURAV_DEKA_dkbj2t.webp",
    },
    {
      name: "Akash barua",
      role: "Executive Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952446/akash.executivehead.posua_-_ME_032_Akash_barua_yx4jai.webp",
    },
    {
      name: "Saurov Jyoti Chutia",
      role: "Executive Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952446/Saurov_Jyoti_e0qjkq.webp",
    },
    {
      name: "Silpangana Sandilya",
      role: "Executive Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775057607/exe_new_w20vpo.webp",
    }
  ];

  const techTeamData = [
    {
      name: "Barnil Sarma",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774860603/barnil_s2m0ku.webp",
    },
    {
      name: "Pragya Prabir Ranjan Deka",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dybzo3xly/image/upload/v1775133093/WhatsApp_Image_2026-04-02_at_11.44.03_snep0p.jpg",
    },
    {
      name: "Manash Pratim Goswami",
      role: "Co-Head",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850083/Manash_Pratim_Goswami_-_Manash_Goswami_cgykcj.webp",
    },
    {
      name: "Jitamanyu Phukan",
      role: "Co-Head",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850092/Jitamanyu_Phukan_la3jiu.webp",
    },
    {
      name: "Subrata Lodh",
      role: "Co-Head",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850096/Subrata_Lodh_bhbm8u.webp",
    },
    {
      name: "KALLUL GOGOI",
      role: "Web Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850086/myself1_-_Kallul_Gogoi_-_Kallul_Gogoi_ycw58g.webp",
    },
    {
      name: "Nibir Deka",
      role: "Web Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850084/NibirDeka_2_2412007.jpeg_-_Nibir_Deka_la7woq.webp",
    },
    {
      name: "Dishank Choudhury",
      role: "Web Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850082/Dishank_Choudhury_xgs2eo.webp",
    },
    {
      name: "Sivangi Kashyap",
      role: "Web Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850083/Sivangi_Kashyap__Web_-_Sivangi_Kashyap_dsozk6.webp",
    },
    {
      name: "Rahul Kumar",
      role: "UI/UX Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850101/Rahul_Kumar_rl6irt.webp",
    },
    {
      name: "Mayur Kalita",
      role: "UI/UX Member",
      imageSrc:
        "https://res.cloudinary.com/dffm4zxpc/image/upload/v1774850093/mayur_kalita_jrt7jj.webp",
    }
  ];

  const eventManagementData = [
    {
      name: "Nashif Ahmed",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059787/IMG_1896_-_NASHIF_AHMED_isphns.webp",
    },
    {
      name: "Dibya Pratim Kalita",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775061968/Dibya_Pratim_Kalita__Head_Event_Management_-_Dibya_pratim_Kalita_1_p8orzu.webp",
    },
    {
      name: "Kaushik Talukdar",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059776/Kaushik_Talukdar_Head_Event_Management_-_Kaushik_Talukdar_k7kxfp.webp",
    },
    {
      name: "Manash Jyoti Medhi",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059774/Manash_Medhi_Head_Event_Management_-_EE_150_MANASH_JYOTI_MEDHI_edzc8z.webp",
    },
    {
      name: "Sandipan Nandi",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059771/Sandipan_Nandi_Head_Event_Management_-_Sandipan_Nandi_mof3vo.webp",
    },
    {
      name: "Bitopan Baishya",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059770/Bitopan_Baishya_Head_Decoration_-_Bitopan_Baishya_ustcvl.webp",
    },
    {
      name: "Dishan Medhi",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059768/Dishan_-_ME_074_Dishan_Medhi_zqfxqr.webp",
    },
    {
      name: "Arnab Rajbongshi",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059760/Arnab_Rajbongshi_Head_Event_Management_-_Arnab_Rajbongshi_zidzwt.webp",
    },
    {
      name: "Mirzanur Rahman",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775061518/Mirzanur_Rahman_Head_Event_Management_-_Mirzanur_Rahman_1_fxi2st.webp",
    },
    {
      name: "Abinash Das",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059766/Abinash_Das_Head_Cultural_Rally_-_Abinash_Das_da6rwh.webp",
    }
  ];

  const publicityTeamData = [
    {
      name: "Aniket Dutta",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059752/IMG_5147_Original_-_Aniket_Dutta_topapk.webp",
    },
    {
      name: "Abinash Das",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059766/Abinash_Das_Head_Cultural_Rally_-_Abinash_Das_da6rwh.webp",
    }
  ];

  const marketingTeamData = [
    {
      name: "Sandipan Sarma",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775063295/PXL_20251105_061917521.PORTRAIT_-_Sandipan_Sarma_1_lcons9.webp",
    },
    {
      name: "Mriganka Baishya",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059768/Mriganka_Head_Marketing_-_Mriganka_Baishya_wfxdwg.webp",
    }
  ];

  const infraLogisticsData = [
    {
      name: "Karan Jyoti Baro",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059777/Karanjyotibaro_head_Infraandlogistics_-_KARAN_JYOTI_BARO_osijhk.webp",
    },
    {
      name: "Abinash Das",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059766/Abinash_Das_Head_Cultural_Rally_-_Abinash_Das_da6rwh.webp",
    }
  ];

  const culturalRallyData = [
    {
      name: "Mukut Thakuria",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059773/Mukut_Thakuria__Head__Cultural_Rally_fulfid.webp",
    },
    {
      name: "Smriti Khakolary",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059780/Smriti_Khakolary_Head_decorationteam_-_Smriti_Khakolary_kuqalf.webp",
    },
    {
      name: "Neeharika Rabha",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059780/Neeharika_Rabha_Head_Cultural_Rally_-_ECE_089_Neeharika_Rabha_xe1pyq.webp",
    },
    {
      name: "Jyotishman Mahanta",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059778/Jyotishman_Head_Cultural_rally_-_Jyotishman_Mahanta_ggj41v.webp",
    },
    {
      name: "Zidan Ahmed",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059771/Zidan_Ahmed_Head_Cultural_Rally_-_EE_133_ZIDAN_AHMED_lcuy3x.webp",
    },
    {
      name: "Kashyap Patar",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059771/1772217236327_2_-_EE_014__Kashyap_patar_md4cu6.webp",
    },
    {
      name: "Dhritimaan Hazarika",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775062104/Dhritimaan_Hazarika_Head_Culture_Rally_-_Dhritimaan_Hazarika_1_dlyoe8.webp",
    },
    {
      name: "Dhritiman Baishya",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059770/DhritimanBaishya_Head_CulturalRally_-_Dhritiman_Baishya_syy2jp.webp",
    },
    {
      name: "Abinash Das",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059766/Abinash_Das_Head_Cultural_Rally_-_Abinash_Das_da6rwh.webp",
    },
    {
      name: "Surajit mali",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059757/IMG-20251027-WA0026_-_surajit_mali_wgbpp4.webp",
    },
    {
      name: "Kabirkrishnan Adhikary",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059753/Kabirkrishnan_Head_Rally_-_Kabirkrishnan_Adhikary_w1cl8m.webp",
    }
  ];

  const hospitalityTeamData = [
    {
      name: "Chanakya Thoumoung",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059785/20231227_104203_-_Chanakya_Thoumoung_xdekjt.webp",
    },
    {
      name: "Neeharika Rabha",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059780/Neeharika_Rabha_Head_Cultural_Rally_-_ECE_089_Neeharika_Rabha_xe1pyq.webp",
    },
    {
      name: "Aniket Dutta",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059752/IMG_5147_Original_-_Aniket_Dutta_topapk.webp",
    },
    {
      name: "Akash Neog",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059748/IMG_9496_-_Akash_Neog_qyrcir.webp",
    },
    {
      name: "Abinash Das",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059763/Abinash_Das_Head_Hospitality_-_ABINASH_DAS_mpmz22.webp",
    }
  ];

  const foodTeamData = [
    {
      name: "Nipun Baishya",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059785/Nipun_head_foodteam_-_ME_010_NIPUN_BAISHYA_ko4hln.webp",
    },
    {
      name: "Hirumoni das",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059770/IMG-20250405-WA0425_-_hiru_das_kygvs5.webp",
    }
  ];

  const securityTeamData = [
    {
      name: "Dishan",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059768/Dishan_-_ME_074_Dishan_Medhi_zqfxqr.webp",
    },
    {
      name: "Abinash Das",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059766/Abinash_Das_Head_Cultural_Rally_-_Abinash_Das_da6rwh.webp",
    }
  ];

  // const videographyTeamData = [
  //   // Leave array empty for now until data is provided
  // ];

  const contentTeamData = [
    {
      name: "Dhrubojyoti Rajbongshi",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059776/IMG_2191.JPG_-_Dhrubojyoti_Rajbongshi_nvwfo4.webp",
    }
  ];

  const decorationTeamData = [
    {
      name: "Smriti Khakolary",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059780/Smriti_Khakolary_Head_decorationteam_-_Smriti_Khakolary_kuqalf.webp",
    },
    {
      name: "Koushik Ranjan Das",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059780/Screenshot_20260328_162321_-_Koushik_Das_osv6e9.webp",
    },
    {
      name: "Sanjana Devi",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775062580/Sanjana_Devi__Head__Decoration_team_-_Sanjana_1_i5zbgr.webp",
    },
    {
      name: "Bitopan Baishya",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059770/Bitopan_Baishya_Head_Decoration_-_Bitopan_Baishya_ustcvl.webp",
    },
    {
      name: "Abinash Das",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1775059759/Abinash_Das_Head_Decoration_-_Abinash_Das_edmksq.webp",
    }
  ];

  const designTeamData = [
    {
      name: "Sourav Deka",
      role: "Head",
      imageSrc:
        "https://res.cloudinary.com/dustrkqlj/image/upload/v1774952456/SOURAV_DEKA_dkbj2t.webp",
    }
  ];

  return (
    <main className="min-h-screen w-full bg-white overflow-x-hidden relative flex flex-col items-center">
      <div className="hidden sm:block absolute top-[80px] md:top-[120px] left-0 right-0 h-[4px] sm:h-[6px] bg-[#c08080]/60 z-20 pointer-events-none" />
      <div className="hidden sm:block absolute bottom-[20px] left-0 right-0 h-[4px] sm:h-[6px] bg-[#c08080]/60 z-20 pointer-events-none" />

      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1774017380/Mask_group_mkjmcq.webp"
        alt=""
        aria-hidden="true"
        className="absolute top-[100px] sm:top-[140px] md:top-[180px] left-0 w-[150px] sm:w-[250px] md:w-[400px] lg:w-[650px] opacity-40 pointer-events-none z-[1] mix-blend-multiply"
      />

      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930440/coral-removebg-preview_3_fb97q4.webp"
        alt=""
        aria-hidden="true"
        className="absolute bottom-[600px] sm:bottom-[900px] lg:bottom-[1100px] left-[-2%] w-[120px] sm:w-[200px] md:w-[300px] lg:w-[400px] opacity-70 pointer-events-none z-[0] mix-blend-multiply"
      />

      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930433/8805-removebg-preview_2_xqqoph.webp"
        alt=""
        aria-hidden="true"
        className="absolute top-[800px] sm:top-[1100px] lg:top-[1400px] left-0 w-[100px] sm:w-[150px] md:w-[250px] lg:w-[450px] opacity-65 pointer-events-none z-[0] mix-blend-multiply"
      />

      <img
        src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930438/8805-removebg-preview_2_1_h9ghzv.webp"
        alt=""
        aria-hidden="true"
        className="absolute top-[1000px] sm:top-[1400px] lg:top-[1600px] right-0 w-[100px] sm:w-[150px] md:w-[250px] lg:w-[450px] opacity-65 pointer-events-none z-[0] mix-blend-multiply"
      />

      <div className="w-full max-w-[1150px] relative bg-transparent flex flex-col items-center pt-[60px] sm:pt-[100px] md:pt-[130px]">
        <div className="absolute top-[150px] sm:top-[200px] md:top-[280px] inset-x-0 flex justify-center pointer-events-none z-[0]">
          <img
            src="https://res.cloudinary.com/dffm4zxpc/image/upload/v1773930436/VECTOR_ART__Chinmoy_Sharma-removebg-preview_1_mnnuny.webp"
            alt=""
            aria-hidden="true"
            className="w-[90%] sm:w-[80%] max-w-[800px] h-auto object-contain opacity-70 mix-blend-multiply"
          />
        </div>

        <div className="hidden sm:block absolute top-0 bottom-0 left-0 w-[4px] sm:w-[6px] bg-[#c08080]/60 z-20 pointer-events-none" />
        <div className="hidden sm:block absolute top-0 bottom-0 right-0 w-[4px] sm:w-[6px] bg-[#c08080]/60 z-20 pointer-events-none" />

        <div className="relative z-10 w-full mb-4 px-2">
          <PageHeader />
        </div>

        <div className="px-4 sm:px-8 md:px-12 lg:px-24 text-center mt-2 mb-8 sm:mb-10 z-10 relative max-w-[1000px]">
          <p
            className="text-[#1a1a1a] text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed font-light tracking-wide mix-blend-multiply"
            style={{ fontFamily: "'MoglanDemo', serif" }}
          >
            With the arrival of spring and the departure of winter days, our
            Mother Nature expresses her joy of welcoming the calming
            rejuvenation via greenery and brightness all around her. Our Spring
            Fest, Posua is that venture which nurtures this celebration. This
            spree witnesses everyone coming together to work as a team, be it
            the students, the faculty members and the entire fraternity of NIT
            Silchar into its circle of gaiety and also ensures of breaking all
            the barriers among the crowd and bringing everyone together.
          </p>
        </div>

        {/* --- UNION BODY SECTION --- */}
        <section className="relative w-full py-4 sm:py-6 z-10 mt-2 sm:mt-10">
          <div className="w-full flex justify-center px-4 sm:px-6 md:px-10 mb-8 sm:mb-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 sm:gap-y-14 md:gap-y-16 gap-x-8 sm:gap-x-16 md:gap-x-24 justify-items-center max-w-[1000px] w-full">
              <UnionBodyCard
                name="Prof. Dilip Kumar Baidya"
                role="CHIEF-PATRON"
                imageSrc="https://res.cloudinary.com/dhpqjrbha/image/upload/v1743704061/director_catbvj.webp"
              />
              <UnionBodyCard
                name="Prof. Upendra Kumar"
                role="PATRON"
                imageSrc="https://res.cloudinary.com/dustrkqlj/image/upload/v1775023981/IMG_1753978356688b95f42dcd1_lif9hh.webp"
              />
              <UnionBodyCard
                name="Prof. Rahul Dev Misra"
                role="PRESIDENT"
                imageSrc="https://res.cloudinary.com/dustrkqlj/image/upload/v1775024051/IMG_174134284467cac87c778b1_hcfrgd.webp"
              />
              <UnionBodyCard
                name="Dr Malaya Dutta Borah"
                role="VICE-PRESIDENT"
                imageSrc="https://res.cloudinary.com/dmezugavw/image/upload/v1743618531/malaya_fqmdje.webp"
              />
              <div className="sm:col-span-2 flex justify-center w-full">
                <UnionBodyCard
                  name="Dr. Parikshit Saikia"
                  role="VICE-PRESIDENT"
                  imageSrc="https://res.cloudinary.com/dustrkqlj/image/upload/v1775024122/IMG_1753450173688386bd8119d_ijfcsx.webp"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="CONVENOR" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {unionBodyData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="CHIEF-COORDINATORS" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {chiefData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="TREASURER" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {tresData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="EXECUTIVE HEADS" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {executiveHeadsData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="EVENT MANAGEMENT" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {eventManagementData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="MARKETING TEAM" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {marketingTeamData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="PUBLICITY TEAM" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {publicityTeamData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="INFRA & LOGISTICS TEAM" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {infraLogisticsData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="CULTURAL RALLY" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {culturalRallyData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="HOSPITALITY TEAM" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {hospitalityTeamData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="FOOD TEAM" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {foodTeamData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="SECURITY TEAM" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {securityTeamData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* {videographyTeamData.length > 0 && (
          <section className="relative w-full py-4 sm:py-6 z-10">
            <TeamSectionHeader title="VIDEOGRAPHY TEAM" />
            <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
              <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
                {videographyTeamData.map((member, i) => (
                  <TeamMemberCard key={i} {...member} />
                ))}
              </div>
            </div>
          </section>
        )} */}

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="CONTENT TEAM" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {contentTeamData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="DECORATION TEAM" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {decorationTeamData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="DESIGN TEAM" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {designTeamData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>

          <section className="relative w-full py-4 sm:py-6 z-10">
          <TeamSectionHeader title="Tech Team" />
          <div className="w-full flex justify-center px-4 mt-2 sm:mt-4 mb-10 sm:mb-16">
            <div className="flex flex-wrap justify-center gap-y-10 sm:gap-y-12 md:gap-y-14 gap-x-4 sm:gap-x-8 md:gap-x-10 max-w-[1150px] w-full">
              {techTeamData.map((member, i) => (
                <TeamMemberCard key={i} {...member} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
