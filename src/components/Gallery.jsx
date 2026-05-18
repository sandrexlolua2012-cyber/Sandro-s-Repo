import { motion } from 'framer-motion'

const items = [
  { label: 'Khinkali & Bonito Broth', gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #1a3a5c 100%)', span: 'row-span-2' },
  { label: 'Sunflower Dessert', gradient: 'linear-gradient(135deg, #1a1200 0%, #4a3800 60%, #8a6800 100%)', span: '' },
  { label: 'Cocktail Garden', gradient: 'linear-gradient(135deg, #0a1a10 0%, #143a20 60%, #1a5a2a 100%)', span: '' },
  { label: 'Beef Tartare', gradient: 'linear-gradient(135deg, #1a0808 0%, #4a1010 60%, #7a1818 100%)', span: '' },
  { label: 'Interior — Evening', gradient: 'linear-gradient(135deg, #0f0800 0%, #2e1c00 50%, #5a3800 100%)', span: 'row-span-2' },
  { label: 'Seabass', gradient: 'linear-gradient(135deg, #081820 0%, #0d3040 60%, #104a5a 100%)', span: '' },
  { label: 'Wine Cellar', gradient: 'linear-gradient(135deg, #1a0a10 0%, #3a1020 60%, #6a1830 100%)', span: '' },
  { label: 'Shrimp in Grape Leaves', gradient: 'linear-gradient(135deg, #1a1008 0%, #3a2210 60%, #6a3a18 100%)', span: '' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="bg-charcoal-800 py-32 md:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="text-center mb-20"
        >
          <span className="section-label">Gallery</span>
          <h2 className="section-title mt-4 mb-6">Through the Lens</h2>
          <div className="divider-gold w-24 mx-auto" />
        </motion.div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-3">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
              style={{ background: item.gradient }}
            >
              {/* Noise texture */}
              <div className="absolute inset-0 opacity-25"
                style={{ background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\'/%3E%3C/filter%3E%3Crect width=\'200\' height=\'200\' filter=\'url(%23n)\'/%3E%3C/svg%3E")' }} />

              {/* Animated inner glow */}
              <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 4, repeat: Infinity, delay: i * 0.5 }}
                className="absolute inset-0"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 60%)' }}
              />

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{ background: 'rgba(8,8,8,0.65)', backdropFilter: 'blur(6px)' }}
              >
                <div className="divider-gold w-10 mx-auto" />
                <span className="font-serif text-lg text-cream-100 font-light text-center px-4">{item.label}</span>
                <div className="divider-gold w-10 mx-auto" />
              </motion.div>

              {/* Corner accent */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold-700/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="text-center text-cream-400 text-[12px] font-sans font-light mt-8 tracking-widest uppercase"
        >
          Follow us <a href="#" className="text-gold-500 hover:text-gold-400 underline underline-offset-2">@vangoghi_tbilisi</a>
        </motion.p>
      </div>
    </section>
  )
}
