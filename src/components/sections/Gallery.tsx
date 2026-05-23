export default function Gallery() {
  // Logika otomatis untuk memanggil 25 gambar dari g1.jpeg sampai g25.jpeg
  // Folder sudah disesuaikan mengarah ke /images/ (pakai 's')
  const galleryItems = Array.from({ length: 25 }, (_, i) => ({
    id: i + 1,
    title: `Dokumentasi ${i + 1}`,
    src: `/images/g${i + 1}.jpeg`, // <-- Penyesuaian nama folder ada di sini
  }));

  return (
    <section id="gallery" className="py-20 px-6 md:px-[120px]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[var(--text-primary)] tracking-tight">
          Galeri
        </h2>

        {/* Grid Gambar - Dibuat responsif agar 25 gambar terlihat rapi */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-card)] aspect-square"
            >
              {/* Gambar */}
              <img
                src={item.src}
                alt={item.title}
                loading="lazy" // Membantu website tetap cepat meski ada 25 gambar
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay Judul saat di-hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-medium text-xs md:text-sm">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}