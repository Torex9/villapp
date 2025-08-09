"use client";

import Link from "next/link";
import CookieConsent from "react-cookie-consent";

export interface CookieConsentPopupProps {
  privacyPolicyLink: string;
}

export default function CookieConsentPopup({
  privacyPolicyLink,
}: CookieConsentPopupProps) {
  return (
    <CookieConsent
      disableStyles={true}
      containerClasses="fixed bottom-0 right-0 p-6 bg-[#ed5a2e] text-white flex flex-wrap items-center justify-between gap-6 md:m-6 md:rounded-md md:shadow-md z-50"
      buttonClasses="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#ed5a2e] transition-colors duration-200"
    >
      <p>We use cookies to get a better understanding of our visitors</p>
      <Link href={privacyPolicyLink} className="text-sm underline">
        Privacy Policy
      </Link>
    </CookieConsent>
  );
}
