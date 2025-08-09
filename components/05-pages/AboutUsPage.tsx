"use client";

import React from "react";
import { LandingLayout } from "../04-templates/LandingLayout";
import Image from "next/image";
import { scrollToElement } from "../../lib/smoothScroll";
import { aboutUsData, type TeamMember } from "../../data/AboutUsData";
import { AnimatedCounter } from "../01-atoms/AnimatedCounter";
import { NewsletterSignup } from "../02-molecules/NewsletterSignup";

export function AboutUsPage() {
  const {
    hero,
    aboutSection,
    whyBuilt,
    whereWeAre,
    statistics,
    team,
    waitlist,
  } = aboutUsData;

  return (
    <LandingLayout>
      {/* Hero Section */}
      <section className="relative dark:bg-[#0E0F14] text-white py-24 overflow-hidden w-full">
        <div className="text-white">
          <div className="absolute inset-0 z-0 pointer-events-none"></div>
          <div className="relative z-10 w-full mx-auto px-6 text-center">
            <h4 className="text-sm uppercase tracking-widest text-black dark:text-gray-400 mb-3 border w-fit text-center flex justify-center mx-auto px-4 py-2 rounded-full dark:border-gray-400">
              {hero.badge}
            </h4>
            <h1 className="text-2xl md:text-6xl font-bold leading-tight text-center text-black dark:text-white">
              {hero.title.part1}{" "}
              <span className="bg-gradient-to-r from-primary via-purple-500 to-red-500 bg-clip-text text-transparent">
                {hero.title.highlight}
              </span>{" "}
              <br className="hidden md:block" />
              {hero.title.part2}
            </h1>
            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-sans"></p>
          </div>
        </div>

        {/* About Content */}
        <div className="text-black dark:text-white py-8 lg:py-24 px-6 md:px-16 relative">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 md:gap-5 lg:gap-20">
            {/* Left Column */}
            <div className="col-span-2 space-y-10 md:col-span-4 lg:col-span-2">
              <div>
                <h3 className="text-xs md:text-sm font-bold dark:text-gray-400 uppercase text-primary mb-4">
                  {aboutSection.title}
                </h3>
                <p className="text-sm md:text-md leading-relaxed text-black dark:text-white">
                  {aboutSection.description.map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      {index < aboutSection.description.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </p>
                <div className="space-y-12 mt-10">
                  <div>
                    <h4 className="uppercase text-sm dark:text-gray-400 mb-4 text-primary">
                      {aboutSection.mission.title}
                    </h4>
                    <p className="text-sm font-medium leading-relaxed text-black dark:text-white">
                      {aboutSection.mission.description}
                    </p>
                  </div>
                  <div className="space-y-12 my-10">
                    <div>
                      <h4 className="uppercase text-sm dark:text-gray-400 mb-4 text-primary">
                        {aboutSection.vision.title}
                      </h4>
                      <p className="text-sm font-medium leading-relaxed text-black dark:text-white">
                        {aboutSection.vision.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-10">
              <div>
                <h3 className="text-sm font-bold mb-4 text-primary dark:text-white uppercase">
                  {whyBuilt.title}
                </h3>
                <p className="text-sm md:text-md leading-relaxed text-black dark:text-[#8592ad]">
                  {whyBuilt.description.map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      {index < whyBuilt.description.length - 1 && (
                        <>
                          <br />
                          <br />
                        </>
                      )}
                    </React.Fragment>
                  ))}
                </p>
              </div>
              <div className="flex items-center gap-3 mx-auto justify-center lg:justify-start">
                <div className="rounded-full w-12 h-12 overflow-hidden">
                  <Image
                    alt="CEO"
                    src={whyBuilt.ceo.image}
                    width={48}
                    height={48}
                    className="object-cover object-center w-full h-full"
                  />
                </div>
                <div className="flex flex-col text-black dark:text-white">
                  <p>
                    {whyBuilt.ceo.name},{" "}
                    <span className="text-primary dark:text-gray-400 font-bold">
                      {whyBuilt.ceo.title}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Where We Are Now Section */}
      <section className="relative flex items-center justify-center min-h-auto mt-15 lg:my-10 text-center px-4 bg-white dark:bg-[#0E0F14]">
        <div className="relative">
          <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-px h-20 lg:h-30 bg-gradient-to-b from-transparent via-primary/90 to-transparent dark:via-white/30 dark:to-transparent"></div>
          <Image
            src={whereWeAre.icon}
            alt="Tag icon"
            width={64}
            height={64}
            className="mx-auto w-12 h-12 md:w-16 md:h-16 mb-8 mt-12"
          />
          <h1 className="text-black dark:text-white text-[1.5rem] md:text-[2.3rem] lg:text-[3.8rem] font-bold leading-tight w-xs md:w-xl lg:w-4xl mx-auto">
            {whereWeAre.title}
          </h1>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full">
        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="text-black dark:text-[#A5ACDA] max-w-xl mx-auto text-sm md:text-lg">
            {statistics.subtitle}
          </p>
        </div>
        <hr className="my-16 border-[#2E2E35] w-[80%] items-center mx-auto" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0 lg:gap-12 max-w-5xl mx-auto px-6 text-white items-center mt-2">
          {statistics.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                duration={2.5}
                className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-primary to-[#ad300d] dark:from-[#A5ACDA] dark:to-[#6C6E79] text-transparent bg-clip-text"
              />
              <p className="uppercase text-xs md:text-sm mt-2 text-gray-900 dark:text-[#A5ACDA] tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
          <div className="text-center col-span-2 md:col-span-1">
            <h4 className="uppercase text-xl mb-2 bg-gradient-to-r from-primary to-[#ad300d] dark:from-[#A5ACDA] dark:to-[#6C6E79] text-transparent bg-clip-text font-semibold mt-10 md:mt-0">
              {statistics.comingSoon.title}
            </h4>
            <p className="text-lg text-gray-900 dark:text-[#A5ACDA]">
              {statistics.comingSoon.description}
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <div className="text-white px-6 py-30">
        <div className="absolute left-10 lg:left-[450px] opacity-40">
          <Image
            src={team.backgroundImage}
            alt="Trck_Outline"
            width={600}
            height={400}
            className="w-150"
          />
        </div>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-semibold text-center text-gray-900 dark:text-white">
            {team.title.part1}{" "}
            <span className="text-primary">{team.title.highlight}</span>{" "}
            {team.title.part2}
          </h2>
          <p className="text-Playfair text-black dark:text-white text-center my-8 text-sm md:text-lg w-xs lg md:w-2xl lg:w-3xl mx-auto">
            {team.subtitle}
          </p>

          {/* Desktop Team Grid */}
          <div className="hidden lg:block relative h-[480px]">
            <div className="overflow-hidden px-4">
              <div
                className="flex gap-6 transition-transform duration-500"
                style={{ transform: "translateX(-0px)", width: "1120px" }}
              >
                {team.members.map((member: TeamMember, index: number) => (
                  <div
                    key={index}
                    className="relative group rounded-2xl w-[260px] h-[450px] shadow-lg overflow-hidden bg-cover bg-center flex-shrink-0"
                    style={{ backgroundImage: `url(${member.image})` }}
                  >
                    <div
                      className="absolute inset-0 transition-opacity duration-700 group-hover:opacity-0"
                      style={{
                        backgroundImage: `url(${member.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div
                      className="absolute inset-0 transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                      style={{
                        backgroundImage: `url(${member.hoverImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <div className="absolute inset-0 z-10 transition-opacity duration-700 group-hover:opacity-0"></div>
                    <div className="absolute inset-0 z-20 flex flex-col justify-end pb-6 pl-5 transition-opacity duration-700 group-hover:opacity-0">
                      <h3 className="text-md font-bold mb-1 text-white">
                        {member.name}
                      </h3>
                      <p className="text-[#ffd7d7] text-[10px]">
                        {member.title}
                      </p>
                    </div>
                    <div className="absolute inset-0 z-10 p-6 flex items-center justify-center text-sm text-gray-300 bg-grid-small-white/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <p className="text-center">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Team Carousel */}
          <div className="lg:hidden relative">
            <div className="team-carousel flex overflow-x-auto gap-4 snap-x snap-mandatory px-1 pb-4 scroll-smooth">
              {team.members.map((member: TeamMember, index: number) => (
                <div
                  key={index}
                  className="relative group flex-shrink-0 w-[260px] h-[350px] snap-start rounded-2xl shadow-lg overflow-hidden bg-cover bg-center cursor-pointer"
                >
                  <div
                    className="absolute inset-0 transition-opacity duration-700 opacity-100"
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 transition-opacity duration-700 opacity-0"
                    style={{
                      backgroundImage: `url(${member.hoverImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-radial from-[#2F1158]/80 to-transparent z-10 transition-opacity duration-700 opacity-100"></div>
                  <div className="absolute inset-0 z-20 flex flex-col justify-end pb-6 pl-5 transition-opacity duration-700 opacity-100">
                    <h3 className="text-md font-bold mb-1 text-white">
                      {member.name}
                    </h3>
                    <p className="text-[#E0D7FF] text-[10px]">{member.title}</p>
                  </div>
                  <div className="absolute inset-0 z-10 p-6 flex items-center justify-center text-sm text-gray-300 bg-grid-small-white/[0.05] transition-opacity duration-700 opacity-0">
                    <p className="text-center">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Waitlist Section */}
      <div
        className="w-full min-h-full py-5 flex items-center justify-center"
        id="waitlist"
      >
        <NewsletterSignup
          title={waitlist.title}
          subtitle={waitlist.subtitle}
          buttonText={waitlist.buttonText}
          placeholder={waitlist.placeholder}
          buttonColor="bg-[#ed5a2e] hover:bg-[#d54d26]"
          className="w-full mx-3 lg:mx-10 bg-gradient-to-r from-[#0E0F14] to-[#161820]"
        />
      </div>
    </LandingLayout>
  );
}
