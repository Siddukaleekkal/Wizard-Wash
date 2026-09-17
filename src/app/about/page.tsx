import SubpageHero from "@/components/SubpageHero";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242]">
      <SubpageHero 
        subtitle="About Us"
        title="We are Wizard Wash"
        description="We treat your property like our own, delivering reliable, high-quality craftsmanship to elevate your outdoor space."
      />

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-[#00B55D] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Our Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-[#33155B] mb-6 leading-tight">
              Meet the Founder
            </h2>
            <p className="text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
              Driven by a lifelong dedication to property preservation, advanced exterior cleaning, and exceptional customer service across Virginia.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16 items-start mt-12">
            {/* Left Side: Founder Photo */}
            <div className="w-full lg:w-1/2 lg:sticky lg:top-32">
              <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-gray-100 bg-gray-50">
                <Image
                  src="/Omar Elshami CEO.JPEG"
                  alt="Omar Elshami - Founder & CEO"
                  width={800}
                  height={800}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Right Side: Founder Bio & Story */}
            <div className="w-full lg:w-1/2 flex flex-col gap-8 text-gray-600 font-light text-lg leading-relaxed">
              <div className="pb-8 border-b border-gray-100">
                <h3 className="text-3xl font-heading font-bold text-[#33155B] mb-1">Omar Elshami</h3>
                <p className="text-sm font-bold text-[#00B55D] tracking-[0.1em] uppercase">Founder & CEO</p>
              </div>

              <div>
                <h4 className="text-3xl font-heading font-light text-[#424242] mb-6">The Wizard Wash Story</h4>
                <div className="w-12 h-1.5 bg-[#00B55D] mb-8"></div>
                <p className="text-2xl font-heading text-[#7B2CBF] leading-snug italic mb-8">
                  "I didn't just want to clean houses. I wanted to build a company people could genuinely trust with their biggest investment."
                </p>
              </div>

              <p>
                Wizard Wash wasn't born from a desire to just 'clean surfaces.' It was founded on the belief that exterior property maintenance should be treated with the same precision, care, and standards as high-end property restoration.
              </p>
              <p>
                I founded Wizard Wash right here in Virginia with a clear mission: to replace unreliable 'splash and dash' operators with a scientific, customer-first approach. By combining state-of-the-art hot water equipment and gentle soft-washing chemistry with unmatched reliability, we built Wizard Wash into one of the most trusted names in exterior cleaning across Central Virginia.
              </p>
              <p>
                Today, Wizard Wash services thousands of residential homes and prominent commercial landmarks. We remain committed to the founding principle that every customer deserves honest communication, meticulous attention to detail, and transformative results.
              </p>
              
              <div className="mt-4 pt-6 border-t border-gray-100">
                <p className="font-heading font-medium text-[#33155B] text-2xl mb-1">Omar Elshami</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Founder & CEO, Wizard Wash</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Equipment Showcase Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#00B55D] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Enterprise Fleet & Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-[#33155B] mb-6 leading-tight">
              Commercial Power, Calibrated for Delicate Care
            </h2>
            <p className="text-gray-600 font-light leading-relaxed">
              We never cut corners with hobbyist equipment. Wizard Wash operates custom-engineered mobile washing rigs equipped with commercial-grade BE pressure washing systems delivering up to 4,200 PSI and 8.5 GPM, combined with gentle low-pressure soft-wash manifolds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            {/* Fleet Truck on Driveway */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src="/Gallery/DSC07618.JPG"
                  alt="Wizard Wash Custom Service Rig on Virginia Driveway"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#00B55D] text-xs font-bold uppercase tracking-wider block mb-2">
                    Mobile Capabilities
                  </span>
                  <h3 className="text-xl font-heading font-bold text-[#33155B] mb-3">
                    Self-Contained Mobile Service Units
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Our fully-equipped mobile units carry independent high-capacity water tanks, dual-hose reels, and specialized detergent delivery systems, allowing us to service both residential estates and expansive commercial properties with complete autonomy.
                  </p>
                </div>
              </div>
            </div>

            {/* Equipment Tailgate Close-Up */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
              <div className="relative w-full aspect-[4/3] bg-gray-100">
                <Image
                  src="/Gallery/DSC07627.JPG"
                  alt="Wizard Wash BE Commercial Pressure Washing Machinery"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[#00B55D] text-xs font-bold uppercase tracking-wider block mb-2">
                    Commercial Equipment
                  </span>
                  <h3 className="text-xl font-heading font-bold text-[#33155B] mb-3">
                    Heavy-Duty Pressure & Temperature Control
                  </h3>
                  <p className="text-gray-600 font-light text-sm leading-relaxed">
                    Featuring professional-grade BE pressure washing skids and precision temperature regulators, our equipment easily dissolves automotive oils, chewing gum, and organic algae without eroding delicate substrates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
