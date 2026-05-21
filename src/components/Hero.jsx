import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

export default function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])
  const { lang, tr } = useLang()
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'
  const ss = lang === 'ka' ? 'font-geo' : 'font-sans'

  return (
    <section ref={ref} id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden" style={{ background: '#0c0820' }}>
      {/* Colorful ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.22) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <motion.div
          animate={{ x: [0, -50, 0], y: [0, 40, 0], scale: [1, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(139,26,26,0.25) 0%, transparent 70%)', filter: 'blur(80px)' }}
        />
        <motion.div
          animate={{ x: [0, 30, -20, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
          className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(42,184,204,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }}
        />
        <motion.div
          animate={{ x: [0, -20, 30, 0], y: [0, -40, 10, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(100,60,200,0.14) 0%, transparent 70%)', filter: 'blur(70px)' }}
        />
        <motion.div
          animate={{ x: [0, 50, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', delay: 8 }}
          className="absolute top-3/4 right-1/4 w-[300px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(154,122,223,0.12) 0%, transparent 70%)', filter: 'blur(50px)' }}
        />
        {/* Grain */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
        }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(12,8,32,0.85) 100%)' }} />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="divider-gold w-16" />
          <span className={`section-label ${ss}`}>{tr.hero.location}</span>
          <span className="divider-gold w-16" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className={`${sf} font-light leading-none mb-8`}
          style={{ fontSize: 'clamp(3rem, 10vw, 8rem)', letterSpacing: '-0.01em' }}
        >
          <span className="text-cream-100 italic">{tr.hero.h1[0]}</span>{' '}
          <span className="text-gradient-gold">{tr.hero.h1[1]}</span>{' '}
          <span className="text-cream-100 italic">{tr.hero.h1[2]}</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 1.0 }}
          className="divider-gold w-32 mx-auto mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mb-14"
        >
          <p className={`${ss} font-light text-cream-300 text-base md:text-lg leading-relaxed max-w-lg mx-auto tracking-wide`}>
            {tr.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
          >
            <span className={lang === 'ka' ? 'font-geo normal-case tracking-normal' : ''}>{tr.hero.cta}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className={`text-cream-400 text-xs tracking-widest uppercase font-sans hover:text-gold-400 transition-colors duration-300 underline underline-offset-4 ${lang === 'ka' ? 'font-geo normal-case tracking-normal text-sm' : ''}`}
          >
            {tr.hero.ctaMenu}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className={`text-[9px] tracking-widest3 text-cream-400 uppercase ${ss}`}>{tr.hero.scroll}</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-gold-500 to-transparent"
        />
      </motion.div>
    </section>
  )
}
