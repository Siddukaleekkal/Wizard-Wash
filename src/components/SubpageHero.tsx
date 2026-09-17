"use client";

import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SubpageHero({
  subtitle,
  title,
  description,
  showForm = false,
}: {
  subtitle: string;
  title: string;
  description: string;
  showForm?: boolean;
}) {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleFreeQuote = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/quote?name=${encodeURIComponent(name)}&phone=${encodeURIComponent(phone)}`);
  };

  return (
    <section className="relative w-full bg-[#33155B] text-white py-24 md:py-32 px-6 overflow-hidden">
      {/* Abstract Background Element for extra enterprise feel */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -right-[20%] -top-[50%] w-[70%] h-[200%] bg-white transform rotate-12 blur-3xl"></div>
      </div>
      
      <div className={`container mx-auto max-w-6xl relative z-10 flex flex-col ${showForm ? 'lg:flex-row lg:items-center lg:text-left gap-16' : 'items-center text-center'}`}>
        {/* Text Content */}
        <div className={`flex flex-col ${showForm ? 'lg:w-1/2' : 'max-w-4xl items-center'}`}>
          <span className="text-[#00B55D] text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-6">
            {subtitle}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light tracking-wide leading-tight mb-8">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {/* Optional Micro Form */}
        {showForm && (
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="bg-white rounded-lg p-8 shadow-2xl w-full max-w-md text-gray-800 border-t-4 border-[#00B55D]">
              <h3 className="text-2xl font-heading font-bold text-[#7B2CBF] mb-2">Get a Free Quote</h3>
              <p className="text-gray-500 text-sm mb-6">Fill out this quick form and we'll be in touch instantly.</p>
              
              <form onSubmit={handleFreeQuote} className="flex flex-col gap-4">
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#00B55D] focus:ring-1 focus:ring-[#00B55D]"
                  required
                />
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number" 
                  className="w-full border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:border-[#00B55D] focus:ring-1 focus:ring-[#00B55D]"
                  required
                />
                <div className="flex gap-2 items-center mt-2">
                  <button type="submit" className="flex-1 bg-[#00B55D] text-white font-bold uppercase tracking-widest text-xs py-4 rounded-md hover:bg-[#009E50] transition-colors flex items-center justify-center gap-2 shadow-md">
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
