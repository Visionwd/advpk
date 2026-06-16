import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { z } from "zod";
import { Phone, MessageCircle, Mail, MapPin, Clock, CheckCircle2, Send, ShieldCheck, Award } from "lucide-react";
import { P as PageHero, S as SectionEyebrow } from "./Section-B-WDU4Ks.js";
import { S as SITE, t as trackAttr, w as whatsappLink, a as trackEvent } from "./router-CnwFu_zY.js";
import "@tanstack/react-router";
const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20).regex(/^[+\d][\d\s\-()]{6,}$/, "Use digits, spaces, +, -, ()"),
  matter: z.string().trim().min(2, "Please choose a matter type").max(60),
  message: z.string().trim().min(10, "Please describe your matter (min 10 chars)").max(1e3),
  // Honeypot — must remain empty
  company: z.string().max(0).optional()
});
const MATTERS = ["Supreme Court Litigation", "Criminal Defence", "Family & Matrimonial", "Property & RERA", "Commercial / Arbitration", "Consumer Protection", "Cyber Law", "NRI Legal Services", "Other"];
function ContactPage() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs = {};
      parsed.error.issues.forEach((iss) => {
        const k = String(iss.path[0] ?? "form");
        if (!errs[k]) errs[k] = iss.message;
      });
      setErrors(errs);
      trackEvent("contact_form_invalid", {
        errors: Object.keys(errs).join(",")
      });
      return;
    }
    setErrors({});
    setSubmitting(true);
    trackEvent("contact_form_submit", {
      matter: parsed.data.matter
    });
    await new Promise((r) => setTimeout(r, 700));
    const {
      name,
      email,
      phone,
      matter,
      message
    } = parsed.data;
    const text = `Hello, I would like to consult Advocate Prabhat Kaushik.

Name: ${name}
Email: ${email}
Phone: ${phone}
Matter: ${matter}

Details: ${message}`;
    trackEvent("whatsapp_handoff", {
      source: "contact_form",
      matter
    });
    window.open(whatsappLink(text), "_blank", "noopener");
    setSubmitting(false);
    setSent(true);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Contact", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Speak to the chambers ",
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: "in confidence." })
    ] }), subtitle: `Faridabad chambers · Supreme Court of India · NCR-wide representation. The first 20-minute consultation is complimentary.` }),
    /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal space-y-3", children: [
        /* @__PURE__ */ jsx("a", { href: SITE.phoneHref, ...trackAttr("call_chambers", {
          source: "contact_card"
        }), className: "glass hover-lift block rounded-3xl p-6", "data-cursor": "hover", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-gold text-[color:var(--primary-foreground)]", children: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-gold", children: "Call chambers" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-xl", children: SITE.phone }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Mon–Sat · 10:00 – 19:00 IST" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("a", { href: whatsappLink(), target: "_blank", rel: "noopener noreferrer", ...trackAttr("whatsapp_handoff", {
          source: "contact_card"
        }), className: "glass hover-lift block rounded-3xl p-6", "data-cursor": "hover", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366] text-white", children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-gold", children: "WhatsApp" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-xl", children: SITE.phone }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Fastest channel · usually replies within an hour" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("a", { href: `mailto:${SITE.email}`, className: "glass hover-lift block rounded-3xl p-6", "data-cursor": "hover", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--gold)]/10 text-gold", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-gold", children: "Email" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 break-all font-display text-xl", children: SITE.email }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "For documents and detailed briefs" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "glass rounded-3xl p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("span", { className: "grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--gold)]/10 text-gold", children: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-[0.22em] text-gold", children: "Chambers" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 font-display text-xl", children: SITE.address }),
            /* @__PURE__ */ jsxs("p", { className: "mt-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
              " By appointment only"
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "reveal reveal-delay-2", children: /* @__PURE__ */ jsxs("div", { className: "glass-strong rounded-[2rem] p-7 md:p-9", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Send an enquiry" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-3 font-display text-3xl", children: "Tell us about your matter" }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "We'll review your message and respond personally — typically within one working day." }),
        sent ? /* @__PURE__ */ jsx("div", { className: "mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-6 w-6 shrink-0 text-emerald-400" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-display text-lg", children: "Message ready" }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "WhatsApp has opened in a new tab with your message pre-filled. Tap send to deliver it to the chambers." }),
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setSent(false), className: "mt-4 text-sm story-link text-gold", children: "Send another enquiry" })
          ] })
        ] }) }) : /* @__PURE__ */ jsxs("form", { onSubmit, className: "mt-6 space-y-4", noValidate: true, children: [
          /* @__PURE__ */ jsx("input", { type: "text", name: "company", tabIndex: -1, autoComplete: "off", className: "hidden", "aria-hidden": true }),
          /* @__PURE__ */ jsx(Field, { label: "Full name", name: "name", error: errors.name, required: true, children: /* @__PURE__ */ jsx("input", { name: "name", autoComplete: "name", className: inputCls, placeholder: "Your full name", maxLength: 100 }) }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsx(Field, { label: "Email", name: "email", error: errors.email, required: true, children: /* @__PURE__ */ jsx("input", { name: "email", type: "email", autoComplete: "email", className: inputCls, placeholder: "you@example.com", maxLength: 255 }) }),
            /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone", error: errors.phone, required: true, children: /* @__PURE__ */ jsx("input", { name: "phone", type: "tel", autoComplete: "tel", className: inputCls, placeholder: "+91 …", maxLength: 20 }) })
          ] }),
          /* @__PURE__ */ jsx(Field, { label: "Matter type", name: "matter", error: errors.matter, required: true, children: /* @__PURE__ */ jsxs("select", { name: "matter", defaultValue: "", className: inputCls, children: [
            /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: "Select…" }),
            MATTERS.map((m) => /* @__PURE__ */ jsx("option", { value: m, className: "bg-[color:var(--surface)]", children: m }, m))
          ] }) }),
          /* @__PURE__ */ jsx(Field, { label: "Brief description", name: "message", error: errors.message, required: true, children: /* @__PURE__ */ jsx("textarea", { name: "message", rows: 5, maxLength: 1e3, className: `${inputCls} resize-none`, placeholder: "Share the key facts — court / forum if known, dates, and what outcome you're seeking." }) }),
          /* @__PURE__ */ jsx("p", { className: "text-[11px] leading-relaxed text-muted-foreground", children: "By submitting, you consent to the chambers contacting you about your enquiry. Your details will be handed off to WhatsApp pre-filled — no data is stored on this site." }),
          /* @__PURE__ */ jsx("button", { type: "submit", disabled: submitting, className: "gold-glow inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3.5 text-sm font-semibold text-[color:var(--primary-foreground)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto sm:px-8", children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "h-4 w-4 animate-spin rounded-full border-2 border-[color:var(--primary-foreground)]/30 border-t-[color:var(--primary-foreground)]" }),
            "Preparing…"
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            "Send via WhatsApp ",
            /* @__PURE__ */ jsx(Send, { className: "h-4 w-4" })
          ] }) })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-6xl gap-3 px-4 sm:grid-cols-3", children: [{
      icon: ShieldCheck,
      t: "Strict confidentiality",
      d: "All consultations covered by attorney-client privilege."
    }, {
      icon: Award,
      t: "Apex-court credentials",
      d: "Advocate-on-Record at the Supreme Court of India."
    }, {
      icon: Clock,
      t: "Response within a day",
      d: "Most enquiries answered the same working day."
    }].map((f) => /* @__PURE__ */ jsx("div", { className: "reveal glass rounded-2xl p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "grid h-10 w-10 place-items-center rounded-xl bg-[color:var(--gold)]/10 text-gold", children: /* @__PURE__ */ jsx(f.icon, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-base", children: f.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: f.d })
      ] })
    ] }) }, f.t)) }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-24", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsx("div", { className: "reveal glass overflow-hidden rounded-3xl", children: /* @__PURE__ */ jsx("iframe", { title: "Chambers location · District Court Faridabad", src: "https://www.google.com/maps?q=District+Court+Sector+12+Faridabad&output=embed", loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", className: "h-[360px] w-full border-0" }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "reveal mb-10 text-center", children: [
        /* @__PURE__ */ jsx(SectionEyebrow, { children: "Frequently asked" }),
        /* @__PURE__ */ jsxs("h2", { className: "mt-4 font-display text-3xl md:text-4xl", children: [
          "Before you ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "reach out." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [{
        q: "Is the first consultation free?",
        a: "Yes — the first 20-minute call is complimentary so we can understand your matter and outline next steps."
      }, {
        q: "Do you handle matters outside Faridabad?",
        a: "Yes. The chambers regularly appears across Delhi-NCR, the Punjab & Haryana High Court and the Supreme Court of India."
      }, {
        q: "How do you charge?",
        a: "Engagement letters are signed before any work begins, with a clear scope and transparent fee structure — fixed, hourly or milestone based depending on the matter."
      }, {
        q: "Is my information confidential?",
        a: "Absolutely. All communications and documents are protected by attorney-client privilege and handled with strict discretion."
      }].map((f, i) => /* @__PURE__ */ jsxs("details", { className: "reveal glass group rounded-2xl p-5 [&_summary::-webkit-details-marker]:hidden", children: [
        /* @__PURE__ */ jsxs("summary", { className: "flex cursor-pointer items-center justify-between gap-4 font-display text-lg", children: [
          f.q,
          /* @__PURE__ */ jsx("span", { className: "text-gold transition-transform group-open:rotate-45", children: "+" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: f.a })
      ] }, i)) })
    ] }) })
  ] });
}
const inputCls = "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[color:var(--gold)]/50 focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]";
function Field({
  label,
  name,
  error,
  required,
  children
}) {
  return /* @__PURE__ */ jsxs("label", { className: "block", children: [
    /* @__PURE__ */ jsxs("span", { className: "mb-1.5 block text-xs uppercase tracking-[0.18em] text-muted-foreground", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "text-gold", children: " *" })
    ] }),
    children,
    error && /* @__PURE__ */ jsx("span", { className: "mt-1 block text-xs text-destructive", children: error }),
    /* @__PURE__ */ jsx("input", { type: "hidden", name: `__${name}_marker` })
  ] });
}
export {
  ContactPage as component
};
