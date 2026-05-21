import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ChefQuote from './components/ChefQuote'
import About from './components/About'
import Dishes from './components/Dishes'
import Experience from './components/Experience'
import Reviews from './components/Reviews'
import Reservation from './components/Reservation'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Loader({ onDone }) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-charcoal-900 flex flex-col items-center justify-center gap-6"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center gap-3"
      >
        <span className="font-serif text-4xl font-light tracking-widest2 text-cream-100">VAN GOGHI</span>
        <span className="text-[10px] tracking-widest3 text-gold-500 uppercase font-sans">Tbilisi · Georgia</span>
      </motion.div>

      {/* Progress bar */}
      <div className="w-48 h-px bg-charcoal-600 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-gold-600 to-gold-400"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.6, ease: 'easeInOut' }}
          onAnimationComplete={onDone}
        />
      </div>
    </motion.div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />
          <main>
            <Hero />
            <div className="bg-charcoal-800 border-y border-gold-700/20 py-4 overflow-hidden">
              <div className="marquee-track">
                {['Fine Dining', 'Georgian Fusion', 'Tbilisi · Georgia', 'Est. 2022', '60 Covers', 'Private Events', 'Natural Wine', 'Tasting Menu', 'Open Daily', 'Fine Dining', 'Georgian Fusion', 'Tbilisi · Georgia', 'Est. 2022', '60 Covers', 'Private Events', 'Natural Wine', 'Tasting Menu', 'Open Daily'].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-8 mx-8 text-[10px] tracking-widest3 uppercase font-sans text-gold-500/40">
                    {item}<span className="text-gold-700/30">—</span>
                  </span>
                ))}
              </div>
            </div>
            <ChefQuote />
            <About />
            <Dishes />
            <Experience />
            <Reviews />
            <Reservation />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </>
  )
}
