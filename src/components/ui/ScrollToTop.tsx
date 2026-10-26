'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Muncul jika scroll melewati 400px (melewati Hero section)
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Jalankan sekali saat mount jika posisi awal sudah di-scroll
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          aria-label="Scroll to top"
          className="group fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#2a2a2a] bg-[#141414]/80 text-[#f0f0f0] shadow-xl shadow-black/50 backdrop-blur-md transition-colors hover:border-[#444444] hover:bg-[#1f1f1f] hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
        >
          <ArrowUp className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
