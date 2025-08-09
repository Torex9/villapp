import { Modal } from "@/components/02-molecules/Modal";
import { LandingLayout } from "@/components/04-templates/LandingLayout";
import { Textarea } from "@headlessui/react";
import Image from "next/image";
import Colleagues from "@/components/02-molecules/Colleagues";
import { ScrollingText } from "@/components/01-atoms/ScrollingText";
import { NewsletterSignup } from "@/components/02-molecules/NewsletterSignup";
import { CarouselSkeleton } from "@/components/02-molecules/CarouselSkeleton";
import { FeatureGrid } from "@/components/03-organisms/FeatureGrid";
import { NeverMissAMoment } from "@/components/03-organisms/NeverMissAMoment";
import { carouselSlides } from "@/data/carouselData";

export default function Home() {
  // Generate slides from data
  const slides = carouselSlides.map((slide) => (
    <div key={slide.id} className="bg-white rounded-xl shadow-lg p-6 h-64">
      <div
        className={`h-32 bg-gradient-to-r ${slide.gradient} rounded-lg mb-4 flex items-center justify-center`}
      >
        <span className="text-white text-xl font-bold">{slide.category}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{slide.title}</h3>
      <p className="text-gray-600">{slide.description}</p>
    </div>
  ));

  return (
    <div className="bg-[#f4f3e1] ">
      <LandingLayout
        hero={{
          title: "Always Know Where to Be",
          CTA: { text: "Click me", url: "#" },
        }}
      >
        {/* Feature Grid Section */}
        <FeatureGrid className="dark:bg-black bg-white" />

        {/* Carousel Section */}
        <div id="features" className="py-16 dark:bg-black/90">
          <div className="text-left mb-12 ml-12">
            <h2 className="text-6xl font-extrabold dark:text-white text-gray-900 mb-4">
              What You Get
            </h2>
          </div>

          <CarouselSkeleton
            className="max-w-6xl mx-auto"
            slidesPerView={1}
            breakpoints={{
              640: 2,
              1024: 3,
            }}
            navigation={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            children={slides}
          />
        </div>

        <div className="bg-black/90">
          {/* Never Miss A Moment Section */}
          <NeverMissAMoment />
        </div>

        <Colleagues />

        {/* Scrolling Text Section */}
        <div className="py-16 bg-white dark:bg-black/95 dark:backdrop-blur-sm">
          <ScrollingText
            text={[
              "React.js",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Git",
              "Figma",
            ]}
            direction="left"
            speed="slow"
            className="text-gray-900 dark:text-white text-4xl md:text-6xl font-bold"
            textClassName="text-gray-200 dark:text-white/90"
          />
        </div>

        {/* Newsletter Signup Section */}
        <div className="py-16 bg-white dark:bg-black/95">
          <NewsletterSignup
            title="Stay Informed Before We Go Live"
            subtitle="We are coming to your city soon"
            buttonText="Get on Track"
          />
        </div>
      </LandingLayout>
    </div>
  );
}
