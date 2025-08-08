import Container from "../01-atoms/Container";
import Image from "next/image";
import { PropsWithChildren } from "react";

export interface HeroProps {}

export const Hero: React.FC<PropsWithChildren<HeroProps>> = (props) => {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <Image
        src="/Heros_Image.webp"
        alt="hero"
        fill
        className="absolute inset-0 object-cover object-[75%] md:object-[90%] z-0 top-[50px]"
        sizes="100vw"
        priority
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 md:px-10 max-w-7xl mx-auto">
        <div className="text-black max-w-2xl lg:mt-0 -mt-48 md:-mt-72">
          {/* User Count Section */}
          <div className="flex gap-4 mb-4 flex-col lg:flex-row items-start lg:items-center">
            <Image
              src="/Avatar.webp"
              alt="People"
              width={100}
              height={100}
              className="w-[60px] lg:w-[100px]"
            />
            <p className="text-[10px] md:text-sm lg:text-base font-sans w-[80%]">
              Join over 1700+ people already excited to get on Trck
            </p>
          </div>

          {/* Main Content */}
          {props.children}
        </div>
      </div>
    </section>
  );
};
