'use client'

import { motion } from 'framer-motion'
import { 
  FaLinkedin, 
  FaInstagram, 
  FaGithub, 
  FaYoutube, 
  FaTiktok, 
  FaFacebook 
} from 'react-icons/fa'

// Variabel untuk transisi yang smooth
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1]

// Data Sosial Media beserta warna brand-nya untuk efek glow
const socialLinks = [
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/in/rafifzidane', 
    icon: FaLinkedin, 
    color: '#0A66C2' 
  },
  { 
    name: 'Instagram', 
    url: 'https://instagram.com/raffzdne', 
    icon: FaInstagram, 
    color: '#E4405F' 
  },
  { 
    name: 'GitHub', 
    url: 'https://github.com/rafif24si', 
    icon: FaGithub, 
    color: '#ffffff' 
  },
  { 
    name: 'YouTube', 
    url: 'https://www.youtube.com/@MRafifZidane', 
    icon: FaYoutube, 
    color: '#FF0000' 
  },
  { 
    name: 'TikTok', 
    url: '#', // Ganti dengan link TikTok kamu atau hapus blok ini jika tidak dipakai
    icon: FaTiktok, 
    color: '#00F2FE' 
  },
  { 
    name: 'Facebook', 
    url: '#', // Ganti dengan link Facebook kamu atau hapus blok ini jika tidak dipakai
    icon: FaFacebook, 
    color: '#1877F2' 
  },
]

// Variant untuk container (mengatur staggered children)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jeda kemunculan antar icon
    },
  },
}

// Variant untuk masing-masing item icon
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.6, ease: smoothEase }
  },
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full max-w-[1500px] mx-auto 
      px-5 sm:px-6 md:px-10 lg:px-20
      pt-20 sm:pt-24 lg:pt-28 
      pb-24 sm:pb-28 lg:pb-36 
      text-white min-h-[70vh] flex flex-col justify-center"
    >
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: smoothEase }}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-16 sm:mb-20"
      >
        <motion.h1
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
        >
          Let's Connect
        </motion.h1>

        <motion.p
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4.4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-white/60 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed"
        >
          Find me on my social media networks. Click any icon below to visit my profile.
        </motion.p>
      </motion.div>

      {/* SOCIAL ICONS GRID */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 max-w-4xl mx-auto"
      >
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={itemVariants}
            whileHover={{ 
              scale: 1.2, 
              y: -10,
              color: social.color,
              filter: `drop-shadow(0px 10px 20px ${social.color}80)` // Efek Glow
            }}
            whileTap={{ scale: 0.9 }}
            className="text-white/50 text-5xl sm:text-6xl md:text-7xl transition-colors duration-300"
            aria-label={social.name}
          >
            <social.icon />
          </motion.a>
        ))}
      </motion.div>

      {/* COPYRIGHT */}
      <div className="mt-32 text-center text-xs text-white/35">
        © 2026 M Rafif Zidane — All rights reserved.
      </div>
    </section>
  )
}