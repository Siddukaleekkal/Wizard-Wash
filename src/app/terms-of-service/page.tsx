import SubpageHero from "@/components/SubpageHero";

export default function TermsOfServicePage() {
  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242]">
      <SubpageHero 
        subtitle="Legal & Compliance"
        title="Terms of Service"
        description="Please read these terms carefully before utilizing our services."
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          
          <p className="text-[14px] text-gray-500 mb-8">Last updated: October 1, 2026</p>
          
          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#7B2CBF] prose-p:font-light prose-p:leading-relaxed prose-p:text-gray-600 prose-p:text-[15px] prose-li:text-[15px] prose-li:font-light prose-li:text-gray-600 prose-a:text-[#00B55D]">
            
            <p>
              These Terms of Service ("Terms") constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Wizard Wash ("Company", "we", "us", or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").
            </p>

            <h2 className="text-2xl mt-12 mb-6">1. Agreement to Terms</h2>
            <p>
              You agree that by accessing the Site, you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these terms, then you are expressly prohibited from using the Site and you must discontinue use immediately.
            </p>
            <p>
              Supplemental terms and conditions or documents that may be posted on the Site from time to time are hereby expressly incorporated herein by reference. We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Service at any time and for any reason.
            </p>

            <h2 className="text-2xl mt-12 mb-6">2. Scope of Services</h2>
            <p>
              Wizard Wash provides professional exterior cleaning services for residential, commercial, and municipal properties. We reserve the right to refuse service to anyone for any reason at any time. We also reserve the right to modify or discontinue the Service (or any part or content thereof) without notice at any time.
            </p>

            <h2 className="text-2xl mt-12 mb-6">3. Service Limitations & Liability</h2>
            <p>
              While our team operates with the highest degree of care and professionalism, Wizard Wash is not liable for pre-existing damage to your property. This includes, but is not limited to:
            </p>
            <ul>
              <li>Loose, damaged, or improperly installed siding or trim.</li>
              <li>Chipped, peeling, or oxidized paint that is removed during the cleaning process.</li>
              <li>Broken seals on windows or water intrusion due to faulty weather stripping.</li>
              <li>Pre-existing cracks, pitting, or degradation in concrete, brick, or masonry.</li>
            </ul>
            <p>
              We strongly advise property owners to secure all loose items, remove fragile objects from the service area, and ensure windows and doors are tightly closed prior to our arrival.
            </p>

            <h2 className="text-2xl mt-12 mb-6">4. Pricing & Payments</h2>
            <p>
              All quotes provided via our website, email, or over the phone are estimates based on the information provided. Final pricing may be subject to adjustment upon an on-site physical inspection if the scope of work differs significantly from the initial description. We will explicitly communicate any price changes for your authorization before commencing work. Payment is due upon completion of the service unless prior arrangements have been made.
            </p>

            <h2 className="text-2xl mt-12 mb-6">5. Cancellations & Rescheduling</h2>
            <p>
              We require at least 24 hours' notice for any cancellations or requests to reschedule a confirmed appointment. Failure to provide sufficient notice may result in a cancellation fee. Wizard Wash reserves the exclusive right to reschedule services due to inclement weather, equipment failure, or unsafe operating conditions without penalty to either party.
            </p>

            <h2 className="text-2xl mt-12 mb-6">6. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, compilation, and other matters related to the site are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the site is strictly prohibited. You do not acquire ownership rights to any content, document, or other materials viewed through the site.
            </p>
            
            <h2 className="text-2xl mt-12 mb-6">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of the Commonwealth of Virginia. You irrevocably submit to the exclusive jurisdiction of the courts located in Richmond or Chesterfield County, Virginia, for the resolution of any disputes arising out of or relating to these Terms of Service.
            </p>

            <h2 className="text-2xl mt-12 mb-6">8. Contact Us</h2>
            <p>
              In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> omar@wizardwashva.com<br/>
              <strong>Phone:</strong> 804-690-5789
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
