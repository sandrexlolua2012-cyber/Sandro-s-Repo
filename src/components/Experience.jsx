import { motion } from 'framer-motion'

const features = [
  {
    num: '01',
    title: 'Fine Dining Atmosphere',
    text: 'Low candlelight, hand-picked ceramics, and a spatial design that turns every dinner into a private event. Our interior was conceived to feel like inhabiting a living painting.',
    tags: ['Candlelit', 'Intimate', '60 Covers'],
  },
  {
    num: '02',
    title: 'Artistic Interior',
    text: 'Original Georgian contemporary art lines every wall. The space breathes between old Tbilisi architecture and a curated modern aesthetic — a gallery you can dine in.',
    tags: ['Original Art', 'Old Tbilisi', 'Contemporary'],
  },
  {
    num: '03',
    title: 'Premium Service',
    text: 'Our team is trained in European hospitality traditions. Each guest receives undivided attention — from the first aperitivo to the final petit four, your evening is orchestrated.',
    tags: ['European Service', 'Attentive', 'Personalised'],
  },
  {
    num: '04',
    title: 'Wine & Cocktails',
    text: 'An extensive cellar of natural Georgian wines — Rkatsiteli, Saperavi, Mtsvane — paired with inventive cocktails that honour the Caucasian botanical pantry.',
    tags: ['Natural Wine', 'Georgian Cellar', 'Signature Cocktails'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-charcoal-800 py-32 md:py-44 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mb-24"
        >
          <span className="section-label">The Experience</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">
            <h2 className="section-title max-w-md">
              Beyond a<br /><span className="italic text-gradient-gold">meal</span>
            </h2>
            <p className="font-sans font-light text-cream-400 text-[14px] leading-relaxed max-w-sm">
              Van Goghi is designed from the ground up to be a total sensory experience — sight, taste, scent, and sound calibrated together.
            </p>
          </div>
          <div className="divider-gold w-full mt-8" />
        </motion.div>

        {/* 2-column grid */}
        <div className="grid md:grid-cols-2 gap-x-20">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.15 }}
              className="group relative flex flex-col gap-5 py-12 border-b border-white/5 overflow-hidden"
            >
              {/* Ghost number background */}
              <span
                className="absolute right-0 bottom-2 font-serif font-light leading-none select-none pointer-events-none"
                style={{ fontSize: 'clamp(6rem, 10vw, 9rem)', color: 'rgba(201,168,76,0.05)' }}
              >
                {f.num}
              </span>

              <div className="flex items-center gap-4 relative z-10">
                <span className="font-serif text-5xl font-light text-gold-700 leading-none">{f.num}</span>
                <div className="divider-gold flex-1" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-cream-100 group-hover:text-gold-300 transition-colors duration-500 relative z-10">
                {f.title}
              </h3>
              <p className="font-sans font-light text-cream-400 text-[14px] leading-8 relative z-10">{f.text}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {f.tags.map(t => (
                  <span key={t} className="text-[9px] tracking-widest uppercase font-sans px-3 py-1.5 border border-gold-700/30 text-gold-500/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
