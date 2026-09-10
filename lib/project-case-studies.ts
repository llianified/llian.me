export type ProjectAction = {
  label: string;
  href: string;
  kind: "live" | "github";
};

export type ProjectImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  portrait?: boolean;
};

export type ProjectFeature = {
  title: string;
  body: string;
};

export type ProjectCaseStudy = {
  slug: "taksirin" | "llnx" | "llian-dev";
  eyebrow: string;
  category: string;
  title: string;
  subtitle: string;
  summary: string;
  actions: readonly ProjectAction[];
  hero?: ProjectImage;
  overview: readonly string[];
  flow?: readonly string[];
  features: readonly ProjectFeature[];
  decisions: readonly ProjectFeature[];
  stack: readonly string[];
  gallery?: readonly ProjectImage[];
  note?: {
    label: string;
    body: string;
  };
};

export const taksirinCaseStudy = {
  slug: "taksirin",
  eyebrow: "Studi kasus · Taksirin",
  category: "Aplikasi web",
  title: "taksirin",
  subtitle: "Satu tempat untuk mengurus order dan produksi bisnis custom.",
  summary:
    "Taksirin merapikan alur yang biasanya tercecer—mulai dari hitung harga, masuknya order, proses produksi, sampai pelanggan mengecek progresnya sendiri.",
  actions: [
    {
      label: "Coba Taksirin",
      href: "https://untitled-rouge-psi.vercel.app",
      kind: "live",
    },
  ],
  overview: [
    "Bisnis konveksi, sablon, percetakan, furnitur, suvenir, signage, dan undangan sering menjawab pertanyaan harga yang sama berulang kali lewat WhatsApp.",
    "Begitu pesanan masuk, catatannya gampang tercecer di chat, buku, dan galeri foto. Taksirin menyatukan penawaran, order, pembayaran, produksi, dan progres pelanggan dalam satu alur—tanpa memaksa pelanggan membuat akun.",
  ],
  flow: [
    "Vendor mengisi produk, opsi, dan harga sekali",
    "Pelanggan menghitung harga dari halaman penawaran publik",
    "Permintaan masuk sebagai order di papan produksi",
    "DP, produksi, QC, pengiriman, dan pelunasan dicatat bertahap",
    "Pelanggan memantau progres lewat kode lacak publik",
  ],
  features: [
    {
      title: "Penawaran yang menghitung sendiri",
      body: "Halaman vendor dan produk mendukung harga bertingkat berdasarkan jumlah, opsi per unit, biaya tetap, atau persentase, serta dorongan ke tingkat harga berikutnya.",
    },
    {
      title: "Papan produksi tujuh tahap",
      body: "Order bergerak dari baru, penawaran, DP, produksi, QC, pengiriman, sampai selesai. Vendor dapat memilih tampilan papan atau daftar, mencari order, dan memasukkan pesanan manual.",
    },
    {
      title: "Pembayaran bertahap",
      body: "DP dan pelunasan dicatat sebagai beberapa pembayaran, sementara sisa tagihan dihitung dari nilai order dan riwayat pembayaran.",
    },
    {
      title: "Pelacakan tanpa akun",
      body: "Kode lacak membuka status, garis waktu, dan catatan vendor untuk pelanggan. Halaman ini sengaja noindex agar progres order tidak masuk mesin pencari.",
    },
    {
      title: "Data pelanggan dan analitik first-party",
      body: "Data pelanggan terkumpul dari permintaan yang masuk, lengkap dengan riwayat dan total nilai order. Aktivitas dilihat, dikirim, konversi, dan sumber trafik dicatat tanpa cookie.",
    },
    {
      title: "Delapan kalkulator publik",
      body: "Kalkulator untuk sablon, kaos custom, spanduk, neon box, undangan, HPP konveksi, furniture, dan souvenir menjalankan perhitungannya di browser tanpa pendaftaran.",
    },
  ],
  decisions: [
    {
      title: "Satu mesin harga untuk server dan browser",
      body: "Logika pricing dibuat sebagai fungsi murni sehingga halaman publik dapat memberi hasil langsung sementara server tetap memakai aturan yang sama saat membentuk order.",
    },
    {
      title: "Halaman buatan vendor tidak otomatis layak indeks",
      body: "Canonical, JSON-LD, sitemap, dan aturan indexability dipisahkan agar halaman penawaran dapat ditemukan tanpa membuat halaman lacak atau konten belum lengkap ikut terindeks.",
    },
    {
      title: "Autentikasi tetap di dalam aplikasi",
      body: "Kata sandi diamankan dengan scrypt, sementara sesi disimpan di PostgreSQL dan dikirim lewat cookie HttpOnly. Tidak ada layanan identitas pihak ketiga di jalur kritis.",
    },
    {
      title: "Billing tetap bisa berjalan tanpa gateway",
      body: "Transfer bank manual dengan kode unik sudah menjadi alur aktif. Integrasi transaksi dan webhook Midtrans tersedia, tetapi tanpa kredensial merchant sistem turun secara terkendali ke transfer manual.",
    },
    {
      title: "Alur utama diuji di dua lapis",
      body: "Dokumentasi proyek mencatat 61 pengujian logika dengan Vitest dan 10 alur end-to-end dengan Playwright.",
    },
  ],
  stack: [
    "Next.js 16",
    "React 19",
    "Server Actions",
    "TypeScript",
    "Tailwind CSS v4",
    "PostgreSQL",
    "Prisma 7",
    "Vitest",
    "Playwright",
  ],
  note: {
    label: "Yang belum tersedia",
    body: "Pengiriman email, unggah gambar produk, reset kata sandi, domain custom otomatis, dan tim multi-user belum saya tampilkan sebagai fitur siap pakai. Repositorinya juga privat, jadi studi kasus ini hanya mengarah ke produk live.",
  },
} as const satisfies ProjectCaseStudy;

export const llnxCaseStudy = {
  slug: "llnx",
  eyebrow: "Studi kasus · Python 0.3.0",
  category: "Otomasi dengan Python",
  title: "llnx",
  subtitle: "Bot kripto yang bisa mengeksekusi ordernya sendiri.",
  summary:
    "Satu alur eksekusi untuk paper trading, sandbox, dan live trading—dibungkus dalam CLI, menu teks, serta TUI yang tetap nyaman dibaca di desktop maupun Termux.",
  actions: [
    {
      label: "Buka di GitHub",
      href: "https://github.com/llianified/llnx",
      kind: "github",
    },
  ],
  hero: {
    src: "/projects/llnx/tui-overview.png",
    width: 1800,
    height: 1187,
    alt: "Tampilan utama TUI llnx dengan status trading, log, dan panel pengaturan",
    caption: "TUI desktop: status, log per poll, dan pengaturan tetap berada dalam tiga band yang konsisten.",
  },
  overview: [
    "llnx membaca pasar, menjalankan strategi, memasang stop-loss dan take-profit, mengecek semua pagar pengaman, lalu meneruskan keputusan ke broker dan venue.",
    "Mode paper memakai harga nyata dengan saldo virtual. Sandbox berjalan di testnet exchange atau dry run dari kuotasi Jupiter. Sementara itu, mode live mengirim order sungguhan dan selalu meminta frasa konfirmasi sebelum mulai.",
  ],
  flow: [
    "Feed membaca pergerakan pasar",
    "Strategi menghasilkan keputusan",
    "Sistem risiko menerapkan stop-loss dan take-profit",
    "Pagar pengaman mengecilkan atau memblokir order bila perlu",
    "Broker mengirim order ke exchange atau Jupiter",
    "Hasil eksekusi, saldo, dan percobaan dicatat kembali",
  ],
  features: [
    {
      title: "Tiga mode, satu loop",
      body: "Paper, sandbox, dan live memakai alur eksekusi yang sama. Perbedaannya ada pada broker dan venue, bukan pada salinan strategi yang mudah menyimpang.",
    },
    {
      title: "Rem sebelum setiap order",
      body: "Batas rugi harian, jumlah trade, cooldown, persentase order, kegagalan beruntun, dan kill-switch file diperiksa sebelum order. Exit tetap dapat bekerja saat limit risiko menghentikan buy.",
    },
    {
      title: "Lima strategi",
      body: "SMA, EMA dengan long-trend filter, breakout, RSI, dan grid memiliki parameter sendiri. Backtesting serta optimizer mendukung pemeriksaan out-of-sample.",
    },
    {
      title: "CLI sampai TUI Termux",
      body: "Perintah data, backtest, trading, kontrol, pemindaian, dan pemeriksaan keamanan tersedia lewat CLI. TUI menata ulang kolom, status, log, dan pengaturan sesuai ukuran terminal.",
    },
    {
      title: "CEX dan Solana",
      body: "Integrasi exchange memakai ccxt secara opsional. Quote dan real swap DEX memakai Jupiter; real swap dibatasi ke Solana sementara jaringan EVM didukung untuk paper, scanning, dan safety checks.",
    },
    {
      title: "Token discovery dengan batas",
      body: "Scanner memakai GeckoTerminal dan safety checks memakai sumber seperti RugCheck atau GoPlus. Hasil check dapat membatalkan live mode, bukan menjanjikan token aman atau menguntungkan.",
    },
  ],
  decisions: [
    {
      title: "Fill dibaca kembali, bukan diasumsikan",
      body: "Order exchange dipoll hingga closed untuk mengambil average fill dan fee. Swap Solana baru dibukukan setelah konfirmasi on-chain; swap yang belum terkonfirmasi bukan trade.",
    },
    {
      title: "Saldo selalu dicek ulang ke venue",
      body: "Setelah order live ataupun kegagalan, bot membaca ulang saldo. Data lokal tidak dianggap sebagai bukti bahwa aset benar-benar berpindah.",
    },
    {
      title: "Market order yang gagal tidak dicoba ulang sembarangan",
      body: "Pesan error belum tentu berarti venue menolak order. Pada tick berikutnya, bot membuat keputusan baru dengan harga dan saldo terbaru agar percobaan ulang tidak menggandakan posisi.",
    },
    {
      title: "Audit trail append-only",
      body: "Setiap percobaan order—filled, blocked, rejected, atau failed—ditambahkan ke orders.jsonl bersama sinyal yang memicunya.",
    },
    {
      title: "Core tanpa dependency wajib",
      body: "Backtest, menu teks, dan core dapat berjalan dengan Python standard library. Textual, ccxt, solders, dan PyYAML ditambahkan hanya untuk kemampuan yang memerlukannya.",
    },
  ],
  stack: [
    "Python 3.9+",
    "Standard library core",
    "Textual",
    "ccxt",
    "Solders",
    "Jupiter",
    "PyYAML",
    "pytest",
  ],
  gallery: [
    {
      src: "/projects/llnx/tui-strategy.png",
      width: 1800,
      height: 1187,
      alt: "Panel strategy llnx yang hanya menampilkan parameter strategi terpilih",
      caption: "Strategy screen menyembunyikan parameter yang tidak relevan, bukan sekadar menonaktifkannya.",
    },
    {
      src: "/projects/llnx/tui-live-confirm.png",
      width: 1800,
      height: 1187,
      alt: "Dialog konfirmasi mode live pada TUI llnx",
      caption: "Mode live meminta frasa konfirmasi sebelum order nyata dapat dikirim.",
    },
    {
      src: "/projects/llnx/tui-termux.png",
      width: 1800,
      height: 4420,
      alt: "TUI llnx dalam orientasi portrait di terminal Termux",
      caption: "Layout portrait Termux merapatkan status dan membuat setting dapat discroll tanpa membungkus log.",
      portrait: true,
    },
  ],
  note: {
    label: "Catatan risiko",
    body: "Proyek ini dibuat untuk eksekusi dan eksperimen teknis, bukan sebagai rekomendasi finansial atau janji cuan. Mulai dari paper trading; mode live memakai uang sungguhan dan aset kripto bisa kehilangan seluruh nilainya.",
  },
} as const satisfies ProjectCaseStudy;

export const llianDevCaseStudy = {
  slug: "llian-dev",
  eyebrow: "Studi kasus · Perkakas web local-first",
  category: "Perkakas local-first",
  title: "llian.dev",
  subtitle: "Perkakas praktis, langsung dari browser.",
  summary:
    "Kumpulan perkakas browser dan catatan implementasi dengan pendekatan local-first: buka, selesaikan pekerjaan di perangkat yang sama, lalu tutup tab. Sesederhana itu.",
  actions: [
    {
      label: "Coba llian.dev",
      href: "https://llian.dev",
      kind: "live",
    },
  ],
  overview: [
    "Perkakas untuk gambar, PDF, kebutuhan developer, teks, aktivitas sehari-hari, dan keuangan punya halaman khusus yang statis serta bisa dibuka lewat tautan langsung.",
    "Ada 45 halaman perkakas khusus di dalam registry. Beberapa kebutuhan khas Indonesia punya halaman sendiri—bukan sekadar terjemahan otomatis dari tombol bahasa.",
  ],
  features: [
    {
      title: "Pemrosesan local-first",
      body: "File dan input diproses oleh module browser. Image compression, PDF work, formatting, conversion, dan calculation tidak membutuhkan upload file ke server aplikasi.",
    },
    {
      title: "Enam kelompok kebutuhan",
      body: "Gambar, PDF, developer, teks, kebutuhan sehari-hari, dan keuangan disusun dalam kategori serta halaman indeks yang tetap kompatibel dengan static export.",
    },
    {
      title: "Halaman khusus, bukan cetakan kosong",
      body: "Setiap perkakas dibuat sebagai halaman utuh dengan antarmuka, metadata, penjelasan, dan batas implementasinya sendiri. Registry menghubungkan semuanya ke halaman indeks dan kategori.",
    },
    {
      title: "Bahasa mengikuti kebutuhan",
      body: "Perkakas untuk pengguna Indonesia—termasuk beberapa kalkulator kerja dan keuangan—punya halaman khusus berbahasa Indonesia, sementara perkakas universal tetap tersedia dalam bahasa Inggris.",
    },
  ],
  decisions: [
    {
      title: "Static export sebagai default",
      body: "Next.js App Router menghasilkan static assets yang disajikan Cloudflare. pdf-lib dan pdfjs-dist mendukung pekerjaan PDF di sisi browser tanpa mengubah seluruh situs menjadi server app.",
    },
    {
      title: "Privasi dibatasi oleh arsitektur",
      body: "Tidak ada identifier, cookie analytics, session funnel, unique visitor, atau returning-user measurement. Worker sempit hanya menerima event penggunaan agregat dan mengecualikan DNT/GPC.",
    },
    {
      title: "Niat pencarian dan hasil penggunaan dibaca terpisah",
      body: "Search Console menunjukkan apa yang terjadi sebelum kunjungan, sedangkan event agregat mencatat perkakas yang dibuka dan hasil sesudahnya. Keduanya dibandingkan per halaman, bukan digabungkan per orang.",
    },
  ],
  stack: [
    "Next.js App Router",
    "React",
    "TypeScript",
    "Tailwind CSS v4",
    "Motion",
    "pdf-lib",
    "pdfjs-dist",
    "Cloudflare Workers",
  ],
  note: {
    label: "Batas privasi",
    body: "Analitik agregat di llian.dev adalah keputusan khusus untuk proyek tersebut dan tidak dipasang di portofolio ini. Repositorinya privat, jadi tautan publik pada studi kasus hanya mengarah ke situs live.",
  },
} as const satisfies ProjectCaseStudy;

export const projectCaseStudies = {
  taksirin: taksirinCaseStudy,
  llnx: llnxCaseStudy,
  "llian-dev": llianDevCaseStudy,
} as const;
