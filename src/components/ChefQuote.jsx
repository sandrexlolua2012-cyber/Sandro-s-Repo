import { motion } from 'framer-motion'

export default function ChefQuote() {
  return (
    <section className="relative bg-charcoal-900 py-32 md:py-40 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif font-light leading-none"
          style={{ fontSize: 'clamp(10rem, 28vw, 26rem)', color: 'rgba(201,168,76,0.03)' }}>
          VG
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
        className="max-w-4xl mx-auto px-6 text-center relative z-10"
      >
        <div className="divider-gold w-20 mx-auto mb-14" />
        <blockquote
          className="font-serif font-light italic text-cream-100 leading-[1.5]"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}
        >
          "Every plate tells a story of Georgia —<br className="hidden md:block" />
          its soil, its seasons, its soul."
        </blockquote>
        <div className="divider-gold w-20 mx-auto mt-14 mb-8" />
        <span className="section-label">Executive Chef, Van Goghi</span>
      </motion.div>
    </section>
  )
}
