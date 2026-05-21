import { motion } from 'framer-motion'

const features = [
  {
    num: '01',
    title: 'Fine Dining Atmosphere',
    text: 'Low candlelight, hand-picked ceramics, and a spatial design that turns every dinner into a private event. Our interior was conceived to feel like inhabiting a living painting.',
    visual: 'linear-gradient(135deg, #1a1000 0%, #2e1f00 30%, #4a3010 60%, #c9a84c22 100%)',
    tags: ['Candlelit', 'Intimate', '60 Covers'],
  },
  {
    num: '02',
    title: 'Artistic Interior',
    text: 'Original Georgian contemporary art lines every wall. The space breathes between old Tbilisi architecture and a curated modern aesthetic — a gallery you can dine in.',
    visual: 'linear-gradient(135deg, #0a0818 0%, #16103a 40%, #2a1a60 70%, #9a7adf22 100%)',
    tags: ['Original Art', 'Old Tbilisi', 'Contemporary'],
  },
  {
    num: '03',
    title: 'Premium Service',
    text: 'Our team is trained in European hospitality traditions. Each guest receives undivided attention — from the first aperitivo to the final petit four, your evening is orchestrated.',
    visual: 'linear-gradient(135deg, #0f1a10 0%, #1a3020 40%, #2a5030 70%, #4a9a5022 100%)',
    tags: ['European Service', 'Attentive', 'Personalised'],
  },
  {
    num: '04',
    title: 'Wine & Cocktails',
    text: 'An extensive cellar of natural Georgian wines — Rkatsiteli, Saperavi, Mtsvane — paired with inventive cocktails that honour the Caucasian botanical pantry.',
    visual: 'linear-gradient(135deg, #1a0810 0%, #3a1020 40%, #6b1a30 70%, #8b1a1a22 100%)',
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

        {/* Feature rows */}
        <div className="flex flex-col gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="flex flex-col gap-6 py-6 border-b border-white/5"
            >
              <div className="flex items-center gap-4">
                <span className="font-serif text-5xl font-light text-gold-700 leading-none">{f.num}</span>
                <div className="divider-gold flex-1" />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-cream-100">{f.title}</h3>
              <p className="font-sans font-light text-cream-400 text-[14px] leading-8">{f.text}</p>
              <div className="flex flex-wrap gap-2">
                {f.tags.map(t => (
                  <span key={t} className="text-[9px] tracking-widest uppercase font-sans px-3 py-1 border border-gold-700/40 text-gold-500">
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
