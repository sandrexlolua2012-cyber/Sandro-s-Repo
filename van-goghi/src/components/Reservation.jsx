import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30', '20:00', '20:30',
  '21:00', '21:30', '22:00', '22:30', '23:00',
]

const guestOptions = ['1 Guest', '2 Guests', '3 Guests', '4 Guests', '5 Guests', '6 Guests', '7 Guests', '8 Guests', '9 Guests', '10+ Guests']

const inputClass =
  'w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 font-inter text-sm text-cream/80 placeholder-cream/30 focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all duration-300'

const selectClass =
  'w-full bg-charcoal border border-white/10 rounded-sm px-4 py-3 font-inter text-sm text-cream/80 focus:outline-none focus:border-gold/50 transition-all duration-300 appearance-none cursor-pointer'

export default function Reservation() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    guests: '',
    date: '',
    time: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="reservation" className="relative py-24 md:py-32 overflow-hidden bg-charcoal-dark">
      {/* Wine ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(123,45,61,0.15) 0%, transparent 65%)',
        }}
      />
      {/* Gold ambient glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <p className="font-inter text-xs font-medium tracking-[0.35em] uppercase text-gold mb-4">
            Join Us
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-cream-light mb-6">
            Reserve Your Table
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 gold-line" />
            <span className="text-gold/50 text-sm" aria-hidden="true">✦</span>
            <div className="w-16 gold-line" />
          </div>
        </motion.div>

        {/* Glassmorphism form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative glass rounded-sm p-8 md:p-10"
        >
          {/* Gold corner ornaments */}
          <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-gold/60" aria-hidden="true" />
          <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-gold/60" aria-hidden="true" />
          <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-gold/60" aria-hidden="true" />
          <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-gold/60" aria-hidden="true" />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <span className="text-gold text-4xl" aria-hidden="true">✦</span>
              <h3 className="font-playfair text-3xl font-semibold text-cream-light mt-4 mb-3">
                Thank You
              </h3>
              <p className="font-cormorant text-xl text-cream/65 font-light">
                Your reservation request has been received.<br />
                We will confirm your table shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              {/* Name + Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="res-name" className="font-inter text-xs text-cream/40 tracking-widest uppercase">
                    Full Name
                  </label>
                  <input
                    id="res-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="res-phone" className="font-inter text-xs text-cream/40 tracking-widest uppercase">
                    Phone
                  </label>
                  <input
                    id="res-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+995 5xx xx xx xx"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Guests + Date + Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="res-guests" className="font-inter text-xs text-cream/40 tracking-widest uppercase">
                    Guests
                  </label>
                  <div className="relative">
                    <select
                      id="res-guests"
                      name="guests"
                      required
                      value={form.guests}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled>Select</option>
                      {guestOptions.map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 text-xs">▾</div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="res-date" className="font-inter text-xs text-cream/40 tracking-widest uppercase">
                    Date
                  </label>
                  <input
                    id="res-date"
                    name="date"
                    type="date"
                    required
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass + ' [color-scheme:dark]'}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="res-time" className="font-inter text-xs text-cream/40 tracking-widest uppercase">
                    Time
                  </label>
                  <div className="relative">
                    <select
                      id="res-time"
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className={selectClass}
                    >
                      <option value="" disabled>Select</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-cream/40 text-xs">▾</div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="res-message" className="font-inter text-xs text-cream/40 tracking-widest uppercase">
                  Special Requests
                </label>
                <textarea
                  id="res-message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Dietary requirements, special occasions, seating preferences…"
                  className={inputClass + ' resize-none'}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="shimmer-btn group inline-flex items-center justify-center gap-3 font-inter text-sm font-medium tracking-widest uppercase text-charcoal-dark px-8 py-4 rounded-sm mt-2 shadow-xl"
              >
                Confirm Reservation
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}
