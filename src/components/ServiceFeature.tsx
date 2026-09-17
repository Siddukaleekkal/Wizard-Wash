import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceFeatureProps {
  imageSrc: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  subtitle: string;
  title: string;
  description: string | string[];
  bullets?: string[];
  linkText?: string;
  linkHref?: string;
}

export default function ServiceFeature({
  imageSrc,
  imageAlt,
  imagePosition = "left",
  subtitle,
  title,
  description,
  bullets = [],
  linkText = "REQUEST THIS SERVICE",
  linkHref = "/quote",
}: ServiceFeatureProps) {
  const isImageLeft = imagePosition === "left";
  const descParagraphs = Array.isArray(description) ? description : [description];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div
          className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${isImageLeft ? "" : "lg:flex-row-reverse"
            }`}
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-[#00B55D] text-xs font-bold tracking-[0.2em] uppercase mb-4">
              {subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-light text-[#424242] mb-6 leading-tight">
              {title}
            </h2>

            <div className="flex flex-col gap-6 mb-10">
              {descParagraphs.map((para, idx) => (
                <p key={idx} className="text-gray-500 font-light leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Bullets (Optional) */}
            {bullets.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 w-full border-t border-gray-100 pt-8 mb-10">
                {bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00B55D] mt-2 flex-shrink-0" />
                    <span className="text-sm text-gray-600 font-medium">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Link */}
            <Link
              href={linkHref}
              className="inline-flex items-center gap-2 text-[11px] font-bold text-[#424242] uppercase tracking-[0.2em] hover:text-[#00B55D] transition-colors"
            >
              {linkText} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
