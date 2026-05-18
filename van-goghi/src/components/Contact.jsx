import { motion } from 'framer-motion'
import { MapPin, Phone, Clock, AtSign } from 'lucide-react'

const contactItems = [
  {
    icon: MapPin,
    label: 'Address',
    value: '24 Mikheil Zandukeli St, Tbilisi 0179',
    link: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+995 551 18 24 07',
    link: 'tel:+995551182407',
  },
  {
    icon: Clock,
    label: 'Hours',
    value: 'Open daily until 00:00',
    link: null,
  },
  {
    icon: AtSign,
    label: 'Instagram',
    value: '@vangoghi.ge',
    link: 'https://instagram.com/vangoghi.ge',
  },
]

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32 bg-charcoal overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
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
            Find Us
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-cream-light">
            Visit Van Goghi
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-8"
          >
            <p className="font-cormorant text-xl text-cream/60 font-light leading-relaxed">
              We are located in the heart of old Tbilisi, moments from the city's most iconic landmarks. Whether you are celebrating a special occasion or simply seeking an extraordinary evening, we are always ready to welcome you.
            </p>

            <div className="flex flex-col gap-6">
              {contactItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.label} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-sm glass flex items-center justify-center flex-shrink-0 mt-0.5 border border-gold/20 group-hover:border-gold/50 transition-colors duration-300">
                      <Icon size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-inter text-xs text-cream/40 tracking-widest uppercase mb-1">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          target={item.link.startsWith('http') ? '_blank' : undefined}
                          rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="font-cormorant text-lg text-cream/80 hover:text-gold transition-colors duration-300"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-cormorant text-lg text-cream/80">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-4">
              <div className="w-8 gold-line" />
              <span className="text-gold/40 text-sm" aria-hidden="true">✦</span>
              <div className="flex-1 gold-line" />
            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative rounded-sm overflow-hidden"
          >
            {/* Gold frame */}
            <div className="absolute -top-2 -left-2 w-full h-full border border-gold/20 rounded-sm z-0 pointer-events-none" />
            <div className="relative z-10 overflow-hidden rounded-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.123456!2d44.79!3d41.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zVGJpbGlzaQ!5e0!3m2!1sen!2sge!4v1"
                width="100%"
                height="400"
                style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Van Goghi Restaurant location"
              />
            </div>
            {/* Corner ornaments */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/60 z-20" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/60 z-20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
