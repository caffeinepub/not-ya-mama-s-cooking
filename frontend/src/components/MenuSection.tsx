import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  isSignature?: boolean;
  details: string[];
}

const menuItems: MenuItem[] = [
  {
    id: 'chicken-tacos',
    name: 'Chicken Street Tacos',
    description:
      'Tender, marinated chicken grilled to perfection on a warm corn tortilla. Topped with fresh diced onion, fragrant cilantro, a squeeze of lime, and our house salsa verde.',
    image: '/assets/generated/chicken-tacos.dim_800x600.png',
    badge: 'Signature',
    isSignature: true,
    details: ['Corn tortillas', 'Grilled chicken', 'Fresh cilantro & onion', 'Salsa verde', 'Lime'],
  },
  {
    id: 'beef-tacos',
    name: 'Beef Street Tacos',
    description:
      'Juicy carne asada seasoned with our secret blend of spices, served on a warm corn tortilla with diced onion, cilantro, and a drizzle of smoky red salsa.',
    image: '/assets/generated/beef-tacos.dim_800x600.png',
    badge: 'Signature',
    isSignature: true,
    details: ['Corn tortillas', 'Carne asada', 'Fresh cilantro & onion', 'Smoky red salsa', 'Lime'],
  },
  {
    id: 'burritos',
    name: 'Stuffed Burritos',
    description:
      'A hearty flour tortilla packed with seasoned rice, refried beans, your choice of chicken or beef, melted cheese, sour cream, and fresh guacamole. A full meal in every bite.',
    image: '/assets/generated/burrito.dim_800x600.png',
    details: ['Flour tortilla', 'Seasoned rice & beans', 'Choice of protein', 'Melted cheese', 'Guacamole & sour cream'],
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article
      className={`group relative bg-card rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 hover:-translate-y-1 ${
        item.isSignature ? 'ring-2 ring-gold/40' : ''
      }`}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.04_30/0.7)] via-transparent to-transparent" />

        {/* Badge */}
        {item.badge && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gold text-[oklch(0.14_0.04_30)] font-body font-bold text-xs tracking-wider rounded-full shadow-gold">
              <Star size={10} fill="currentColor" />
              {item.badge} Dish
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-2xl font-bold text-foreground mb-2">{item.name}</h3>
        <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
          {item.description}
        </p>

        {/* Details */}
        <div className="flex flex-wrap gap-2">
          {item.details.map((detail) => (
            <span
              key={detail}
              className="px-2.5 py-1 bg-[oklch(0.94_0.04_70)] text-[oklch(0.35_0.07_40)] font-body text-xs font-medium rounded-full border border-[oklch(0.88_0.05_65)]"
            >
              {detail}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="font-script text-[oklch(0.72_0.16_55)] text-2xl mb-2">Fresh & Authentic</p>
          <h2 className="font-display text-5xl sm:text-6xl font-black text-foreground mb-4">
            Our <span className="text-[oklch(0.48_0.19_28)]">Menu</span>
          </h2>
          <div className="section-divider w-32 mx-auto mb-6" />
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Every dish is crafted with love, using time-honored recipes and the freshest ingredients.
            Taste the difference that real Mexican cooking makes.
          </p>
        </div>

        {/* Street Tacos Feature Banner */}
        <div id="tacos" className="mb-12 rounded-2xl overflow-hidden bg-[oklch(0.18_0.06_30)] relative">
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `repeating-linear-gradient(
                -45deg,
                oklch(0.82 0.17 85) 0px,
                oklch(0.82 0.17 85) 1px,
                transparent 1px,
                transparent 15px
              )`
            }}
          />
          <div className="relative z-10 px-8 py-8 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Star size={16} className="text-gold fill-gold" />
                <span className="font-body text-gold font-bold text-sm tracking-widest uppercase">
                  Our Specialty
                </span>
              </div>
              <h3 className="font-display text-3xl sm:text-4xl font-black text-cream mb-2">
                Authentic Street Tacos
              </h3>
              <p className="font-body text-cream/70 text-base">
                Our street tacos are the heart of Not Ya Mama's Cooking — made with traditional recipes
                passed down through generations. Available in chicken and beef.
              </p>
            </div>
            <div className="flex gap-3">
              <Badge className="bg-[oklch(0.72_0.16_55)] text-cream border-0 font-body font-semibold px-4 py-2 text-sm">
                🐔 Chicken
              </Badge>
              <Badge className="bg-[oklch(0.48_0.19_28)] text-cream border-0 font-body font-semibold px-4 py-2 text-sm">
                🥩 Beef
              </Badge>
            </div>
          </div>
        </div>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="burritos">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p className="font-body text-muted-foreground text-sm">
            All items available for catering orders.{' '}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-[oklch(0.72_0.16_55)] hover:text-[oklch(0.65_0.18_50)] font-semibold underline underline-offset-2 transition-colors"
            >
              Contact us for custom menus.
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
