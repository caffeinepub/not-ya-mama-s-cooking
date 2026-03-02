import { Phone, MapPin, Heart } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(0.10_0.03_28)] border-t border-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/logo.dim_400x400.png"
                alt="Not Ya Mama's Cooking"
                className="w-14 h-14 rounded-full object-cover border-2 border-gold/40"
              />
              <div>
                <p className="font-script text-gold-light text-lg leading-tight">Not Ya Mama's</p>
                <p className="font-display text-cream text-xs font-bold tracking-widest uppercase">
                  Cooking
                </p>
              </div>
            </div>
            <p className="font-body text-cream/50 text-sm text-center md:text-left leading-relaxed max-w-xs">
              Authentic Mexican flavors crafted with love and tradition. Serving Phoenix, Arizona
              and surrounding communities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-cream font-bold text-base mb-4 tracking-wide">
              Quick Links
            </h4>
            <nav className="space-y-2">
              {[
                { label: 'Our Menu', href: '#menu' },
                { label: 'Street Tacos', href: '#tacos' },
                { label: 'Burritos', href: '#burritos' },
                { label: 'Catering Services', href: '#catering' },
                { label: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.href}
                  onClick={() =>
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="block w-full text-center md:text-left font-body text-cream/50 hover:text-gold-light text-sm transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-cream font-bold text-base mb-4 tracking-wide">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <a
                  href="tel:4800914039"
                  className="font-body text-cream/70 hover:text-gold-light text-sm transition-colors duration-200"
                >
                  (480) 091-4039
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MapPin size={14} className="text-gold flex-shrink-0" />
                <span className="font-body text-cream/70 text-sm">Phoenix, Arizona</span>
              </div>
              <p className="font-body text-cream/50 text-sm">Jasmine Cota</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-cream/30 text-xs">
            © {year} Not Ya Mama's Cooking. All rights reserved.
          </p>
          <p className="font-body text-cream/30 text-xs flex items-center gap-1">
            Made with <Heart size={11} className="text-[oklch(0.72_0.16_55)] fill-current" /> in Phoenix, AZ
          </p>
        </div>
      </div>
    </footer>
  );
}
