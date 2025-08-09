"use client";

import { LandingLayout } from "@/components/04-templates/LandingLayout";
import { Disclosure } from "@headlessui/react";

// Custom ChevronDown icon component
const ChevronDownIcon = ({ className = "", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="m6 9 6 6 6-6"></path>
  </svg>
);

const faqs = [
  {
    question: "What is TRCK?",
    answer:
      "TRCK is a platform that connects people with unique experiences and events in their local area. We help you discover everything from intimate gatherings to large-scale events, all curated to match your interests and preferences.",
  },
  {
    question: "Is TRCK only for parties?",
    answer:
      "Not at all! While we do feature amazing parties, TRCK is about all types of experiences - from cultural events and workshops to outdoor adventures, networking meetups, and wellness activities. We believe there's something for everyone.",
  },
  {
    question: "Is TRCK free to use?",
    answer:
      "Yes, TRCK is free to browse and explore. You can discover events, read reviews, and connect with hosts at no cost. Some premium features may be available with subscription plans in the future.",
  },
  {
    question: "Why should I join the waitlist?",
    answer:
      "By joining our waitlist, you'll get early access to the platform, exclusive invitations to beta events, and the opportunity to shape the future of TRCK with your feedback. Plus, you'll be among the first to experience what we're building!",
  },
  {
    question: "What kind of experiences can I find on TRCK?",
    answer:
      "You can find a diverse range of experiences including parties, concerts, art exhibitions, food tours, workshops, fitness classes, networking events, cultural celebrations, and much more. Our platform caters to all interests and age groups.",
  },
  {
    question: "Who is TRCK for?",
    answer:
      "TRCK is for anyone looking to discover new experiences and connect with their community. Whether you're new to a city, looking to try something different, or wanting to meet like-minded people, TRCK is designed for explorers and experience seekers.",
  },
  {
    question: "Do I have to pay to explore on TRCK?",
    answer:
      "No, exploring and browsing events on TRCK is completely free. You only pay for the events or experiences you choose to attend, and that payment goes directly to the event host or organizer.",
  },
  {
    question: "Can I host events if I am not a business?",
    answer:
      "Absolutely! TRCK welcomes both individual hosts and businesses. Whether you want to host a dinner party, workshop, or any other experience, our platform is designed to support hosts of all sizes and backgrounds.",
  },
  {
    question: "Does TRCK only list big events?",
    answer:
      "Not at all! We celebrate experiences of all sizes, from intimate gatherings of 5 people to large festivals. We believe that some of the best experiences happen in smaller, more personal settings.",
  },
  {
    question: "Can I book a ride to my event?",
    answer:
      "While TRCK doesn't directly provide transportation services, we're working on partnerships with local transportation providers to make getting to your events easier and more convenient. Stay tuned for updates!",
  },
];

export default function FAQPage() {
  return (
    <div className="bg-white dark:bg-black">
      <LandingLayout>
        <main className="relative py-24 overflow-hidden w-full">
          <div>
            <div className="absolute inset-0 z-0 pointer-events-none"></div>
            <div className="relative z-10 w-full mx-auto px-6 text-center">
              <h4 className="text-sm uppercase tracking-widest text-black dark:text-gray-400 mb-3 border w-fit text-center flex justify-center mx-auto px-4 py-2 rounded-full dark:border-gray-400 border-gray-300">
                FAQ
              </h4>
              <h1 className="text-2xl md:text-6xl font-bold leading-tight text-center text-black dark:text-white">
                Frequently{" "}
                <span className="bg-gradient-to-r from-[#ed5a2e] via-purple-500 to-red-500 bg-clip-text text-transparent">
                  Asked
                </span>{" "}
                <br className="hidden md:block" />
                Questions
              </h1>
              <p className="mt-6 text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans">
                Find answers to common questions about TRCK
              </p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 py-6 lg:py-16 grid md:grid-cols-2 gap-10">
            <div className="order-1 md:order-0">
              <p className="text-sm font-semibold text-[#ed5a2e] mb-2 hidden lg:block">
                Support
              </p>
              <h1 className="text-4xl font-bold text-black dark:text-white leading-tight hidden lg:block mb-10">
                Frequently asked <br /> questions
              </h1>
              <div className="bg-[#f9f9f9] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-sm">
                <h2 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  Still have a question?
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Can't find the answer to your question? Send us an email and
                  we'll get back to you as soon as possible!
                </p>
                <a
                  href="mailto:info@getontrck.com"
                  className="inline-block bg-[#ed5a2e] text-white px-5 py-2 rounded-lg font-medium hover:opacity-90 transition cursor-pointer"
                >
                  Send email
                </a>
              </div>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Disclosure key={index}>
                  {({ open }) => (
                    <div className="bg-[#f9f9f9] dark:bg-[#1a1a1a] rounded-xl px-6 py-4 shadow-sm">
                      <Disclosure.Button className="flex justify-between items-center w-full text-left">
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          {faq.question}
                        </h3>
                        <ChevronDownIcon
                          className={`w-6 h-6 text-[#ed5a2e] transition-transform duration-200 ${
                            open ? "rotate-180" : ""
                          }`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                        {faq.answer}
                      </Disclosure.Panel>
                    </div>
                  )}
                </Disclosure>
              ))}
            </div>
          </div>
        </main>
      </LandingLayout>
    </div>
  );
}
