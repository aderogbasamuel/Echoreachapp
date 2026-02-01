export default function App() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <FinalCTA />
    </main>
  )
}

/* ---------------- NAVBAR ---------------- */

function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
      <span className="text-lg font-semibold tracking-tight">
        EchoReach
      </span>

      <button className="rounded-full border border-white/10 px-4 py-2 text-sm hover:bg-white/5 transition">
        Launch app
      </button>
    </nav>
  )
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto px-8 pt-28 pb-32 text-center">
      {/* Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
        Find the right people
        <br />
        <span className="text-white/50">
          before sending the email
        </span>
      </h1>

      <p className="mt-8 max-w-xl mx-auto text-lg text-white/60">
        LeadPilot scans company websites to identify decision-makers
        and predict their most likely email addresses.
      </p>

      <div className="mt-12 flex justify-center gap-4">
        <button className="rounded-full bg-white text-black px-7 py-3 font-medium hover:bg-gray-200 transition">
          Try demo
        </button>

        <button className="rounded-full border border-white/10 px-7 py-3 text-white/70 hover:bg-white/5 transition">
          See how it works
        </button>
      </div>
    </section>
  )
}

/* ---------------- SOCIAL PROOF ---------------- */

function SocialProof() {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-24 text-center">
      <p className="text-sm text-white/40">
        Built for B2B founders, sales teams, and growth marketers
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/30 text-sm">
        <span>YC-style startups</span>
        <span>•</span>
        <span>SaaS teams</span>
        <span>•</span>
        <span>Agencies</span>
        <span>•</span>
        <span>Solo founders</span>
      </div>
    </section>
  )
}

/* ---------------- FEATURES ---------------- */

function Features() {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-32">
      <div className="grid md:grid-cols-3 gap-6">
        <Feature
          title="Automatic discovery"
          desc="We scan company websites and public pages to surface founders and executives."
        />
        <Feature
          title="Decision-maker focus"
          desc="No random employees. Only people who can actually say yes."
        />
        <Feature
          title="Email prediction"
          desc="We generate the most likely email formats with confidence scores."
        />
      </div>
    </section>
  )
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-2 text-sm text-white/60">{desc}</p>
    </div>
  )
}

/* ---------------- FINAL CTA ---------------- */

function FinalCTA() {
  return (
    <section className="max-w-7xl mx-auto px-8 pb-32 text-center">
      <div className="rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-16 border border-white/10">
        <h2 className="text-4xl font-semibold tracking-tight">
          Stop guessing email addresses.
        </h2>

        <p className="mt-4 text-white/60">
          Let LeadPilot do the research for you.
        </p>

        <button className="mt-10 rounded-full bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition">
          Launch demo
        </button>
      </div>

      <p className="mt-6 text-xs text-white/40">
        Emails are predicted, not verified.
      </p>
    </section>
  )
}
