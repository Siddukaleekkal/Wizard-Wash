"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("wizard_wash_cookie_consent");
      if (!consent) {
        setIsVisible(true);
      }
    } catch (e) {
      // Handle privacy mode / blocked localStorage gracefully
    }
  }, []);

  const handleConsent = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem("wizard_wash_cookie_consent", choice);
    } catch (e) {}
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent banner"
      className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-gray-200 text-gray-700 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 md:py-4 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        <p className="text-xs md:text-sm text-gray-600 font-normal leading-relaxed text-center md:text-left flex-1">
          We use cookies and similar technologies to analyze site traffic, personalize content, and provide you with an optimal browsing experience. For more information, please read our{" "}
          <Link
            href="/privacy-policy"
            className="text-[#7B2CBF] hover:text-[#00B55D] font-medium underline underline-offset-4 transition-colors"
          >
            Privacy Policy
          </Link>
          .
        </p>

        <div className="flex items-center gap-3 w-full md:w-auto justify-center md:justify-end shrink-0">
          <button
            onClick={() => handleConsent("declined")}
            className="text-xs font-medium text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md border border-gray-200 transition-colors cursor-pointer"
          >
            Reject Non-Essential
          </button>
          <button
            onClick={() => handleConsent("accepted")}
            className="text-xs font-semibold text-white bg-[#00B55D] hover:bg-[#009E50] px-5 py-2 rounded-md transition-colors shadow-sm cursor-pointer"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
