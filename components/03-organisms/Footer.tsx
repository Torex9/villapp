"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { footerData } from "../../data/FooterData";
import { handleSmoothScroll } from "../../lib/smoothScroll";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const { cta, contact, sections, copyright } = footerData;

  return (
    <footer className="bg-black text-white px-6 py-10 text-sm">
      {/* Main CTA Section */}
      <div className="text-center mb-24">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-semibold mb-4 whitespace-pre-line">
          {cta.title}
        </h2>
        <Link
          className="flex justify-center items-center mx-auto gap-4 mt-10"
          href={cta.appStoreHref}
          onClick={(e) => handleSmoothScroll(e, cta.appStoreHref)}
        >
          {cta.buttons.map((button) => (
            <Image
              key={button.alt}
              alt={button.alt}
              width={button.width}
              height={button.height}
              className="cursor-pointer w-40 lg:w-50"
              src={button.src}
            />
          ))}
        </Link>
      </div>

      {/* Footer Links Grid */}
      <div className="border-t border-gray-900 pt-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-300 text-xs max-w-7xl mx-auto">
        {/* Contact Section */}
        <div>
          <h4 className="font-semibold text-white mb-2 text-xs md:text-sm">
            {contact.title}
          </h4>
          <ul className="flex flex-col gap-3 text-xs">
            <li className="cursor-pointer text-xs md:text-sm">
              <Link
                href={contact.email.href}
                className={contact.email.className}
              >
                {contact.email.label}
              </Link>
            </li>
          </ul>
          <div className="flex gap-4 mt-4 items-center">
            {contact.socialIcons.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  alt={social.alt}
                  width={20}
                  height={20}
                  className="w-5 h-5 opacity-80 hover:opacity-100 transition"
                  src={social.icon}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Dynamic Sections */}
        {sections.map((section) => (
          <div key={section.title}>
            <h4 className="font-semibold text-white mb-2 text-xs md:text-sm">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-3 text-xs">
              {section.links.map((link) => (
                <li
                  key={link.label}
                  className="cursor-pointer text-xs md:text-sm"
                >
                  <Link
                    href={link.href}
                    className={link.className}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-900 mt-10 pt-6 text-gray-500 text-xs max-w-7xl mx-auto relative">
        <p className="mb-2">{copyright.disclaimer}</p>
        <p>
          Copyright © {new Date().getFullYear()} {copyright.notice}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
