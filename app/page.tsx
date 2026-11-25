import Link from 'next/link';
import { Dumbbell, Snowflake, Wind, MapPin, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Wolfit Gym | Premium Fitness in Barja',
  description: 'Premium unisex gym in Barja, Lebanon. Featuring 68 international-standard stations, ice and steam therapy. Unleash your inner wolf.',
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col items-start">
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-ink leading-[1.1] tracking-tight uppercase text-balance">
              Unleash Your <span className="text-primary">Inner Wolf</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-on-surface-variant max-w-xl leading-relaxed text-pretty">
              Premium unisex gym in Barja, Lebanon. 68 international-standard stations, ice and steam therapy, and expert trainers.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="bg-primary text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider text-center hover:brightness-110 transition-all active:scale-[0.98]"
              >
                Book Now
              </Link>
              <a
                href="https://instagram.com/wolfitgymtvm"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-outline-variant text-ink px-8 py-4 rounded-md font-bold uppercase tracking-wider text-center hover:bg-surface transition-all"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
          <div className="relative aspect-square lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/stitch-1.jpg"
              alt="Wolfit Gym training area"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 bg-surface">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Our Facilities</span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-ink uppercase tracking-tight text-balance">
              Train and Recover
            </h2>
            <p className="mt-6 text-lg text-on-surface-variant text-pretty">
              We provide the tools you need for performance and recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="w-8 h-8" />,
                title: "68 Stations",
                desc: "International-standard equipment for all fitness levels."
              },
              {
                icon: <Snowflake className="w-8 h-8" />,
                title: "Ice Therapy",
                desc: "Recovery support to help your body feel its best."
              },
              {
                icon: <Wind className="w-8 h-8" />,
                title: "Steam Therapy",
                desc: "Relax and unwind after your workout."
              }
            ].map((item, i) => (
              <div key={i} className="bg-background p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 rounded-lg bg-surface flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold text-ink uppercase mb-4">{item.title}</h3>
                <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-6xl mx-auto px-5 md:px-8 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
              Share Your Experience
            </h2>
            <p className="mt-4 text-white/80 text-lg">
              Enjoyed your time at Wolfit Gym? Your feedback helps us grow.
            </p>
          </div>
          <a
            href="https://www.google.com/maps/place/?q=place_id:ChIJF0UjRgDlHhURdnMnF93JgPA"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-primary px-8 py-4 rounded-md font-bold uppercase tracking-wider hover:bg-ink hover:text-white transition-all active:scale-[0.98] whitespace-nowrap"
          >
            Leave us a Google review
          </a>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block">Find Us</span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-ink uppercase tracking-tight mb-8">
                Visit Us in Barja
              </h2>
              <div className="flex items-start gap-4 mb-10">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <p className="text-xl text-on-surface-variant leading-relaxed">
                  JCPF+C97, Barja, Lebanon.
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/?q=place_id:ChIJF0UjRgDlHhURdnMnF93JgPA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-primary font-bold uppercase tracking-widest group"
              >
                Open in Google Maps
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
            <div className="aspect-video lg:aspect-square w-full rounded-2xl overflow-hidden border border-outline-variant/20 shadow-xl">
              <iframe
                title="Wolfit Gym Location"
                src="https://www.google.com/maps?q=33.6360309,35.423431199999996&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
