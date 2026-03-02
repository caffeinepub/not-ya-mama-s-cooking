import { MapPin, Users, Utensils, Star, CheckCircle2 } from 'lucide-react';

const offerings = [
  { icon: Users, title: 'Private Events', desc: 'Birthdays, quinceañeras, family reunions & more' },
  { icon: Utensils, title: 'Corporate Catering', desc: 'Office lunches, company events & team celebrations' },
  { icon: Star, title: 'Weddings & Parties', desc: 'Make your special day unforgettable with authentic flavors' },
  { icon: MapPin, title: 'Phoenix Metro Area', desc: 'Serving all of Phoenix and surrounding communities' },
];

const includes = [
  'Full taco & burrito bar setup',
  'Chicken & beef street tacos',
  'Stuffed burritos',
  'Fresh salsas & guacamole',
  'Chips & sides',
  'Professional service staff',
  'Setup & cleanup included',
  'Custom menu options available',
];

export function CateringSection() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="catering" className="py-24 bg-[oklch(0.16_0.05_30)] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 50%, oklch(0.82 0.17 85) 0%, transparent 60%),
            radial-gradient(circle at 70% 50%, oklch(0.72 0.16 55) 0%, transparent 60%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-script text-gold-light text-2xl mb-2">Available for Your Event</p>
          <h2 className="font-display text-5xl sm:text-6xl font-black text-cream mb-4">
            Catering <span className="text-gold">Services</span>
          </h2>
          <div className="section-divider w-32 mx-auto mb-6" />
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin size={18} className="text-gold" />
            <p className="font-body text-gold-light font-semibold text-lg">
              Proudly Serving Phoenix, Arizona & Surrounding Areas
            </p>
          </div>
          <p className="font-body text-cream/70 text-base max-w-2xl mx-auto">
            Bring the authentic taste of Mexico to your next event. We handle everything so you can
            focus on celebrating with your guests.
          </p>
        </div>

        {/* Banner image */}
        <div className="rounded-2xl overflow-hidden mb-16 shadow-warm-lg">
          <img
            src="/assets/generated/catering-banner.dim_1200x500.png"
            alt="Not Ya Mama's Cooking catering spread"
            className="w-full h-64 sm:h-80 object-cover object-center"
          />
        </div>

        {/* Offerings grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {offerings.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[oklch(0.20_0.05_32)] border border-gold/15 rounded-xl p-6 text-center hover:border-gold/35 hover:bg-[oklch(0.22_0.06_32)] transition-all duration-200 group"
            >
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors duration-200">
                <Icon size={22} className="text-gold" />
              </div>
              <h3 className="font-display text-lg font-bold text-cream mb-2">{title}</h3>
              <p className="font-body text-cream/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* What's included */}
        <div className="bg-[oklch(0.20_0.05_32)] border border-gold/20 rounded-2xl p-8 sm:p-10 mb-12">
          <h3 className="font-display text-3xl font-bold text-cream text-center mb-8">
            What's <span className="text-gold">Included</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {includes.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 size={18} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-body text-cream/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="font-body text-cream/70 text-base mb-6">
            Ready to bring Not Ya Mama's Cooking to your event?
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-10 py-4 bg-gold hover:bg-gold-light text-[oklch(0.14_0.04_30)] font-body font-bold text-base tracking-wide rounded-full shadow-gold hover:shadow-warm-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <MapPin size={18} />
            Book Your Catering Today
          </button>
        </div>
      </div>
    </section>
  );
}
