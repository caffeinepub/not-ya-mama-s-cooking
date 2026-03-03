import { Star } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  image: string;
  badge?: string;
  isSignature?: boolean;
  details: string[];
  choices?: { label: string; emoji: string }[];
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
    details: ['Corn tortillas', 'Flour Tortillas', 'Grilled chicken', 'Fresh cilantro & onion', 'Salsa verde', 'Lime'],
  },
  {
    id: 'beef-tacos',
    name: 'Beef Street Tacos',
    description:
      'Juicy carne asada seasoned with our secret blend of spices, served on a warm corn tortilla with diced onion, cilantro, and a drizzle of smoky red salsa.',
    image: '/assets/generated/beef-tacos.dim_800x600.png',
    badge: 'Signature',
    isSignature: true,
    details: ['Corn tortillas', 'Flour Tortillas', 'Carne asada', 'Fresh cilantro & onion', 'Smoky red salsa', 'Lime'],
  },
  {
    id: 'quesadillas',
    name: 'Quesadillas',
    description:
      'Lightly toasted flour tortillas filled with gooey melted cheese. Served with fresh cilantro, sliced onions, house salsa, and cool sour cream on the side.',
    image: '/assets/generated/quesadilla.dim_800x600.png',
    details: ['Flour tortilla', 'Melted cheese blend', 'Cilantro & sliced onions', 'House salsa', 'Sour cream'],
    choices: [
      { label: 'Cheese', emoji: '🧀' },
      { label: 'Chicken', emoji: '🐔' },
      { label: 'Steak', emoji: '🥩' },
    ],
  },
  {
    id: 'chips-salsa',
    name: 'Chips & Salsa',
    description:
      'Crispy, house-made tortilla chips served alongside our vibrant, freshly prepared salsa — bursting with ripe tomatoes, jalapeño, cilantro, and a hint of lime. The perfect starter.',
    image: '/assets/generated/chips-salsa.dim_800x600.png',
    details: ['House tortilla chips', 'Fresh tomato salsa', 'Jalapeño', 'Cilantro', 'Lime'],
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

        {/* Choice selector label for quesadillas */}
        {item.choices && (
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className="font-body text-xs font-bold text-[oklch(0.72_0.16_55)] uppercase tracking-wider">
              Choose your filling:
            </span>
            <div className="flex gap-1.5 flex-wrap">
              {item.choices.map((choice) => (
                <span
                  key={choice.label}
                  className="px-2 py-0.5 bg-[oklch(0.48_0.19_28)] text-cream font-body text-xs font-semibold rounded-full"
                >
                  {choice.emoji} {choice.label}
                </span>
              ))}
            </div>
          </div>
        )}

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
          <p className="font-body text-muted-foreground text-base max-w-2xl mx-auto">
            Every dish is crafted with fresh ingredients and authentic Mexican recipes passed down
            through generations. Perfect for catering your next event.
          </p>
        </div>

        {/* Menu grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="font-body text-muted-foreground text-base mb-6">
            Want to bring these flavors to your event?
          </p>
          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-10 py-4 bg-[oklch(0.48_0.19_28)] hover:bg-[oklch(0.42_0.18_28)] text-cream font-body font-bold text-base tracking-wide rounded-full shadow-warm hover:shadow-warm-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Catering Now
          </button>
        </div>
      </div>
    </section>
  );
}
