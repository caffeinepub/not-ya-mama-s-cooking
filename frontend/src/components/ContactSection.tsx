import { Phone, User, MapPin, Clock, MessageCircle } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-texture relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-script text-[oklch(0.72_0.16_55)] text-2xl mb-2">Get In Touch</p>
          <h2 className="font-display text-5xl sm:text-6xl font-black text-foreground mb-4">
            Contact <span className="text-[oklch(0.48_0.19_28)]">Us</span>
          </h2>
          <div className="section-divider w-32 mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-lg max-w-xl mx-auto">
            Ready to make your event unforgettable? We'd love to hear from you!
            Reach out to start planning your perfect catering experience.
          </p>
        </div>

        {/* Contact card */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-[oklch(0.18_0.06_30)] rounded-3xl overflow-hidden shadow-warm-lg border border-gold/20">
            {/* Card header */}
            <div className="bg-gradient-to-r from-[oklch(0.48_0.19_28)] to-[oklch(0.55_0.18_40)] px-8 py-8 text-center">
              <div className="w-20 h-20 rounded-full bg-gold/20 border-2 border-gold/40 flex items-center justify-center mx-auto mb-4">
                <User size={36} className="text-gold-light" />
              </div>
              <h3 className="font-display text-3xl font-bold text-cream mb-1">Jasmine Cota</h3>
              <p className="font-body text-cream/70 text-sm tracking-wide">
                Owner & Head Chef — Not Ya Mama's Cooking
              </p>
            </div>

            {/* Contact details */}
            <div className="px-8 py-8 space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-200">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-cream/50 text-xs uppercase tracking-widest mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:4800914039"
                    className="font-display text-2xl font-bold text-cream hover:text-gold-light transition-colors duration-200"
                  >
                    (480) 091-4039
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-cream/50 text-xs uppercase tracking-widest mb-0.5">
                    Service Area
                  </p>
                  <p className="font-body text-cream font-semibold text-base">
                    Phoenix, Arizona & Surrounding Areas
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Clock size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-cream/50 text-xs uppercase tracking-widest mb-0.5">
                    Availability
                  </p>
                  <p className="font-body text-cream font-semibold text-base">
                    Available for Events & Catering
                  </p>
                  <p className="font-body text-cream/60 text-sm">Call to check availability</p>
                </div>
              </div>

              {/* Divider */}
              <div className="section-divider" />

              {/* CTA */}
              <div className="text-center pt-2">
                <p className="font-body text-cream/60 text-sm mb-4">
                  Don't wait — spots fill up fast! Call Jasmine today to reserve your date.
                </p>
                <a
                  href="tel:4800914039"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-gold hover:bg-gold-light text-[oklch(0.14_0.04_30)] font-body font-bold text-base tracking-wide rounded-full shadow-gold hover:shadow-warm-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 w-full justify-center"
                >
                  <Phone size={20} />
                  Call (480) 091-4039
                </a>
              </div>
            </div>
          </div>

          {/* Warm message */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[oklch(0.94_0.04_70)] rounded-full border border-[oklch(0.88_0.05_65)]">
              <MessageCircle size={16} className="text-[oklch(0.48_0.19_28)]" />
              <p className="font-body text-[oklch(0.35_0.07_40)] text-sm font-medium">
                We love making your events special — reach out anytime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
