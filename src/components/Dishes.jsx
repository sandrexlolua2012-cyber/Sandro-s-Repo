import { motion } from 'framer-motion'

const dishes = [
  {
    name: 'Shrimp in Grape Leaves',
    desc: 'Plump Atlantic shrimp wrapped in sun-dried Georgian grape leaves, charred over open flame with saffron butter.',
    tag: 'Starter',
    gradient: 'linear-gradient(135deg, #3d2010 0%, #7a3820 40%, #c4621a 100%)',
    accent: '#c4621a',
  },
  {
    name: 'Mini Khinkali & Bonito Broth',
    desc: 'Delicate pork-and-herb dumplings served in a shimmering dashi-bonito consommé with adjika oil.',
    tag: 'Signature',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    accent: '#4a90d9',
  },
  {
    name: 'Beef Cheeks',
    desc: '48-hour braised beef cheeks glazed with Saperavi reduction, parsnip purée, and crispy capers.',
    tag: 'Main',
    gradient: 'linear-gradient(135deg, #1c0a0a 0%, #4a1212 50%, #8b1a1a 100%)',
    accent: '#8b1a1a',
  },
  {
    name: 'Chicken Liver Salad',
    desc: 'Seared livers, bitter radicchio, walnuts, pomegranate molasses vinaigrette and shaved pecorino.',
    tag: 'Salad',
    gradient: 'linear-gradient(135deg, #1a1208 0%, #3d2e12 50%, #7a5e1e 100%)',
    accent: '#c9a84c',
  },
  {
    name: 'Seabass',
    desc: 'Pan-seared seabass over tkemali-creamed leeks, roe butter sauce and fennel fronds.',
    tag: 'Main',
    gradient: 'linear-gradient(135deg, #081a1c 0%, #0d3540 50%, #0f5060 100%)',
    accent: '#2ab8cc',
  },
  {
    name: 'Beef Tartare',
    desc: 'Hand-cut tenderloin with tarragon, churchkhela crumb, quail egg yolk and smoked adjika.',
    tag: 'Raw Bar',
    gradient: 'linear-gradient(135deg, #1a0808 0%, #3d1010 50%, #6b1a1a 100%)',
    accent: '#e05050',
  },
  {
    name: 'Tasting Set',
    desc: 'Seven courses curated by our chef — a complete narrative of Georgian flavour in European language.',
    tag: 'Dégustation',
    gradient: 'linear-gradient(135deg, #0a0a1a 0%, #1a1230 50%, #2a1a4a 100%)',
    accent: '#9a7adf',
  },
  {
    name: 'Sunflower Dessert',
    desc: 'Caramelised honey mousse sculpted as a sunflower, churchkhela praline and Kakhetian walnut ice cream.',
    tag: 'Dessert',
    gradient: 'linear-gradient(135deg, #1a1200 0%, #3d2e00 50%, #7a5e00 100%)',
    accent: '#f0c030',
  },
]

export default function Dishes() {
  return (
    <section id="menu" className="bg-charcoal-900 py-32 md:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span className="section-label">Signature Dishes</span>
          <h2 className="section-title mt-4 mb-6">The Menu</h2>
          <div className="divider-gold w-24 mx-auto" />
          <p className="font-sans font-light text-cream-400 text-[14px] mt-6 max-w-md mx-auto leading-relaxed">
            Each dish is a composition — seasonal Georgian ingredients elevated through modern European discipline.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {dishes.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 4) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative flex flex-col overflow-hidden cursor-default"
              style={{ borderRadius: '2px' }}
            >
              {/* Visual block */}
              <div className="relative h-52 overflow-hidden" style={{ background: dish.gradient }}>
                {/* Texture overlay */}
                <div className="absolute inset-0 opacity-30"
                  style={{ background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.85\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\' opacity=\'1\'/%3E%3C/svg%3E") repeat' }} />
                {/* Accent orb */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, delay: i * 0.3 }}
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full"
                  style={{ background: `radial-gradient(circle, ${dish.accent}55 0%, transparent 70%)`, filter: 'blur(20px)' }}
                />
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-[9px] tracking-widest uppercase font-sans px-3 py-1.5 border"
                    style={{ borderColor: `${dish.accent}60`, color: dish.accent, background: `${dish.accent}15` }}>
                    {dish.tag}
                  </span>
                </div>
                {/* Hover overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
                >
                  <span className="text-[10px] tracking-widest uppercase text-cream-200 font-sans border-b border-cream-200 pb-1">View Details</span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col gap-3 p-5 bg-charcoal-700 border border-white/5 group-hover:border-gold-700/30 transition-colors duration-500">
                <h3 className="font-serif text-xl font-light text-cream-100 leading-tight group-hover:text-gold-300 transition-colors duration-300">
                  {dish.name}
                </h3>
                <div className="h-px w-8 bg-gold-700 group-hover:w-16 transition-all duration-500" />
                <p className="font-sans text-[12px] text-cream-400 font-light leading-relaxed flex-1">
                  {dish.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
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
