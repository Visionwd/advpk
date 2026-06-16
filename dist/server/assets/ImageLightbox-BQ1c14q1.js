import { jsxs, jsx } from "react/jsx-runtime";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ZoomIn, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
const chambersImg = "/assets/about-chambers-2j39yfGU.jpg";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function ImageLightbox({ src, alt, children, className, caption }) {
  return /* @__PURE__ */ jsxs(DialogPrimitive.Root, { children: [
    /* @__PURE__ */ jsx(DialogPrimitive.Trigger, { asChild: true, children: /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        "aria-label": `View larger image: ${alt}`,
        className: cn(
          "group relative block w-full cursor-zoom-in rounded-3xl text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        ),
        children: [
          children,
          /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": true,
              className: "pointer-events-none absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-background/70 text-foreground opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
              children: /* @__PURE__ */ jsx(ZoomIn, { className: "h-4 w-4" })
            }
          )
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs(DialogPrimitive.Portal, { children: [
      /* @__PURE__ */ jsx(DialogPrimitive.Overlay, { className: "fixed inset-0 z-[100] bg-background/85 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
      /* @__PURE__ */ jsxs(
        DialogPrimitive.Content,
        {
          className: "fixed inset-0 z-[101] flex flex-col items-center justify-center p-4 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-8",
          children: [
            /* @__PURE__ */ jsx(DialogPrimitive.Title, { className: "sr-only", children: alt }),
            /* @__PURE__ */ jsx(DialogPrimitive.Description, { className: "sr-only", children: "Full-screen preview. Press Escape to close." }),
            /* @__PURE__ */ jsx(
              "img",
              {
                src,
                alt,
                className: "max-h-[88vh] max-w-[95vw] rounded-2xl object-contain shadow-2xl ring-1 ring-[color:var(--gold)]/20"
              }
            ),
            caption ? /* @__PURE__ */ jsx("div", { className: "mt-4 max-w-xl text-center text-sm text-muted-foreground", children: caption }) : null,
            /* @__PURE__ */ jsx(
              DialogPrimitive.Close,
              {
                "aria-label": "Close preview",
                className: "absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-background/80 text-foreground shadow-lg ring-1 ring-border backdrop-blur transition-colors hover:bg-background focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--gold)]",
                children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  ImageLightbox as I,
  chambersImg as c
};
