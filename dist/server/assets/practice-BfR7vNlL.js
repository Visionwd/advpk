import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Gavel, ShieldCheck, Users, Building2, Briefcase, ScrollText, Banknote, Computer, Globe2, ArrowRight, Sparkles, Award } from "lucide-react";
import { P as PageHero, S as SectionEyebrow } from "./Section-B-WDU4Ks.js";
import { i as imgSupreme, S as SITE } from "./router-CnwFu_zY.js";
import "react";
const imgCriminal = "/assets/practice-criminal-BXFMjTXF.jpg";
const imgFamily = "/assets/practice-family-DSoG3KA2.jpg";
const imgProperty = "/assets/practice-property-DUmSmKt7.jpg";
const imgCommercial = "/assets/practice-commercial-BALcHmLK.jpg";
const imgConstitutional = "/assets/practice-constitutional-BK-Ib9bi.jpg";
const imgConsumer = "/assets/practice-consumer-Ip9MoKLM.jpg";
const imgCyber = "/assets/practice-cyber-BpxHLIjq.jpg";
const imgNri = "/assets/practice-nri-M18ti6TI.jpg";
const AREAS = [{
  icon: Gavel,
  img: imgSupreme,
  title: "Supreme Court Litigation",
  desc: "Special Leave Petitions, writ petitions under Article 32, transfer petitions, curative petitions and appeals at the apex court of India.",
  points: ["SLPs (Civil & Criminal)", "Article 32 writs", "Transfer petitions", "Curative & Review petitions"]
}, {
  icon: ShieldCheck,
  img: imgCriminal,
  title: "Criminal Defence",
  desc: "Strategic defence in IPC, NDPS, PMLA and white-collar matters — from the magistrate's court to the Supreme Court.",
  points: ["Anticipatory & regular bail", "FIR quashing (§482 CrPC)", "§498A defence", "Cheque bounce (§138 NI Act)"]
}, {
  icon: Users,
  img: imgFamily,
  title: "Family & Matrimonial",
  desc: "Sensitive handling of divorce, custody and maintenance matters with focus on amicable resolution where possible.",
  points: ["Mutual & contested divorce", "Child custody & guardianship", "Maintenance (§125 CrPC)", "Domestic Violence Act"]
}, {
  icon: Building2,
  img: imgProperty,
  title: "Property & Real Estate",
  desc: "Title disputes, partition suits, possession matters and RERA Haryana proceedings against builders.",
  points: ["Title & possession suits", "Partition of ancestral property", "RERA Haryana complaints", "Builder-buyer disputes"]
}, {
  icon: Briefcase,
  img: imgCommercial,
  title: "Commercial & Arbitration",
  desc: "Contract enforcement, recovery suits, arbitration proceedings and insolvency matters under the IBC.",
  points: ["Domestic & international arbitration", "Recovery & summary suits", "IBC matters", "Contract disputes"]
}, {
  icon: ScrollText,
  img: imgConstitutional,
  title: "Constitutional & PIL",
  desc: "Writ petitions, public interest litigation and challenges to administrative action.",
  points: ["Article 226 writs", "Public Interest Litigation", "Service matters", "Administrative challenges"]
}, {
  icon: Banknote,
  img: imgConsumer,
  title: "Consumer Protection",
  desc: "Complaints under the Consumer Protection Act, 2019 — from district commissions to the NCDRC.",
  points: ["District / State / NCDRC", "Service deficiency", "Unfair trade practices", "Product liability"]
}, {
  icon: Computer,
  img: imgCyber,
  title: "Cyber & IT Law",
  desc: "Cyber crime complaints, data breach matters and IT Act prosecutions/defence.",
  points: ["Cyber-crime complaints", "Online fraud recovery", "IT Act §66 / §67", "Reputation defence"]
}, {
  icon: Globe2,
  img: imgNri,
  title: "NRI Legal Services",
  desc: "End-to-end representation for NRIs in property, family and inheritance matters across India.",
  points: ["NRI divorce", "Property management & disputes", "PoA & inheritance", "Cross-border representation"]
}];
function PracticePage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Practice areas", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "A full-spectrum practice,",
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: "disciplined to the brief." })
    ] }), subtitle: "From bail applications to Supreme Court appeals, the chambers handles every matter with apex-court preparation and personal client engagement." }),
    /* @__PURE__ */ jsxs("section", { className: "relative pb-24", children: [
      /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 -z-10 opacity-50", style: {
        background: "radial-gradient(ellipse at 80% 10%, oklch(0.82 0.14 85 / 0.1), transparent 60%)"
      } }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: AREAS.map((a, i) => /* @__PURE__ */ jsxs("article", { className: `reveal reveal-delay-${i % 4 + 1} practice-card group`, "data-cursor": "hover", children: [
        /* @__PURE__ */ jsxs("div", { className: "practice-media", children: [
          /* @__PURE__ */ jsx("img", { src: a.img, alt: a.title, loading: "lazy", width: 1024, height: 768, className: "practice-img" }),
          /* @__PURE__ */ jsx("div", { className: "practice-media-overlay", "aria-hidden": true }),
          /* @__PURE__ */ jsx("div", { className: "practice-icon-badge", "aria-hidden": true, children: /* @__PURE__ */ jsx(a.icon, { className: "h-5 w-5" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "practice-body", children: [
          /* @__PURE__ */ jsx("h2", { className: "font-display text-2xl", children: a.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: a.desc }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-1.5 text-sm", children: a.points.map((p) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" }),
            p
          ] }, p)) }),
          /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "practice-arrow mt-5 font-semibold", "data-cursor": "hover", children: [
            "Discuss matter ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "practice-shine", "aria-hidden": true })
      ] }, a.title)) }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-14 max-w-2xl", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Engagement process" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
          "Clarity from the ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "first call." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-4", children: [{
        n: "01",
        t: "Initial consultation",
        d: "Confidential 20-minute discussion of the facts and likely options."
      }, {
        n: "02",
        t: "Strategy & estimate",
        d: "Written outline of approach, timelines and a transparent fee estimate."
      }, {
        n: "03",
        t: "Drafting & filing",
        d: "Pleadings prepared with apex-court rigour; filings tracked end-to-end."
      }, {
        n: "04",
        t: "Courtroom advocacy",
        d: "Personal appearance and arguments before the appropriate forum."
      }].map((s, i) => /* @__PURE__ */ jsxs("div", { className: `reveal reveal-delay-${i + 1} glass hover-lift rounded-3xl p-6`, children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-4xl text-gold", children: s.n }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-lg", children: s.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.d })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-5xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "reveal glass-strong rounded-[2rem] p-10 text-center md:p-14", children: [
      /* @__PURE__ */ jsx(Sparkles, { className: "mx-auto h-9 w-9 text-gold" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-3xl md:text-4xl", children: "Not sure which area applies to your matter?" }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Speak with the chambers — we'll help you understand the forum, the timeline and the realistic outcomes before you commit." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsxs("a", { href: SITE.phoneHref, className: "gold-glow inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--primary-foreground)]", children: [
          /* @__PURE__ */ jsx(Award, { className: "h-4 w-4" }),
          " Call ",
          SITE.phone
        ] }),
        /* @__PURE__ */ jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-[color:var(--gold)]/40", children: [
          "Send enquiry ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] })
    ] }) }) })
  ] });
}
export {
  PracticePage as component
};
