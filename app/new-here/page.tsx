import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'New Here? | Wolfit Gym',
  description: 'Everything you need to know for your first visit to Wolfit Gym in Barja.',
};

export default function NewHerePage() {
  return (
    <div className="flex flex-col w-full pt-20">
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold text-ink uppercase tracking-tight mb-8">
                Ready to Start?
              </h1>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-12">
                We make it easy to join. Bring your training gear, a towel, and your motivation. Our team is here to help you get settled and start your journey.
              </p>
              
              <div className="space-y-6">
                {[
                  "Located in Barja",
                  "Unisex facility",
                  "Expert trainers available"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary" />
                    <span className="text-lg font-bold uppercase tracking-wide text-ink">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img 
                src="/images/stitch-3.jpg" 
                alt="Gym interior atmosphere" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
