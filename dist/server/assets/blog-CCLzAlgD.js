import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect, useMemo } from "react";
import { Search, Clock, ArrowRight } from "lucide-react";
import { P as PageHero } from "./Section-B-WDU4Ks.js";
import { P as POSTS, C as CATEGORIES } from "./router-CnwFu_zY.js";
function BlogPage() {
  const [cat, setCat] = useState("All");
  const [q, setQ] = useState("");
  const [pending, setPending] = useState(false);
  useEffect(() => {
    setPending(true);
    const t = setTimeout(() => setPending(false), 180);
    return () => clearTimeout(t);
  }, [cat, q]);
  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    return POSTS.filter((p) => {
      if (cat !== "All" && p.category !== cat) return false;
      if (!ql) return true;
      return p.title.toLowerCase().includes(ql) || p.excerpt.toLowerCase().includes(ql) || p.category.toLowerCase().includes(ql);
    });
  }, [cat, q]);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(PageHero, { eyebrow: "Insights", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Legal clarity, ",
      /* @__PURE__ */ jsx("span", { className: "text-gold", children: "plainly written." })
    ] }), subtitle: "Practical, jargon-free guides to Indian law — written by the chambers for clients, students and curious citizens." }),
    /* @__PURE__ */ jsx("section", { className: "pb-8", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4", children: /* @__PURE__ */ jsxs("div", { className: "reveal glass rounded-3xl p-4", children: [
      /* @__PURE__ */ jsx("div", { className: "flex flex-col gap-4 md:flex-row md:items-center", children: /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
        /* @__PURE__ */ jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search articles…", className: "w-full rounded-full bg-white/5 py-2.5 pl-11 pr-4 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[color:var(--ring)]" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 flex flex-wrap gap-2", children: ["All", ...CATEGORIES].map((c) => /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setCat(c), className: `rounded-full border px-3.5 py-1.5 text-xs transition-all ${cat === c ? "border-[color:var(--gold)]/60 bg-[color:var(--gold)]/15 text-gold" : "border-white/10 bg-white/5 text-muted-foreground hover:border-white/20 hover:text-foreground"}`, children: c }, c)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-32", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl px-4", children: pending ? /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", "aria-busy": "true", "aria-live": "polite", children: Array.from({
      length: 6
    }).map((_, i) => /* @__PURE__ */ jsxs("div", { className: "glass flex animate-pulse flex-col rounded-3xl p-6", children: [
      /* @__PURE__ */ jsx("div", { className: "h-4 w-20 rounded-full bg-white/10" }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 h-5 w-11/12 rounded bg-white/10" }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 h-5 w-9/12 rounded bg-white/10" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 space-y-2", children: [
        /* @__PURE__ */ jsx("div", { className: "h-3 w-full rounded bg-white/5" }),
        /* @__PURE__ */ jsx("div", { className: "h-3 w-10/12 rounded bg-white/5" }),
        /* @__PURE__ */ jsx("div", { className: "h-3 w-8/12 rounded bg-white/5" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-5 h-3 w-24 rounded bg-white/5" })
    ] }, i)) }) : filtered.length === 0 ? /* @__PURE__ */ jsx("div", { className: "glass rounded-3xl py-16 text-center text-muted-foreground", children: "No articles found. Try a different search or category." }) : /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3", children: filtered.map((p, i) => /* @__PURE__ */ jsxs(Link, { to: "/blog/$slug", params: {
      slug: p.slug
    }, className: `reveal reveal-delay-${i % 4 + 1} group glass hover-lift flex flex-col rounded-3xl p-6`, children: [
      /* @__PURE__ */ jsx("span", { className: "inline-flex w-fit rounded-full bg-[color:var(--gold)]/10 px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-gold", children: p.category }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-xl leading-snug transition-colors group-hover:text-gold", children: p.title }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground", children: p.excerpt }),
      /* @__PURE__ */ jsxs("div", { className: "mt-5 flex items-center justify-between border-t border-white/5 pt-4 text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
          " ",
          p.readMinutes,
          " min read"
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1 text-gold opacity-0 transition-opacity group-hover:opacity-100", children: [
          "Read ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3" })
        ] })
      ] })
    ] }, p.slug)) }) }) })
  ] });
}
export {
  BlogPage as component
};
