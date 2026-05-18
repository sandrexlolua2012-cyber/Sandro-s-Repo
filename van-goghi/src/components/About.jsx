import { motion } from 'framer-motion'

const stats = [
  { label: 'Est.', value: '2019' },
  { label: 'Cuisine', value: 'Fusion' },
  { label: 'Rank', value: "Tbilisi's Finest" },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-charcoal ambient-bg overflow-hidden">
      {/* Background noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image with gold frame */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Gold frame offset */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30 rounded-sm z-0" />
            <div className="relative z-10 overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80"
                alt="Van Goghi Restaurant interior"
                className="w-full h-[500px] object-cover"
              />
              {/* Inner vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent" />
            </div>
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold z-20" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold z-20" />
          </motion.div>

          {/* Right: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex flex-col gap-6"
          >
            {/* Small caps label */}
            <p className="font-inter text-xs font-medium tracking-[0.35em] uppercase text-gold">
              Our Story
            </p>

            {/* Heading */}
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-cream-light leading-tight">
              Where Georgian Soul<br />Meets European Craft
            </h2>

            {/* Gold underline */}
            <div className="w-16 gold-line" />

            {/* Paragraphs */}
            <div className="flex flex-col gap-4">
              <p className="font-cormorant text-lg text-cream/70 font-light leading-relaxed">
                Born from a deep reverence for Georgia's ancient culinary traditions, Van Goghi was conceived as a place where heritage and innovation coexist in perfect tension. Every detail — from the hand-sourced ingredients to the candlelit atmosphere — is an act of artistic intention.
              </p>
              <p className="font-cormorant text-lg text-cream/70 font-light leading-relaxed">
                Our kitchen bridges two worlds: the bold, soul-warming flavors of Caucasian cooking and the refined precision of modern European technique. The result is a cuisine that feels simultaneously familiar and revelatory — rooted in Tbilisi, yet speaking a universal language.
              </p>
              <p className="font-cormorant text-lg text-cream/70 font-light leading-relaxed">
                At Van Goghi, a meal is never merely sustenance. It is an experience composed like music, plated like painting, and served with the warmth that only Georgian hospitality can offer.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-px mt-2">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="flex-1 min-w-[100px] glass rounded-sm px-5 py-4 text-center"
                >
                  <p className="font-playfair text-gold text-xl font-semibold">{stat.value}</p>
                  <p className="font-inter text-xs text-cream/50 tracking-widest uppercase mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Decorative gold line */}
            <div className="flex items-center gap-4 mt-2">
              <div className="w-8 gold-line" />
              <span className="text-gold/50 text-sm" aria-hidden="true">✦</span>
              <div className="flex-1 gold-line" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
