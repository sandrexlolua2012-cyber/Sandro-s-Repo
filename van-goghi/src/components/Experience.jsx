import { motion } from 'framer-motion'

const experiences = [
  {
    title: 'Dining as Performance',
    subtitle: 'The Art of the Table',
    body: 'Each plate that leaves our kitchen is conceived as an act of visual storytelling. Our chefs work at the intersection of technique and imagination — composing dishes where color, texture, and form speak before the first bite. The candlelit dining room is your stage; every course, your next scene.',
    image: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=900&q=80',
    imageAlt: 'Artistic food presentation at Van Goghi',
    imageLeft: true,
  },
  {
    title: 'The Art of Hospitality',
    subtitle: 'Georgian Warmth, European Precision',
    body: 'In Georgia, hosting is a sacred act. We carry that tradition into every service — attentive, unhurried, and deeply personal. Our team learns your preferences, anticipates your needs, and creates an atmosphere where you feel both pampered and at home. This is hospitality elevated to its highest form.',
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=900&q=80',
    imageAlt: 'Refined table service at Van Goghi',
    imageLeft: false,
  },
  {
    title: 'Liquid Poetry',
    subtitle: 'Cocktails & Natural Wine',
    body: 'Our bar program celebrates Georgia\'s ancient winemaking tradition — home to the world\'s oldest wine culture — alongside a cocktail menu that draws from Caucasian botanicals, local honey, and rare spirits. Each glass is a narrative: a conversation between terroir and craft, tradition and invention.',
    image: 'https://images.unsplash.com/photo-1621274147744-cfb5694bb233?w=900&q=80',
    imageAlt: 'Artisan cocktails at Van Goghi',
    imageLeft: true,
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      {/* Large faded display text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 whitespace-nowrap overflow-hidden">
        <span
          className="font-playfair font-bold text-[8rem] md:text-[12rem] lg:text-[16rem] leading-none"
          style={{ color: 'rgba(201,168,76,0.04)' }}
          aria-hidden="true"
        >
          THE EXPERIENCE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p className="font-inter text-xs font-medium tracking-[0.35em] uppercase text-gold mb-4">
            Beyond the Plate
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-cream-light">
            The Van Goghi Experience
          </h2>
        </motion.div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-24 md:gap-32">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: exp.imageLeft ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className={`relative ${exp.imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
              >
                {/* Frame */}
                <div
                  className="absolute z-0 rounded-sm"
                  style={{
                    inset: '-12px',
                    border: '1px solid rgba(201,168,76,0.15)',
                    transform: exp.imageLeft ? 'translate(-8px, 8px)' : 'translate(8px, 8px)',
                  }}
                />
                <div className="relative z-10 overflow-hidden rounded-sm">
                  <img
                    src={exp.image}
                    alt={exp.imageAlt}
                    className="w-full h-72 md:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/30 to-transparent" />
                </div>
                {/* Corner accents */}
                {exp.imageLeft ? (
                  <>
                    <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold z-20" />
                    <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold z-20" />
                  </>
                ) : (
                  <>
                    <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold z-20" />
                    <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold z-20" />
                  </>
                )}
                {/* Index number */}
                <div className="absolute -bottom-6 left-6 z-20">
                  <span
                    className="font-playfair font-bold text-6xl leading-none"
                    style={{ color: 'rgba(201,168,76,0.15)' }}
                    aria-hidden="true"
                  >
                    0{index + 1}
                  </span>
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                initial={{ opacity: 0, x: exp.imageLeft ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className={`flex flex-col gap-5 ${exp.imageLeft ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <p className="font-inter text-xs font-medium tracking-[0.35em] uppercase text-gold/70">
                  {exp.subtitle}
                </p>
                <h3 className="font-playfair text-3xl md:text-4xl font-semibold text-cream-light leading-tight">
                  {exp.title}
                </h3>
                <div className="w-12 gold-line" />
                <p className="font-cormorant text-lg md:text-xl text-cream/65 font-light leading-relaxed">
                  {exp.body}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
