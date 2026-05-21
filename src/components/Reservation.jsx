import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../context/LanguageContext'

const times = ['18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30']

export default function Reservation() {
  const [form, setForm] = useState({ name: '', phone: '', guests: '2', date: '', time: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const { lang, tr } = useLang()
  const res = tr.reservation
  const sf = lang === 'ka' ? 'font-geo' : 'font-serif'
  const ss = lang === 'ka' ? 'font-geo' : 'font-sans'

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1200))
    setLoading(false)
    setSent(true)
  }

  const inputClass = `w-full bg-transparent border-b focus:border-gold-500 font-sans font-light text-[14px] py-3 px-0 outline-none transition-colors duration-300 placeholder:text-charcoal-900/30`

  return (
    <section id="reservation" className="relative py-24 md:py-36 overflow-hidden" style={{ background: '#ffffff' }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <span className={`section-label ${ss}`}>{res.label}</span>
          <h2 className={`section-title mt-4 mb-4 ${sf}`}>{res.heading}</h2>
          <div className="divider-gold w-24 mx-auto mb-6" />
          <p className={`${ss} font-light text-[14px] max-w-md mx-auto leading-relaxed`} style={{ color: '#8a7a68' }}>
            {res.subtitle}
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 1 }}
          className="glass-gold p-8 md:p-12 relative overflow-hidden"
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
                <h3 className={`${sf} text-3xl font-light text-charcoal-900`}>{res.successTitle}</h3>
                <p className={`${ss} font-light text-[14px] max-w-sm`} style={{ color: '#8a7a68' }}>
                  {res.successBody(form.name)}
                </p>
                <div className="divider-gold w-20" />
                <button onClick={() => setSent(false)} className={`text-[11px] tracking-widest uppercase text-gold-500 hover:text-gold-400 ${ss} transition-colors`}>
                  {res.again}
                </button>
              </motion.div>
            ) : (
              <motion.form key="form" onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className={`text-[10px] tracking-widest uppercase text-gold-500 ${ss}`}>{res.name}</label>
                  <input
                    required className={`${inputClass} border-charcoal-900/15 text-charcoal-900`} placeholder={res.namePh}
                    value={form.name} onChange={e => update('name', e.target.value)}
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className={`text-[10px] tracking-widest uppercase text-gold-500 ${ss}`}>{res.phone}</label>
                  <input
                    required type="tel" className={`${inputClass} border-charcoal-900/15 text-charcoal-900`} placeholder={res.phonePh}
                    value={form.phone} onChange={e => update('phone', e.target.value)}
                  />
                </div>

                {/* Guests */}
                <div className="flex flex-col gap-1.5">
                  <label className={`text-[10px] tracking-widest uppercase text-gold-500 ${ss}`}>{res.guests}</label>
                  <select
                    className={`${inputClass} border-charcoal-900/15 text-charcoal-900 cursor-pointer`}
                    style={{ background: 'transparent', colorScheme: 'light' }}
                    value={form.guests} onChange={e => update('guests', e.target.value)}
                  >
                    {[1,2,3,4,5,6,7,8].map(n => (
                      <option key={n} value={n}>{res.guestOpt(n)}</option>
                    ))}
                    <option value="9+">{res.guestPlus}</option>
                  </select>
                </div>

                {/* Date */}
                <div className="flex flex-col gap-1.5">
                  <label className={`text-[10px] tracking-widest uppercase text-gold-500 ${ss}`}>{res.date}</label>
                  <input
                    required type="date" className={`${inputClass} border-charcoal-900/15 text-charcoal-900`}
                    min={new Date().toISOString().split('T')[0]}
                    value={form.date} onChange={e => update('date', e.target.value)}
                    style={{ colorScheme: 'light' }}
                  />
                </div>

                {/* Time */}
                <div className="flex flex-col gap-1.5">
                  <label className={`text-[10px] tracking-widest uppercase text-gold-500 ${ss}`}>{res.time}</label>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {times.map(t => (
                      <button
                        key={t} type="button"
                        onClick={() => update('time', t)}
                        className={`text-[11px] font-sans px-3 py-1.5 border transition-all duration-300 ${
                          form.time === t
                            ? 'border-gold-500 bg-gold-500 text-charcoal-900'
                            : 'border-charcoal-900/15 text-charcoal-700 hover:border-gold-700/50'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5 md:col-span-2">
                  <label className={`text-[10px] tracking-widest uppercase text-gold-500 ${ss}`}>{res.message}</label>
                  <textarea
                    rows={3} className={`${inputClass} border-charcoal-900/15 text-charcoal-900 resize-none`}
                    placeholder={res.messagePh}
                    value={form.message} onChange={e => update('message', e.target.value)}
                  />
                </div>

                {/* Submit */}
                <div className="md:col-span-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                  <button type="submit" disabled={loading} className="btn-gold min-w-[200px] justify-center">
                    {loading ? (
                      <motion.span animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }}
                        className={lang === 'ka' ? 'font-geo normal-case tracking-normal' : ''}
                      >
                        {res.sending}
                      </motion.span>
                    ) : (
                      <>
                        <span className={lang === 'ka' ? 'font-geo normal-case tracking-normal' : ''}>{res.confirm}</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </button>
                  <p className={`text-[11px] ${ss} font-light leading-relaxed`} style={{ color: '#8a7a68' }}>
                    {res.callLabel}<br/>
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
