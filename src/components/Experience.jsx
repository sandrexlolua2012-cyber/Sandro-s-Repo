import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Experience() {
  const { lang, tr } = useLang()
  const ex = tr.experience
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'
  const ss = lang === 'ka' ? 'font-geo' : 'font-sans'

  return (
    <section id="experience" className="py-24 md:py-36 overflow-hidden" style={{ background: '#faf8f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mb-14"
        >
          <span className={`section-label ${ss}`}>{ex.label}</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-4">
            <div>
              <h2 className={`section-title max-w-md ${sf}`}>
                {ex.h1}<br /><span className="italic text-gradient-gold">{ex.h2}</span>
              </h2>
            </div>
            <p className={`${ss} font-light text-[14px] leading-relaxed max-w-sm`} style={{ color: '#8a7a68' }}>
              {ex.subtitle}
            </p>
          </div>
          <div className="divider-gold w-full mt-8" />
        </motion.div>

        {/* 2-column grid */}
        <div className="grid md:grid-cols-2 gap-x-12">
          {ex.items.map((f, i) => (
            <motion.div
              key={f.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: (i % 2) * 0.15 }}
              className="group relative flex flex-col gap-5 py-16 border-b border-l-2 pl-8 overflow-hidden"
              style={{ borderBottomColor: 'rgba(26,21,16,0.08)', borderLeftColor: f.color }}
            >
              {/* Ghost number */}
              <span
                className="absolute right-0 bottom-2 font-serif font-light leading-none select-none pointer-events-none"
                style={{ fontSize: 'clamp(6rem, 10vw, 9rem)', color: 'rgba(201,168,76,0.1)' }}
              >
                {f.num}
              </span>

              <div className="flex items-center gap-4 relative z-10">
                <span className="font-serif text-5xl font-light text-gold-700 leading-none">{f.num}</span>
                <div className="divider-gold flex-1" />
              </div>
              <div className="relative z-10">
                <h3 className={`${sf} text-4xl md:text-5xl font-light text-charcoal-900 group-hover:text-gold-600 transition-colors duration-500`}>
                  {f.title}
                </h3>
              </div>
              <p className={`${ss} font-light text-[16px] leading-9 relative z-10`} style={{ color: '#4a3d2e' }}>{f.text}</p>
              <div className="flex flex-wrap gap-2 relative z-10">
                {f.tags.map(tag => (
                  <span key={tag} className={`text-[9px] tracking-widest uppercase ${ss} px-3 py-1.5 border border-gold-700/30 text-gold-500/70`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Picture frame */}
              <div
                className="relative z-10 w-full flex items-center justify-center mt-2"
                style={{ height: '220px', border: '1px solid rgba(201,168,76,0.18)', background: 'rgba(201,168,76,0.03)' }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" style={{ color: 'rgba(201,168,76,0.35)' }}>
                  <rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
