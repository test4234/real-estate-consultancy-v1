import Hero from "../components/Hero";
import siteConfig from "../data/siteConfig";

export default function HeroSection() {
  return (
    <Hero
      title={siteConfig.companyName}
      subtitle={`Real estate and property services in ${siteConfig.defaultCity} and surrounding areas, including property sales, municipal approvals, material supply, construction coordination, and interior works.`}
      ctaText={siteConfig.cta.primary}
      ctaHref="/contact"
      backgroundImage="https://ik.imagekit.io/oj4o1nw9x/photo-1632398461186-37c76a70062f.avif"
      sideImage="https://ik.imagekit.io/oj4o1nw9x/photo-1632398461186-37c76a70062f.avif"
    />
  );
}
