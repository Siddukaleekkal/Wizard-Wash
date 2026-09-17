// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by Industry Leaders",
  logos = [
    {
      id: "logo-1",
      description: "Chick-fil-A",
      image: "/chick-fil-a.jpeg",
      className: "h-[70px] md:h-[85px] w-auto",
    },
    {
      id: "logo-2",
      description: "Panera Bread",
      image: "/images/New Panera Bread Transparent.png",
      className: "h-[65px] md:h-[80px] w-auto",
    },
    {
      id: "logo-3",
      description: "Gold's Gym",
      image: "/golds-gym-logo.svg",
      className: "h-[70px] md:h-[85px] w-auto",
    },
    {
      id: "logo-4",
      description: "Starbucks",
      image: "/starbucks-logo.svg",
      className: "h-[70px] md:h-[85px] w-auto",
    },
    {
      id: "logo-5",
      description: "Taco Bell",
      image: "/taco-bell-logo.svg",
      className: "h-[70px] md:h-[85px] w-auto",
    },
    {
      id: "logo-6",
      description: "Carrabba's",
      image: "/Carrabbas.png",
      className: "h-[85px] md:h-[105px] w-auto",
    },
    {
      id: "logo-7",
      description: "ACAC Fitness & Wellness",
      image: "/images/acac-transparent.png",
      className: "h-[60px] md:h-[75px] w-auto",
    },
  ],
}: Logos3Props) => {
  // Duplicate logos to ensure enough items for continuous infinite scrolling
  const infiniteLogos = [...logos, ...logos.map(l => ({ ...l, id: l.id + "-copy" }))];

  return (
    <section className="py-4 bg-white overflow-hidden border-b border-gray-100">
      <div className="container max-w-[1400px] mx-auto px-[5%] text-center mb-4">
        <h3 className="text-xl font-bold text-slate-500 uppercase tracking-wider">
          {heading}
        </h3>
      </div>
      <div className="w-full">
        <div className="relative overflow-x-hidden group">
          <Carousel
            opts={{ loop: true, align: "center", dragFree: true, watchDrag: false }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1.5, stopOnInteraction: false, stopOnMouseEnter: false })]}
            className="w-full"
          >
            <CarouselContent className="ml-0 flex items-center">
              {infiniteLogos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-auto shrink-0 justify-center pl-0"
                >
                  <div className="px-10 md:px-16 flex shrink-0 items-center justify-center mix-blend-multiply">
                    <img
                      src={logo.image}
                      alt={logo.description}
                      className={`${logo.className} object-contain transition duration-300`}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
