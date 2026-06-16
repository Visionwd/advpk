import { Linkedin, Mail } from "lucide-react";
import { SectionEyebrow } from "./Section";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";
import t4 from "@/assets/team-4.jpg";

type Member = {
  name: string;
  role: string;
  bio: string;
  img: string;
};

const TEAM: Member[] = [
  {
    name: "Prabhat Kaushik",
    role: "Advocate-on-Record · SCI",
    bio: "Founding advocate. Apex-court litigation, constitutional and commercial matters.",
    img: t1,
  },
  {
    name: "Ananya Verma",
    role: "Senior Associate",
    bio: "Family, matrimonial and domestic violence matters. Punjab & Haryana HC.",
    img: t2,
  },
  {
    name: "Rohan Sharma",
    role: "Associate Advocate",
    bio: "Criminal defence, bail & FIR quashing. Trial court and High Court briefs.",
    img: t3,
  },
  {
    name: "Priya Nair",
    role: "Legal Researcher",
    bio: "Case law analysis, drafting, and RERA/consumer-forum preparation.",
    img: t4,
  },
];

export function TeamSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 20% 0%, oklch(0.82 0.14 85 / 0.12), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4">
        <div className="reveal mx-auto mb-14 max-w-2xl text-center">
          <SectionEyebrow>The chambers</SectionEyebrow>
          <h2 className="mt-4 font-display text-4xl md:text-5xl">
            Meet the <span className="text-gold">counsel.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A small, senior team — every brief is reviewed by the advocate who argues it.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m, i) => (
            <div
              key={m.name}
              className={`reveal reveal-delay-${(i % 4) + 1} team-card group text-left`}
            >
              <div className="team-card-inner">
                <div className="team-media">
                  <img
                    src={m.img}
                    alt={`${m.name} — ${m.role}`}
                    loading="lazy"
                    width={640}
                    height={768}
                    className="team-img"
                  />
                  <div className="team-overlay" aria-hidden />
                  <div className="team-socials">
                    <span className="team-social" aria-hidden>
                      <Linkedin className="h-4 w-4" />
                    </span>
                    <span className="team-social" aria-hidden>
                      <Mail className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="team-body">
                  <h3 className="font-display text-xl">{m.name}</h3>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-gold">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {m.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
