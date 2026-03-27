import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-white flex flex-col md:flex-row items-stretch overflow-hidden">

      {/* Left — Rangghar hero image */}
      {/* On mobile: full width, fixed height. On desktop: 60% width */}
      <div className="relative w-full h-[40vw] min-h-[260px] md:mb-10 md:w-[50%] md:h-[60vh]">
        <Image
          src="/home/ranghar-hero.png"
          alt="Rangghar"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Right — About Us image */}
      {/* On mobile: full width just below. On desktop: 40% width, shifted down */}
      <div className="relative w-full md:h-[30vw] min-h-[220px] md:w-[40%] md:h-[30vh] md:self-end">
        <Image
          src="/home/home-aboutUs.png"
          alt="About Posua"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

    </section>
  );
}
