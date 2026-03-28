import Image from "next/image";

export default function InvitationSection() {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden py-8">

      {/* Left gamosa — narrower on mobile */}
      <div className="absolute left-0 top-0 h-full w-[8%] sm:w-[10%] md:w-[12%] pointer-events-none">
        <Image
          src="/home/gamosa-left.png"
          alt="Gamosa Left"
          fill
          className="object-cover object-left"
        />
      </div>

      {/* Right gamosa */}
      <div className="absolute right-0 top-0 h-full w-[8%] sm:w-[10%] md:w-[12%] pointer-events-none">
        <Image
          src="/home/gamosa-right.png"
          alt="Gamosa Right"
          fill
          className="object-cover object-right"
        />
      </div>

      {/* Centre content wrapper */}
      <div className="relative z-10 w-[90%] sm:w-[80%] md:w-[60%] max-w-[800px] flex flex-col items-center gap-4 mt-12 mb-12">
        {/* Header Ornament */}
        <div className="relative w-[180px] sm:w-[220px] md:w-[280px] h-[30px] sm:h-[40px]">
          <Image
            src="/home/invitation-head.png"
            alt="Invitation Ornament"
            fill
            className="object-contain"
          />
        </div>
        
        {/* "Invitation" Text */}
        <div className="relative w-[200px] sm:w-[250px] md:w-[220px] h-[50px] sm:h-[70px] -mt-2 sm:-mt-4">
          <Image
            src="/home/invitation-font.png"
            alt="Invitation Text"
            fill
            className="object-contain"
          />
        </div>

        {/* Main Invitation Card */}
        <div className="relative w-full aspect-[3/4] sm:aspect-[4/5] md:aspect-[7/9] mt-4 shadow-xl">
          <Image
            src="/home/invitation-card.png"
            alt="Invitation Card"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

    </section>
  );
}
