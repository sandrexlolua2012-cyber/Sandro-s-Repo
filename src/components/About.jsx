import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: i * 0.15, ease: [0.4, 0, 0.2, 1] } }),
}

const pillars = [
  { num: '01', title: 'Fusion Cuisine', text: 'Where ancient Georgian recipes meet refined European technique.' },
  { num: '02', title: 'Artistic Plating', text: 'Every dish is composed as a canvas — form inseparable from flavor.' },
  { num: '03', title: 'Immersive Atmosphere', text: 'Designed to dissolve the boundary between dining and art.' },
]

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-44 overflow-hidden" style={{ background: '#0a0808' }}>
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top right, rgba(201,168,76,0.04) 0%, transparent 60%)' }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left — decorative */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            {/* Giant number */}
            <motion.span
              variants={fadeUp} custom={0}
              className="absolute -top-8 -left-4 font-serif text-[10rem] md:text-[14rem] font-light leading-none select-none pointer-events-none"
              style={{ color: 'rgba(201,168,76,0.06)', lineHeight: 1 }}
            >
              VG
            </motion.span>

            {/* Inner cards grid */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {[
                { label: 'Founded', value: '2022', sub: 'Tbilisi' },
                { label: 'Covers', value: '60', sub: 'Seats nightly' },
                { label: 'Cuisine', value: 'Geo–EU', sub: 'Fusion' },
                { label: 'Reviews', value: '4.8★', sub: '1,946+ guests' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  variants={fadeUp} custom={i * 0.2 + 0.3}
                  className="glass p-6 flex flex-col gap-1"
                >
                  <span className="text-[9px] tracking-widest uppercase text-gold-500 font-sans">{stat.label}</span>
                  <span className="font-serif text-3xl text-cream-100 font-light">{stat.value}</span>
                  <span className="text-[10px] text-cream-400 font-sans">{stat.sub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="order-1 lg:order-2 flex flex-col gap-8"
          >
            <motion.span variants={fadeUp} custom={0} className="section-label">Our Story · ჩვენი ისტორია</motion.span>

            <motion.h2 variants={fadeUp} custom={1} className="section-title">
              Where Georgia<br />
              <span className="italic text-gradient-gold">meets Europe</span>
            </motion.h2>
            <motion.p variants={fadeUp} custom={1.3} className="font-geo text-gold-500/40 text-xl font-light -mt-2">
              სადაც საქართველო ევროპას შეხვდება
            </motion.p>

            <motion.div variants={fadeUp} custom={2} className="divider-gold w-16" />

            <motion.p variants={fadeUp} custom={3}
              className="font-sans font-light text-cream-300 leading-8 text-[15px]"
            >
              Van Goghi was born from a singular obsession: to honour the soul of Georgian gastronomy
              while pushing it forward through the lens of modern European craft. Named after the
              painter who saw the world in colour where others saw grey, we approach every plate as
              an act of creation.
            </motion.p>

            <motion.p variants={fadeUp} custom={4}
              className="font-sans font-light text-cream-400 leading-8 text-[15px]"
            >
              Our chefs weave supra traditions — the ancient Georgian feast — with contemporary
              technique, local wine-region produce, and a precision that has made Van Goghi one of
              Tbilisi's most talked-about culinary destinations.
            </motion.p>

            {/* Pillars */}
            <div className="flex flex-col gap-6 mt-4">
              {pillars.map((p, i) => (
                <motion.div key={p.num} variants={fadeUp} custom={i * 0.15 + 0.6} className="flex gap-6 items-start">
                  <span className="font-serif text-5xl font-light text-gold-700 leading-none select-none mt-1">{p.num}</span>
                  <div>
                    <p className="font-serif text-lg text-cream-100 mb-1">{p.title}</p>
                    <p className="font-sans text-[13px] text-cream-400 font-light leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
