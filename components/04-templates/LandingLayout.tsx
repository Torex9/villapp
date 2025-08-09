"use client";

import Button from "../01-atoms/ButtonPrimary";
import CookieConsentPopup from "../02-molecules/CookieConsentPopup";
import { Hero } from "../02-molecules/Hero";
import Footer from "../03-organisms/Footer";
import Header from "../03-organisms/Header";
import MainNavigation from "../../data/Navigation";
import { scrollToElement } from "../../lib/smoothScroll";
import { PropsWithChildren } from "react";
import Image from "next/image";

export interface LandingLayoutProps {
  hero?: {
    title?: string;
    CTA?: {
      text?: string;
      url?: string;
    };
    content?: React.ReactNode;
  };
}

export const LandingLayout: React.FC<PropsWithChildren<LandingLayoutProps>> = (
  props
) => {
  return (
    <>
      <div className="flex min-h-screen flex-col ">
        <Header nav={MainNavigation} />
        {props.hero && (
          <Hero>
            {/* Main Headline */}
            <h1 className="font-bold text-[41px] md:text-6xl lg:text-7xl leading-tight dark:text-primary-300">
              <div className="block">
                <span className="mr-2 inline-block text-black">Always</span>
                <span className="mr-2 inline-block text-black">Know</span>
              </div>
              <div className="block">
                <span className="font-Playfair text-primary">Where to Be</span>
              </div>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-sm md:text-md lg:text-lg text-black max-w-xl font-sans w-[80%] md:w-[55%] lg:w-[75%]">
              Your plug for a good time. We do not just tell you what is
              happening. We show you where to be.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => scrollToElement("how-we-work")}
              className="mt-6 px-0 lg:px-16 py-3 bg-none lg:bg-[#ed5a2e] text-[#ed5a2e] lg:text-white rounded-md font-semibold text-sm shadow-none lg:shadow-md hover:shadow-none lg:hover:shadow-lg transition text-left flex items-center cursor-pointer"
            >
              Get Started
              <span className="flex lg:hidden">
                <Image
                  src="/arrow.webp"
                  alt="Trck_arrow"
                  width={100}
                  height={100}
                  className="w-10 pl-3"
                />
              </span>
            </button>
          </Hero>
        )}
        {props.children}
        <div className="mt-auto">
          <Footer />
        </div>
      </div>
      <CookieConsentPopup privacyPolicyLink="#" />
    </>
  );
};
