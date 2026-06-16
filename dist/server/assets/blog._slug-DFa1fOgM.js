import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { ArrowLeft, Calendar, Clock, ArrowRight, Share2, MessageCircle, Twitter, Linkedin, Check, Link as Link$1 } from "lucide-react";
import { R as Route, P as POSTS, S as SITE, w as whatsappLink } from "./router-CnwFu_zY.js";
import { S as SectionEyebrow } from "./Section-B-WDU4Ks.js";
const slugify = (s) => s.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").slice(0, 80);
function extractHeadings(md) {
  const lines = md.split("\n");
  const out = [];
  for (const ln of lines) {
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(ln);
    if (!m) continue;
    const level = m[1].length === 2 ? 2 : 3;
    const text = m[2].replace(/[*_`]/g, "");
    out.push({
      level,
      text,
      id: slugify(text)
    });
  }
  return out;
}
function PostPage() {
  const {
    post
  } = Route.useLoaderData();
  const idx = POSTS.findIndex((p) => p.slug === post.slug);
  const prev = idx > 0 ? POSTS[idx - 1] : null;
  const next = idx < POSTS.length - 1 ? POSTS[idx + 1] : null;
  const related = POSTS.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3);
  const headings = useMemo(() => extractHeadings(post.content), [post.content]);
  return /* @__PURE__ */ jsxs("article", { children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden pt-32 pb-12 md:pt-40", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-radial-gold absolute inset-0 -z-10" }),
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl px-4", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/blog", className: "story-link inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "h-3 w-3" }),
          " All insights"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "reveal mt-6", children: /* @__PURE__ */ jsx(SectionEyebrow, { children: post.category }) }),
        /* @__PURE__ */ jsx("h1", { className: "reveal reveal-delay-1 mt-4 font-display text-4xl leading-tight md:text-5xl", children: post.title }),
        /* @__PURE__ */ jsxs("div", { className: "reveal reveal-delay-2 mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5" }),
            " Chambers Insights"
          ] }),
          /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }),
            " ",
            post.readMinutes,
            " min read"
          ] })
        ] }),
        /* @__PURE__ */ jsx(ShareRow, { title: post.title, className: "mt-6" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[220px_1fr] xl:grid-cols-[240px_1fr_220px]", children: [
      headings.length > 1 ? /* @__PURE__ */ jsx("aside", { className: "hidden lg:block", children: /* @__PURE__ */ jsxs("div", { className: "sticky top-28", children: [
        /* @__PURE__ */ jsx("p", { className: "mb-3 text-[11px] uppercase tracking-[0.22em] text-gold", children: "On this page" }),
        /* @__PURE__ */ jsx("nav", { className: "space-y-1.5 border-l border-white/10 pl-4 text-sm", children: headings.map((h) => /* @__PURE__ */ jsx("a", { href: `#${h.id}`, className: `block text-muted-foreground transition-colors hover:text-gold ${h.level === 3 ? "pl-3 text-[13px]" : ""}`, children: h.text }, h.id)) })
      ] }) }) : /* @__PURE__ */ jsx("div", { className: "hidden lg:block" }),
      /* @__PURE__ */ jsxs("div", { className: "reveal prose-legal min-w-0", children: [
        /* @__PURE__ */ jsx(ReactMarkdown, { components: {
          h2: ({
            children
          }) => {
            const text = String(children);
            return /* @__PURE__ */ jsx("h2", { id: slugify(text), children });
          },
          h3: ({
            children
          }) => {
            const text = String(children);
            return /* @__PURE__ */ jsx("h3", { id: slugify(text), children });
          }
        }, children: post.content }),
        /* @__PURE__ */ jsxs("div", { className: "not-prose glass-strong mt-12 rounded-3xl p-7 text-center", children: [
          /* @__PURE__ */ jsx("p", { className: "font-display text-2xl", children: "Need advice on your specific matter?" }),
          /* @__PURE__ */ jsx("p", { className: "mx-auto mt-2 max-w-lg text-sm text-muted-foreground", children: "The chambers of Advocate Prabhat Kaushik offer a complimentary 20-minute consultation in Faridabad or via video call." }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
            /* @__PURE__ */ jsxs("a", { href: SITE.phoneHref, className: "gold-glow rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)]", children: [
              "Call ",
              SITE.phone
            ] }),
            /* @__PURE__ */ jsx("a", { href: whatsappLink(`Hello, I just read "${post.title}" and would like to discuss my matter.`), target: "_blank", rel: "noopener noreferrer", className: "rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium hover:border-[color:var(--gold)]/40", children: "WhatsApp the chambers" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(ShareRow, { title: post.title, className: "mt-10", label: "Share this article" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden xl:block" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-12", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-3xl gap-3 px-4 md:grid-cols-2", children: [
      prev ? /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
        slug: prev.slug
      }, className: "glass hover-lift rounded-2xl p-5", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-gold", children: "← Previous" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 line-clamp-2 font-display text-base", children: prev.title })
      ] }) : /* @__PURE__ */ jsx("div", {}),
      next ? /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
        slug: next.slug
      }, className: "glass hover-lift rounded-2xl p-5 md:text-right", children: [
        /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-gold", children: "Next →" }),
        /* @__PURE__ */ jsx("p", { className: "mt-1.5 line-clamp-2 font-display text-base", children: next.title })
      ] }) : /* @__PURE__ */ jsx("div", {})
    ] }) }),
    related.length > 0 && /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
      /* @__PURE__ */ jsxs("p", { className: "font-display text-2xl", children: [
        "More in ",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: post.category })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 grid gap-4 md:grid-cols-3", children: related.map((r) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
        slug: r.slug
      }, className: "group glass hover-lift rounded-3xl p-5", children: [
        /* @__PURE__ */ jsx("p", { className: "font-display text-lg leading-snug transition-colors group-hover:text-gold", children: r.title }),
        /* @__PURE__ */ jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-xs text-gold", children: [
          "Read ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
        ] })
      ] }, r.slug)) })
    ] }) })
  ] });
}
function ShareRow({
  title,
  className = "",
  label
}) {
  const [copied, setCopied] = useState(false);
  const url = typeof window !== "undefined" ? window.location.href : "";
  const enc = encodeURIComponent;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
    }
  };
  const btn = "inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-muted-foreground transition-colors hover:border-[color:var(--gold)]/40 hover:text-gold";
  return /* @__PURE__ */ jsxs("div", { className: `flex flex-wrap items-center gap-2 ${className}`, children: [
    label && /* @__PURE__ */ jsxs("span", { className: "mr-1 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground", children: [
      /* @__PURE__ */ jsx(Share2, { className: "h-3 w-3" }),
      " ",
      label
    ] }),
    /* @__PURE__ */ jsx("a", { className: btn, "aria-label": "Share on WhatsApp", target: "_blank", rel: "noopener noreferrer", href: `https://wa.me/?text=${enc(`${title} — ${url}`)}`, children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx("a", { className: btn, "aria-label": "Share on Twitter / X", target: "_blank", rel: "noopener noreferrer", href: `https://twitter.com/intent/tweet?text=${enc(title)}&url=${enc(url)}`, children: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx("a", { className: btn, "aria-label": "Share on LinkedIn", target: "_blank", rel: "noopener noreferrer", href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`, children: /* @__PURE__ */ jsx(Linkedin, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsx("button", { type: "button", onClick: copy, className: btn, "aria-label": "Copy link", children: copied ? /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-emerald-400" }) : /* @__PURE__ */ jsx(Link$1, { className: "h-4 w-4" }) })
  ] });
}
export {
  PostPage as component
};
