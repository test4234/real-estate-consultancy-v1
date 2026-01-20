import properties from "../../../data/properties";
import PropertyDetailsSection from "../../../sections/PropertyDetailsSection";
import { notFound } from "next/navigation";

export default async function PropertyDetailsPage({ params }) {
  const { slug } = await params;

  const property = properties.find((p) => p.slug === slug);

  if (!property) {
    notFound();
  }

  return <PropertyDetailsSection property={property} allProperties={properties} />;
}
