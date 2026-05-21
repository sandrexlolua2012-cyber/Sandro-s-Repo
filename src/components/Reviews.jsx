import { motion } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const reviews = [
  {
    name: 'Alexandra M.',
    location: 'London, UK',
    date: 'March 2024',
    rating: 5,
    text: 'Dining here feels like eating inside an art gallery. Every dish arrived looking like a painting. The staff remembered my name by the second course — hospitality at another level.',
    initials: 'AM',
    color: '#c9a84c',
  },
  {
    name: 'Giorgi T.',
    location: 'Tbilisi',
    date: 'January 2024',
    rating: 5,
    text: "The beef cheeks simply melted in your mouth. The Saperavi glaze was extraordinary — you could taste Kakheti in every bite. One of the finest meals I've had in Georgia.",
    initials: 'GT',
    color: '#8b1a1a',
  },
  {
    name: 'Sophie L.',
    location: 'Paris, France',
    date: 'February 2024',
    rating: 5,
    text: 'The presentation was truly impeccable — the Sunflower Dessert alone is worth the trip. A restaurant that understands beauty as an ingredient.',
    initials: 'SL',
    color: '#4a90d9',
  },
  {
    name: 'Nikoloz K.',
    location: 'Tbilisi',
    date: 'April 2024',
    rating: 5,
    text: "One of the best dining experiences in Tbilisi, full stop. The khinkali in bonito broth is unlike anything I've tasted. Van Goghi has redefined what Georgian cuisine can be.",
    initials: 'NK',
    color: '#4a9a50',
  },
  {
    name: 'Elena R.',
    location: 'Moscow',
    date: 'December 2023',
    rating: 5,
    text: 'The atmosphere transports you completely. Low lighting, Georgian jazz, original art — and then food that lives up to all of it. We are already planning our return.',
    initials: 'ER',
    color: '#9a7adf',
  },
  {
    name: 'Thomas W.',
    location: 'Berlin, Germany',
    date: 'March 2024',
    rating: 5,
    text: 'As a Michelin-trained chef I rarely get surprised. Van Goghi surprised me. The beef tartare with churchkhela crumb was original, brave, and flawlessly executed.',
    initials: 'TW',
    color: '#c4621a',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 12 12" fill={i < count ? '#c9a84c' : '#333'}>
          <path d="M6 1l1.2 3.6H11L8.2 6.8l1 3.6L6 8.3l-3.2 2.1 1-3.6L1 4.6h3.8z" />
        </svg>
      ))}
    </div>
  )
}

export default function Reviews() {
  const { lang, tr } = useLang()
  const rv = tr.reviews
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'
  const ss = lang === 'ka' ? 'font-geo' : 'font-sans'

  return (
    <section id="reviews" className="py-24 md:py-36 overflow-hidden" style={{ background: '#fdf6ec' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <span className={`section-label ${ss}`}>{rv.label}</span>
          <h2 className={`section-title mt-4 mb-4 ${sf}`}>{rv.heading}</h2>
          <div className="divider-gold w-24 mx-auto mb-8" />

          {/* Rating summary */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-serif text-9xl font-light text-gradient-gold">4.8</span>
            <Stars count={5} />
            <span className={`text-[13px] ${ss} font-light`} style={{ color: '#8a7a68' }}>{rv.count}</span>
          </div>
        </motion.div>

        {/* Review grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12 }}
              whileHover={{ y: -4 }}
              className="glass flex flex-col gap-6 p-9 relative overflow-hidden group hover:border-gold-700/20 transition-colors duration-500"
            >
              {/* Quote mark */}
              <span className="absolute top-4 right-6 font-serif text-7xl leading-none select-none text-gold-500/20 group-hover:text-gold-500/30 transition-colors duration-500">"</span>

              {/* Stars */}
              <Stars count={r.rating} />

              {/* Text — always English per spec */}
              <p className="font-sans font-light text-[15px] leading-8 relative z-10 flex-1" style={{ color: '#4a3d2e' }}>
                "{r.text}"
              </p>

              {/* Divider */}
              <div className="divider-gold w-full" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-[11px] font-sans font-medium text-charcoal-900 flex-shrink-0"
                  style={{ background: r.color }}
                >
                  {r.initials}
                </div>
                <div>
                  <p className="font-sans text-[13px] font-medium text-charcoal-900">{r.name}</p>
                  <p className={`${ss} text-[11px] font-light`} style={{ color: '#8a7a68' }}>{r.location} · {r.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
