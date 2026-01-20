import siteConfig from "../../data/siteConfig";

export const metadata = {
  title: `Privacy Policy | ${siteConfig.companyName}`,
  description:
    "Information on how personal data is collected, used, and protected by Machilipatnam Properties.",
};

export default function Privacy() {
  return (
    <main className="bg-white pb-24">

      {/* Header */}
      <header className="bg-soft-beige pt-10 pb-16 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-luxury-gold text-[11px] font-bold uppercase tracking-[0.35em] block mb-4">
            Privacy & Data
          </span>
          <h1 className="text-4xl font-serif text-luxury-charcoal">
            Privacy Policy
          </h1>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div
          className="prose prose-sm md:prose-base max-w-none
          prose-headings:font-serif
          prose-headings:text-luxury-charcoal
          prose-p:text-gray-600
          prose-p:leading-relaxed"
        >

          <p className="text-gray-500 mb-12">
            {siteConfig.companyName} respects your privacy and is committed to
            protecting the personal information you share with us. This policy
            explains how we collect, use, and safeguard your data when you
            interact with our website or contact us for property-related
            services.
          </p>

          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as your name, phone number,
            email address, location, and property requirements when you submit
            an enquiry form, contact us by phone or WhatsApp, or request a site
            visit through our website.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            The information you provide is used only to respond to your enquiry,
            arrange site visits, share relevant property details, and provide
            information about our real estate and property-related services. We
            do not use your data for unrelated marketing purposes.
          </p>

          <h2>Sharing of Information</h2>
          <p>
            We do not sell, rent, or trade your personal information to third
            parties. Information may be shared only where necessary to assist
            with property services (such as coordinating site visits or approvals)
            or where required by law.
          </p>

          <h2>Data Security</h2>
          <p>
            We take reasonable steps to protect your personal information from
            unauthorized access, misuse, or disclosure. While we strive to use
            commercially acceptable means to safeguard data, no method of
            transmission over the internet is completely secure.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use basic cookies to improve user experience and
            understand website usage. These cookies do not collect personally
            identifiable information.
          </p>

          <h2>Your Consent</h2>
          <p>
            By using our website or submitting your information, you consent to
            the collection and use of your data in accordance with this Privacy
            Policy.
          </p>

          <h2>Contact Information</h2>
          <p>
            If you have any questions about this Privacy Policy or how your data
            is handled, you may contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>.
          </p>

          <div className="mt-16 pt-8 border-t border-gray-100">
            <p className="text-[10px] uppercase tracking-widest text-gray-400">
              Last Updated: January 2026
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
