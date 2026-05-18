import { AtSign, Share2 } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Experience', href: '#experience' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reserve', href: '#reservation' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  {
    icon: AtSign,
    label: 'Instagram',
    href: 'https://instagram.com/vangoghi.ge',
  },
  {
    icon: Share2,
    label: 'Facebook',
    href: 'https://facebook.com/vangoghi.ge',
  },
]

export default function Footer() {
  const handleNavClick = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-charcoal-dark overflow-hidden">
      {/* Gold top border */}
      <div className="gold-line" />

      {/* Ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        {/* Top: Logo + Tagline */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="text-gold text-lg select-none" aria-hidden="true">✦</span>
            <span className="font-playfair text-3xl font-semibold text-cream-light tracking-wider">
              Van Goghi
            </span>
            <span className="text-gold text-lg select-none" aria-hidden="true">✦</span>
          </div>
          <p className="font-cormorant text-lg text-cream/45 font-light tracking-wider italic">
            Art. Flavor. Emotion.
          </p>
        </div>

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 text-center mb-12">
          {/* Navigation */}
          <div>
            <p className="font-inter text-xs font-medium tracking-[0.3em] uppercase text-gold/70 mb-5">
              Navigation
            </p>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="font-cormorant text-base text-cream/55 hover:text-gold transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="font-inter text-xs font-medium tracking-[0.3em] uppercase text-gold/70 mb-5">
              Follow Us
            </p>
            <div className="flex flex-col items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-cream/55 hover:text-gold transition-colors duration-300 group"
                  >
                    <Icon size={16} className="transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-cormorant text-base">{social.label}</span>
                  </a>
                )
              })}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="font-inter text-xs font-medium tracking-[0.3em] uppercase text-gold/70 mb-5">
              Contact
            </p>
            <div className="flex flex-col gap-2.5">
              <p className="font-cormorant text-base text-cream/55">
                24 Mikheil Zandukeli St
              </p>
              <p className="font-cormorant text-base text-cream/55">
                Tbilisi 0179, Georgia
              </p>
              <a
                href="tel:+995551182407"
                className="font-cormorant text-base text-cream/55 hover:text-gold transition-colors duration-300"
              >
                +995 551 18 24 07
              </a>
              <a
                href="https://instagram.com/vangoghi.ge"
                target="_blank"
                rel="noopener noreferrer"
                className="font-cormorant text-base text-cream/55 hover:text-gold transition-colors duration-300"
              >
                @vangoghi.ge
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 gold-line opacity-30" />
          <span className="text-gold/30 text-xs" aria-hidden="true">✦</span>
          <div className="flex-1 gold-line opacity-30" />
        </div>

        {/* Copyright */}
        <p className="text-center font-inter text-xs text-cream/30 tracking-wider">
          &copy; 2024 Van Goghi. All rights reserved.&nbsp;&nbsp;·&nbsp;&nbsp;Tbilisi, Georgia
        </p>
      </div>
    </footer>
  )
}
