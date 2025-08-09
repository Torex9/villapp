"use client";

import { LandingLayout } from "@/components/04-templates/LandingLayout";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface LegalLayoutProps {
  children: ReactNode;
  currentPage?: string;
}

export default function LegalLayout({
  children,
  currentPage,
}: LegalLayoutProps) {
  const pathname = usePathname();

  const isActivePage = (href: string) => pathname === href;

  return (
    <div className="bg-white dark:bg-black">
      <LandingLayout>
        {/* Hero Section */}
        <div className="relative pt-24 overflow-hidden w-full">
          <div>
            <div className="absolute inset-0 z-0 pointer-events-none"></div>
            <div className="relative z-10 w-full mx-auto px-6 text-center">
              <h4 className="text-sm uppercase tracking-widest text-black dark:text-gray-400 mb-3 border w-fit text-center flex justify-center mx-auto px-4 py-2 rounded-full dark:border-gray-400 border-gray-300">
                Corporate Doc
              </h4>
              <h1 className="text-2xl md:text-6xl font-bold leading-tight text-center text-black dark:text-white">
                <span className="bg-gradient-to-r from-[#ed5a2e] via-purple-500 to-red-500 bg-clip-text text-transparent">
                  Legal
                </span>
                <br className="hidden md:block" />
              </h1>
              <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
                Our legal documents and policies
              </p>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="flex flex-col lg:flex-row mx-auto max-w-7xl px-4 mt-0 lg:mt-20">
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-1/4 pr-8 border-none lg:border-r border-gray-200 dark:border-gray-700">
              <h2 className="text-[16px] tracking-wide font-semibold text-gray-500 dark:text-gray-400 uppercase mb-6">
                On This Page
              </h2>
              <nav className="space-y-4 border-l border-gray-300 dark:border-gray-600 text-[16px]">
                <Link
                  className={`block pl-2 border-l-2 font-medium transition-colors duration-200 ${
                    isActivePage("/legal/privacy-policy")
                      ? "text-[#ed5a2e] border-[#ed5a2e]"
                      : "text-black dark:text-white hover:text-[#ed5a2e] border-transparent"
                  }`}
                  href="/legal/privacy-policy"
                >
                  Privacy Policy
                </Link>
                <Link
                  className={`block pl-2 border-l-2 font-medium transition-colors duration-200 ${
                    isActivePage("/legal/terms-of-service")
                      ? "text-[#ed5a2e] border-[#ed5a2e]"
                      : "text-black dark:text-white hover:text-[#ed5a2e] border-transparent"
                  }`}
                  href="/legal/terms-of-service"
                >
                  Terms of Service
                </Link>
                <Link
                  className={`block pl-2 border-l-2 font-medium transition-colors duration-200 ${
                    isActivePage("/legal/acceptable-use-policy")
                      ? "text-[#ed5a2e] border-[#ed5a2e]"
                      : "text-black dark:text-white hover:text-[#ed5a2e] border-transparent"
                  }`}
                  href="/legal/acceptable-use-policy"
                >
                  Acceptable Use Policy
                </Link>
              </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 mt-10 lg:mt-0 mb-20">
              <div>{children}</div>
            </main>
          </div>
        </div>
      </LandingLayout>
    </div>
  );
}
