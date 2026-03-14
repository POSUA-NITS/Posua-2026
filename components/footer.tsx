import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative w-full bg-white overflow-hidden mt-10 md:mt-20">
      <div className="relative w-full">
        <Image
          src="/assets/images/boat.gif"
          alt="footer background"
          width={1920}
          height={600}
          className="w-full min-h-[650px] md:min-h-[450px] object-cover object-[60%_center] sm:object-center opacity-60"
          unoptimized
        />
        <div
          className="
          absolute inset-0 w-full
          bg-gradient-to-b
          from-white/95
          via-white/40
          to-transparent
          pointer-events-none
          z-10
        "
        />

        {/* Footer Content Layer */}
        <div className="absolute inset-0 z-30 flex flex-col justify-between p-6 sm:p-10 md:p-20">
          {/* Logo */}
          <div className="mb-8 md:mb-0">
            <Image
              src="/assets/images/footer_posua.png"
              alt="footer logo"
              width={400}
              height={200}
              className="max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-auto"
              unoptimized
            />
          </div>

          <div className="flex flex-col gap-10">
            {/* Social Media & Contact Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-6 w-full md:w-[70%] text-[#6B2C2C]">
              {/* Socials */}
              <ul className="font-bold space-y-2 text-sm md:text-base">
                <li>
                  <Link
                    href="https://www.instagram.com/posua_nits/"
                    target="_blank"
                    className="hover:underline transition-all"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/nitsposua"
                    target="_blank"
                    className="hover:underline transition-all"
                  >
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com"
                    target="_blank"
                    className="hover:underline transition-all"
                  >
                    X
                  </Link>
                </li>
              </ul>

              {/* Address */}
              <ul className="font-bold space-y-1 text-sm md:text-base">
                <li>NIT Silchar</li>
                <li>NIT Road, Fakirtilla</li>
                <li>Silchar, Assam, 788010</li>
              </ul>

              {/* Contacts */}
              <div className="space-y-4 md:space-y-3">
                <div>
                  <h2 className="font-bold text-sm md:text-base text-[#6B2C2C]">
                    John Doe
                  </h2>
                  <a
                    href="tel:+919897589326"
                    className="text-xs md:text-sm text-[#CB2229] font-semibold hover:underline"
                  >
                    +91 98975 89326
                  </a>
                </div>
                <div>
                  <h2 className="font-bold text-sm md:text-base text-[#6B2C2C]">
                    Lisa Williams
                  </h2>
                  <a
                    href="tel:+919876543210"
                    className="text-xs md:text-sm text-[#CB2229] font-semibold hover:underline"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Email Section */}
            <div className="w-full max-w-md sm:pb-4">
              <div className="flex items-center border-b border-[#6B2C2C]/40 pb-1 mb-4">
                <label className="font-bold text-[#6B2C2C] mr-4">Email*</label>
                <a
                  href="mailto:posua@nits.ac.in"
                  className="text-[#6B2C2C] hover:text-[#CB2229] transition-colors font-medium"
                >
                  posua@nits.ac.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-1 bg-[#CB2229] w-full" />
    </footer>
  );
};

export default Footer;
