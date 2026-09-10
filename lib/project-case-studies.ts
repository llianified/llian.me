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
  eyebrow: "Case study · Taksirin",
  category: "Web application",
  title: "taksirin",
  subtitle: "One place to run orders and production for custom businesses.",
  summary:
    "Taksirin turns a scattered workflow into one clear system, from pricing and incoming orders to production and customer tracking.",
  actions: [
    {
      label: "Try Taksirin",
      href: "https://untitled-rouge-psi.vercel.app",
      kind: "live",
    },
  ],
  hero: {
    src: "/projects/taksirin/board.png",
    width: 1600,
    height: 900,
    alt: "The Taksirin order board with seven columns from New to Complete, each holding order cards with customer, item, value, and status",
    caption:
      "The seven-stage order board, rendered for this case study with sample data: new, quoted, deposit, production, QC, shipping, and complete.",
  },
  overview: [
    "Custom apparel, printing, furniture, souvenir, signage, and invitation businesses often answer the same pricing questions over and over through WhatsApp.",
    "Once an order arrives, details can easily get lost across chats, notebooks, and photo galleries. Taksirin brings quotes, orders, payments, production, and customer updates into one flow without making customers create an account.",
  ],
  flow: [
    "The vendor sets up products, options, and pricing once",
    "Customers calculate a quote from a public offer page",
    "Each request lands as an order on the production board",
    "Deposits, production, QC, shipping, and settlement are logged as they happen",
    "Customers follow progress with a public tracking code",
  ],
  features: [
    {
      title: "Quotes that calculate themselves",
      body: "Vendor and product pages support quantity tiers, per-unit options, fixed fees, percentage fees, and prompts that show customers the next price break.",
    },
    {
      title: "A seven-stage production board",
      body: "Orders move from new and quoted to deposit, production, QC, shipping, and complete. Vendors can switch between board and list views, search orders, or add one manually.",
    },
    {
      title: "Flexible payment tracking",
      body: "Deposits and final payments can be recorded across multiple transactions, while the remaining balance is calculated from the order value and payment history.",
    },
    {
      title: "Account-free tracking",
      body: "A tracking code gives customers access to the current status, timeline, and vendor notes. These pages are intentionally excluded from search engines.",
    },
    {
      title: "First-party customer data and analytics",
      body: "Customer profiles grow from incoming requests, including order history and lifetime value. Views, submissions, conversions, and traffic sources are measured without cookies.",
    },
    {
      title: "Eight public calculators",
      body: "Calculators for screen printing, custom shirts, banners, neon boxes, invitations, apparel costs, furniture, and souvenirs run directly in the browser with no sign-up.",
    },
  ],
  decisions: [
    {
      title: "One pricing engine for browser and server",
      body: "Pricing lives in pure functions, so public pages can respond instantly while the server applies the exact same rules when creating an order.",
    },
    {
      title: "Vendor pages are not indexed by default",
      body: "Canonical URLs, JSON-LD, sitemaps, and indexability rules are separated so complete offer pages can be discovered without exposing tracking pages or unfinished content.",
    },
    {
      title: "Authentication stays inside the app",
      body: "Passwords are secured with scrypt, sessions live in PostgreSQL, and cookies are HttpOnly. No third-party identity service sits in the critical path.",
    },
    {
      title: "Billing still works without a gateway",
      body: "Manual bank transfers with unique payment codes are fully supported. Midtrans transactions and webhooks are available, but the system falls back cleanly when merchant credentials are absent.",
    },
    {
      title: "The core flow is tested at two levels",
      body: "The project documents 61 logic tests with Vitest and 10 end-to-end journeys with Playwright.",
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
  gallery: [
    {
      src: "/projects/taksirin/quote.png",
      width: 1600,
      height: 900,
      alt: "A public Taksirin offer page for DTF-printed shirts with material and print-area options, a quantity tier table, and a live price summary",
      caption:
        "A public offer page with quantity tiers, per-unit options, a setup fee, and a prompt showing the next price break. Rendered with sample data.",
    },
    {
      src: "/projects/taksirin/tracking.png",
      width: 1600,
      height: 900,
      alt: "A Taksirin tracking page showing an order in production, its tracking code, payment status, a seven-step progress bar, and a timeline",
      caption:
        "Account-free tracking: a code opens the current stage, payment status, and vendor notes. Rendered with sample data.",
    },
  ],
  note: {
    label: "Not shipped yet",
    body: "Email delivery, product image uploads, password resets, automatic custom domains, and multi-user teams are not presented as finished features. The repository is private, so this case study only links to the live product.",
  },
} as const satisfies ProjectCaseStudy;

export const llnxCaseStudy = {
  slug: "llnx",
  eyebrow: "Case study · Python 0.3.0",
  category: "Python automation",
  title: "llnx",
  subtitle: "A crypto bot that can place its own orders.",
  summary:
    "One execution loop for paper, sandbox, and live trading, wrapped in a CLI, text menu, and TUI that stays readable on both desktop and Termux.",
  actions: [
    {
      label: "View on GitHub",
      href: "https://github.com/llianified/llnx",
      kind: "github",
    },
  ],
  hero: {
    src: "/projects/llnx/tui-overview.png",
    width: 1800,
    height: 1187,
    alt: "The llnx TUI showing trading status, logs, and settings",
    caption: "Desktop TUI: status, per-poll logs, and settings remain in three consistent bands.",
  },
  overview: [
    "llnx watches the market, runs a strategy, applies stop-loss and take-profit rules, checks every guardrail, and then passes the decision to a broker and venue.",
    "Paper mode uses real prices with a virtual balance. Sandbox mode runs against an exchange testnet or a Jupiter quote dry run. Live mode sends real orders and always requires an explicit confirmation phrase before it starts.",
  ],
  flow: [
    "The feed reads market movement",
    "The strategy produces a decision",
    "Risk rules apply stop-loss and take-profit controls",
    "Guardrails resize or block the order when needed",
    "The broker sends the order to an exchange or Jupiter",
    "Execution results, balances, and attempts are written back",
  ],
  features: [
    {
      title: "Three modes, one loop",
      body: "Paper, sandbox, and live modes share the same execution flow. The broker and venue change, not duplicated strategy code that can quietly drift apart.",
    },
    {
      title: "Brakes before every order",
      body: "Daily loss, trade count, cooldown, order percentage, consecutive failures, and a file-based kill switch are checked before each order. Exits can still run when risk limits stop new buys.",
    },
    {
      title: "Five strategies",
      body: "SMA, EMA with a long-trend filter, breakout, RSI, and grid strategies each expose their own parameters. Backtesting and optimization support out-of-sample checks.",
    },
    {
      title: "From CLI to a Termux TUI",
      body: "Data, backtest, trading, control, scanning, and safety commands are available through the CLI. The TUI reflows columns, status, logs, and settings around the terminal size.",
    },
    {
      title: "CEX and Solana support",
      body: "Exchange integration optionally uses ccxt. Jupiter powers DEX quotes and real swaps; real swaps are limited to Solana, while EVM networks remain available for paper trading, scanning, and safety checks.",
    },
    {
      title: "Bounded token discovery",
      body: "The scanner uses GeckoTerminal, while safety checks use sources such as RugCheck or GoPlus. A failed check can block live mode, but no check promises that a token is safe or profitable.",
    },
  ],
  decisions: [
    {
      title: "Fills are verified, not assumed",
      body: "Exchange orders are polled until closed to capture the average fill and fees. A Solana swap is only recorded after on-chain confirmation; an unconfirmed swap is not a trade.",
    },
    {
      title: "Balances always come back from the venue",
      body: "After a live order or failure, the bot fetches balances again. Local state is never treated as proof that assets actually moved.",
    },
    {
      title: "Failed market orders are not retried blindly",
      body: "An error does not prove that the venue rejected an order. The next tick makes a fresh decision with current prices and balances to avoid accidentally doubling a position.",
    },
    {
      title: "An append-only audit trail",
      body: "Every order attempt—filled, blocked, rejected, or failed—is appended to orders.jsonl alongside the signal that triggered it.",
    },
    {
      title: "No mandatory dependencies at the core",
      body: "Backtesting, the text menu, and the core engine run on the Python standard library. Textual, ccxt, solders, and PyYAML are only added for the capabilities that need them.",
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
      alt: "The llnx strategy panel showing parameters for the selected strategy",
      caption: "The strategy screen hides irrelevant parameters instead of merely disabling them.",
    },
    {
      src: "/projects/llnx/tui-live-confirm.png",
      width: 1800,
      height: 1187,
      alt: "The live-mode confirmation dialog in the llnx TUI",
      caption: "Live mode requires a confirmation phrase before any real order can be sent.",
    },
    {
      src: "/projects/llnx/tui-termux.png",
      width: 1800,
      height: 4420,
      alt: "The llnx TUI in portrait orientation inside a Termux terminal",
      caption: "The Termux portrait layout compacts status and makes settings scrollable without wrapping the logs.",
      portrait: true,
    },
  ],
  note: {
    label: "Risk note",
    body: "This project is an execution tool and technical experiment, not financial advice or a promise of profit. Start with paper trading; live mode uses real money, and crypto assets can lose their entire value.",
  },
} as const satisfies ProjectCaseStudy;

export const llianDevCaseStudy = {
  slug: "llian-dev",
  eyebrow: "Case study · Local-first web tools",
  category: "Local-first tools",
  title: "llian.dev",
  subtitle: "Useful tools, directly in the browser.",
  summary:
    "A collection of browser tools and implementation notes built around one local-first idea: open a task, finish it on the same device, and close the tab.",
  actions: [
    {
      label: "Visit llian.dev",
      href: "https://llian.dev",
      kind: "live",
    },
  ],
  hero: {
    src: "/projects/llian-dev/overview.png",
    width: 1200,
    height: 630,
    alt: "The llian.dev banner reading “Small tools for real tasks. No account. No upload. No noise.”",
    caption: "The pitch in one line: open a task, finish it on the same device, close the tab.",
  },
  overview: [
    "Tools for images, PDFs, developer work, text, everyday tasks, and finance each have a dedicated static page with a shareable URL.",
    "The registry contains 45 dedicated tool routes. Several Indonesia-specific tasks have their own pages rather than hiding behind an automatic language switch.",
  ],
  features: [
    {
      title: "Local-first processing",
      body: "Files and inputs are processed in browser modules. Image compression, PDF work, formatting, conversion, and calculations do not require uploads to the application server.",
    },
    {
      title: "Six task groups",
      body: "Image, PDF, developer, text, everyday, and finance tools form a clear taxonomy and index that remain compatible with static export.",
    },
    {
      title: "Dedicated pages, not empty templates",
      body: "Every live tool gets its own interface, metadata, explanation, and implementation boundaries. The registry connects those pages to the main index and categories.",
    },
    {
      title: "Language follows the task",
      body: "Tools aimed at Indonesian users—including several work and finance calculators—have dedicated Indonesian pages, while universal tools remain available in English.",
    },
  ],
  decisions: [
    {
      title: "Static export by default",
      body: "Next.js App Router produces static assets served through Cloudflare. pdf-lib and pdfjs-dist handle PDF work in the browser without turning the whole site into a server application.",
    },
    {
      title: "Privacy is enforced by architecture",
      body: "There are no identifiers, analytics cookies, session funnels, unique visitor counts, or returning-user measurements. A narrow worker only accepts aggregate usage events and excludes DNT/GPC traffic.",
    },
    {
      title: "Search intent and task completion stay separate",
      body: "Search Console explains what happens before arrival, while aggregate events show tool opens and results afterward. They are compared by path and never joined around an individual.",
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
    body: "Aggregate analytics on llian.dev are a project-specific choice and are not installed on this portfolio. The repository is private, so this case study only links to the live site.",
  },
} as const satisfies ProjectCaseStudy;

export const projectCaseStudies = {
  taksirin: taksirinCaseStudy,
  llnx: llnxCaseStudy,
  "llian-dev": llianDevCaseStudy,
} as const;
