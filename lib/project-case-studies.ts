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
  eyebrow: "Project case study · Taksirin",
  category: "Produk web",
  title: "Garapan",
  subtitle: "Order & produksi OS untuk bisnis custom di Indonesia.",
  summary:
    "Garapan adalah produk di project Taksirin: satu alur dari halaman penawaran yang menghitung harga sampai papan produksi dan pelacakan pesanan publik.",
  actions: [
    {
      label: "Kunjungi Garapan",
      href: "https://untitled-rouge-psi.vercel.app",
      kind: "live",
    },
  ],
  overview: [
    "Vendor konveksi, sablon, percetakan, furniture, souvenir, signage, dan undangan sering menjawab pertanyaan harga yang sama berulang kali lewat WhatsApp.",
    "Setelah pesanan masuk, catatannya mudah terpencar di chat, buku, dan galeri foto. Garapan menyatukan penawaran, order, pembayaran, produksi, dan progres yang dilihat pelanggan tanpa akun.",
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
      title: "Customer dan analitik first-party",
      body: "Customer terkumpul dari permintaan yang masuk, lengkap dengan riwayat dan total nilai order. Event dilihat, dikirim, konversi, dan sumber trafik dicatat tanpa cookie.",
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
      title: "Auth berada di jalur aplikasi sendiri",
      body: "Password memakai scrypt; sesi disimpan di PostgreSQL dan dikirim lewat cookie HttpOnly. Tidak ada layanan identitas pihak ketiga di jalur kritis.",
    },
    {
      title: "Billing tetap bisa berjalan tanpa gateway",
      body: "Transfer bank manual dengan kode unik sudah menjadi alur aktif. Integrasi transaksi dan webhook Midtrans tersedia, tetapi tanpa kredensial merchant sistem turun secara terkendali ke transfer manual.",
    },
    {
      title: "Alur utama diuji di dua lapis",
      body: "Dokumentasi project mencatat 61 uji logika murni dengan Vitest dan 10 alur end-to-end dengan Playwright.",
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
    label: "Batas yang didokumentasikan",
    body: "Email delivery, upload gambar produk, password reset, custom domain otomatis, dan tim multi-user belum dipresentasikan sebagai fitur jadi. Repository project ini juga privat, jadi case study hanya mengarah ke produk live.",
  },
} as const satisfies ProjectCaseStudy;

export const llnxCaseStudy = {
  slug: "llnx",
  eyebrow: "Project case study · Python 0.3.0",
  category: "Otomasi Python",
  title: "llnx",
  subtitle: "A crypto bot that places its own orders.",
  summary:
    "Satu execution loop untuk paper, exchange sandbox, dan live trading, dibungkus dalam CLI, menu teks, serta TUI yang tetap terbaca di desktop dan Termux.",
  actions: [
    {
      label: "Lihat di GitHub",
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
    "llnx mengamati market, menjalankan strategi, menerapkan stop-loss dan take-profit, memeriksa guardrail, lalu meneruskan keputusan ke broker dan venue.",
    "Mode paper memakai harga nyata dan saldo virtual. Sandbox memakai exchange testnet atau dry run dari quote Jupiter. Mode live mengirim order nyata dan selalu meminta frasa konfirmasi eksplisit sebelum berjalan.",
  ],
  flow: [
    "Feed membaca market",
    "Strategy menghasilkan keputusan",
    "Risk menerapkan stop-loss dan take-profit",
    "Guardrails dapat mengecilkan atau memblokir order",
    "Broker mengirim ke exchange atau Jupiter",
    "Venue fill, balance, dan hasil percobaan ditulis kembali",
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
      body: "Perintah data, backtest, trade, control, scanner, dan safety check tersedia lewat CLI. TUI mereflow kolom, status, log, dan setting berdasarkan ukuran terminal.",
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
      title: "Balance selalu kembali ke venue",
      body: "Setelah live order maupun kegagalan, bot membaca ulang balance. State lokal tidak diperlakukan sebagai bukti bahwa aset benar-benar berpindah.",
    },
    {
      title: "Market order gagal tidak di-retry buta",
      body: "Error tidak membuktikan venue menolak order. Tick berikutnya membuat keputusan baru dengan harga dan balance segar agar retry tidak menggandakan posisi.",
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
    label: "Risk note",
    body: "Project ini dibuat sebagai alat eksekusi dan eksperimen teknis, bukan rekomendasi finansial atau klaim profit. Paper trade lebih dulu; live mode menggunakan uang nyata dan aset kripto dapat kehilangan seluruh nilainya.",
  },
} as const satisfies ProjectCaseStudy;

export const llianDevCaseStudy = {
  slug: "llian-dev",
  eyebrow: "Project case study · Local-first web tools",
  category: "Peralatan local-first",
  title: "llian.dev",
  subtitle: "Useful things, directly in the browser.",
  summary:
    "Arsip local-first berisi browser tools dan catatan implementasi: buka satu tugas, selesaikan di device yang sama, lalu tutup tab.",
  actions: [
    {
      label: "Kunjungi llian.dev",
      href: "https://llian.dev",
      kind: "live",
    },
  ],
  overview: [
    "Tool untuk image, PDF, developer work, text, kebutuhan sehari-hari, dan finance berada di route khusus yang statis dan deep-linkable.",
    "Registry project mencatat 45 dedicated tool routes. Beberapa kebutuhan Indonesia mempunyai halaman sendiri, bukan terjemahan otomatis di balik language switch.",
  ],
  features: [
    {
      title: "Pemrosesan local-first",
      body: "File dan input diproses oleh module browser. Image compression, PDF work, formatting, conversion, dan calculation tidak membutuhkan upload file ke server aplikasi.",
    },
    {
      title: "Enam kelompok tugas",
      body: "Image, PDF, developer, text, everyday, dan finance membentuk taxonomy serta index page yang tetap kompatibel dengan static export.",
    },
    {
      title: "Route khusus, bukan generator halaman kosong",
      body: "Tool live dibuat sebagai halaman dedicated dengan UI, metadata, penjelasan, dan batas implementasinya sendiri. Registry menghubungkan halaman-halaman itu ke index dan category.",
    },
    {
      title: "Bahasa mengikuti kebutuhan",
      body: "Tool dengan audience Indonesia—termasuk beberapa kalkulator kerja dan finance—mempunyai route Indonesia sendiri, sementara tool universal tetap tersedia dalam bahasa Inggris.",
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
      title: "Search intent dan completion dibaca terpisah",
      body: "Search Console menjelaskan apa yang terjadi sebelum arrival; event agregat menjelaskan tool open dan result sesudahnya. Keduanya dibandingkan per path, tidak di-join per orang.",
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
    label: "Privacy boundary",
    body: "Analytics agregat llian.dev adalah keputusan project itu sendiri dan tidak dipasang ke portfolio ini. Repository llian.dev privat, sehingga action publik case study hanya menuju situs live.",
  },
} as const satisfies ProjectCaseStudy;

export const projectCaseStudies = {
  taksirin: taksirinCaseStudy,
  llnx: llnxCaseStudy,
  "llian-dev": llianDevCaseStudy,
} as const;
