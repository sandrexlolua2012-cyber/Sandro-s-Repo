import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Dishes() {
  const { lang, tr } = useLang()
  const d = tr.dishes
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'
  const ss = lang === 'ka' ? 'font-geo' : 'font-sans'

  return (
    <section id="menu" className="py-24 md:py-36 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="text-center mb-14"
        >
          <span className={`section-label ${ss}`}>{d.label}</span>
          <h2 className={`section-title mt-4 mb-2 ${sf}`}>{d.heading}</h2>
          <div className="divider-gold w-24 mx-auto" />
          <p className={`${ss} font-light text-[14px] mt-6 max-w-md mx-auto leading-relaxed`} style={{ color: '#8a7a68' }}>
            {d.subtitle}
          </p>
        </motion.div>

        {/* Dish list */}
        <div className="max-w-4xl mx-auto">
          {d.items.map((dish, i) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative flex items-start gap-6 md:gap-14 py-14 border-b last:border-0"
              style={{ borderColor: 'rgba(26,21,16,0.08)' }}
            >
              {/* Left accent bar on hover */}
              <div
                className="absolute left-0 top-10 bottom-10 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: dish.accent }}
              />

              {/* Number */}
              <span
                className="hidden md:block font-serif text-5xl font-light leading-none select-none w-16 shrink-0 mt-2"
                style={{ color: 'rgba(201,168,76,0.25)' }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div className="flex-1">
                <span
                  className={`text-[9px] tracking-widest uppercase ${ss} px-2.5 py-1 border inline-block mb-4`}
                  style={{ borderColor: `${dish.accent}60`, color: dish.accent, background: `${dish.accent}10` }}
                >
                  {dish.tag}
                </span>
                <h3 className={`${sf} text-4xl md:text-5xl font-light text-charcoal-900 group-hover:text-gold-600 transition-colors duration-500 mb-1 leading-tight`}>
                  {dish.name}
                </h3>
                <div
                  className="h-px w-10 mb-4 group-hover:w-28 transition-all duration-700"
                  style={{ background: `${dish.accent}70` }}
                />
                <p className={`${ss} text-[15px] font-light leading-relaxed max-w-xl`} style={{ color: '#6b5d4a' }}>
                  {dish.desc}
                </p>
              </div>

              {/* Picture frame */}
              <div
                className="hidden md:flex shrink-0 w-52 h-52 self-center items-center justify-center"
                style={{ border: `1px solid ${dish.accent}30`, background: `${dish.accent}05` }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" style={{ color: `${dish.accent}50` }}>
                  <rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-12"
        >
          <button
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            <span className={lang === 'ka' ? 'font-geo normal-case tracking-normal' : ''}>{d.cta}</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
