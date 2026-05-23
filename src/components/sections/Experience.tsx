export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 md:px-[120px]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-[var(--text-primary)] tracking-tight">
          Pengalaman & Pendidikan
        </h2>

        {/* KATEGORI: PENDIDIKAN */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
              🎓
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Riwayat Pendidikan
            </h3>
          </div>

          <div className="space-y-5 border-l-2 border-[var(--border)] ml-4 pl-6 md:pl-8">
            {/* Kuliah */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                      Politeknik Caltex Riau (PCR)
                    </h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">
                      Program Studi Sistem Informasi
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">
                    2024 - Sekarang
                  </span>
                </div>
              </div>
            </div>

            {/* SMA */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                      SMA Sains Tahfizh Islamic Centre Siak
                    </h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">
                      Jurusan Ilmu Pengetahuan Alam (IPA)
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">
                    2021 - 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* KATEGORI: PENGALAMAN & ORGANISASI */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white text-sm">
              💼
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)]">
              Pengalaman Organisasi & Kepanitiaan
            </h3>
          </div>

          <div className="space-y-5 border-l-2 border-[var(--border)] ml-4 pl-6 md:pl-8">
            
            {/* PKM */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                      Panitia PKM Himasistifo
                    </h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">
                      Divisi Konsumsi
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">
                    2026
                  </span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">
                  Bertanggung jawab penuh dalam merencanakan, mengelola, dan menyediakan kebutuhan konsumsi selama rangkaian acara berlangsung. Kegiatan ini dilaksanakan di panti asuhan dan mencakup berbagai aktivitas sosial.
                </p>
              </div>
            </div>

            {/* Wisuda PCR */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                      Wisuda Politeknik Caltex Riau
                    </h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">
                      Divisi Perlengkapan & Keamanan
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">
                    2025
                  </span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">
                  Bertanggung jawab atas ketersediaan dan mobilitas properti logistik acara. Memastikan seluruh rangkaian kegiatan wisuda berjalan dengan tertib, terorganisir, dan kondusif dari awal hingga akhir prosesi.
                </p>
              </div>
            </div>

            {/* Goes to School */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                      PCR Goes To School
                    </h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">
                      Anggota Tim Sosialisasi
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">
                    2025
                  </span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">
                  Melakukan kunjungan ke berbagai sekolah untuk memperkenalkan Politeknik Caltex Riau. Bertugas menyampaikan informasi komprehensif seputar kampus, program studi, dan prospek karir kepada siswa-siswi secara interaktif.
                </p>
              </div>
            </div>

            {/* E-Sport */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                      Panitia PCR E-Sport
                    </h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">
                      Divisi Perlengkapan & Keamanan
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">
                    2025
                  </span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">
                  Menyiapkan seluruh properti perangkat keras dan kebutuhan teknis turnamen. Melakukan pengawasan dan pengendalian suasana kompetisi agar turnamen e-sport berjalan lancar, suportif, dan terhindar dari gangguan.
                </p>
              </div>
            </div>

            {/* Wisnight */}
            <div className="relative">
              <span className="absolute -left-[35px] md:-left-[43px] top-2 w-4 h-4 rounded-full bg-white/20 border-4 border-[#0a0a0a]" />
              <div className="border border-[var(--border)] p-6 rounded-2xl bg-[var(--bg-card)] hover:border-white/30 transition-colors">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h4 className="text-lg md:text-xl font-bold text-[var(--text-primary)]">
                      Panitia Wisnight Himasistifo
                    </h4>
                    <p className="text-md text-[var(--text-secondary)] mt-1">
                      Divisi Konsumsi
                    </p>
                  </div>
                  <span className="text-xs md:text-sm font-mono text-white/50 bg-white/5 px-3 py-1.5 rounded-full w-fit shrink-0">
                    2025
                  </span>
                </div>
                <p className="mt-4 text-[14px] text-[var(--text-muted)] leading-relaxed">
                  Mengelola anggaran konsumsi, merencanakan menu, serta mendistribusikan hidangan bagi para tamu undangan, peserta, dan panitia selama acara malam wisuda (Wisnight) berlangsung.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}