import SubpageHero from "@/components/SubpageHero";

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow bg-[#FFFFFF] text-[#424242]">
      <SubpageHero 
        subtitle="Legal & Compliance"
        title="Privacy Policy"
        description="This document governs the privacy practices for Wizard Wash."
      />
      
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          
          <p className="text-[14px] text-gray-500 mb-8">Last updated: October 1, 2026</p>
          
          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-[#7B2CBF] prose-p:font-light prose-p:leading-relaxed prose-p:text-gray-600 prose-p:text-[15px] prose-li:text-[15px] prose-li:font-light prose-li:text-gray-600 prose-a:text-[#00B55D]">
            
            <p>
              At Wizard Wash, we respect your privacy and are committed to protecting your personal data. This Privacy Policy outlines the types of information we gather about you while you are using our website, and the ways in which we use and share this information. This document applies strictly to information collected by our platform and details the security measures we enforce to protect your data.
            </p>

            <h2 className="text-2xl mt-12 mb-6">1. The Data We Collect</h2>
            <p>
              Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:
            </p>
            <ul>
              <li><strong>Identity Data:</strong> Includes first name, last name, title, or similar identifiers.</li>
              <li><strong>Contact Data:</strong> Includes billing address, service delivery address, email address, and telephone numbers.</li>
              <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting, operating system, and platform.</li>
              <li><strong>Usage Data:</strong> Includes information about how you interact with our website, request quotes, and navigate our services.</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-6">2. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing an on-site estimate or power washing service).</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal or regulatory obligation.</li>
            </ul>

            <h2 className="text-2xl mt-12 mb-6">3. Data Sharing & Disclosure</h2>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
            </p>

            <h2 className="text-2xl mt-12 mb-6">4. Data Security</h2>
            <p>
              We have put in place appropriate technical and organizational security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those employees, agents, contractors, and other third parties who have a strict business need to know.
            </p>

            <h2 className="text-2xl mt-12 mb-6">5. Your Legal Rights</h2>
            <p>
              Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing. To exercise any of these rights, please contact our compliance team.
            </p>

            <h2 className="text-2xl mt-12 mb-6">6. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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
