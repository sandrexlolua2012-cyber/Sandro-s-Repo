import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Dishes() {
  const { lang, tr } = useLang()
  const d = tr.dishes
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'
  const ss = lang === 'ka' ? 'font-geo' : 'font-sans'

  return (
    <section id="menu" className="py-32 md:py-44 overflow-hidden" style={{ background: '#160508' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="text-center mb-24"
        >
          <span className={`section-label ${ss}`}>{d.label}</span>
          <h2 className={`section-title mt-4 mb-2 ${sf}`}>{d.heading}</h2>
          <div className="divider-gold w-24 mx-auto" />
          <p className={`${ss} font-light text-cream-400 text-[14px] mt-6 max-w-md mx-auto leading-relaxed`}>
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
                  className={`text-[9px] tracking-widest uppercase ${ss} px-2.5 py-1 border inline-block mb-4`}
                  style={{ borderColor: `${dish.accent}60`, color: dish.accent, background: `${dish.accent}10` }}
                >
                  {dish.tag}
                </span>
                <h3 className={`${sf} text-3xl md:text-4xl font-light text-cream-100 group-hover:text-gold-300 transition-colors duration-500 mb-1 leading-tight`}>
                  {dish.name}
                </h3>
                <div
                  className="h-px w-10 mb-4 group-hover:w-28 transition-all duration-700"
                  style={{ background: `${dish.accent}70` }}
                />
                <p className={`${ss} text-[13px] text-cream-400 font-light leading-relaxed max-w-xl`}>
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
            <span className={lang === 'ka' ? 'font-geo normal-case tracking-normal' : ''}>{d.cta}</span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}
