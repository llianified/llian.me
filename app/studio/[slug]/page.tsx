import { Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import s from "../studio.module.css";

const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

type View =
  | "icon"
  | "apple-icon"
  | "taksirin-board"
  | "taksirin-quote"
  | "taksirin-tracking"
  | "llnx-overview"
  | "llnx-strategy"
  | "llnx-live-confirm"
  | "llnx-termux"
  | "llian-dev-overview"
  | "llian-dev-tools";

/* Icon ------------------------------------------------------------------ */

function Icon({ rounded }: { rounded?: boolean }) {
  return (
    <div className={s.iconTile} data-rounded={rounded ? "" : undefined}>
      <span className={s.serif}>ll</span>
    </div>
  );
}

/* taksirin -------------------------------------------------------------- */

function TaksirinBar({ active }: { active: string }) {
  return (
    <div className={s.appBar}>
      <div className={s.appBrand}>
        <strong className={s.serif}>taksirin</strong>
        <span>Sablon Kita · Cianjur</span>
      </div>
      <nav className={s.appNav}>
        {["Orders", "Products", "Customers", "Analytics"].map((item) => (
          <span key={item} data-active={item === active ? "" : undefined}>{item}</span>
        ))}
      </nav>
      <div className={s.appActions}>
        <div className={s.segmented}>
          <span data-active="">Board</span>
          <span>List</span>
        </div>
        <span className={s.buttonPrimary}>+ Add order</span>
      </div>
    </div>
  );
}

const columns = [
  {
    label: "New",
    cards: [
      { who: "Rani Puspita", what: "Kaos sablon DTF · 48 pcs", price: "Rp 3.120.000", tag: "Just now" },
      { who: "Karang Taruna 04", what: "Kaos panitia · 120 pcs", price: "Rp 6.600.000", tag: "2 h ago" },
      { who: "Bimo Aditya", what: "Hoodie bordir · 12 pcs", price: "Rp 2.040.000", tag: "5 h ago" },
    ],
  },
  {
    label: "Quoted",
    cards: [
      { who: "SMK Pasundan 1", what: "Seragam olahraga · 210 pcs", price: "Rp 11.550.000", tag: "Waiting" },
      { who: "Kopi Sudut", what: "Apron kanvas · 24 pcs", price: "Rp 1.680.000", tag: "Waiting" },
      { who: "Dewi Lestari", what: "Totebag sablon · 100 pcs", price: "Rp 1.900.000", tag: "Follow up", tone: "warn" },
      { who: "Futsal Cipanas", what: "Jersey printing · 18 pcs", price: "Rp 2.070.000", tag: "Waiting" },
    ],
  },
  {
    label: "Deposit",
    cards: [
      { who: "Yayasan Al-Hikmah", what: "Kaos santri · 300 pcs", price: "Rp 15.000.000", tag: "50% paid", tone: "ok" },
      { who: "Andi Firmansyah", what: "Polo bordir · 36 pcs", price: "Rp 3.060.000", tag: "Rp 1.5 jt due", tone: "warn" },
    ],
  },
  {
    label: "Production",
    cards: [
      { who: "Warung Teteh", what: "Kaos crew · 20 pcs", price: "Rp 1.300.000", tag: "Due 12 Sep" },
      { who: "Komunitas Lari CJR", what: "Jersey lari · 64 pcs", price: "Rp 5.760.000", tag: "Due 13 Sep" },
      { who: "Fajar Nugraha", what: "Kaos couple · 2 pcs", price: "Rp 190.000", tag: "Due 13 Sep" },
      { who: "PT Sinar Cianjur", what: "Kemeja kerja · 45 pcs", price: "Rp 6.525.000", tag: "Due 15 Sep" },
      { who: "Reuni SMA 2016", what: "Kaos reuni · 88 pcs", price: "Rp 5.456.000", tag: "Due 16 Sep" },
    ],
  },
  {
    label: "QC",
    cards: [{ who: "Salsa Bakery", what: "Apron + topi · 10 set", price: "Rp 1.150.000", tag: "Checking" }],
  },
  {
    label: "Shipping",
    cards: [
      { who: "Gilang Ramadhan", what: "Hoodie sablon · 6 pcs", price: "Rp 1.020.000", tag: "JNE · CJR2201" },
      { who: "Pesantren Nurul Iman", what: "Kaos kegiatan · 150 pcs", price: "Rp 7.500.000", tag: "Pickup today" },
    ],
  },
  {
    label: "Complete",
    cards: [
      { who: "Nisa Aulia", what: "Kaos ultah · 15 pcs", price: "Rp 1.050.000", tag: "Settled", tone: "ok" },
      { who: "Bengkel Jaya", what: "Wearpack · 8 pcs", price: "Rp 1.520.000", tag: "Settled", tone: "ok" },
      { who: "Dinas Pendidikan", what: "Kaos HUT · 250 pcs", price: "Rp 13.750.000", tag: "Settled", tone: "ok" },
    ],
  },
] as const;

function TaksirinBoard({ theme }: { theme: string }) {
  return (
    <div className={`${s.frame} ${s.app}`} data-theme={theme}>
      <TaksirinBar active="Orders" />
      <div className={s.pageHead}>
        <div>
          <h1>Orders</h1>
          <p>24 active · Rp 48.250.000 open · 7 stages</p>
        </div>
        <div className={s.search}><i />Search customer, item, or code</div>
      </div>
      <div className={s.board}>
        {columns.map((column) => (
          <div className={s.column} key={column.label}>
            <div className={s.columnHead}>
              {column.label}
              <span>{column.cards.length}</span>
            </div>
            {column.cards.map((card) => (
              <div className={s.card} key={card.who}>
                <strong>{card.who}</strong>
                <p>{card.what}</p>
                <div className={s.cardFoot}>
                  <span>{card.price}</span>
                  <span data-tone={"tone" in card ? card.tone : undefined}>{card.tag}</span>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function TaksirinQuote({ theme }: { theme: string }) {
  return (
    <div className={`${s.frame} ${s.app}`} data-theme={theme}>
      <div className={s.appBar}>
        <div className={s.appBrand}>
          <strong className={s.serif}>Sablon Kita</strong>
          <span>Cianjur · Buka Sen–Sab</span>
        </div>
        <nav className={s.appNav}>
          <span data-active="">Kaos sablon DTF</span>
          <span>Hoodie</span>
          <span>Totebag</span>
          <span>Lacak pesanan</span>
        </nav>
        <span className={s.buttonGhost}>WhatsApp</span>
      </div>
      <div className={s.quote}>
        <div>
          <p className={s.eyebrow}>Hitung harga · tanpa akun</p>
          <h1 className={s.serif}>Kaos sablon DTF</h1>
          <p>
            Cotton combed, jahit rantai, sablon DTF full color. Pilih bahan dan jumlah, harga
            langsung terhitung. Permintaan masuk ke papan produksi kami tanpa perlu daftar.
          </p>
          <div className={s.field}>
            <label>Bahan</label>
            <div className={s.chips}>
              <span data-active="">Cotton Combed 30s</span>
              <span>Cotton Combed 24s</span>
              <span>Dry-fit</span>
            </div>
          </div>
          <div className={s.field}>
            <label>Area sablon</label>
            <div className={s.chips}>
              <span>Depan A4</span>
              <span data-active="">Depan A3</span>
              <span>Depan + belakang</span>
            </div>
          </div>
          <div className={s.field}>
            <label>Harga per pcs mengikuti jumlah</label>
            <table className={s.tiers}>
              <thead>
                <tr><th>Jumlah</th><th>Bahan</th><th>Harga / pcs</th></tr>
              </thead>
              <tbody>
                <tr><td>12 – 23 pcs</td><td>Combed 30s</td><td>Rp 78.000</td></tr>
                <tr><td>24 – 47 pcs</td><td>Combed 30s</td><td>Rp 69.000</td></tr>
                <tr data-active=""><td>48 – 99 pcs</td><td>Combed 30s</td><td>Rp 62.000</td></tr>
                <tr><td>100+ pcs</td><td>Combed 30s</td><td>Rp 55.000</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <aside className={s.summary}>
          <h2>Ringkasan</h2>
          <div className={s.summaryRows}>
            <div><span>Jumlah</span><span>48 pcs</span></div>
            <div><span>Harga / pcs</span><span>Rp 62.000</span></div>
            <div><span>Area A3</span><span>+ Rp 3.000 / pcs</span></div>
            <div><span>Biaya setup film</span><span>Rp 150.000</span></div>
            <div><span>Subtotal</span><span>Rp 3.270.000</span></div>
          </div>
          <div className={s.summaryTotal}>
            <span>Estimasi total</span>
            <strong>Rp 3.270.000</strong>
          </div>
          <div className={s.hint}>
            <i />
            Tambah 52 pcs lagi untuk harga Rp 55.000 / pcs. Total jadi Rp 5.650.000 untuk 100 pcs.
          </div>
          <span className={s.buttonPrimary}>Kirim permintaan</span>
          <small>Konfirmasi dan DP dikirim lewat WhatsApp. Tidak perlu membuat akun.</small>
        </aside>
      </div>
    </div>
  );
}

const trackSteps = ["Baru", "Penawaran", "DP", "Produksi", "QC", "Kirim", "Selesai"];

function TaksirinTracking({ theme }: { theme: string }) {
  return (
    <div className={`${s.frame} ${s.app}`} data-theme={theme}>
      <div className={s.appBar}>
        <div className={s.appBrand}>
          <strong className={s.serif}>Sablon Kita</strong>
          <span>Lacak pesanan</span>
        </div>
        <span className={s.buttonGhost}>Hubungi vendor</span>
      </div>
      <div className={s.track}>
        <div>
          <p className={s.eyebrow}>Status pesanan</p>
          <h1 className={s.serif}>Dalam produksi</h1>
          <div className={s.trackMeta}>
            <div><span>Kode lacak</span><strong><code>TKS-4F9K2</code></strong></div>
            <div><span>Pesanan</span><strong>Kaos sablon DTF · 48 pcs</strong></div>
            <div><span>Pelanggan</span><strong>Rani Puspita</strong></div>
            <div><span>Pembayaran</span><strong>DP Rp 1.635.000 · sisa Rp 1.635.000</strong></div>
            <div><span>Estimasi selesai</span><strong>Jumat, 13 September</strong></div>
          </div>
        </div>
        <div>
          <div className={s.steps}>
            {trackSteps.map((step, index) => (
              <div
                key={step}
                data-done={index < 3 ? "" : undefined}
                data-current={index === 3 ? "" : undefined}
              >
                {step}
              </div>
            ))}
          </div>
          <ol className={s.timeline}>
            <li>
              <time>10 Sep · 09.40</time>
              <div>
                <strong>Produksi dimulai</strong>
                <p>Film DTF sudah dicetak, 48 kaos combed 30s masuk antrean press. Catatan vendor: warna disamakan dengan mockup yang disetujui.</p>
              </div>
            </li>
            <li>
              <time>9 Sep · 15.12</time>
              <div>
                <strong>DP diterima</strong>
                <p>Transfer Rp 1.635.000 dengan kode unik 4F9K2 sudah dicocokkan. Sisa dibayar saat barang siap.</p>
              </div>
            </li>
            <li>
              <time>8 Sep · 20.03</time>
              <div>
                <strong>Penawaran disetujui</strong>
                <p>Harga Rp 62.000 / pcs untuk 48 pcs area A3, biaya setup film Rp 150.000.</p>
              </div>
            </li>
            <li>
              <time>8 Sep · 19.48</time>
              <div>
                <strong>Permintaan masuk</strong>
                <p>Dikirim dari halaman penawaran publik Kaos sablon DTF.</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <p className={s.footnote}>Halaman ini hanya bisa dibuka dengan kode lacak dan tidak diindeks mesin pencari.</p>
    </div>
  );
}

/* llian.dev ------------------------------------------------------------- */

function DevBar({ theme, active }: { theme: string; active: string }) {
  return (
    <div className={s.appBar}>
      <div className={s.appBrand}>
        <strong>llian.dev</strong>
        <span>{theme === "dark" ? "" : ""}Local-first tools</span>
      </div>
      <nav className={s.appNav}>
        {["Tools", "Notes", "About"].map((item) => (
          <span key={item} data-active={item === active ? "" : undefined}>{item}</span>
        ))}
      </nav>
      <span className={s.muted} style={{ fontSize: 14 }}>No account · No upload</span>
    </div>
  );
}

const devCategories = [
  ["Image", "Compress, resize, convert", 9],
  ["PDF", "Merge, split, compress", 7],
  ["Developer", "Format, encode, generate", 10],
  ["Text", "Count, clean, convert", 8],
  ["Everyday", "Units, dates, splits", 6],
  ["Finance", "PPh 21, cicilan, THR", 5],
] as const;

function DevOverview({ theme }: { theme: string }) {
  return (
    <div className={`${s.frame} ${s.app}`} data-theme={theme}>
      <DevBar theme={theme} active="Tools" />
      <div className={s.devHero}>
        <h1>Small tools for real tasks.</h1>
        <p>No account. No upload. No noise.</p>
      </div>
      <div className={s.devCats}>
        {devCategories.map(([label, desc, count]) => (
          <div key={label}>
            {label} <span className={s.muted}>· {count}</span>
            <span>{desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const devTools = [
  ["Image", "Compress image", "JPEG, PNG, WebP. Pick a target size, keep the EXIF you want."],
  ["Image", "Resize image", "Exact pixels or percent, batch up to 50 files."],
  ["Image", "HEIC to JPG", "Decoded in the browser, nothing leaves the device."],
  ["PDF", "Merge PDF", "Drag to reorder pages before you combine."],
  ["PDF", "Split PDF", "By range, every N pages, or pick pages by hand."],
  ["PDF", "Compress PDF", "Re-encode images inside the file, keep the text sharp."],
  ["Developer", "JSON formatter", "Pretty print, minify, and validate with line numbers."],
  ["Developer", "Base64", "Encode or decode text and files both ways."],
  ["Developer", "UUID generator", "v4 and v7, copy one or a hundred."],
  ["Text", "Word counter", "Words, characters, sentences, reading time."],
  ["Finance", "Kalkulator PPh 21", "Hitung pajak penghasilan bulanan dengan PTKP terbaru.", "id"],
  ["Everyday", "Split bill", "Uneven shares, tax, and tip in one pass."],
] as const;

function DevTools({ theme }: { theme: string }) {
  return (
    <div className={`${s.frame} ${s.app}`} data-theme={theme}>
      <DevBar theme={theme} active="Tools" />
      <div className={s.pageHead}>
        <div>
          <h1>All tools</h1>
          <p>45 tools · every one runs entirely in your browser</p>
        </div>
        <div className={s.search}><i />Search tools</div>
      </div>
      <div className={s.devGrid}>
        {devTools.map(([cat, name, desc, lang]) => (
          <div className={s.tool} key={name}>
            <span>{cat}</span>
            <div>
              <strong lang={lang}>{name}</strong>
              <p>{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* llnx ------------------------------------------------------------------ */

const logRows: readonly (readonly [string, string, ReactNode])[] = [
  ["09:17:02", "67925.50", "·"],
  ["09:18:02", "68010.50", "·"],
  ["09:19:02", "68042.00", "·"],
  ["09:20:02", "68120.50", <><span className={s.buy}>buy </span> <b>0.00036</b> @ <b>68120.50</b> ema cross up 12/26 in trend</>],
  ["09:21:02", "68180.00", "·"],
  ["09:22:02", "68240.50", "·"],
  ["09:23:02", "68205.00", "·"],
  ["09:24:02", "68150.50", "·"],
  ["09:25:02", "68095.00", <><span className={s.sell}>sell</span> <b>0.00036</b> @ <b>68095.00</b> TRAILING -5% from 68240</>],
  ["09:26:02", "68140.00", <><span className={s.held}>held</span> cooldown: 244s to go</>],
  ["09:27:02", "68210.50", "·"],
  ["09:28:02", "68260.00", "·"],
  ["09:29:02", "68310.50", "·"],
  ["09:30:02", "68290.00", "·"],
  ["09:31:02", "68355.50", "·"],
  ["09:32:02", "68402.00", "·"],
  ["09:33:02", "68380.50", "·"],
];

function TuiLog({ rows, compact }: { rows: typeof logRows; compact?: boolean }) {
  return (
    <div className={s.tuiLog}>
      {compact && (
        <>
          {"paper · started (stop button / press x)\n"}
          {"market   : binance | btc/usdt | 1m\n"}
          {"strategy : EMA 12/26 above the 100 EMA\n"}
          {"guards   : daily loss 10% | 20 trades/day\n"}
        </>
      )}
      {rows.map(([time, price, note]) => (
        <div key={time}>
          {time}     <b>{price}</b>  {note}
        </div>
      ))}
    </div>
  );
}

function TuiTabs({ active, compact }: { active: string; compact?: boolean }) {
  return (
    <div className={s.tuiTabs}>
      {["market", "trading", "strategy", "exits", "limits"].map((tab) => (
        <span key={tab} data-active={tab === active ? "" : undefined}>
          {compact ? tab : `  ${tab}  `}
        </span>
      ))}
    </div>
  );
}

function TuiField({ label, value, select, wide }: { label: string; value: string; select?: boolean; wide?: boolean }) {
  return (
    <div className={s.tuiField} style={wide ? { gridColumn: "1 / -1" } : undefined}>
      <b>{label}</b>
      <div className={s.tuiInput}>
        <span>{value}</span>
        {select && <span>▼</span>}
      </div>
    </div>
  );
}

function TuiShell({
  children,
  compact,
  dim,
  time,
}: {
  children: ReactNode;
  compact?: boolean;
  dim?: boolean;
  time: string;
}) {
  return (
    <div
      className={`${s.frame} ${s.tui} ${dim ? s.tuiDim : ""}`}
      data-theme="dark"
      data-compact={compact ? "" : undefined}
    >
      <div className={s.tuiTitle}>
        <span>{compact ? "" : "                                             "}<b>llnx</b> — auto-execute</span>
        <span>{time}</span>
      </div>
      <div className={s.tuiStatus}>
        {compact ? (
          <>
            <span className={s.dot} /> paper   <b>btc/usdt</b> · 1m · ema   running{"\n"}
            equity <b>100.02</b> <span className={s.buy}>+0.02%</span>   cash <b>100.02</b>   flat
          </>
        ) : (
          <>
            <span className={s.dot} /> paper   <b>btc/usdt</b> · <b>1m</b> · <b>ema</b>   running{"\n"}
            equity <b>100.02</b> <span className={s.buy}>+0.02%</span>   cash <b>100.02</b>   flat   risk <b>sl 3%</b> | <b>trail 5%</b>   today <b>2</b>
          </>
        )}
      </div>
      {children}
    </div>
  );
}

function TuiFooter({ compact }: { compact?: boolean }) {
  return (
    <>
      <div className={s.tuiButtons} style={{ gridTemplateColumns: compact ? "repeat(2, 1fr)" : "repeat(5, 1fr)" }}>
        <span>run</span>
        <span>backtest</span>
        <span>check</span>
        <span data-tone="danger">stop</span>
        <span>clear</span>
      </div>
      <div className={s.tuiKeys}>
        <span>
          <b>b</b> backtest  <b>r</b> run  <b>c</b> check  <b>s</b> status  <b>x</b> stop
          {compact ? "" : "  l clear  g setup  t settings  q quit"}
        </span>
        {!compact && <span><b>^p</b> palette</span>}
      </div>
    </>
  );
}

function LlnxOverview({ dim }: { dim?: boolean }) {
  return (
    <TuiShell time="03:29:13" dim={dim}>
      <TuiLog rows={logRows} />
      <TuiTabs active="market" />
      <div className={s.tuiForm}>
        one market at a time
        <div className={s.tuiFields} style={{ gridTemplateColumns: "1fr 1fr 1fr" }}>
          <TuiField label="market" value="exchange · a pair" select />
          <TuiField label="pair" value="btc/usdt" />
          <TuiField label="candle size" value="1m" select />
        </div>
      </div>
      <div className={s.tuiHelp}>what you trade: a pair on an exchange, or one token on a chain.</div>
      <TuiFooter />
      {dim && (
        <div className={s.tuiModal}>
          <h2>live mode sends real orders</h2>
          <p>
            Balances come from binance, not from local state. Daily loss 10%, 20 trades/day, cooldown 300s
            and the kill switch stay on. Type the phrase to continue:
          </p>
          <p><b style={{ color: "var(--foreground)", fontWeight: 500 }}>I understand live mode uses real money</b></p>
          <div className={s.tuiInput}><span>I understand live mode<i /></span></div>
          <div className={s.tuiModalButtons}>
            <span>cancel</span>
            <span data-disabled="">start live</span>
          </div>
        </div>
      )}
    </TuiShell>
  );
}

function LlnxStrategy() {
  return (
    <TuiShell time="03:31:48">
      <TuiLog rows={logRows} />
      <TuiTabs active="strategy" />
      <div className={s.tuiForm}>
        ema cross with a long-trend filter · rsi, breakout and grid settings are hidden
        <div className={s.tuiFields} style={{ gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
          <TuiField label="strategy" value="ema" select />
          <TuiField label="fast" value="12" />
          <TuiField label="slow" value="26" />
          <TuiField label="trend filter" value="100 ema" select />
        </div>
      </div>
      <div className={s.tuiHelp}>buy when fast crosses above slow and price is above the trend ema. exits live in the next tab.</div>
      <TuiFooter />
    </TuiShell>
  );
}

function LlnxTermux() {
  return (
    <TuiShell time="03:29:16" compact>
      <TuiLog rows={logRows.slice(3, 15)} compact />
      <TuiTabs active="market" compact />
      <div className={s.tuiForm}>
        one market at a time
        <div className={s.tuiFields} style={{ gridTemplateColumns: "1fr 1fr" }}>
          <TuiField label="market" value="exchange" select />
          <TuiField label="pair" value="btc/usdt" />
          <TuiField label="candle size" value="1m" select wide />
        </div>
      </div>
      <div className={s.tuiHelp}>what you trade: a pair on an exchange, or one token on a chain.</div>
      <TuiFooter compact />
    </TuiShell>
  );
}

/* Router ---------------------------------------------------------------- */

const views: View[] = [
  "icon",
  "apple-icon",
  "taksirin-board",
  "taksirin-quote",
  "taksirin-tracking",
  "llnx-overview",
  "llnx-strategy",
  "llnx-live-confirm",
  "llnx-termux",
  "llian-dev-overview",
  "llian-dev-tools",
];

export function generateStaticParams() {
  return views.flatMap((view) => [{ slug: `${view}--light` }, { slug: `${view}--dark` }]);
}

export default async function StudioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [view = "icon", theme = "light"] = slug.split("--");
  const themeAttr = theme === "dark" ? "dark" : "light";

  let body: ReactNode;
  switch (view as View) {
    case "apple-icon":
      body = <div className={`${s.frame} ${s.icon}`} data-theme={themeAttr}><Icon /></div>;
      break;
    case "taksirin-board":
      body = <TaksirinBoard theme={themeAttr} />;
      break;
    case "taksirin-quote":
      body = <TaksirinQuote theme={themeAttr} />;
      break;
    case "taksirin-tracking":
      body = <TaksirinTracking theme={themeAttr} />;
      break;
    case "llnx-overview":
      body = <LlnxOverview />;
      break;
    case "llnx-strategy":
      body = <LlnxStrategy />;
      break;
    case "llnx-live-confirm":
      body = <LlnxOverview dim />;
      break;
    case "llnx-termux":
      body = <LlnxTermux />;
      break;
    case "llian-dev-overview":
      body = <DevOverview theme={themeAttr} />;
      break;
    case "llian-dev-tools":
      body = <DevTools theme={themeAttr} />;
      break;
    default:
      body = (
        <div className={`${s.frame} ${s.icon}`} data-theme={themeAttr}>
          <Icon rounded />
        </div>
      );
  }

  return (
    <div className={mono.variable} data-theme={themeAttr} style={{ display: "contents" }}>
      {body}
    </div>
  );
}
