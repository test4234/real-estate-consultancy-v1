import Image from "next/image";
import Link from "next/link";
import siteConfig from "../data/siteConfig";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-luxury-charcoal text-white pt-24 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-20">
          
          {/* Brand */}
          <div className="space-y-6">
            <Image
              src={siteConfig.logo}
              alt={siteConfig.companyName}
              width={160}
              height={32}
              className="brightness-0 invert opacity-90"
            />

            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.companyName} provides real estate and property-related
              services including property sales, site visits, municipal approvals,
              construction coordination, and interior works across Machilipatnam
              and nearby regions.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-luxury-gold mb-6">
              Contact
            </h4>

            <address className="not-italic text-sm text-gray-400 space-y-4">
              <p>{siteConfig.address}</p>

              <p>
                <span className="block text-[10px] uppercase tracking-widest text-gray-500 mb-1">
                  Call Us
                </span>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="text-white hover:text-luxury-gold transition"
                >
                  {siteConfig.phone}
                </a>
              </p>

              <p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 text-white hover:text-luxury-gold transition"
                >
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  WhatsApp Inquiry
                </a>
              </p>
            </address>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-luxury-gold mb-6">
              Quick Links
            </h4>

            <ul className="text-sm text-gray-400 space-y-4">
              {[
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Properties", href: "/properties" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 hover:text-white transition group"
                  >
                    <span className="w-0 h-[1px] bg-luxury-gold transition-all duration-300 group-hover:w-4" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-luxury-gold mb-6">
              Service Areas
            </h4>

            <ul className="text-sm text-gray-400 space-y-3">
              <li>Machilipatnam</li>
              <li>Challapally</li>
              <li>Vijayawada</li>
              <li>Surrounding Regions</li>
            </ul>

            <Link
              href="/contact"
              className="inline-block mt-6 text-[11px] font-bold uppercase tracking-widest text-white hover:text-luxury-gold transition"
            >
              Book Site Visit →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">
            © {currentYear} {siteConfig.companyName}. All rights reserved.
          </p>

          <div className="flex gap-6">
            {["Instagram", "Facebook", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-luxury-gold transition"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
