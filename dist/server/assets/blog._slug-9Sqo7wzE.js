import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
const SplitNotFoundComponent = () => /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col items-center justify-center px-4", children: [
  /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl", children: "Article not found" }),
  /* @__PURE__ */ jsx(Link, { to: "/blog", className: "mt-4 text-gold story-link", children: "Back to all insights" })
] });
export {
  SplitNotFoundComponent as notFoundComponent
};
