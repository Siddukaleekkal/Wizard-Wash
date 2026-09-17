import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, Award, ClipboardList, PhoneCall, CalendarCheck, Home as HomeIcon, Heart, ArrowRight, ShieldCheck, Droplet } from "lucide-react";
import { Logos3 } from "@/components/blocks/logos3";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#FFFFFF] text-[#424242] overflow-x-hidden">

      {/* Split-Screen Hero Section */}
      <section className="flex flex-col-reverse md:flex-row w-full min-h-[600px] lg:min-h-[700px] border-b-[8px] border-[#00B55D]">
        {/* Left Side: Solid Brand Color */}
        <div className="w-full md:w-1/2 bg-[#33155B] p-10 md:p-16 lg:p-24 flex flex-col justify-center">
          <div className="max-w-xl mx-auto md:mx-0 md:ml-auto text-white w-full">
            <h1 className="text-3xl md:text-5xl lg:text-[56px] font-heading font-light tracking-wide leading-[1.15] mb-4 md:mb-6">
              Richmond’s Premier Exterior Cleaning & Property Care
            </h1>
            <p className="text-base md:text-xl text-gray-200 mb-8 md:mb-10 font-light leading-relaxed max-w-md">
              From luxury residential estates to commercial landmarks, we restore your property's curb appeal with enterprise grade care.
            </p>
            <Link href="/quote" className="inline-flex items-center justify-center bg-[#00B55D] hover:bg-[#009E50] text-white font-bold h-14 px-10 rounded-none text-sm tracking-[0.15em] uppercase shadow-lg border-none transition-colors">
              GET A QUOTE
            </Link>
          </div>
        </div>

        {/* Right Side: Full Bleed Image */}
        <div className="w-full md:w-1/2 relative min-h-[320px] md:min-h-[450px]">
          <img
            src="/Gallery/DSC06568.jpeg"
            alt="Wizard Wash Professional Crew Exterior Cleaning"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

      <Logos3 />

      <section className="pb-20 bg-gray-50 flex flex-col items-center text-center px-6">
        <div className="max-w-4xl mx-auto w-full border-t border-gray-200 pt-20">
          <p className="text-xl md:text-3xl text-[#00B55D] font-light leading-relaxed">
            Premium residential power washing and soft washing, with the capacity and expertise for large-scale commercial projects across Greater Richmond and Central Virginia.
          </p>
        </div>
      </section>


      {/* Visual Services Navigation */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1100px]">
          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            
            {/* Service 1 */}
            <div className="flex flex-col text-left group cursor-pointer">
              <div className="w-full aspect-[3/2] mb-6 overflow-hidden rounded-sm">
                <img src="/Gallery/DSC07618.JPG" alt="House Wash with Wizard Wash Service Rig" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[#213b63] font-bold text-[17px] mb-4 uppercase tracking-wide">House Wash</h3>
              <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-6 flex-grow pr-2">
                Thoroughly clean your home's exterior with safe pressure and biodegradable cleansers.
              </p>
              <Link href="/residential/house-wash" className="block w-full bg-[#7B2CBF] text-white text-center py-3.5 px-6 font-bold text-[14px] hover:bg-[#6824A3] transition-colors rounded-sm shadow-md">
                Wash My House
              </Link>
            </div>

            {/* Service 2 */}
            <div className="flex flex-col text-left group cursor-pointer">
              <div className="w-full aspect-[3/2] mb-6 overflow-hidden rounded-sm">
                <img src="/Gallery/DSC06562.jpeg" alt="Concrete, Deck & Surface Wash" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[#213b63] font-bold text-[17px] mb-4 uppercase tracking-wide">Concrete Wash & Seal</h3>
              <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-6 flex-grow pr-2">
                Extract dirt and grime from your concrete and help prevent seasonal cracking and chipping.
              </p>
              <Link href="/residential/concrete-wash-and-seal" className="block w-full bg-[#7B2CBF] text-white text-center py-3.5 px-6 font-bold text-[14px] hover:bg-[#6824A3] transition-colors rounded-sm shadow-md">
                Wash My Concrete
              </Link>
            </div>

            {/* Service 3 */}
            <div className="flex flex-col text-left group cursor-pointer">
              <div className="w-full aspect-[3/2] mb-6 overflow-hidden rounded-sm">
                <img src="/roof pic.webp" alt="Roof Treatment" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-[#213b63] font-bold text-[17px] mb-4 uppercase tracking-wide">Roof Treatment</h3>
              <p className="text-gray-500 text-[15px] font-light leading-relaxed mb-6 flex-grow pr-2">
                Restore the look of your roof and help prevent damage by eliminating black streaks, algae, and moss.
              </p>
              <Link href="/residential/softwash-services" className="block w-full bg-[#7B2CBF] text-white text-center py-3.5 px-6 font-bold text-[14px] hover:bg-[#6824A3] transition-colors rounded-sm shadow-md">
                Treat My Roof
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Blog Highlight Section */}
      <section className="py-16 md:py-24 bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1100px]">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            
            {/* Image */}
            <div className="flex-1 w-full relative">
              <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group cursor-pointer bg-white border border-gray-100 flex items-center justify-center p-6 md:p-10">
                <Link href="/blog/gelati-celesti-virginia-powerwashing" className="w-full h-full relative flex items-center justify-center">
                  <img
                    src="/Gallery/bucees.jpg"
                    alt="Gelati Celesti Handmade Ice Cream Locations in Virginia"
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>
              </div>
            </div>

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <span className="text-[#00B55D] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">COMPANY NEWS</span>
              <h2 className="text-2xl md:text-4xl font-heading font-bold text-[#33155B] mb-4 md:mb-6 leading-tight">
                Wizard Wash Selected to Power Wash All Gelati Celesti Locations in Virginia
              </h2>
              <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-base font-light mb-8 leading-relaxed">
                We are thrilled to announce that Wizard Wash has been chosen to power wash all Gelati Celesti ice cream locations across Virginia. Our team is dedicated to keeping every storefront, patio, and walkway sparkling clean for Virginia families and ice cream lovers.
              </p>
              <Link href="/blog/gelati-celesti-virginia-powerwashing" className="inline-flex items-center gap-2 text-[#7B2CBF] font-bold text-sm hover:text-[#00B55D] transition-colors uppercase tracking-widest">
                Read the Full Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Featured Commercial Client Reel Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fa] border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1100px]">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-[#00B55D] font-bold text-xs tracking-[0.2em] uppercase mb-4">Featured Commercial Client</h2>
              <h3 className="text-3xl md:text-5xl font-heading font-light text-[#33155B] mb-4 md:mb-6">The Mar-a-Lago Club</h3>
              <p className="text-gray-600 max-w-lg mx-auto md:mx-0 text-base font-light mb-10 leading-relaxed">
                Delivering pristine exterior maintenance for one of the most prestigious properties in the world. Watch our commercial fleet in action keeping this historic property spotless.
              </p>
              <Link href="/commercial/resorts-hotels" className="inline-block bg-[#7B2CBF] text-white py-4 px-8 font-bold text-xs hover:bg-[#6824A3] transition-colors rounded-sm uppercase tracking-[0.15em] shadow-md">
                View Commercial Services
              </Link>
            </div>

            {/* Reel Video */}
            <div className="flex-1 flex justify-center md:justify-end w-full">
              <div className="relative w-[240px] sm:w-[280px] md:w-[320px] aspect-[9/16] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white bg-black">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/Mara Lago Video.mov" type="video/mp4" />
                </video>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works / Trust Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-2xl md:text-[40px] font-heading font-black mb-12 md:mb-20 text-[#33155B] tracking-tight">
            Trust Your Home to the Pros
          </h2>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 md:mb-10 relative">
                <PhoneCall className="w-10 h-10 md:w-16 md:h-16 text-[#7B2CBF] relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-black uppercase tracking-widest text-[#33155B] mb-4">Call</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-xs mx-auto">
                Our friendly power washing experts are available to help 7 days a week.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 md:mb-10 relative">
                <CalendarCheck className="w-10 h-10 md:w-16 md:h-16 text-[#7B2CBF] relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-black uppercase tracking-widest text-[#33155B] mb-4">Schedule</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-xs mx-auto">
                We answer all your questions and schedule your service, all over the phone.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center">
              <div className="mb-6 md:mb-10 relative">
                <HomeIcon className="w-10 h-10 md:w-16 md:h-16 text-[#7B2CBF] relative z-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-black uppercase tracking-widest text-[#33155B] mb-4">Enjoy</h3>
              <p className="text-gray-500 text-[15px] leading-relaxed max-w-xs mx-auto">
                Enjoy your <span className="italic font-medium">perfectly</span> clean home. Guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats & Trust Badges Section */}
      <section className="py-12 md:py-16 bg-[#33155B] text-white border-y-4 border-[#00B55D]">
        <div className="container mx-auto px-6 flex flex-col items-center text-center">
          
          <div className="flex flex-col md:flex-row justify-center md:gap-32 gap-10 mb-12">
            <div>
              <div className="text-3xl md:text-5xl font-black mb-2 tracking-tight text-white">10+</div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00B55D]">Combined Years of Service</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-black mb-2 tracking-tight text-white">5,000+</div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00B55D]">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-3xl md:text-5xl font-black mb-2 tracking-tight text-white">100%</div>
              <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#00B55D]">Satisfaction Guarantee</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 md:p-8 md:px-12 w-full max-w-3xl flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10 shadow-2xl">
            {/* BBB Badge */}
            <div className="flex flex-col items-center justify-center flex-1">
              <img src="/BBB Accredited Business.png" alt="BBB Accredited Business A+" className="h-[70px] w-auto object-contain" />
            </div>

            {/* HomeAdvisor Badge */}
            <div className="flex flex-col items-center justify-center flex-1 md:border-l md:border-r border-gray-200 py-6 md:py-0 md:px-6 w-full md:w-auto border-t border-b md:border-t-0 md:border-b-0">
              <img src="/HomeAdvisor.png" alt="HomeAdvisor Approved" className="h-[70px] w-auto object-contain" />
            </div>

            {/* PWNA Badge */}
            <div className="flex flex-col items-center justify-center flex-1">
              <img src="/PWNA Logo.png" alt="PWNA Official Member" className="h-[70px] w-auto object-contain" />
            </div>
          </div>

        </div>
      </section>

      {/* Review Carousel Section */}
      <section className="py-16 md:py-24 bg-[#F9FAFB] overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-5xl text-center mb-10 md:mb-16">
          <span className="text-[#00B55D] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-2xl md:text-4xl font-heading font-light text-[#33155B]">
            What Our Clients Say
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex">
          {/* Gradient Masks for smooth fade on edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#F9FAFB] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#F9FAFB] to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-carousel w-max">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 px-3">
                {[
                  { name: "Marcus Turner — The Fan, Richmond", text: "Incredible service! Our house looks brand new. The team was on time, courteous, and very professional." },
                  { name: "Hannah Brooks — Short Pump, VA", text: "They removed years of grime from our driveway and bluestone patio. Highest recommendation." },
                  { name: "Devin Kowalski — Midlothian, VA", text: "The soft washing technique worked wonders on our roof and siding. Not a single plant or shingle damaged." },
                  { name: "Rachel Jenkins — Glen Allen, VA", text: "Wizard Wash transformed our commercial storefront. Our customers have definitely noticed the difference." },
                  { name: "Corey Vance — Chesterfield, VA", text: "Fast, friendly, and fairly priced. Hands down the best power washing company in Central Virginia!" },
                  { name: "Elena Rostova — Henrico, VA", text: "They showed up exactly when they promised and got the job done fast. Five stars across the board." }
                ].map((review, index) => (
                  <div
                    key={index}
                    className="w-[300px] sm:w-[350px] bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 flex-shrink-0 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, starIdx) => (
                          <svg key={starIdx} className="w-5 h-5 text-yellow-400 fill-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        ))}
                      </div>
                      <p className="text-gray-600 font-light leading-relaxed mb-6 italic">"{review.text}"</p>
                    </div>
                    <div className="font-bold text-[#7B2CBF]">{review.name}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
