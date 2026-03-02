import { useState, useEffect, useRef } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollDirection';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Our Menu', href: '#menu' },
  { label: 'Street Tacos', href: '#tacos' },
  { label: 'Burritos', href: '#burritos' },
  { label: 'Catering Services', href: '#catering' },
  { label: 'Contact Us', href: '#contact' },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollDirection, isAtTop } = useScrollDirection({ threshold: 8 });
  const menuRef = useRef<HTMLDivElement>(null);

  const isHidden = scrollDirection === 'down' && !isAtTop;

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Close menu on escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isAtTop
          ? 'bg-transparent'
          : 'bg-[oklch(0.14_0.04_30/0.97)] backdrop-blur-md shadow-warm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Go to top"
          >
            <img
              src="/assets/generated/logo.dim_400x400.png"
              alt="Not Ya Mama's Cooking Logo"
              className="h-14 w-14 rounded-full object-cover border-2 border-gold shadow-gold group-hover:scale-105 transition-transform duration-200"
            />
            <div className="hidden sm:block">
              <p className="font-script text-gold-light text-xl leading-tight drop-shadow">
                Not Ya Mama's
              </p>
              <p className="font-display text-cream text-sm font-bold tracking-widest uppercase leading-tight">
                Cooking
              </p>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-4 py-2 text-cream/90 hover:text-gold-light font-body font-medium text-sm tracking-wide transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right side: phone + hamburger */}
          <div className="flex items-center gap-3" ref={menuRef}>
            <a
              href="tel:4800914039"
              className="hidden md:flex items-center gap-2 text-gold-light hover:text-gold font-body font-semibold text-sm transition-colors duration-200"
            >
              <Phone size={15} className="text-gold" />
              (480) 091-4039
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              className="relative flex flex-col items-center justify-center w-11 h-11 rounded-lg border border-gold/30 bg-white/5 hover:bg-white/10 hover:border-gold/60 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold/50"
            >
              {menuOpen ? (
                <X size={22} className="text-gold-light" />
              ) : (
                <Menu size={22} className="text-gold-light" />
              )}
            </button>

            {/* Dropdown Menu */}
            {menuOpen && (
              <div className="absolute top-[calc(100%+8px)] right-4 w-72 bg-[oklch(0.16_0.05_30)] border border-gold/20 rounded-xl shadow-warm-lg overflow-hidden animate-fade-in-up">
                {/* Menu header */}
                <div className="px-5 py-4 border-b border-gold/20 bg-[oklch(0.12_0.04_28)]">
                  <p className="font-script text-gold-light text-lg">Our Menu & Services</p>
                  <p className="font-body text-cream/60 text-xs mt-0.5">Serving Phoenix, AZ</p>
                </div>

                {/* Nav items */}
                <nav className="py-2">
                  {navItems.map((item, idx) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left px-5 py-3 text-cream/85 hover:text-gold-light hover:bg-white/5 font-body font-medium text-sm tracking-wide transition-all duration-150 flex items-center gap-3 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-150 flex-shrink-0" />
                      {item.label}
                    </button>
                  ))}
                </nav>

                {/* Contact in menu */}
                <div className="px-5 py-4 border-t border-gold/20 bg-[oklch(0.12_0.04_28)]">
                  <a
                    href="tel:4800914039"
                    className="flex items-center gap-2 text-gold-light hover:text-gold font-body font-semibold text-sm transition-colors duration-200"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Phone size={14} />
                    (480) 091-4039
                  </a>
                  <p className="text-cream/50 text-xs mt-1 font-body">Jasmine Cota</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
