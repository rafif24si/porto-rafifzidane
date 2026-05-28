"use client";

// 1. Menambahkan import Transition agar tidak ada garis merah di VS Code
import { motion, Transition } from "framer-motion";

export default function Experience() {
  // 2. Memberikan label tipe data : Transition agar garis merah hilang
  const smoothTransition: Transition = { duration: 0.7, ease: [0.22, 1, 0.36, 1] };

  return (
    <section id="experience" className="py-20 px-6 md:px-[120px] overflow-hidden">
      <div className="max-w-4xl mx-auto">

        {/* HEADER: Fade-Up lembut dari bawah */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} 
          transition={smoothTransition}
          className="text-3xl md:text-4xl font-bold mb-14 text-[var(--text-primary)] tracking-tight"
        >
          Pengalaman &amp; Pendidikan
        </motion.h2>

        {/* ── PENDIDIKAN ── */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={smoothTransition}
            className="flex items-center gap-3 mb-6"
          >
            {/* Ganti emoji ini dengan ikon ungu/aslimu jika diperlukan */}
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
              🎓 
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Riwayat Pendidikan
            </h3>
          </motion.div>

          <div className="space-y-5 border-l-2 border-[var(--border)] ml-4 pl-6 md:pl-8">
            {/* Kuliah (Fade-Up dari bawah) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Mulai dari bawah (20)
              whileInView={{ opacity: 1, y: 0 }} // Berakhir di posisi asli (0)
              viewport={{ once: false }}
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">Politeknik Caltex Riau (PCR)</h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">Program Studi Sistem Informasi</p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">2024 - Sekarang</span>
                </div>
              </div>
            </motion.div>

            {/* SMA (Fade-Up dari bawah) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Mulai dari bawah
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ ...smoothTransition, delay: 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">SMA Sains Tahfizh Islamic Centre Siak</h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">Jurusan Ilmu Pengetahuan Alam (IPA)</p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">2021 - 2024</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── PENGALAMAN ORGANISASI ── */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={smoothTransition}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
              💼
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Pengalaman Organisasi &amp; Kepanitiaan
            </h3>
          </motion.div>

          <div className="space-y-5 border-l-2 border-[var(--border)] ml-4 pl-6 md:pl-8">
            {/* PKM (Fade-Up dari bawah) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Mulai dari bawah
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ ...smoothTransition, delay: 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">Panitia PKM Himasistifo</h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">Divisi Konsumsi</p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">2026</span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">Bertanggung jawab penuh dalam merencanakan, mengelola, dan menyediakan kebutuhan konsumsi selama rangkaian acara berlangsung. Kegiatan ini dilaksanakan di panti asuhan dan mencakup berbagai aktivitas sosial.</p>
              </div>
            </motion.div>

            {/* Wisuda PCR (Fade-Up dari bawah) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Mulai dari bawah
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ ...smoothTransition, delay: 0.2 }}
              className="relative"
            >
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">Wisuda Politeknik Caltex Riau</h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">Divisi Perlengkapan &amp; Keamanan</p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">2025</span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">Bertanggung jawab atas ketersediaan dan mobilitas properti logistik acara. Memastikan seluruh rangkaian kegiatan wisuda berjalan dengan tertib.</p>
              </div>
            </motion.div>

            {/* Goes to School (Fade-Up dari bawah) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Mulai dari bawah
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ ...smoothTransition, delay: 0.3 }}
              className="relative"
            >
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">PCR Goes To School</h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">Anggota Tim Sosialisasi</p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">2025</span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">Melakukan kunjungan ke berbagai sekolah untuk memperkenalkan Politeknik Caltex Riau secara interaktif.</p>
              </div>
            </motion.div>

            {/* E-Sport (Fade-Up dari bawah) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Mulai dari bawah
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ ...smoothTransition, delay: 0.4 }}
              className="relative"
            >
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">Panitia PCR E-Sport</h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">Divisi Perlengkapan &amp; Keamanan</p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">2025</span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">Menyiapkan seluruh properti perangkat keras dan kebutuhan teknis turnamen agar berjalan lancar.</p>
              </div>
            </motion.div>

            {/* Wisnight (Fade-Up dari bawah) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} // Mulai dari bawah
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ ...smoothTransition, delay: 0.5 }}
              className="relative"
            >
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">Panitia Wisnight Himasistifo</h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">Divisi Konsumsi</p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">2025</span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">Mengelola anggaran konsumsi, merencanakan menu, serta mendistribusikan hidangan bagi para tamu undangan.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}