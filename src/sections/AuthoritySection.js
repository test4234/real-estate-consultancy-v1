// src/sections/AuthoritySection.jsx
import Image from "next/image";
import Link from "next/link";
import siteConfig from "../data/siteConfig";
import { Check } from "lucide-react";

export default function AuthoritySection() {
  const founder = siteConfig.founder;
  if (!founder) return null;

  const points = [
    {
      title: `${founder.experience}+ Years Experience`,
      subtitle: "Local real estate & construction expertise",
    },
    {
      title: "Residential & Commercial Projects",
      subtitle: "Handled across multiple property types",
    },
    {
      title: founder.education,
      subtitle: "Professional education background",
    },
  ];

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* SECTION HEADING */}
        <div className="max-w-2xl mb-10">
          <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold block mb-4">
            About the Developer
          </span>

          <h2 className="text-3xl md:text-4xl font-serif text-luxury-charcoal leading-tight">
            Leadership & Real Estate Expertise
          </h2>

          <p className="mt-4 text-gray-500 max-w-xl">
            A trusted professional delivering value-driven residential and
            commercial developments with local market expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">

          {/* CONTENT */}
          <div className="lg:col-span-7 order-2 lg:order-1 max-w-xl">

            <span className="text-[11px] uppercase tracking-[0.35em] text-luxury-gold block mb-4">
              {founder.role}
            </span>

            <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-luxury-charcoal leading-tight mb-8">
              {founder.name}
            </h3>

            {/* TRUST POINTS */}
            <ul className="space-y-5 mb-10">
              {points.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-luxury-gold/10">
                    <Check size={14} className="text-luxury-gold" />
                  </span>

                  <div>
                    <p className="text-sm font-semibold text-luxury-charcoal">
                      {item.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* BIO */}
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              {founder.bio}
            </p>

            <Link
              href="/projects"
              className="
                inline-flex items-center
                text-[11px] font-bold uppercase tracking-widest
                text-luxury-charcoal
                border-b border-luxury-charcoal
                hover:text-luxury-gold hover:border-luxury-gold
                transition
              "
            >
              View Projects & Properties
            </Link>
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative w-full max-w-sm mx-auto lg:ml-auto aspect-[3/4] overflow-hidden rounded-xl shadow-premium">
              <Image
                src={founder.image}
                alt={founder.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/5" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
