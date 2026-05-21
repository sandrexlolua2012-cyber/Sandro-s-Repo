import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const navIds = ['about', 'menu', 'experience', 'reservation']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang, tr } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const navLabels = [tr.nav.about, tr.nav.menu, tr.nav.experience, tr.nav.reservation]
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'

  const LangToggle = () => (
    <div className="flex items-center p-1 rounded-full border border-gold-700/30">
      {['en', 'ka'].map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-3 py-1 rounded-full text-[10px] font-sans uppercase tracking-widest transition-all duration-300 ${
            lang === l
              ? 'bg-gold-500 text-charcoal-900 font-medium'
              : 'text-cream-400 hover:text-gold-400'
          }`}
        >
          {l === 'en' ? '🇬🇧 EN' : '🇬🇪 KA'}
        </button>
      ))}
    </div>
  )

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
        style={scrolled ? { background: 'rgba(12,8,32,0.92)' } : {}}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-start gap-0.5">
            <span className="font-serif text-xl font-light tracking-widest2 text-cream-100">VAN GOGHI</span>
            <span className="text-[9px] tracking-widest3 text-gold-500 uppercase font-sans font-light">Tbilisi · Georgia</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {navIds.map((id, idx) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`text-[11px] tracking-widest uppercase font-sans font-light text-cream-300 hover:text-gold-400 transition-colors duration-300 relative group ${lang === 'ka' ? 'font-geo normal-case tracking-normal text-[13px]' : ''}`}
                >
                  {navLabels[idx]}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop right side: lang toggle + reserve */}
          <div className="hidden md:flex items-center gap-4">
            <LangToggle />
            <button
              onClick={() => scrollTo('reservation')}
              className="btn-gold text-[10px] py-3 px-6"
            >
              <span className={lang === 'ka' ? 'font-geo normal-case tracking-normal' : ''}>{tr.nav.reserve}</span>
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-px bg-cream-200 origin-center transition-all" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }} className="block w-6 h-px bg-cream-200" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-px bg-cream-200 origin-center" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
            style={{ background: 'rgba(8,5,26,0.98)' }}
          >
            {navIds.map((id, idx) => (
              <motion.button
                key={id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.07 + 0.1 }}
                onClick={() => scrollTo(id)}
                className={`text-4xl font-light text-cream-100 hover:text-gold-400 transition-colors duration-300 ${lang === 'ka' ? 'font-geo' : 'font-serif'}`}
              >
                {navLabels[idx]}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollTo('reservation')}
              className="btn-gold mt-4"
            >
              <span className={lang === 'ka' ? 'font-geo normal-case tracking-normal' : ''}>{tr.hero.cta}</span>
            </motion.button>
            {/* Mobile lang toggle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-2"
            >
              <LangToggle />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
