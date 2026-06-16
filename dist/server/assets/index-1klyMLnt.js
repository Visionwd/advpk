import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Scale, ShieldCheck, MapPin, Star, Linkedin, Mail, CheckCircle2, Clock, ArrowRight, Users, Sparkles, Award, BookOpen, Gavel, Building2, Quote } from "lucide-react";
import { S as SITE, t as trackAttr, P as POSTS } from "./router-CnwFu_zY.js";
import { S as SectionEyebrow } from "./Section-B-WDU4Ks.js";
import { useState, useEffect, useRef } from "react";
import { I as ImageLightbox, c as chambersImg } from "./ImageLightbox-BQ1c14q1.js";
import "@radix-ui/react-dialog";
import "clsx";
import "tailwind-merge";
function useLowMotion() {
  const [low, setLow] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const nav = navigator;
    const compute = () => {
      const reduced = !!mq?.matches;
      const lowMem = typeof nav.deviceMemory === "number" && nav.deviceMemory <= 2;
      const lowCpu = typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 2;
      const saveData = !!nav.connection?.saveData;
      const slowNet = nav.connection?.effectiveType === "2g" || nav.connection?.effectiveType === "slow-2g";
      setLow(reduced || lowMem || lowCpu || saveData || slowNet);
    };
    compute();
    mq?.addEventListener?.("change", compute);
    return () => mq?.removeEventListener?.("change", compute);
  }, []);
  return low;
}
function HeroStatue() {
  const lowMotion = useLowMotion();
  const wrapRef = useRef(null);
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    if (lowMotion) return;
    const wrap = wrapRef.current;
    const img = imgRef.current;
    if (!wrap || !img) return;
    let raf = 0;
    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const onMove = (e) => {
      const r = wrap.getBoundingClientRect();
      target.x = Math.max(-1, Math.min(1, (e.clientX - (r.left + r.width / 2)) / (r.width / 2)));
      target.y = Math.max(-1, Math.min(1, (e.clientY - (r.top + r.height / 2)) / (r.height / 2)));
    };
    const tick = () => {
      current.x += (target.x - current.x) * 0.08;
      current.y += (target.y - current.y) * 0.08;
      img.style.transform = `perspective(1200px) translate3d(${current.x * 8}px, ${current.y * 4}px, 0) rotateX(${-current.y * 3}deg) rotateY(${current.x * 4}deg)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      if (img) img.style.transform = "";
    };
  }, [lowMotion]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: wrapRef,
      "data-cursor": "none",
      className: "relative mx-auto flex w-full max-w-[540px] items-center justify-center h-[min(72svh,480px)] sm:h-[min(76svh,540px)] md:h-[min(82svh,620px)] lg:h-[min(84svh,660px)]",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 rounded-[2rem]",
            style: {
              background: "radial-gradient(ellipse at 50% 30%, oklch(0.82 0.14 85 / 0.22), transparent 60%), radial-gradient(ellipse at 50% 100%, color-mix(in oklab, var(--background) 90%, transparent) 0%, transparent 60%)"
            }
          }
        ),
        !lowMotion && /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "animate-float pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full opacity-60 blur-3xl",
            style: { background: "var(--gradient-gold)" }
          }
        ),
        /* @__PURE__ */ jsx(
          ImageLightbox,
          {
            src: chambersImg,
            alt: "Chambers of Advocate Prabhat Kaushik in Faridabad",
            caption: /* @__PURE__ */ jsx(Fragment, { children: "Chambers of Advocate Prabhat Kaushik · Faridabad · Supreme Court of India" }),
            className: "relative z-10 h-full w-full",
            children: /* @__PURE__ */ jsxs("div", { className: "hero-frame group relative h-full w-full overflow-hidden rounded-[2rem]", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  ref: imgRef,
                  src: chambersImg,
                  alt: "Chambers of Advocate Prabhat Kaushik in Faridabad",
                  width: 1024,
                  height: 1280,
                  loading: "eager",
                  decoding: "async",
                  fetchpriority: "high",
                  onLoad: () => setLoaded(true),
                  draggable: false,
                  className: `hero-img h-full w-full select-none object-cover transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`,
                  style: {
                    transformStyle: "preserve-3d",
                    willChange: lowMotion ? "auto" : "transform"
                  }
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "pointer-events-none absolute inset-0",
                  style: {
                    background: "linear-gradient(180deg, color-mix(in oklab, var(--background) 18%, transparent) 0%, transparent 22%, transparent 55%, color-mix(in oklab, var(--background) 92%, transparent) 100%)"
                  }
                }
              ),
              /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: "hero-shine pointer-events-none absolute inset-0" }),
              /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full border border-[color:var(--gold)]/40 bg-[color:var(--scrim)] px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-gold backdrop-blur-md transition-all duration-500 group-hover:-translate-y-0.5 group-hover:border-[color:var(--gold)]/70", children: [
                /* @__PURE__ */ jsx(Scale, { className: "h-3 w-3" }),
                " AOR · SCI"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute right-5 top-5 flex items-center gap-1.5 rounded-full border border-[color:var(--hairline)] bg-[color:var(--scrim)] px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-foreground/85 backdrop-blur-md", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3 w-3 text-gold" }),
                " Verified"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 sm:block", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[color:var(--gold)]/30 bg-[color:var(--scrim-strong)] px-3.5 py-3 text-center backdrop-blur-md transition-all duration-500 group-hover:-translate-x-0.5 group-hover:border-[color:var(--gold)]/60", children: [
                /* @__PURE__ */ jsx("p", { className: "font-display text-2xl leading-none text-gold", children: "12+" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-[9px] uppercase tracking-[0.2em] text-muted-foreground", children: "Yrs · Bar" })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-[color:var(--hairline)] bg-[color:var(--scrim-strong)] px-4 py-2.5 backdrop-blur-md transition-all duration-500 group-hover:border-[color:var(--gold)]/40", children: [
                  /* @__PURE__ */ jsx("p", { className: "font-display text-base leading-tight text-foreground", children: "Chambers · Faridabad" }),
                  /* @__PURE__ */ jsxs("p", { className: "mt-0.5 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "h-2.5 w-2.5" }),
                    " Delhi-NCR · Pan-India"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "hidden rounded-full border border-[color:var(--hairline)] bg-[color:var(--scrim)] px-3 py-1.5 backdrop-blur-md sm:flex sm:items-center sm:gap-1 text-[11px]", children: [
                  /* @__PURE__ */ jsx(Star, { className: "h-3 w-3 fill-[color:var(--gold)] text-[color:var(--gold)]" }),
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "4.9" }),
                  /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "· 200+ clients" })
                ] })
              ] })
            ] })
          }
        )
      ]
    }
  );
}
const t1 = "/assets/team-1-BQ8A3p3h.jpg";
const t2 = "/assets/team-2-OyZLzzCp.jpg";
const t3 = "/assets/team-3-CyQO0fBo.jpg";
const t4 = "/assets/team-4-YeUZFbYv.jpg";
const TEAM = [
  {
    name: "Prabhat Kaushik",
    role: "Advocate-on-Record · SCI",
    bio: "Founding advocate. Apex-court litigation, constitutional and commercial matters.",
    img: t1
  },
  {
    name: "Ananya Verma",
    role: "Senior Associate",
    bio: "Family, matrimonial and domestic violence matters. Punjab & Haryana HC.",
    img: t2
  },
  {
    name: "Rohan Sharma",
    role: "Associate Advocate",
    bio: "Criminal defence, bail & FIR quashing. Trial court and High Court briefs.",
    img: t3
  },
  {
    name: "Priya Nair",
    role: "Legal Researcher",
    bio: "Case law analysis, drafting, and RERA/consumer-forum preparation.",
    img: t4
  }
];
function TeamSection() {
  return /* @__PURE__ */ jsxs("section", { className: "relative py-24 md:py-32", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 -z-10 opacity-40",
        style: {
          background: "radial-gradient(ellipse at 20% 0%, oklch(0.82 0.14 85 / 0.12), transparent 60%)"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mx-auto mb-14 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "The chambers" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
          "Meet the ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "counsel." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "A small, senior team — every brief is reviewed by the advocate who argues it." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: TEAM.map((m, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: `reveal reveal-delay-${i % 4 + 1} team-card group text-left`,
          children: /* @__PURE__ */ jsxs("div", { className: "team-card-inner", children: [
            /* @__PURE__ */ jsxs("div", { className: "team-media", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: m.img,
                  alt: `${m.name} — ${m.role}`,
                  loading: "lazy",
                  width: 640,
                  height: 768,
                  className: "team-img"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "team-overlay", "aria-hidden": true }),
              /* @__PURE__ */ jsxs("div", { className: "team-socials", children: [
                /* @__PURE__ */ jsx("span", { className: "team-social", "aria-hidden": true, children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsx("span", { className: "team-social", "aria-hidden": true, children: /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "team-body", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-display text-xl", children: m.name }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-[11px] uppercase tracking-[0.22em] text-gold", children: m.role }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: m.bio })
            ] })
          ] })
        },
        m.name
      )) })
    ] })
  ] });
}
const PRACTICE = [{
  icon: Gavel,
  title: "Supreme Court Litigation",
  desc: "SLPs under Article 136, writs under Article 32, transfer petitions and curative review at the apex court of India."
}, {
  icon: ShieldCheck,
  title: "Criminal Defence",
  desc: "Anticipatory bail (§438 CrPC), regular bail (§439), FIR quashing (§482), NDPS, PMLA and §138 NI Act matters."
}, {
  icon: Users,
  title: "Family & Matrimonial",
  desc: "Hindu Marriage Act, Special Marriage Act, custody under the Guardians and Wards Act, §125 CrPC maintenance and DV Act protection."
}, {
  icon: Building2,
  title: "Property & RERA",
  desc: "Title and partition suits, specific performance, RERA (Haryana) complaints and builder-buyer disputes under the 2016 Act."
}, {
  icon: Award,
  title: "Commercial & Arbitration",
  desc: "Arbitration & Conciliation Act 1996, IBC proceedings, recovery suits, §138 NI Act and contract enforcement."
}, {
  icon: Sparkles,
  title: "Constitutional & PIL",
  desc: "Article 32 / 226 writs, public interest litigation, service matters and challenges to executive action."
}];
const STATS = [{
  k: "12+",
  v: "Years at the Bar"
}, {
  k: "AOR",
  v: "Supreme Court of India"
}, {
  k: "1,500+",
  v: "Matters represented"
}, {
  k: "98%",
  v: "Client retention"
}];
function HomePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-radial-gold absolute inset-0 -z-10" }),
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -top-40 left-1/3 -z-10 h-[520px] w-[520px] rounded-full opacity-30 blur-3xl", style: {
        background: "var(--gradient-gold)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-[1.05fr_0.95fr] md:gap-10", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center md:text-left", children: [
          /* @__PURE__ */ jsx("div", { className: "reveal", children: /* @__PURE__ */ jsx(SectionEyebrow, { children: "Chambers of Prabhat Kaushik" }) }),
          /* @__PURE__ */ jsxs("h1", { className: "reveal reveal-delay-1 mt-6 font-display text-5xl leading-[1.02] md:text-6xl lg:text-7xl", children: [
            "Counsel of ",
            /* @__PURE__ */ jsx("span", { className: "text-gold animate-shimmer", children: "consequence." }),
            /* @__PURE__ */ jsx("br", {}),
            "Advocacy with integrity."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "reveal reveal-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg", children: "Advocate-on-Record at the Supreme Court of India with 12+ years at the Bar. Trusted by 1,500+ clients across criminal defence, family, property, RERA, commercial and constitutional matters — argued from Faridabad to the apex court." }),
          /* @__PURE__ */ jsxs("p", { className: "reveal reveal-delay-2 mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:mx-0", children: [
            "The chambers is grounded in the constitutional promise of ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Article 14" }),
            " (equality before the law), ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Article 21" }),
            " (life and personal liberty) and ",
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: "Article 22" }),
            " (safeguards on arrest) — the bedrock rights every Indian citizen is entitled to invoke. From a magistrate's bail order to a Supreme Court writ under Article 32, every brief is argued with the same constitutional discipline."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "reveal reveal-delay-2 mt-3 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground md:justify-start", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 icon-gold" }),
              " Free 20-min consult"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "opacity-40", children: "·" }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3 w-3 icon-gold" }),
              " Strictly confidential"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "opacity-40", children: "·" }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3 icon-gold" }),
              " Replies within 1 day"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "reveal reveal-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row md:justify-start", children: [
            /* @__PURE__ */ jsxs("a", { href: SITE.phoneHref, "data-cursor": "hover", ...trackAttr("hero_cta_call", {
              label: "Book a consultation"
            }), className: "gold-glow inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--primary-foreground)]", children: [
              "Book a consultation ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }),
            /* @__PURE__ */ jsx(Link, { to: "/practice", "data-cursor": "hover", ...trackAttr("hero_cta_practice", {
              label: "Explore practice areas"
            }), className: "inline-flex items-center gap-2 rounded-full border border-[color:var(--hairline)] bg-[color:var(--surface-2)] px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40", children: "Explore practice areas" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "reveal reveal-delay-4 mx-auto mt-12 grid max-w-xl grid-cols-2 gap-3 md:mx-0 md:grid-cols-4", children: STATS.map((s) => /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl px-4 py-5 text-left hover-lift", children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-3xl text-gold", children: s.k }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs leading-snug text-muted-foreground", children: s.v })
          ] }, s.v)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "reveal reveal-delay-2", children: /* @__PURE__ */ jsx(HeroStatue, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-y border-white/5 bg-[color:var(--surface)]/40 py-6", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-4 text-xs uppercase tracking-[0.22em] text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Bar Council of India" }),
      /* @__PURE__ */ jsx("span", { children: "·" }),
      /* @__PURE__ */ jsx("span", { children: "Supreme Court of India" }),
      /* @__PURE__ */ jsx("span", { children: "·" }),
      /* @__PURE__ */ jsx("span", { children: "Punjab & Haryana High Court" }),
      /* @__PURE__ */ jsx("span", { children: "·" }),
      /* @__PURE__ */ jsx("span", { children: "Faridabad District Courts" })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden py-24 md:py-32", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-radial-gold absolute inset-0 -z-10 opacity-60" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[0.9fr_1.1fr] md:items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "reveal", children: /* @__PURE__ */ jsx(ImageLightbox, { src: chambersImg, alt: "Chambers of Advocate Prabhat Kaushik — antique brass scales of justice on a mahogany desk", caption: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Chambers of Advocate Prabhat Kaushik · ",
          SITE.location
        ] }), className: "glass overflow-hidden p-2", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl", children: [
          /* @__PURE__ */ jsx("img", { src: chambersImg, alt: "Chambers of Advocate Prabhat Kaushik — antique brass scales of justice on a mahogany desk", width: 1024, height: 1024, loading: "lazy", decoding: "async", className: "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" }),
          /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0", style: {
            background: "linear-gradient(180deg, transparent 40%, color-mix(in oklab, var(--background) 90%, transparent) 100%)"
          } }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "grid h-14 w-14 place-items-center rounded-full bg-gold font-display text-2xl font-bold text-[color:var(--primary-foreground)] shadow-lg", children: "PK" }),
              /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-2xl text-foreground", children: "Prabhat Kaushik" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-[11px] uppercase tracking-[0.22em] text-gold", children: "Advocate-on-Record · SCI" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "hidden text-right text-xs text-muted-foreground sm:block", children: [
              /* @__PURE__ */ jsxs("p", { children: [
                "📍 ",
                SITE.location
              ] }),
              /* @__PURE__ */ jsx("p", { className: "mt-1", children: "⚖️ Supreme Court of India" })
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "reveal reveal-delay-2", children: [
          /* @__PURE__ */ jsx(SectionEyebrow, { children: "About the chambers" }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
            "A practice built on ",
            /* @__PURE__ */ jsx("span", { className: "text-gold", children: "preparation." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-5 leading-relaxed text-muted-foreground", children: "Prabhat Kaushik is an Advocate-on-Record at the Supreme Court of India — a designation reserved for advocates who have cleared the SCI's rigorous examination prescribed under the Supreme Court Rules, 2013. Only an AOR is entitled to file pleadings on the rolls of the Supreme Court, and only an AOR may receive vakalatnamas in apex-court matters. Operating from chambers in Faridabad, the practice combines that apex-court rigour with the personal attention of a focused boutique firm." }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-muted-foreground", children: "Every brief — from a magistrate's bail application under §437 CrPC to a constitutional writ under Article 32 — is prepared with the same discipline: thorough research, candid client counsel and uncompromising courtroom advocacy. The chambers draws on the full architecture of Indian law: the Constitution of 1950, the Bharatiya Nyaya Sanhita (2023), the Bharatiya Nagarik Suraksha Sanhita (2023), the Bharatiya Sakshya Adhiniyam (2023), and the special statutes that govern modern commerce and personal life." }),
          /* @__PURE__ */ jsx("p", { className: "mt-3 leading-relaxed text-muted-foreground", children: "We treat the rule of law as a working obligation, not a slogan. Settlement is counselled where it serves the client; litigation is prosecuted where rights demand a hearing. The objective is always the same: a fair, principled and enforceable outcome." }),
          /* @__PURE__ */ jsx("div", { className: "mt-7 grid gap-3 sm:grid-cols-2", children: [{
            icon: Scale,
            t: "Apex-court rigour"
          }, {
            icon: ShieldCheck,
            t: "Strict confidentiality"
          }, {
            icon: CheckCircle2,
            t: "Transparent fees"
          }, {
            icon: Users,
            t: "Personal attention"
          }].map((f) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.02] px-4 py-3", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-9 w-9 place-items-center rounded-xl bg-[color:var(--gold)]/10 text-gold", children: /* @__PURE__ */ jsx(f.icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: f.t })
          ] }, f.t)) }),
          /* @__PURE__ */ jsxs(Link, { to: "/about", "data-cursor": "hover", className: "story-link mt-7 inline-flex items-center gap-1.5 text-sm text-gold", children: [
            "Read the full profile ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mx-auto mb-14 max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Why choose us" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
          "Counsel you can ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "stake your case on." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Six reasons clients return — and refer — across criminal, family, property and constitutional matters. Each principle is rooted in the duties an advocate owes the court under the Advocates Act, 1961 and the Bar Council of India Rules." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: [{
        icon: Scale,
        t: "Apex-court rigour",
        d: "Every brief prepared to Supreme Court standards — pleadings drafted to satisfy Order XXI of the Supreme Court Rules, even in trial courts."
      }, {
        icon: ShieldCheck,
        t: "Confidential & ethical",
        d: "Strict client privilege under §126 of the Indian Evidence Act (now §132 BSA, 2023). No case is ever discussed outside the chambers."
      }, {
        icon: CheckCircle2,
        t: "Transparent fees",
        d: "Engagement letter issued upfront. Fees are quoted in writing, billed against milestones, and never escalated mid-matter."
      }, {
        icon: Sparkles,
        t: "Personal attention",
        d: "The advocate of record is the advocate who argues the matter — no hand-off to juniors at the hearing."
      }, {
        icon: Clock,
        t: "Responsive",
        d: "Status updates in plain English. Replies within one working day, even during court vacations."
      }, {
        icon: Award,
        t: "Track record",
        d: "1,500+ matters represented across Delhi-NCR, the Punjab & Haryana High Court and the Supreme Court of India."
      }].map((p, i) => /* @__PURE__ */ jsxs("div", { className: `reveal reveal-delay-${i % 4 + 1} glass hover-lift rounded-3xl p-6`, "data-cursor": "hover", children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-11 w-11 place-items-center rounded-2xl bg-[color:var(--gold)]/15 icon-gold", children: /* @__PURE__ */ jsx(p.icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-xl", children: p.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: p.d })
      ] }, p.t)) })
    ] }) }),
    /* @__PURE__ */ jsx(TeamSection, {}),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-2xl", children: [
          /* @__PURE__ */ jsx(SectionEyebrow, { children: "From the journal" }),
          /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
            "Notes on ",
            /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Indian law." })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "Plain-English explainers on bail, divorce, FIRs, RERA and Supreme Court procedure — written from the chambers." })
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/blog", "data-cursor": "hover", className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40", children: [
          "All articles ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-3", children: POSTS.slice(0, 3).map((post, i) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
        slug: post.slug
      }, "data-cursor": "hover", className: `reveal reveal-delay-${i % 3 + 1} group glass hover-lift relative flex flex-col overflow-hidden rounded-3xl p-6`, children: [
        /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60", style: {
          background: "var(--gradient-gold)"
        } }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-gold", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "h-3.5 w-3.5" }),
          post.category
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 font-display text-2xl leading-snug transition-colors duration-300 group-hover:text-gold", children: post.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground", children: post.excerpt }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
            " ",
            post.readMinutes,
            " min read"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-gold opacity-0 -translate-x-1 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100", children: [
            "Read ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
          ] })
        ] })
      ] }, post.slug)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-14 max-w-3xl", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Practice areas" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
          "Comprehensive counsel,",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "measured execution." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-muted-foreground", children: "From bail applications in the magistrate's court to special leave petitions before the Supreme Court — the chambers handles a full spectrum of matters with disciplined preparation and strategic clarity." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: PRACTICE.map((p, i) => /* @__PURE__ */ jsxs(Link, { to: "/practice", className: `reveal reveal-delay-${i % 4 + 1} group glass hover-lift rounded-3xl p-6`, children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--gold)]/10 text-gold", children: /* @__PURE__ */ jsx(p.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-xl", children: p.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: p.desc }),
        /* @__PURE__ */ jsxs("span", { className: "mt-5 inline-flex items-center gap-1.5 text-xs text-gold opacity-0 transition-opacity group-hover:opacity-100", children: [
          "Learn more ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
        ] })
      ] }, p.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative py-24 md:py-28", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-14 max-w-2xl", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "How we work" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
          "A disciplined ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "four-step" }),
          " engagement."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: [{
        n: "01",
        t: "Confidential consultation",
        d: "Complimentary 20-minute call to understand your matter, risks and realistic outcomes."
      }, {
        n: "02",
        t: "Engagement letter",
        d: "Clear scope, timeline and fee structure — signed before any work begins."
      }, {
        n: "03",
        t: "Preparation",
        d: "Research, drafting, evidence review and strategy — the work that wins cases."
      }, {
        n: "04",
        t: "Representation",
        d: "Appearance before the relevant forum with disciplined, measured advocacy."
      }].map((s, i) => /* @__PURE__ */ jsxs("div", { className: `reveal reveal-delay-${i % 4 + 1} glass hover-lift relative rounded-3xl p-6`, children: [
        /* @__PURE__ */ jsx("span", { className: "font-display text-5xl text-gold/80", children: s.n }),
        /* @__PURE__ */ jsx("h3", { className: "mt-3 font-display text-xl", children: s.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.d })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 md:py-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-14 max-w-2xl", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Client trust" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
          "What clients ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "say." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-3", children: [{
        q: "Mr. Kaushik's preparation for our SLP was extraordinary. He saw arguments we hadn't considered.",
        a: "Real-estate group · Gurgaon"
      }, {
        q: "Quietly persuasive in court, deeply human in chambers. Exactly the counsel a family case deserves.",
        a: "Private client · Faridabad"
      }, {
        q: "Strategic, ethical, and refreshingly transparent on fees and timelines.",
        a: "MD, manufacturing firm · Delhi"
      }].map((t, i) => /* @__PURE__ */ jsxs("div", { className: `reveal reveal-delay-${i + 1} glass hover-lift relative rounded-3xl p-6`, children: [
        /* @__PURE__ */ jsx(Quote, { className: "absolute right-5 top-5 h-6 w-6 text-gold/30" }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 text-gold", children: Array.from({
          length: 5
        }).map((_, j) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current" }, j)) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-4 leading-relaxed text-foreground", children: [
          '"',
          t.q,
          '"'
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: t.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "reveal glass-strong relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-25 blur-3xl", style: {
        background: "var(--gradient-gold)"
      } }),
      /* @__PURE__ */ jsx(SectionEyebrow, { children: "Speak to the chambers" }),
      /* @__PURE__ */ jsxs("h2", { className: "mt-5 font-display text-4xl leading-tight md:text-5xl", children: [
        "Your matter deserves",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: "considered counsel." })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-4 max-w-xl text-muted-foreground", children: "The first 20-minute consultation is complimentary — confidential, candid and without obligation." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxs("a", { href: SITE.phoneHref, className: "gold-glow inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--primary-foreground)]", children: [
          "Call ",
          SITE.phone
        ] }),
        /* @__PURE__ */ jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40", children: "Send a message" })
      ] })
    ] }) }) })
  ] });
}
export {
  HomePage as component
};
