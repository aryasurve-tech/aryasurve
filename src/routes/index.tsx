import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Megaphone, Cpu } from "lucide-react";
import aryaAsset from "@/assets/arya2.jpg.asset.json";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arya Surve — Influencer Marketing & AI, at 14" },
      {
        name: "description",
        content:
          "I'm Arya Surve, 14. I run creator campaigns in influencer marketing with Fameo Media, and I build AI automations. Still learning, still building.",
      },
      { property: "og:title", content: "Arya Surve — Influencer Marketing & AI, at 14" },
      {
        property: "og:description",
        content:
          "Creator campaigns with Fameo Media and AI automation. 1,000+ cold outreaches, 100+ conversations, and a lot of lessons.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "1,000+", label: "People reached out to" },
  { value: "100+", label: "Real conversations" },
  { value: "13", label: "Age I started at" },
  { value: "2", label: "Fields I build in" },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-60" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-24 md:pb-28">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
            >
              <span className="size-1.5 rounded-full bg-accent" />
              14 years old · India
            </motion.p>

            <h1 className="mt-6 text-5xl leading-[1.02] font-semibold sm:text-6xl md:text-7xl">
              {["I bet on", "myself at 13."].map((line, i) => (
                <motion.span
                  key={line}
                  className="block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 max-w-lg text-lg text-muted-foreground"
            >
              No roadmap. No mentors. Just curiosity. Today I work on two separate things —
              influencer marketing with Fameo Media, and AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href="https://cal.com/arya-surve-eojakp/call"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Book a call
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]"
            >
              <img
                src={aryaAsset.url}
                alt="Arya Surve standing in front of green hills"
                width={1280}
                height={960}
                className="aspect-[4/5] w-full object-cover object-[60%_30%]"
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-5 text-center text-sm italic text-muted-foreground"
            >
              I don't care if you think I look ugly ;)
            </motion.p>
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -left-4 rounded-2xl border border-border bg-background px-4 py-3 shadow-lg"
            >
              <p className="font-display text-sm">Arya Surve</p>
              <p className="text-xs text-muted-foreground">Influencer marketing · AI</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border bg-surface">
        <Stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="px-2 py-4 text-center md:text-left">
              <p className="font-display text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            Two things, kept separate
          </p>
          <h2 className="mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">
            Different work. Different playbooks.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            I don't mix them. Influencer marketing is people, creators and campaigns. AI is systems
            and automation. Pick the one you're here for.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {[
            {
              to: "/influencer-marketing",
              icon: Megaphone,
              title: "Influencer Marketing",
              body: "Creator campaigns with Fameo Media — sourcing, negotiation, briefs and delivery. No AI involved here.",
              tag: "with Fameo Media",
            },
            {
              to: "/ai",
              icon: Cpu,
              title: "AI",
              body: "AI automation: workflows that remove repetitive work, connect tools and give back hours every week.",
              tag: "automation",
            },
          ].map((card, i) => (
            <Reveal key={card.to} delay={i * 0.1}>
              <Link
                to={card.to}
                className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:border-foreground/30 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.35)]"
              >
                <span className="absolute right-6 top-6 text-xs text-muted-foreground">
                  {card.tag}
                </span>
                <card.icon className="size-8 text-accent" />
                <h3 className="mt-6 text-2xl font-semibold">{card.title}</h3>
                <p className="mt-3 text-muted-foreground">{card.body}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                  Explore
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border-t border-border py-8">
        <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-display text-2xl text-muted-foreground/70">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i} className="flex gap-10">
              {[
                "Still learning",
                "Still building",
                "Creator campaigns",
                "AI automation",
                "Outreach",
                "Nowhere near finished",
              ].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  {t}
                  <span className="size-1.5 rounded-full bg-accent" />
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
