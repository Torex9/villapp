"use client";

import { cn } from "@/utils/cn";
import React from "react";

export interface ScrollingTextProps {
  text: string | string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  textClassName?: string;
  separator?: string;
}

export const ScrollingText: React.FC<ScrollingTextProps> = ({
  text,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
  textClassName,
  separator = " . ",
}) => {
  // Convert text to array if it's a string, otherwise use as single string
  const displayText = Array.isArray(text) ? text.join(separator) : text;

  // Speed mapping
  const getAnimationDuration = () => {
    switch (speed) {
      case "fast":
        return "15s";
      case "normal":
        return "25s";
      case "slow":
        return "40s";
      default:
        return "25s";
    }
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden whitespace-nowrap my-5",
        className
      )}
    >
      <div
        className={cn(
          "flex animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDuration: getAnimationDuration(),
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        <span
          className={cn(
            "mx-4 text-4xl lg:text-8xl md:text-5xl font-bold text-red-100 dark:text-white/30",
            textClassName
          )}
        >
          {displayText}
        </span>
        <span
          className={cn(
            "mx-4 text-4xl lg:text-8xl md:text-5xl font-bold text-gray-100 dark:text-white/30",
            textClassName
          )}
        >
          {displayText}
        </span>
      </div>
    </div>
  );
};
