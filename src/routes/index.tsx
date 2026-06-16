import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  Clock,
  Gavel,
  Quote,
  Scale,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { SITE } from "@/lib/site";
import { SectionEyebrow } from "@/components/Section";
import { HeroStatue } from "@/components/HeroStatue";
import chambersImg from "@/assets/about-chambers.jpg";
import { ImageLightbox } from "@/components/ImageLightbox";
import { TeamSection } from "@/components/TeamSection";
import { POSTS } from "@/data/posts";
import { trackAttr } from "@/lib/analytics";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advocate Prabhat Kaushik · Supreme Court Lawyer in Faridabad" },
      {
        name: "description",
        content:
          "Advocate-on-Record at the Supreme Court of India, based in Faridabad. Trusted counsel in criminal, family, property, commercial and constitutional matters across India.",
      },
      { property: "og:title", content: "Advocate Prabhat Kaushik · Supreme Court Lawyer in Faridabad" },
      {
        property: "og:description",
        content:
          "Advocate-on-Record, Supreme Court of India. Counsel of consequence — advocacy with integrity, based in Faridabad.",
      },
    ],
  }),
  component: HomePage,
});

const PRACTICE = [
  { icon: Gavel, title: "Supreme Court Litigation", desc: "SLPs under Article 136, writs under Article 32, transfer petitions and curative review at the apex court of India." },
  { icon: ShieldCheck, title: "Criminal Defence", desc: "Anticipatory bail (§438 CrPC), regular bail (§439), FIR quashing (§482), NDPS, PMLA and §138 NI Act matters." },
  { icon: Users, title: "Family & Matrimonial", desc: "Hindu Marriage Act, Special Marriage Act, custody under the Guardians and Wards Act, §125 CrPC maintenance and DV Act protection." },
  { icon: Building2, title: "Property & RERA", desc: "Title and partition suits, specific performance, RERA (Haryana) complaints and builder-buyer disputes under the 2016 Act." },
  { icon: Award, title: "Commercial & Arbitration", desc: "Arbitration & Conciliation Act 1996, IBC proceedings, recovery suits, §138 NI Act and contract enforcement." },
  { icon: Sparkles, title: "Constitutional & PIL", desc: "Article 32 / 226 writs, public interest litigation, service matters and challenges to executive action." },
];

const STATS = [
  { k: "12+", v: "Years at the Bar" },
  { k: "AOR", v: "Supreme Court of India" },
  { k: "1,500+", v: "Matters represented" },
  { k: "98%", v: "Client retention" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="bg-radial-gold absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute -top-40 left-1/3 -z-10 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--gradient-gold)" }}
        />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-[1.05fr_0.95fr] md:gap-10">
          {/* Copy */}
          <div className="text-center md:text-left">
            <div className="reveal">
              <SectionEyebrow>Chambers of Prabhat Kaushik</SectionEyebrow>
            </div>

            <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
              Counsel of <span className="text-gold animate-shimmer">consequence.</span>
              <br />
              Advocacy with integrity.
            </h1>

            <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg">
              Advocate-on-Record at the Supreme Court of India with 12+ years at the Bar. Trusted by 1,500+ clients across criminal defence, family, property, RERA, commercial and constitutional matters — argued from Faridabad to the apex court.
            </p>
            <p className="reveal reveal-delay-2 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:mx-0">
              The chambers is grounded in the constitutional promise of <span className="text-foreground">Article 14</span> (equality before the law), <span className="text-foreground">Article 21</span> (life and personal liberty) and <span className="text-foreground">Article 22</span> (safeguards on arrest) — the bedrock rights every Indian citizen is entitled to invoke. From a magistrate's bail order to a Supreme Court writ under Article 32, every brief is argued with the same constitutional discipline.
            </p>
            <p className="reveal reveal-delay-2 mt-3 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:justify-start">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-3 w-3 icon-gold" /> Free 20-min consult</span>
              <span className="opacity-40">·</span>
              <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3 w-3 icon-gold" /> Strictly confidential</span>
              <span className="opacity-40">·</span>
              <span className="inline-flex items-center gap-1.5"><Clock className="h-3 w-3 icon-gold" /> Replies within 1 day</span>
            </p>

            <div className="reveal reveal-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start">
              <a
                href={SITE.phoneHref}
                data-cursor="hover"
                {...trackAttr("hero_cta_call", { label: "Book a consultation" })}
                className="gold-glow inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--primary-foreground)]"
              >
                Book a consultation <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/practice"
                data-cursor="hover"
                {...trackAttr("hero_cta_practice", { label: "Explore practice areas" })}
                className="inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40"
              >
                Explore practice areas
              </Link>
            </div>

            <div className="reveal reveal-delay-4 mx-auto mt-12 grid max-w-xl grid-cols-2 gap-3 md:mx-0 md:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.v} className="glass rounded-2xl px-4 py-5 text-left hover-lift">
                  <p className="font-display text-3xl text-gold">{s.k}</p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nyaya Murti — responsive AVIF/WebP, parallax with reduced-motion fallback */}
          <div className="reveal reveal-delay-2">
            <HeroStatue />
          </div>
        </div>
      </section>

      {/* Authority strip */}
      <section className="border-y border-white/5 bg-[color:var(--surface)]/40 py-6">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-gold">Bar Council of India</span>
          <span>·</span>
          <span>Supreme Court of India</span>
          <span>·</span>
          <span>Punjab & Haryana High Court</span>
          <span>·</span>
          <span>Faridabad District Courts</span>
        </div>
      </section>

      {/* About — sits right after hero */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="bg-radial-gold absolute inset-0 -z-10 opacity-60" />
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="reveal">
            <ImageLightbox
              src={chambersImg}
              alt="Chambers of Advocate Prabhat Kaushik — antique brass scales of justice on a mahogany desk"
              caption={<>Chambers of Advocate Prabhat Kaushik · {SITE.location}</>}
              className="glass overflow-hidden p-2"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={chambersImg}
                  alt="Chambers of Advocate Prabhat Kaushik — antique brass scales of justice on a mahogany desk"
                  width={1024}
                  height={1024}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--background) 90%, transparent) 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                  <div>
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-gold font-display text-2xl font-bold text-[color:var(--primary-foreground)] shadow-lg">
                      PK
                    </span>
                    <p className="mt-3 font-display text-2xl text-foreground">Prabhat Kaushik</p>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-gold">
                      Advocate-on-Record · SCI
                    </p>
                  </div>
                  <div className="hidden text-right text-xs text-muted-foreground sm:block">
                    <p>📍 {SITE.location}</p>
                    <p className="mt-1">⚖️ Supreme Court of India</p>
                  </div>
                </div>
              </div>
            </ImageLightbox>
          </div>

          <div className="reveal reveal-delay-2">
            <SectionEyebrow>About the chambers</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              A practice built on <span className="text-gold">preparation.</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Prabhat Kaushik is an Advocate-on-Record at the Supreme Court of India — a designation reserved for advocates who have cleared the SCI&apos;s rigorous examination prescribed under the Supreme Court Rules, 2013. Only an AOR is entitled to file pleadings on the rolls of the Supreme Court, and only an AOR may receive vakalatnamas in apex-court matters. Operating from chambers in Faridabad, the practice combines that apex-court rigour with the personal attention of a focused boutique firm.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              Every brief — from a magistrate&apos;s bail application under §437 CrPC to a constitutional writ under Article 32 — is prepared with the same discipline: thorough research, candid client counsel and uncompromising courtroom advocacy. The chambers draws on the full architecture of Indian law: the Constitution of 1950, the Bharatiya Nyaya Sanhita (2023), the Bharatiya Nagarik Suraksha Sanhita (2023), the Bharatiya Sakshya Adhiniyam (2023), and the special statutes that govern modern commerce and personal life.
            </p>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              We treat the rule of law as a working obligation, not a slogan. Settlement is counselled where it serves the client; litigation is prosecuted where rights demand a hearing. The objective is always the same: a fair, principled and enforceable outcome.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Scale, t: "Apex-court rigour" },
                { icon: ShieldCheck, t: "Strict confidentiality" },
                { icon: CheckCircle2, t: "Transparent fees" },
                { icon: Users, t: "Personal attention" },
              ].map((f) => (
                <div key={f.t} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--gold)]/10 text-gold">
                    <f.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm">{f.t}</span>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              data-cursor="hover"
              className="story-link mt-7 inline-flex items-center gap-1.5 text-sm text-gold"
            >
              Read the full profile <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="reveal mx-auto mb-14 max-w-2xl text-center">
            <SectionEyebrow>Why choose us</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Counsel you can <span className="text-gold">stake your case on.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Six reasons clients return — and refer — across criminal, family, property and constitutional matters. Each principle is rooted in the duties an advocate owes the court under the Advocates Act, 1961 and the Bar Council of India Rules.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Scale, t: "Apex-court rigour", d: "Every brief prepared to Supreme Court standards — pleadings drafted to satisfy Order XXI of the Supreme Court Rules, even in trial courts." },
              { icon: ShieldCheck, t: "Confidential & ethical", d: "Strict client privilege under §126 of the Indian Evidence Act (now §132 BSA, 2023). No case is ever discussed outside the chambers." },
              { icon: CheckCircle2, t: "Transparent fees", d: "Engagement letter issued upfront. Fees are quoted in writing, billed against milestones, and never escalated mid-matter." },
              { icon: Sparkles, t: "Personal attention", d: "The advocate of record is the advocate who argues the matter — no hand-off to juniors at the hearing." },
              { icon: Clock, t: "Responsive", d: "Status updates in plain English. Replies within one working day, even during court vacations." },
              { icon: Award, t: "Track record", d: "1,500+ matters represented across Delhi-NCR, the Punjab & Haryana High Court and the Supreme Court of India." },
            ].map((p, i) => (
              <div
                key={p.t}
                className={`reveal reveal-delay-${(i % 4) + 1} glass hover-lift rounded-3xl p-6`}
                data-cursor="hover"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--gold)]/15 icon-gold">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamSection />

      {/* Blog preview */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="reveal mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionEyebrow>From the journal</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl md:text-5xl">
                Notes on <span className="text-gold">Indian law.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Plain-English explainers on bail, divorce, FIRs, RERA and Supreme Court procedure — written from the chambers.
              </p>
            </div>
            <Link
              to="/blog"
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40"
            >
              All articles <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {POSTS.slice(0, 3).map((post, i) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                data-cursor="hover"
                className={`reveal reveal-delay-${(i % 3) + 1} group glass hover-lift relative flex flex-col overflow-hidden rounded-3xl p-6`}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60"
                  style={{ background: "var(--gradient-gold)" }}
                />
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold">
                  <BookOpen className="h-3.5 w-3.5" />
                  {post.category}
                </div>
                <h3 className="mt-4 font-display text-2xl leading-snug transition-colors duration-300 group-hover:text-gold">
                  {post.title}
                </h3>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3 w-3" /> {post.readMinutes} min read
                  </span>
                  <span className="inline-flex items-center gap-1 text-gold opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    Read <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practice */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="reveal mb-14 max-w-3xl">
            <SectionEyebrow>Practice areas</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Comprehensive counsel,<br />
              <span className="text-gold">measured execution.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              From bail applications in the magistrate's court to special leave petitions before the Supreme Court — the chambers handles a full spectrum of matters with disciplined preparation and strategic clarity.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PRACTICE.map((p, i) => (
              <Link
                key={p.title}
                to="/practice"
                className={`reveal reveal-delay-${(i % 4) + 1} group glass hover-lift rounded-3xl p-6`}
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--gold)]/10 text-gold">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs text-gold opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* Process timeline */}
      <section className="relative py-24 md:py-28">
        <div className="mx-auto max-w-6xl px-4">
          <div className="reveal mb-14 max-w-2xl">
            <SectionEyebrow>How we work</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              A disciplined <span className="text-gold">four-step</span> engagement.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Confidential consultation", d: "Complimentary 20-minute call to understand your matter, risks and realistic outcomes." },
              { n: "02", t: "Engagement letter", d: "Clear scope, timeline and fee structure — signed before any work begins." },
              { n: "03", t: "Preparation", d: "Research, drafting, evidence review and strategy — the work that wins cases." },
              { n: "04", t: "Representation", d: "Appearance before the relevant forum with disciplined, measured advocacy." },
            ].map((s, i) => (
              <div
                key={s.n}
                className={`reveal reveal-delay-${(i % 4) + 1} glass hover-lift relative rounded-3xl p-6`}
              >
                <span className="font-display text-5xl text-gold/80">{s.n}</span>
                <h3 className="mt-3 font-display text-xl">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4">
          <div className="reveal mb-14 max-w-2xl">
            <SectionEyebrow>Client trust</SectionEyebrow>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              What clients <span className="text-gold">say.</span>
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { q: "Mr. Kaushik's preparation for our SLP was extraordinary. He saw arguments we hadn't considered.", a: "Real-estate group · Gurgaon" },
              { q: "Quietly persuasive in court, deeply human in chambers. Exactly the counsel a family case deserves.", a: "Private client · Faridabad" },
              { q: "Strategic, ethical, and refreshingly transparent on fees and timelines.", a: "MD, manufacturing firm · Delhi" },
            ].map((t, i) => (
              <div key={i} className={`reveal reveal-delay-${i + 1} glass hover-lift relative rounded-3xl p-6`}>
                <Quote className="absolute right-5 top-5 h-6 w-6 text-gold/30" />
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 leading-relaxed text-foreground">"{t.q}"</p>
                <p className="mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground">{t.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Final CTA */}
      <section className="relative overflow-hidden pb-32">
        <div className="mx-auto max-w-5xl px-4">
          <div className="reveal glass-strong relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16">
            <div
              aria-hidden
              className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-25 blur-3xl"
              style={{ background: "var(--gradient-gold)" }}
            />
            <SectionEyebrow>Speak to the chambers</SectionEyebrow>
            <h2 className="mt-5 font-display text-4xl leading-tight md:text-5xl">
              Your matter deserves<br />
              <span className="text-gold">considered counsel.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              The first 20-minute consultation is complimentary — confidential, candid and without obligation.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={SITE.phoneHref}
                className="gold-glow inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--primary-foreground)]"
              >
                Call {SITE.phone}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40"
              >
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
