import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { MapPin, Scale, GraduationCap, Gavel, BookOpen, ShieldCheck, Award } from "lucide-react";
import { P as PageHero, S as SectionEyebrow } from "./Section-B-WDU4Ks.js";
import { S as SITE } from "./router-CnwFu_zY.js";
import { I as ImageLightbox, c as chambersImg } from "./ImageLightbox-BQ1c14q1.js";
import "react";
import "@radix-ui/react-dialog";
import "clsx";
import "tailwind-merge";
const VALUES = [{
  icon: Scale,
  title: "Integrity",
  desc: "Counsel that respects the client, the court and the rule of law — the threefold duty placed on every advocate by §35 of the Advocates Act, 1961."
}, {
  icon: BookOpen,
  title: "Preparation",
  desc: "Every brief built on disciplined research — statute, precedent and the constitutional framework — before a single line of argument is drafted."
}, {
  icon: ShieldCheck,
  title: "Discretion",
  desc: "Sensitive matters handled with strict confidentiality under §132 of the Bharatiya Sakshya Adhiniyam, 2023 (the successor to §126 Evidence Act, 1872)."
}, {
  icon: Award,
  title: "Excellence",
  desc: "Apex-court standards applied to every forum — from the magistrate's bench in Faridabad to a Constitution Bench in New Delhi."
}];
const TIMELINE = [{
  y: "Present",
  t: "Advocate-on-Record, Supreme Court of India",
  d: "Heads the chambers in Faridabad with active litigation under Articles 32, 136 and 142 across India."
}, {
  y: "Cleared AOR",
  t: "Supreme Court Advocate-on-Record Examination",
  d: "One of the most rigorous Bar examinations in the country, covering practice & procedure, drafting, professional ethics and leading cases."
}, {
  y: "Enrolment",
  t: "Bar Council of India",
  d: "Enrolled under §17 of the Advocates Act, 1961; began full-rights practice across Delhi-NCR district and high courts."
}, {
  y: "Education",
  t: "LL.B. & legal research",
  d: "Foundational training with focus on constitutional law, the Code of Criminal Procedure and the law of evidence — now reframed under the 2023 codes."
}];
function AboutPage() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "About the advocate", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Apex-court rigour. ",
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Personal attention." })
    ] }), subtitle: "Prabhat Kaushik is an Advocate-on-Record at the Supreme Court of India, leading a boutique chambers in Faridabad with a national practice." }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1fr_1.4fr] md:items-start", children: [
      /* @__PURE__ */ jsx("div", { className: "reveal", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-28 space-y-4", children: [
        /* @__PURE__ */ jsx(ImageLightbox, { src: chambersImg, alt: "Interior of the chambers of Advocate Prabhat Kaushik in Faridabad", caption: /* @__PURE__ */ jsxs(Fragment, { children: [
          "Chambers of Advocate Prabhat Kaushik · ",
          SITE.location
        ] }), className: "glass overflow-hidden p-2", children: /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl", children: [
          /* @__PURE__ */ jsx("img", { src: chambersImg, alt: "Interior of the chambers of Advocate Prabhat Kaushik in Faridabad", width: 1024, height: 1024, loading: "lazy", decoding: "async", className: "aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" }),
          /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0", style: {
            background: "linear-gradient(180deg, transparent 45%, color-mix(in oklab, var(--background) 92%, transparent) 100%)"
          } }),
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-x-0 bottom-0 p-5", children: [
            /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-full bg-gold font-display text-xl font-bold text-[color:var(--primary-foreground)] shadow-lg", children: "PK" }),
            /* @__PURE__ */ jsx("p", { className: "mt-3 font-display text-2xl text-foreground", children: "Prabhat Kaushik" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-[11px] uppercase tracking-[0.22em] text-gold", children: "Advocate-on-Record · SCI" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "glass rounded-2xl p-5", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 text-gold" }),
            SITE.location
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 text-gold" }),
            "Supreme Court of India"
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4 text-gold" }),
            "LL.B. · Bar Council of India"
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "reveal reveal-delay-2 prose-legal", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Profile" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-3xl md:text-4xl", children: "A measured advocate, an unwavering counsellor." }),
        /* @__PURE__ */ jsx("p", { children: "Prabhat Kaushik practices as an Advocate-on-Record at the Supreme Court of India — a designation conferred only on advocates who clear the Court's stringent examination under the Supreme Court Rules, 2013 and qualify to file pleadings on its rolls. Under Order IV of the Rules, no party may file a matter in the Supreme Court except through an AOR; the chambers therefore acts both as draftsman and as advocate for litigants across India." }),
        /* @__PURE__ */ jsx("p", { children: "The chambers in Faridabad combine apex-court discipline with the accessibility of a focused, boutique firm. We act for individuals, family-owned businesses, NRIs and corporate clients — each matter handled by the advocate of record, not delegated to an unseen team." }),
        /* @__PURE__ */ jsx("h3", { children: "Approach" }),
        /* @__PURE__ */ jsx("p", { children: "Every matter — whether a bail application under §§437–439 CrPC before a magistrate, an appeal under §374 CrPC before the High Court, or a special leave petition under Article 136 of the Constitution before the Supreme Court — receives the same disciplined preparation: meticulous legal research, candid risk assessment and uncompromising courtroom advocacy." }),
        /* @__PURE__ */ jsx("p", { children: "Where the facts call for it, we invoke the writ jurisdiction of the High Court (Article 226) or the Supreme Court (Article 32) to vindicate fundamental rights. Where settlement is realistic, we counsel mediation under §89 of the Code of Civil Procedure or recourse to the Lok Adalat under the Legal Services Authorities Act, 1987." }),
        /* @__PURE__ */ jsx("h3", { children: "Reach" }),
        /* @__PURE__ */ jsx("p", { children: "While headquartered in Faridabad, the practice represents clients across Delhi-NCR, the Punjab & Haryana High Court at Chandigarh, the Delhi High Court and the Supreme Court of India. Matters span criminal defence, family and matrimonial disputes, property and real-estate litigation, commercial recovery, arbitration under the 1996 Act, RERA proceedings and constitutional writs." }),
        /* @__PURE__ */ jsx("h3", { children: "Philosophy" }),
        /* @__PURE__ */ jsx("p", { children: "Litigation is rarely the first or best answer. India's constitutional courts have repeatedly reminded litigants that the right to a remedy includes a duty to weigh proportionality, cost and consequence. Wherever possible, the chambers counsels settlement, mediation or strategic compromise. Where litigation is necessary, the case is built and prosecuted with the seriousness the Constitution demands." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-12 text-center", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Journey" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
          "Milestones in ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "practice." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute top-2 bottom-2 left-[19px] w-px bg-gradient-to-b from-transparent via-[color:var(--gold)]/40 to-transparent md:left-1/2 md:-translate-x-1/2" }),
        /* @__PURE__ */ jsx("ol", { className: "space-y-10", children: TIMELINE.map((m, i) => {
          const isRight = i % 2 === 1;
          return /* @__PURE__ */ jsxs("li", { className: `reveal reveal-delay-${i % 3 + 1} relative md:grid md:grid-cols-2 md:items-center md:gap-16`, children: [
            /* @__PURE__ */ jsx("span", { className: "absolute left-[11px] top-6 z-10 grid h-4 w-4 -translate-x-px place-items-center rounded-full bg-gold ring-4 ring-[color:var(--background)] md:left-1/2 md:-translate-x-1/2", children: /* @__PURE__ */ jsx(Gavel, { className: "h-2 w-2 text-[color:var(--primary-foreground)]" }) }),
            /* @__PURE__ */ jsx("div", { className: `pl-12 md:pl-0 ${isRight ? "md:col-start-2 md:pl-10 md:text-left" : "md:col-start-1 md:pr-10 md:text-right"}`, children: /* @__PURE__ */ jsxs("div", { className: "glass hover-lift inline-block w-full rounded-2xl p-5 text-left md:w-auto md:max-w-md", children: [
              /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-gold", children: m.y }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 font-display text-xl", children: m.t }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: m.d })
            ] }) })
          ] }, i);
        }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-12 text-center", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Principles" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-4xl md:text-5xl", children: [
          "What the chambers ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "stand for." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: VALUES.map((v, i) => /* @__PURE__ */ jsxs("div", { className: `reveal reveal-delay-${i + 1} glass hover-lift rounded-3xl p-6`, children: [
        /* @__PURE__ */ jsx("div", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--gold)]/10 text-gold", children: /* @__PURE__ */ jsx(v.icon, { className: "h-6 w-6" }) }),
        /* @__PURE__ */ jsx("h3", { className: "mt-5 font-display text-xl", children: v.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: v.desc })
      ] }, v.title)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-10 text-center", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Common questions" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-3xl md:text-4xl", children: [
          "About the ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "advocate." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [{
        q: "What does Advocate-on-Record mean?",
        a: "An AOR is an advocate who has cleared the Supreme Court of India's examination under the Supreme Court Rules, 2013 and is the only person entitled to file pleadings on its rolls. Order IV makes the AOR the sole authority to act, appear and plead on a matter at the apex court — every Supreme Court filing, from an SLP under Article 136 to a writ under Article 32, must therefore be signed by an AOR."
      }, {
        q: "Where are the chambers based?",
        a: "The chambers are located in Faridabad with regular appearances in the Punjab & Haryana High Court at Chandigarh, the Delhi High Court, Delhi-NCR district courts and the Supreme Court of India. We accept matters from across India and from NRIs through video consultation and authorised representatives."
      }, {
        q: "Do you take on pro-bono matters?",
        a: "Yes. In keeping with Rule 46 of the Bar Council of India Rules, the chambers takes on selected public-interest and constitutional matters on a pro-bono basis — particularly those touching fundamental rights under Articles 14, 19, 21 and 25 of the Constitution. Please write in with full details for consideration."
      }, {
        q: "Can I get a written legal opinion?",
        a: "Yes. Written opinions are issued on most subjects — civil, criminal, matrimonial, property, RERA, arbitration and constitutional — after a paid consultation and document review. The opinion sets out the applicable law, likely forum, realistic outcomes and an estimate of timelines and fees."
      }, {
        q: "How is fee structured?",
        a: "Fees are quoted in writing in the engagement letter, with clear milestones (drafting, filing, listing, arguments). Consultation fees are separately stated. There are no contingent fees in Indian law (Bar Council Rules prohibit them), and we do not bill for time not spent."
      }, {
        q: "Is everything I share confidential?",
        a: "Communications with the chambers are protected by professional privilege under §132 of the Bharatiya Sakshya Adhiniyam, 2023 (corresponding to §126 of the Indian Evidence Act, 1872). Nothing you share is disclosed without your express written consent."
      }].map((f, i) => /* @__PURE__ */ jsxs("details", { className: "reveal glass group rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex cursor-pointer items-center justify-between gap-4 font-display text-lg", children: [
          f.q,
          /* @__PURE__ */ jsx("span", { className: "text-gold transition-transform group-open:rotate-45", children: "+" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: f.a })
      ] }, i)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-4xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "reveal glass-strong rounded-[2rem] p-10 text-center md:p-14", children: [
      /* @__PURE__ */ jsx(GraduationCap, { className: "mx-auto h-10 w-10 text-gold" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-3xl md:text-4xl", children: "Discuss your matter in confidence." }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-muted-foreground", children: "Reach out to schedule a consultation at the Faridabad chambers or via secure video call." }),
      /* @__PURE__ */ jsx(Link, { to: "/contact", className: "gold-glow mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-[color:var(--primary-foreground)]", children: "Book a consultation" })
    ] }) }) })
  ] });
}
export {
  AboutPage as component
};
