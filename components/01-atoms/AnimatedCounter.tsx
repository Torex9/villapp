"use client";

import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

interface AnimatedCounterProps {
  value: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = "",
  duration = 2.5,
  className = "",
}) => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  // Extract numeric value from string (e.g., "500" from "500")
  const numericValue = parseInt(value.replace(/[^\d]/g, ""), 10) || 0;

  return (
    <div ref={ref} className={className}>
      {inView ? (
        <CountUp
          end={numericValue}
          duration={duration}
          suffix={suffix}
          separator=","
        />
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  );
};
