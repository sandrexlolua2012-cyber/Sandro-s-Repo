import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const times = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', guests: '2', date: '', time: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  const inputClass = `w-full bg-transparent border-b border-white/10 focus:border-gold-500 text-cream-100 font-sans font-light text-[14px] py-3 px-0 outline-none transition-colors duration-300 placeholder:text-cream-400/40`

  return (
    <section id="reservation" className="relative bg-charcoal-900 py-32 md:py-44 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <span className="section-label">Reservations</span>
          <h2 className="section-title mt-4 mb-6">Reserve Your Table</h2>
          <div className="divider-gold w-24 mx-auto mb-6" />
          <p className="font-sans font-light text-cream-400 text-[14px] max-w-md mx-auto leading-relaxed">
            Secure your place at one of Tbilisi's most coveted dining experiences. We respond within 2 hours.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1 }}
          className="glass-gold p-10 md:p-16 relative overflow-hidden"
        >
          {/* Corner decorations */}
          {['top-4 left-4', 'top-4 right-4', 'bottom-4 left-4', 'bottom-4 right-4'].map((pos, i) => (
            <div key={i} className={`absolute ${pos} w-8 h-8`}
              style={{ borderTop: i < 2 ? '1px solid rgba(201,168,76,0.3)' : 'none', borderBottom: i >= 2 ? '1px solid rgba(201,168,76,0.3)' : 'none', borderLeft: i % 2 === 0 ? '1px solid rgba(201,168,76,0.3)' : 'none', borderRight: i % 2 === 1 ? '1px solid rgba(201,168,76,0.3)' : 'none' }} />
          ))}

          <AnimatePresence mode="wait">
            {sent ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-12 flex flex-col items-center gap-6"
              >
                <motion.div
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  className="w-16 h-16 border border-gold-500 rounded-full flex items-center justify-center"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </motion.div>
                <h3 className="font-serif text-3xl font-light text-cream-100">Reservation Received</h3>
                <p className="font-sans font-light text-cream-400 text-[14px] max-w-sm">
                  Thank you, {form.name}. We'll confirm your table via phone within 2 hours.
                </p>
                <div className="divider-gold w-20" />
                <button onClick={() => setSent(false)} className="text-[11px] tracking-widest uppercase text-gold-500 hover:text-gold-400 font-sans transition-colors">
                  Make another reservation
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-widest uppercase text-gold-500 font-sans">Full Name</label>
                  <input
                    required className={inputClass} placeholder="Your name"
                    value={form.name} onChange={e => update('name', e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-widest uppercase text-gold-500 font-sans">Phone Number</label>
                  <input
                    required type="tel" className={inputClass} placeholder="+995 ___ __ __ __"
                    value={form.phone} onChange={e => update('phone', e.target.value)}
                  />
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-widest uppercase text-gold-500 font-sans">Number of Guests</label>
                  <select
                    className={`${inputClass} cursor-pointer bg-charcoal-800`}
                    value={form.guests} onChange={e => update('guests', e.target.value)}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>)}
                    <option value="9+">9+ Guests (Private)</option>
                  </select>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-widest uppercase text-gold-500 font-sans">Date</label>
                  <input
                    required type="date" className={inputClass}
                    min={new Date().toISOString().split('T')[0]}
                    value={form.date} onChange={e => update('date', e.target.value)}
                    style={{ colorScheme: 'dark' }}
                  />
                </div>

                {/* Time */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-widest uppercase text-gold-500 font-sans">Preferred Time</label>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {times.map(t => (
                      <button
                        key={t} type="button"
                        onClick={() => update('time', t)}
                        className={`text-[11px] font-sans px-3 py-1.5 border transition-all duration-300 ${
                          form.time === t
                            ? 'border-gold-500 bg-gold-500/10 text-gold-400'
                            : 'border-white/10 text-cream-400 hover:border-gold-700/50'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className="text-[10px] tracking-widest uppercase text-gold-500 font-sans">Special Requests</label>
                  <textarea
                    rows={3} className={`${inputClass} resize-none`}
                    placeholder="Allergies, occasions, special arrangements..."
                    value={form.message} onChange={e => update('message', e.target.value)}
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                  <button type="submit" disabled={loading} className="btn-gold min-w-[200px] justify-center">
                    {loading ? (
                      <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}>
                        Sending…
                      </motion.span>
                    ) : (
                      <>
                        <span>Confirm Reservation</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-cream-400 font-sans font-light leading-relaxed">
                    Or call us directly:<br/>
                    <a href="tel:+995551182407" className="text-gold-500 hover:text-gold-400 transition-colors">+995 551 18 24 07</a>
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
