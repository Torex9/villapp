"use client";

import Button from "../01-atoms/ButtonPrimary";
import CookieConsentPopup from "../02-molecules/CookieConsentPopup";
import { Hero } from "../02-molecules/Hero";
import Footer from "../03-organisms/Footer";
import Header from "../03-organisms/Header";
import MainNavigation from "../../data/Navigation";
import { PropsWithChildren } from "react";

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
            <div className="flex max-w-4xl flex-col items-start gap-6">
              {props.hero.title && (
                <h1 className="font-heading text-5xl font-semibold">
                  {props.hero.title}
                </h1>
              )}
              {props.hero.content}
              {props.hero.CTA && (
                <Button href={props.hero.CTA.url}>{props.hero.CTA.text}</Button>
              )}
            </div>
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
