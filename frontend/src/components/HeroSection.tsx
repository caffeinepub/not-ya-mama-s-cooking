import { Phone, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/catering-banner.dim_1200x500.png"
          alt="Mexican catering spread"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 hero-gradient" />
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              oklch(0.82 0.17 85) 0px,
              oklch(0.82 0.17 85) 1px,
              transparent 1px,
              transparent 20px
            )`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gold/20 blur-2xl scale-150" />
            <img
              src="/assets/generated/logo.dim_400x400.png"
              alt="Not Ya Mama's Cooking"
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-gold shadow-gold"
            />
          </div>
        </div>

        {/* Tagline */}
        <p className="font-script text-gold-light text-2xl sm:text-3xl mb-3 drop-shadow">
          Authentic Mexican Food Catering & Restaurant
        </p>

        {/* Main title */}
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-cream text-shadow-warm leading-none mb-4">
          Not Ya Mama's
          <br />
          <span className="text-gold">Cooking</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-cream/80 text-lg sm:text-xl max-w-2xl mx-auto mb-3 leading-relaxed">
          Bringing the bold, vibrant flavors of Mexico to your table.
          <br className="hidden sm:block" />
          Proudly serving the <span className="text-gold-light font-semibold">Phoenix, Arizona</span> area.
        </p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/60" />
          <span className="text-gold text-xl">✦</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/60" />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToMenu}
            className="px-8 py-4 bg-[oklch(0.72_0.16_55)] hover:bg-[oklch(0.65_0.18_50)] text-cream font-body font-bold text-base tracking-wide rounded-full shadow-warm-lg hover:shadow-warm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Our Menu
          </button>
          <a
            href="tel:4800914039"
            className="flex items-center gap-2 px-8 py-4 border-2 border-gold/60 hover:border-gold text-gold-light hover:text-gold font-body font-bold text-base tracking-wide rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Phone size={18} />
            Book Catering
          </a>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToMenu}
          className="mt-16 flex flex-col items-center gap-2 text-cream/40 hover:text-cream/70 transition-colors duration-200 mx-auto"
          aria-label="Scroll down"
        >
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
