import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { en: 'About', geo: 'ჩვენ შესახებ', id: 'about' },
  { en: 'Menu', geo: 'მენიუ', id: 'menu' },
  { en: 'Experience', geo: 'გამოცდილება', id: 'experience' },
  { en: 'Reservation', geo: 'დაჯავშნა', id: 'reservation' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'bg-charcoal-900/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-start gap-0.5">
            <span className="font-serif text-xl font-light tracking-widest2 text-cream-100">VAN GOGHI</span>
            <span className="text-[9px] tracking-widest3 text-gold-500 uppercase font-sans font-light">Tbilisi · Georgia</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <li key={link.en}>
                <button
                  onClick={() => scrollTo(link.id)}
                  className="flex flex-col items-center text-[11px] tracking-widest uppercase font-sans font-light text-cream-300 hover:text-gold-400 transition-colors duration-300 relative group"
                >
                  {link.en}
                  <span className="font-geo text-[9px] normal-case tracking-normal text-gold-500/40 group-hover:text-gold-400/70 transition-colors duration-300">{link.geo}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-500 group-hover:w-full transition-all duration-300" />
                </button>
              </li>
            ))}
          </ul>

          {/* Reserve CTA */}
          <button
            onClick={() => scrollTo('reservation')}
            className="hidden md:block btn-gold text-[10px] py-3 px-6"
          >
            Reserve <span className="font-geo normal-case tracking-normal opacity-60">· დაჯავშნა</span>
          </button>

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
            className="fixed inset-0 z-40 bg-charcoal-900/98 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {links.map((link, i) => (
              <motion.button
                key={link.en}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 + 0.1 }}
                onClick={() => scrollTo(link.id)}
                className="flex flex-col items-center gap-1 font-serif text-4xl font-light text-cream-100 hover:text-gold-400 transition-colors duration-300"
              >
                {link.en}
                <span className="font-geo text-base normal-case text-gold-500/50">{link.geo}</span>
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              onClick={() => scrollTo('reservation')}
              className="btn-gold mt-6"
            >
              Reserve a Table · <span className="font-geo font-light">მაგიდის დაჯავშნა</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
