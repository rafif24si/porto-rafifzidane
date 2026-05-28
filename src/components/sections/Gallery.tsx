"use client";

import { motion } from "framer-motion";

export default function Gallery() {
  // Logika otomatis untuk memanggil 25 gambar dari g1.jpeg sampai g25.jpeg
  const galleryItems = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `Dokumentasi ${i + 1}`,
    src: `/images/g${i + 1}.jpeg`,
  }));

  // Konfigurasi transisi standar yang sangat smooth
  const smoothTransition = { duration: 0.8, ease: [0.22, 1, 0.36, 1] };

  // Konfigurasi Stagger (Efek Muncul Beruntun) untuk Grid
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2, // 🔥 PERBAIKAN: Menunggu 0.2 detik setelah refresh agar layar siap
        staggerChildren: 0.08,
      },
    },
  };

  // Konfigurasi Animasi per Gambar (Fade In murni dengan sedikit dorongan dari bawah)
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: smoothTransition 
    },
  };

  return (
    <section id="gallery" className="py-20 px-6 md:px-[120px] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER: Fade in dari bawah */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // 🔥 PERBAIKAN: once diubah ke false
          transition={smoothTransition}
          className="text-3xl md:text-4xl font-bold mb-10 text-[var(--text-primary)] tracking-tight"
        >
          Galeri
        </motion.h2>

        {/* GRID GAMBAR: Menggunakan Container Variants agar otomatis beruntun */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }} // 🔥 PERBAIKAN: once diubah ke false
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] aspect-square"
            >
              {/* Gambar */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay Judul saat di-hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-xs md:text-sm">
                  {item.title}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}