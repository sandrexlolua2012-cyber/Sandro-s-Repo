import { motion } from 'framer-motion'

const dishes = [
  {
    name: 'Shrimp in Grape Leaves',
    desc: 'Plump Atlantic shrimp wrapped in sun-dried Georgian grape leaves, charred over open flame with saffron butter.',
    tag: 'Starter',
    accent: '#c4621a',
  },
  {
    name: 'Mini Khinkali & Bonito Broth',
    desc: 'Delicate pork-and-herb dumplings served in a shimmering dashi-bonito consommé with adjika oil.',
    tag: 'Signature',
    accent: '#4a90d9',
  },
  {
    name: 'Beef Cheeks',
    desc: '48-hour braised beef cheeks glazed with Saperavi reduction, parsnip purée, and crispy capers.',
    tag: 'Main',
    accent: '#8b1a1a',
  },
  {
    name: 'Chicken Liver Salad',
    desc: 'Seared livers, bitter radicchio, walnuts, pomegranate molasses vinaigrette and shaved pecorino.',
    tag: 'Salad',
    accent: '#c9a84c',
  },
  {
    name: 'Seabass',
    desc: 'Pan-seared seabass over tkemali-creamed leeks, roe butter sauce and fennel fronds.',
    tag: 'Main',
    accent: '#2ab8cc',
  },
  {
    name: 'Beef Tartare',
    desc: 'Hand-cut tenderloin with tarragon, churchkhela crumb, quail egg yolk and smoked adjika.',
    tag: 'Raw Bar',
    accent: '#e05050',
  },
  {
    name: 'Tasting Set',
    desc: 'Seven courses curated by our chef — a complete narrative of Georgian flavour in European language.',
    tag: 'Dégustation',
    accent: '#9a7adf',
  },
  {
    name: 'Sunflower Dessert',
    desc: 'Caramelised honey mousse sculpted as a sunflower, churchkhela praline and Kakhetian walnut ice cream.',
    tag: 'Dessert',
    accent: '#f0c030',
  },
]

export default function Dishes() {
  return (
    <section id="menu" className="bg-charcoal-900 py-32 md:py-44 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          <span className="section-label">Signature Dishes</span>
          <h2 className="section-title mt-4 mb-6">The Menu</h2>
          <div className="divider-gold w-24 mx-auto" />
          <p className="font-sans font-light text-cream-400 text-[14px] mt-6 max-w-md mx-auto leading-relaxed">
            Each dish is a composition — seasonal Georgian ingredients elevated through modern European discipline.
          </p>
        </motion.div>

        {/* Dish list — editorial style */}
        <div className="max-w-4xl mx-auto">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative flex items-start gap-6 md:gap-12 py-10 border-b border-white/[0.06] last:border-0"
            >
              {/* Left accent bar on hover */}
              <div
                className="absolute left-0 top-10 bottom-10 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: dish.accent }}
              />

              {/* Number */}
              <span
                className="hidden md:block font-serif text-5xl font-light leading-none select-none w-16 shrink-0 mt-2"
                style={{ color: 'rgba(201,168,76,0.15)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div className="flex-1">
                <span
                  className="text-[9px] tracking-widest uppercase font-sans px-2.5 py-1 border inline-block mb-4"
                  style={{ borderColor: `${dish.accent}60`, color: dish.accent, background: `${dish.accent}10` }}
                >
                  {dish.tag}
                </span>
                <h3 className="font-serif text-3xl md:text-4xl font-light text-cream-100 group-hover:text-gold-300 transition-colors duration-500 mb-3 leading-tight">
                  {dish.name}
                </h3>
                <div
                  className="h-px w-10 mb-4 group-hover:w-28 transition-all duration-700"
                  style={{ background: `${dish.accent}70` }}
                />
                <p className="font-sans text-[13px] text-cream-400 font-light leading-relaxed max-w-xl">
                  {dish.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <button
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            Reserve Your Experience
          </button>
        </motion.div>
      </div>
    </section>
  )
}
