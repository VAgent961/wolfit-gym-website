import { Dumbbell, Snowflake, Wind, Users } from 'lucide-react';

export const metadata = {
  title: 'Our Services | Wolfit Gym',
  description: 'Explore our 68 international-standard training stations and professional recovery services including ice and steam therapy in Barja.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: "International-Standard Stations",
      desc: "A comprehensive range of 68 stations for strength and cardio, designed for maximum performance."
    },
    {
      icon: <Snowflake className="w-10 h-10" />,
      title: "Ice Therapy",
      desc: "Cold recovery sessions to support muscle health, reduce inflammation, and speed up recovery."
    },
    {
      icon: <Wind className="w-10 h-10" />,
      title: "Steam Therapy",
      desc: "Heat therapy for relaxation and muscle relief. The perfect way to unwind after a heavy session."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Expert Trainers",
      desc: "Professional guidance to support your fitness routine and help you reach your goals safely."
    }
  ];

  return (
    <div className="flex flex-col w-full pt-20">
      <section className="py-24 md:py-32 bg-background">
        <div className="max-w-6xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl mb-20">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-ink uppercase tracking-tight mb-8">
              Our Facilities
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed">
              We offer a complete fitness environment designed for your goals. From high-intensity training to deep recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-surface p-10 rounded-2xl border border-outline-variant/10 flex flex-col items-start">
                <div className="text-primary mb-8">
                  {service.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold text-ink uppercase mb-4">{service.title}</h3>
                <p className="text-on-surface-variant text-lg leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full h-[400px] md:h-[600px]">
        <img 
          src="/images/stitch-2.jpg" 
          alt="Gym equipment detail" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </section>
    </div>
  );
}
