import PropertyGallery from "../components/property/PropertyGallery";
import PropertyOverview from "../components/property/PropertyOverview";
import PropertyFeatures from "../components/property/PropertyFeatures";
import PropertyVideo from "../components/property/PropertyVideo";
import PropertyMap from "../components/property/PropertyMap";
import SimilarProperties from "../components/property/SimilarProperties";
import StickySidebar from "../components/property/StickySidebar";

export default function PropertyDetailsSection({ property, allProperties }) {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* HEADER */}
        <div className="mb-10">
          <h1 className="text-4xl font-serif mb-2">{property.title}</h1>
          <p className="text-gray-500">{property.address}</p>
          <p className="text-3xl text-luxury-gold mt-4">{property.price}</p>
        </div>

        {/* GALLERY */}
        <PropertyGallery images={property.images} />

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 mt-16">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-2 space-y-16">

            <PropertyOverview property={property} />

            {/* DESCRIPTION */}
            {property.description && (
              <div>
                <h2 className="text-2xl font-semibold mb-4">Description</h2>
                <p className="text-gray-600 leading-relaxed">
                  {property.description}
                </p>
              </div>
            )}

            <PropertyFeatures features={property.features} />

            {property.videoUrl && <PropertyVideo url={property.videoUrl} />}

            <PropertyMap address={property.address} />

          </div>

          {/* SIDEBAR */}
          <StickySidebar property={property} />

        </div>

        {/* SIMILAR */}
        <SimilarProperties
          current={property}
          properties={allProperties}
        />

      </div>
    </section>
  );
}
