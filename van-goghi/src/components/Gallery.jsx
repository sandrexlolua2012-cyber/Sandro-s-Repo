import { motion } from 'framer-motion'
import { Plus } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
    alt: 'Elegant dining room atmosphere',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&q=80',
    alt: 'Signature dessert creation',
  },
  {
    src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80',
    alt: 'Artisan cocktail presentation',
  },
  {
    src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600&q=80',
    alt: 'Table service and ambiance',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80',
    alt: 'Braised beef cheeks dish',
  },
  {
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80',
    alt: 'Pan-seared seabass',
  },
  {
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    alt: 'Shrimp starter dish',
  },
  {
    src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=80',
    alt: 'Restaurant interior and decor',
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="font-inter text-xs font-medium tracking-[0.35em] uppercase text-gold mb-4">
            Visual Stories
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-cream-light mb-6">
            The Gallery
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 gold-line" />
            <span className="text-gold/50 text-sm" aria-hidden="true">✦</span>
            <div className="w-16 gold-line" />
          </div>
        </motion.div>

        {/* Masonry grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.07,
              }}
              className="relative group mb-3 md:mb-4 overflow-hidden rounded-sm cursor-pointer block"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ display: 'block' }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-gold/70 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-400">
                  <Plus size={18} className="text-gold" />
                </div>
              </div>

              {/* Bottom shimmer line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
