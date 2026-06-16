import { useState } from "react";
import { Scale, ShieldCheck, AlertTriangle } from "lucide-react";

export function Disclaimer() {
  const [accepted, setAccepted] = useState(false);

  if (accepted) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[color:var(--scrim-strong)] p-4 backdrop-blur-sm">
      <div className="glass-strong relative w-full max-w-2xl overflow-hidden rounded-3xl border border-[oklch(0.82_0.14_85/0.25)] p-8 md:p-10 shadow-2xl">
        {/* Decorative top accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-[var(--gradient-gold)]" />

        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[oklch(0.82_0.14_85/0.35)] bg-[var(--surface)] text-[var(--gold)]">
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-[var(--foreground)]">
              Important Disclaimer
            </h2>
            <p className="text-xs text-[var(--muted-foreground)]">
              Please read carefully before proceeding
            </p>
          </div>
        </div>

        {/* Body */}
        <div className="prose-legal space-y-4 text-sm leading-relaxed text-[oklch(0.85_0.01_270)]">
          <div className="flex items-start gap-3 rounded-2xl border border-[oklch(0.82_0.14_85/0.15)] bg-[oklch(0.82_0.14_85/0.05)] p-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[var(--gold)]" />
            <p>
              The information provided on this website is for general informational purposes only and
              does not constitute legal advice. Viewing this website or communicating with us through
              this website does not create an attorney-client relationship.
            </p>
          </div>

          <p>
            While every effort is made to keep the content accurate and up-to-date, we make no
            representations or warranties of any kind, express or implied, about the completeness,
            accuracy, reliability, or suitability of the information contained on this website.
          </p>

          <p>
            Legal outcomes depend on the specific facts of each case. Any reliance you place on the
            information provided here is strictly at your own risk. For advice tailored to your
            situation, please contact us directly to schedule a consultation.
          </p>

          <div className="flex items-start gap-2 rounded-xl border border-[oklch(0.82_0.14_85/0.12)] p-3 text-xs text-[var(--muted-foreground)]">
            <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
            <p>
              By clicking "I Agree," you acknowledge that you have read, understood, and accepted
              this disclaimer, and you agree not to hold Advocate Prabhat Kaushik or his chambers
              liable for any action taken in reliance on the website content.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
          <a
            href="https://www.google.com"
            className="inline-flex items-center justify-center rounded-full border border-[oklch(0.82_0.14_85/0.25)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--foreground)] transition-all hover:bg-[var(--surface-2)] hover:border-[oklch(0.82_0.14_85/0.4)]"
          >
            I Disagree — Leave Site
          </a>
          <button
            onClick={() => setAccepted(true)}
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-semibold text-[color:var(--primary-foreground)] gold-glow"
          >
            <ShieldCheck className="mr-2 h-4 w-4" />
            I Agree — Enter Site
          </button>
        </div>
      </div>
    </div>
  );
}
