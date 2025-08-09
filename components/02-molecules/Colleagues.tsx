"use client";

import React, { useState } from "react";
import { InfiniteMovingCards } from "../01-atoms/InfiniteMovingCards";
import { companies, testimonials } from "@/data/index";

const Colleagues = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div
      className="py-20 dark:bg-black bg-white"
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mt-10 flex flex-col items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
          pauseOnHover={true}
          isPaused={isPaused}
        />
      </div>
    </div>
  );
};

export default Colleagues;
