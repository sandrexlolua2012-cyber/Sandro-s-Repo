import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  const handleReserve = () => {
    const el = document.querySelector('#reservation')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image with Ken Burns */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
          alt="Van Goghi Restaurant ambiance"
          className="w-full h-full object-cover kenburns-animate"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/62" />
        {/* Gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-dark via-transparent to-black/30" />
      </div>

      {/* Ambient orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(123,45,61,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite',
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none z-10"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 10s ease-in-out infinite reverse',
        }}
      />

      {/* Center content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center text-center px-4 max-w-5xl mx-auto"
      >
        {/* Location label */}
        <motion.p
          variants={itemVariants}
          className="font-inter text-xs font-medium tracking-[0.35em] uppercase text-gold/80 mb-6"
        >
          Tbilisi · Georgia
        </motion.p>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="font-playfair font-bold text-7xl sm:text-8xl md:text-9xl leading-none gradient-text mb-6"
        >
          Art. Flavor.<br />Emotion.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="font-cormorant text-xl sm:text-2xl text-cream/75 font-light max-w-xl leading-relaxed mb-8"
        >
          A modern Georgian-European fusion experience<br className="hidden sm:block" /> in the heart of Tbilisi.
        </motion.p>

        {/* Gold divider */}
        <motion.div variants={itemVariants} className="w-24 gold-line mb-8" />

        {/* CTA Button */}
        <motion.button
          variants={itemVariants}
          onClick={handleReserve}
          className="shimmer-btn group inline-flex items-center gap-3 font-inter text-sm font-medium tracking-widest uppercase text-charcoal-dark px-10 py-4 rounded-sm shadow-2xl"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          Reserve a Table
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-inter text-[10px] tracking-widest uppercase text-cream/40">Scroll</span>
        <ChevronDown size={18} className="text-gold/60 bounce-subtle" />
      </div>
    </section>
  )
}
