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
        <FeatureGrid className="bg-black" />

        {/* Carousel Section */}
        <div className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Discover Amazing Experiences
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore what's waiting for you in your city
            </p>
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

        {/* Never Miss A Moment Section */}
        <NeverMissAMoment />

        <Colleagues />

        {/* Scrolling Text Section */}
        <div className="py-16 bg-black/95 backdrop-blur-sm">
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
            className="text-white text-4xl md:text-6xl font-bold"
            textClassName="text-white/90"
          />
        </div>

        {/* Newsletter Signup Section */}
        <div className="py-16 bg-black/95">
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
