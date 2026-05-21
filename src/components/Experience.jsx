import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Experience() {
  const { lang, tr } = useLang()
  const ex = tr.experience
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'
  const ss = lang === 'ka' ? 'font-geo' : 'font-sans'

  return (
    <section id="experience" className="py-32 md:py-44 overflow-hidden" style={{ background: '#05101a' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mb-24"
        >
          <span className={`section-label ${ss}`}>{ex.label}</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">
            <div>
              <h2 className={`section-title max-w-md ${sf}`}>
                {ex.h1}<br /><span className="italic text-gradient-gold">{ex.h2}</span>
              </h2>
            </div>
            <p className={`${ss} font-light text-cream-400 text-[14px] leading-relaxed max-w-sm`}>
              {ex.subtitle}
            </p>
          </div>
          <div className="divider-gold w-full mt-8" />
        </motion.div>

        {/* 2-column grid */}
        <div className="grid md:grid-cols-2 gap-x-20">
          {ex.items.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.15 }}
              className="group relative flex flex-col gap-5 py-12 border-b border-white/5 overflow-hidden"
            >
              {/* Colorful ambient glow per card */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: `radial-gradient(circle, ${f.color} 0%, transparent 70%)`, filter: 'blur(40px)' }} />

              {/* Ghost number */}
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
              <div className="relative z-10">
                <h3 className={`${sf} text-3xl md:text-4xl font-light text-cream-100 group-hover:text-gold-300 transition-colors duration-500`}>
                  {f.title}
                </h3>
              </div>
              <p className={`${ss} font-light text-cream-400 text-[14px] leading-8 relative z-10`}>{f.text}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {f.tags.map(tag => (
                  <span key={tag} className={`text-[9px] tracking-widest uppercase ${ss} px-3 py-1.5 border border-gold-700/30 text-gold-500/70`}>
                    {tag}
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
