import { motion } from 'framer-motion'

export default function ChefQuote() {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden" style={{ background: '#07060f' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(100,60,200,0.14) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full -translate-y-1/2"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>
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
          className="font-serif font-light italic text-cream-100 leading-[1.5] mb-5"
          style={{ fontSize: 'clamp(1.6rem, 3.5vw, 3rem)' }}
        >
          "Every plate tells a story of Georgia —<br className="hidden md:block" />
          its soil, its seasons, its soul."
        </blockquote>
        <p className="font-geo text-gold-500/50 text-lg md:text-xl font-light leading-relaxed">
          „ყოველი კერძი საქართველოს ისტორიას ყვება — მის მიწას, სეზონებს, სულს."
        </p>
        <div className="divider-gold w-20 mx-auto mt-14 mb-8" />
        <span className="section-label">Executive Chef, Van Goghi</span>
      </motion.div>
    </section>
  )
}
