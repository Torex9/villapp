"use client";

import Image from "next/image";
import { handleSmoothScroll } from "../../lib/smoothScroll";

interface NeverMissAMomentProps {
  className?: string;
}

export function NeverMissAMoment({ className = "" }: NeverMissAMomentProps) {
  return (
    <section
      className={`py-16 h-full lg:h-[600px] w-full items-center justify-between relative bg-black mt-16 ${className}`}
    >
      {/* Left decorative image */}
      <Image
        src="/Folder.svg"
        alt=""
        width={458}
        height={174}
        className="object-contain w-40 md:w-70 lg:w-100 -top-15 left-0 absolute"
      />

      {/* Content */}
      <div className="text-white md:p-14 w-full">
        <h2 className="ml-5 text-2xl md:text-3xl lg:text-6xl font-semibold mb-6 leading-snug w-[120px] md:w-sm">
          Never Miss a Moment
        </h2>
        <a
          href="#waitlist"
          onClick={(e) => handleSmoothScroll(e, "#waitlist")}
          className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 font-semibold transition ml-5 text-md lg:text-3xl"
        >
          Get on Trck
          <span className="text-xs lg:text-2xl border rounded-full px-4">
            →
          </span>
        </a>
      </div>

      {/* Phone mockup image */}
      <Image
        src="/Phone.webp"
        alt="Phone Mockup"
        width={4542}
        height={5920}
        className="object-contain w-40 sm:w-70 lg:w-100 bottom-8 lg:bottom-10 lg:right-25 right-5 absolute xl:w-130"
      />
    </section>
  );
}
