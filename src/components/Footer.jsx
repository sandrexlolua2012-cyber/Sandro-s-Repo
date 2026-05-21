import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const socials = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/vangoghi_tbilisi',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
  {
    name: 'TripAdvisor',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const { lang, tr } = useLang()
  const ft = tr.footer
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'
  const ss = lang === 'ka' ? 'font-geo' : 'font-sans'

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="border-t border-white/5" style={{ background: '#08051a' }}>
      {/* Top strip */}
      <div className="divider-gold" />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-16 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left">
              <span className="font-serif text-3xl font-light tracking-widest text-cream-100">VAN GOGHI</span>
              <div className="divider-gold w-16 mt-2" />
            </button>
            <p className={`${ss} font-light text-cream-400 text-[13px] leading-relaxed max-w-xs`}>
              {lang === 'ka'
                ? 'თანამედროვე ქართულ-ევროპული ფიუჟენ რესტორანი თბილისის გულში. ხელოვნება, გემო და ემოცია — ყოველ კერძში.'
                : 'A modern Georgian‑European fusion restaurant in the heart of Tbilisi. Art, flavour, and emotion — on every plate.'
              }
            </p>
            {/* Socials */}
            <div className="flex items-center gap-4 mt-2">
              {socials.map((s) => (
                <motion.a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="w-10 h-10 border border-white/10 flex items-center justify-center text-cream-400 hover:text-gold-400 hover:border-gold-700/40 transition-colors duration-300"
                  aria-label={s.name}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className={`text-[9px] tracking-widest3 uppercase text-gold-500 ${ss} mb-6`}>{ft.navLabel}</p>
            <ul className="flex flex-col gap-3">
              {ft.links.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`${ss} font-light text-[13px] text-cream-400 hover:text-gold-400 transition-colors duration-300 text-left`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <p className={`text-[9px] tracking-widest3 uppercase text-gold-500 ${ss} mb-2`}>{ft.visitLabel}</p>
            <p className={`${ss} font-light text-cream-300 text-[13px] leading-relaxed whitespace-pre-line`}>
              {ft.addr}
            </p>
            <a href="tel:+995551182407" className={`${ss} text-[13px] text-cream-400 hover:text-gold-400 transition-colors duration-300`}>
              +995 551 18 24 07
            </a>
            <p className={`${ss} font-light text-cream-400 text-[13px]`}>{ft.hours}</p>
            <motion.button
              whileHover={{ x: 4 }}
              onClick={() => scrollTo('reservation')}
              className={`flex items-center gap-2 text-gold-500 text-[12px] tracking-widest uppercase ${ss} hover:text-gold-400 transition-colors duration-300 mt-2`}
            >
              <span>{ft.reserveNow}</span>
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="divider-gold mt-16 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans font-light text-cream-400/50 text-[11px]">
            © {new Date().getFullYear()} Van Goghi. All rights reserved.
          </p>
          <p className={`${ss} font-light text-cream-400/30 text-[11px] italic`}>
            {ft.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
