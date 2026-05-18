import { motion } from 'framer-motion'

const dishes = [
  {
    name: 'Shrimp in Grape Leaves',
    description: 'Delicate Black Sea shrimp wrapped in fresh vine leaves, kissed with adjika butter',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=80',
    price: '38 ₾',
  },
  {
    name: 'Mini Meat Khinkali with Bonito Broth',
    description: 'Georgian soul dumplings in a whisper-light dashi-adjika broth',
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=700&q=80',
    price: '32 ₾',
  },
  {
    name: 'Beef Cheeks',
    description: '48-hour braised Kakhetian beef, pomegranate reduction, root vegetable purée',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80',
    price: '62 ₾',
  },
  {
    name: 'Chicken Liver Salad',
    description: 'Seared chicken liver, bitter greens, walnut vinaigrette, pomegranate',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=700&q=80',
    price: '28 ₾',
  },
  {
    name: 'Seabass',
    description: 'Pan-seared Atlantic seabass, tkemali beurre blanc, seasonal herbs',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&q=80',
    price: '72 ₾',
  },
  {
    name: 'Beef Tartare',
    description: 'Hand-cut Charolais beef, quail egg, tarragon, caperberries, sourdough crisp',
    image: 'https://images.unsplash.com/photo-1615937691194-97dbd3f3dc29?w=700&q=80',
    price: '45 ₾',
  },
  {
    name: 'Tasting Set',
    description: 'Seven-course artistic journey through Georgian-European gastronomy',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=700&q=80',
    price: '185 ₾',
  },
  {
    name: 'Sunflower Dessert',
    description: 'White chocolate sunflower, passion fruit curd, saffron honey',
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=700&q=80',
    price: '24 ₾',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function SignatureDishes() {
  return (
    <section id="menu" className="relative py-24 md:py-32 bg-charcoal-dark overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="font-inter text-xs font-medium tracking-[0.35em] uppercase text-gold mb-4">
            Signature Creations
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-cream-light mb-6">
            A Menu Born of Two Worlds
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 gold-line" />
            <span className="text-gold/50 text-sm" aria-hidden="true">✦</span>
            <div className="w-16 gold-line" />
          </div>
        </motion.div>

        {/* Dishes grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {dishes.map((dish) => (
            <motion.div
              key={dish.name}
              variants={cardVariants}
              className="group relative rounded-sm overflow-hidden cursor-pointer card-glow transition-all duration-500"
              style={{ border: '1px solid rgba(201,168,76,0)' }}
              whileHover={{ borderColor: 'rgba(201,168,76,0.3)' }}
            >
              {/* Image */}
              <div className="overflow-hidden h-48 md:h-56 lg:h-60">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-charcoal-dark/60 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-playfair text-base md:text-lg font-semibold text-cream-light leading-snug mb-1">
                  {dish.name}
                </h3>
                <p className="font-cormorant text-sm text-cream/60 font-light leading-snug line-clamp-2">
                  {dish.description}
                </p>
                <p className="font-inter text-xs font-medium text-gold mt-2 tracking-wider">
                  {dish.price}
                </p>
              </div>

              {/* Hover top shimmer line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
