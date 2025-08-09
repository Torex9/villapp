"use client";

import React, { useState } from "react";
import { cn } from "@/utils/cn";

export interface NewsletterSignupProps {
  className?: string;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  placeholder?: string;
  buttonColor?: string;
}

export const NewsletterSignup: React.FC<NewsletterSignupProps> = ({
  className,
  title = "Stay Informed Before We Go Live",
  subtitle = "We are coming to your city soon",
  buttonText = "Get on TRCK",
  placeholder = "Enter Your Email Address",
  buttonColor = "bg-black hover:bg-gray-800",
}) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    try {
      // Submit email to Google Sheets
      const response = await fetch("/api/newsletter-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit email");
      }

      // Show success state
      setIsSubmitted(true);
    } catch (error) {
      console.error("Newsletter signup error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "mx-4 md:mx-10 px-4 sm:px-6 lg:px-8 rounded-3xl bg-[#ed5a2e] backdrop-blur-md border border-white/20 shadow-2xl",
        "h-[400px] lg:h-[630px] flex flex-col justify-center",
        className
      )}
    >
      {/* Title and Subtitle - Always Visible */}
      <h2 className="text-3xl lg:text-7xl font-bold text-white text-center lg:pt-16">
        {title.split("<br>").length > 1 ? (
          <>
            {title.split("<br>")[0]} <br />
            {title.split("<br>")[1]}
          </>
        ) : (
          title.split(" ").map((word, index, array) => {
            const midpoint = Math.ceil(array.length / 2);
            if (index === midpoint - 1) {
              return (
                <React.Fragment key={index}>
                  {word} <br />
                </React.Fragment>
              );
            }
            return word + " ";
          })
        )}
      </h2>

      <p className="text-white/90 text-center my-4 text-sm lg:text-xl">
        {subtitle}
      </p>

      {/* Dynamic Content - Form or Success Message */}
      {isSubmitted ? (
        // Success Message
        <div className="text-center mt-6">
          <div className="text-4xl lg:text-6xl mb-4">🎉</div>
          <h3 className="text-xl lg:text-3xl font-bold text-white mb-2">
            You are on the waitlist.
          </h3>
          <p className="text-white/90 text-base lg:text-xl">
            We&apos;ll let you know the moment we launch.
          </p>
        </div>
      ) : (
        // Form
        <form onSubmit={handleSubmit} className="flex justify-center mt-5">
          <div className="w-[300px] lg:w-[600px] rounded-full bg-white/95 backdrop-blur-sm flex mx-auto h-[40px] lg:h-[50px]">
            <div className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="w-full px-2">
                <input
                  type="email"
                  placeholder={placeholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="p-2 w-full outline-none border-none bg-transparent text-gray-700 font-sans text-center placeholder:text-gray-500 disabled:opacity-70"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className={cn(
                  "text-white flex items-center justify-center rounded-full px-5 py-2",
                  "w-full mx-auto lg:mx-3 mt-3 lg:mt-0 transition-all duration-200",
                  "disabled:opacity-60 cursor-pointer",
                  "disabled:cursor-not-allowed",
                  buttonColor
                )}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Submitting...
                  </div>
                ) : (
                  buttonText
                )}
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};
