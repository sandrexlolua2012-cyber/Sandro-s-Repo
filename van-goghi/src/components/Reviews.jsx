import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    text: 'Dining here feels like eating inside an art gallery. Every plate is a masterpiece.',
    author: 'Nino T.',
    location: 'Tbilisi',
  },
  {
    text: "The beef cheeks melted in my mouth. I've never experienced cooking like this in Georgia.",
    author: 'David K.',
    location: 'Tbilisi',
  },
  {
    text: "The presentation was impeccable — we couldn't stop photographing each dish.",
    author: 'Anna M.',
    location: 'Berlin',
  },
  {
    text: 'One of the best dining experiences I\'ve had anywhere in the world.',
    author: 'Michael R.',
    location: 'London',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} className="text-gold fill-gold" />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 md:py-32 bg-charcoal-dark overflow-hidden ambient-bg">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(123,45,61,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="font-inter text-xs font-medium tracking-[0.35em] uppercase text-gold mb-4">
            Guest Experiences
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-cream-light mb-8">
            What Our Guests Say
          </h2>

          {/* Rating display */}
          <div className="flex flex-col items-center gap-3">
            <span className="font-playfair text-7xl font-bold gradient-text leading-none">4.8</span>
            <StarRow />
            <p className="font-inter text-sm text-cream/50 tracking-wider">
              Based on 1,946+ reviews
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-16 gold-line" />
            <span className="text-gold/50 text-sm" aria-hidden="true">✦</span>
            <div className="w-16 gold-line" />
          </div>
        </motion.div>

        {/* Reviews grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.author}
              variants={cardVariants}
              className="glass rounded-sm p-8 relative overflow-hidden card-glow transition-all duration-500 group"
            >
              {/* Quote mark */}
              <span
                className="absolute top-4 left-6 font-playfair text-7xl leading-none pointer-events-none select-none"
                style={{ color: 'rgba(201,168,76,0.12)' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <StarRow />

              {/* Review text */}
              <p className="font-cormorant text-xl text-cream/80 font-light leading-relaxed mt-4 mb-6 relative z-10">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-gold/40" />
                <div>
                  <p className="font-inter text-sm font-medium text-cream/90 tracking-wide">
                    {review.author}
                  </p>
                  <p className="font-inter text-xs text-cream/40 tracking-wider">
                    {review.location}
                  </p>
                </div>
              </div>

              {/* Hover bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
