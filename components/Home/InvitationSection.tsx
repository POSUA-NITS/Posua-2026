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

      {/* Centre invitation image — larger on mobile, constrained on desktop */}
      <div className="relative z-10 w-[80%] sm:w-[70%] md:w-[55%] max-w-[700px] aspect-[3/4]">
        <Image
          src="/home/invitation.png"
          alt="Invitation"
          fill
          className="object-contain"
          priority
        />
      </div>

    </section>
  );
}
