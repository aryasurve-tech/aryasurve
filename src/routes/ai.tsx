import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Workflow, Bot, Zap, Database } from "lucide-react";
import aiImg from "@/assets/ai.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import {
  Aurora,
  Magnetic,
  Marquee,
  Parallax,
  TiltCard,
  WordReveal,
} from "@/components/site/Motion";

export const Route = createFileRoute("/ai")({
  head: () => ({
    meta: [
      { title: "AI Automation — Arya Surve" },
      {
        name: "description",
        content:
          "AI automation built by Arya Surve: workflows that connect your tools, remove repetitive work and give hours back every week.",
      },
      { property: "og:title", content: "AI Automation — Arya Surve" },
      {
        property: "og:description",
        content:
          "Workflows, assistants and internal tools powered by AI — built to remove repetitive work.",
      },
    ],
  }),
  component: AI,
});

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow automation",
    body: "Repetitive processes turned into automated flows that run without anyone remembering to.",
  },
  {
    icon: Bot,
    title: "AI assistants",
    body: "Assistants that answer from your own documents, drafts and data instead of guessing.",
  },
  {
    icon: Database,
    title: "Data plumbing",
    body: "Tools connected together so information moves on its own — no copy-paste between tabs.",
  },
  {
    icon: Zap,
    title: "Fast prototypes",
    body: "Ideas shipped as working prototypes in days, so you can judge them for real.",
  },
];

function AI() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <Aurora />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-16 md:grid-cols-[1fr_0.85fr] md:items-center md:pt-24">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-accent" />
              a separate track from my marketing work
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-5xl font-semibold leading-[1.04] md:text-7xl"
            >
              {["AI that does", "the boring part."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: "115%", rotate: 3 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{
                      duration: 0.95,
                      delay: 0.15 + i * 0.14,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 max-w-lg text-lg text-muted-foreground"
            >
              I build AI automation — systems that take the repeated, manual work off your plate and
              run it quietly in the background. This is completely separate from the influencer
              marketing side of what I do.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-9"
            >
              <Magnetic>
                <a
                  href="https://cal.com/arya-surve-eojakp/call"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background"
                >
                  <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                  <span className="relative">Talk through an idea</span>
                  <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] border border-border bg-surface"
          >
            <motion.img
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
              src={aiImg}
              alt="Abstract network of nodes representing an automation pipeline"
              width={1280}
              height={960}
              className="aspect-square w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            What I build
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
            <WordReveal text="Small systems, big hours saved." />
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {capabilities.map((c) => (
            <StaggerItem key={c.title}>
              <TiltCard className="group relative h-full overflow-hidden rounded-3xl border border-border p-7 transition-shadow hover:shadow-[0_24px_60px_-36px_rgba(0,0,0,0.35)]">
                <span
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(500px circle at 50% 0%, color-mix(in oklab, var(--accent) 14%, transparent), transparent 60%)",
                  }}
                />
                <motion.span
                  className="relative inline-block"
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300, damping: 14 }}
                >
                  <c.icon className="size-7 text-accent" />
                </motion.span>
                <h3 className="relative mt-5 text-xl font-semibold">{c.title}</h3>
                <p className="relative mt-2 text-muted-foreground">{c.body}</p>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <Reveal>
            <h2 className="text-4xl font-semibold md:text-5xl">
              <WordReveal text="How I work on it" />
            </h2>
          </Reveal>
          <Stagger className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "01",
                t: "Find the drag",
                d: "We look at where time actually leaks — usually somewhere unglamorous.",
              },
              {
                n: "02",
                t: "Build the smallest fix",
                d: "One workflow, shipped fast, so the value shows up before the budget does.",
              },
              {
                n: "03",
                t: "Expand what works",
                d: "Keep what earns its place, drop what doesn't, then repeat.",
              },
            ].map((s) => (
              <StaggerItem key={s.n} className="group border-t border-foreground/15 pt-6">
                <motion.p
                  className="font-display text-4xl text-accent"
                  whileInView={{ opacity: [0, 1], x: [-16, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  {s.n}
                </motion.p>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <h2 className="text-4xl font-semibold md:text-5xl">
            <WordReveal text="Got something repetitive?" />
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell me the task you hate doing every week. That's usually the right place to start.
          </p>
          <Magnetic className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background"
            >
              Contact me
              <ArrowRight className="size-4" />
            </Link>
          </Magnetic>
        </Reveal>
      </section>

      <section className="overflow-hidden border-t border-border py-8">
        <Parallax distance={30}>
          <Marquee
            className="font-display text-2xl text-muted-foreground/60"
            items={["Automation", "Workflows", "AI assistants", "Less busywork", "Ship fast"]}
          />
        </Parallax>
      </section>
    </>
  );
}
