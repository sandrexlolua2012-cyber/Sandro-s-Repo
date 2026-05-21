import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const icons = {
  address: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  phone: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.29 6.29l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
    </svg>
  ),
  hours: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  instagram: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
}

export default function Contact() {
  const { lang, tr } = useLang()
  const ct = tr.contact
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'
  const ss = lang === 'ka' ? 'font-geo' : 'font-sans'

  const info = [
    { icon: icons.address, label: ct.address, value: '24 Mikheil Zandukeli St', sub: ct.addressSub, href: 'https://maps.google.com/?q=24+Mikheil+Zandukeli+St+Tbilisi' },
    { icon: icons.phone, label: ct.phone, value: '+995 551 18 24 07', sub: ct.phoneSub, href: 'tel:+995551182407' },
    { icon: icons.hours, label: ct.hours, value: ct.hoursVal, sub: ct.hoursSub, href: null },
    { icon: icons.instagram, label: ct.instagram, value: '@vangoghi_tbilisi', sub: ct.instaSub, href: 'https://instagram.com/vangoghi_tbilisi' },
  ]

  return (
    <section id="contact" className="py-24 md:py-36 overflow-hidden" style={{ background: '#faf8f5' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="mb-12"
        >
          <span className={`section-label ${ss}`}>{ct.label}</span>
          <h2 className={`section-title mt-4 mb-4 ${sf}`}>{ct.heading}</h2>
          <div className="divider-gold w-20" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {info.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="flex flex-col gap-5 p-9 glass hover:border-gold-700/30 transition-colors duration-500 group h-full"
                  >
                    <span className="text-gold-500 group-hover:text-gold-400 transition-colors duration-300">{item.icon}</span>
                    <div>
                      <p className={`text-[9px] tracking-widest uppercase text-gold-500 ${ss} mb-2`}>{item.label}</p>
                      <p className={`${sf} text-xl text-charcoal-900 group-hover:text-gold-600 transition-colors duration-300`}>{item.value}</p>
                      <p className={`${ss} text-[12px] font-light mt-1`} style={{ color: '#6b5d4a' }}>{item.sub}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col gap-5 p-9 glass h-full">
                    <span className="text-gold-500">{item.icon}</span>
                    <div>
                      <p className={`text-[9px] tracking-widest uppercase text-gold-500 ${ss} mb-2`}>{item.label}</p>
                      <p className={`${sf} text-lg text-charcoal-900`}>{item.value}</p>
                      <p className={`${ss} text-[12px] font-light mt-1`} style={{ color: '#6b5d4a' }}>{item.sub}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden"
            style={{ height: '500px'' }}
          >
            <iframe
              title="Van Goghi location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8!2d44.7970!3d41.6940!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cdd9e3cf8a1%3A0x0!2s24+Mikheil+Zandukeli+St%2C+Tbilisi!5e0!3m2!1sen!2sge!4v1699000000000!5m2!1sen!2sge"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) contrast(85%) brightness(1.05)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Border overlay */}
            <div className="absolute inset-0 border border-gold-700/20 pointer-events-none" />
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold-500/40 pointer-events-none" />
            <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold-500/40 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
