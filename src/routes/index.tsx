import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Megaphone, Cpu } from "lucide-react";
import aryaImg from "@/assets/arya2.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import {
  Aurora,
  CountUp,
  Magnetic,
  Marquee,
  Parallax,
  ScrollScale,
  TiltCard,
  WordReveal,
} from "@/components/site/Motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arya Surve — Influencer Marketing & AI | 14" },
      {
        name: "description",
        content:
          "I'm Arya Surve, 14. I run creator campaigns in influencer marketing with Fameo Media, and I build AI automations. Still learning, still building.",
      },
      { property: "og:title", content: "Arya Surve — Influencer Marketing & AI | 14" },
      {
        property: "og:description",
        content:
          "I'm Arya Surve, 14. I run creator campaigns in influencer marketing with Fameo Media, and I build AI automations. Still learning, still building.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), {
    stiffness: 80,
    damping: 20,
  });
  const gridScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);

  return (
    <>
      <section ref={heroRef} className="relative overflow-hidden">
        <motion.div
          style={{ scale: gridScale }}
          className="pointer-events-none absolute inset-0 grid-lines opacity-60"
        />
        <Aurora />
        <motion.div
          style={{ y: heroY }}
          className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-20 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pt-24 md:pb-28"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
            >
              <motion.span
                className="size-1.5 rounded-full bg-accent"
                animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
              14 years old · India
            </motion.p>

            <h1 className="mt-6 text-5xl leading-[1.02] font-semibold sm:text-6xl md:text-7xl">
              {["I bet on", "myself at 13."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: "115%", rotate: 3 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 0.95, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-6 max-w-lg text-lg text-muted-foreground"
            >
              No roadmap. No mentors. Just curiosity. Today I work on two separate things —
              influencer marketing with Fameo Media, and AI.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Magnetic>
                <a
                  href="https://cal.com/arya-surve-eojakp/call"
                  target="_blank"
                  rel="noreferrer"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background"
                >
                  <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
                  <span className="relative">Book a call</span>
                  <ArrowRight className="relative size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
                >
                  Get in touch
                </Link>
              </Magnetic>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <TiltCard>
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]"
              >
                <motion.img
                  src={aryaAsset.url}
                  alt="Arya Surve in sunglasses and a patterned shirt with mountains behind him"
                  width={1280}
                  height={960}
                  className="aspect-[4/5] w-full object-cover object-[60%_30%]"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
                />
              </motion.div>
            </TiltCard>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="mt-5 text-center text-sm italic text-muted-foreground"
            >
              I don't care if you think I look ugly ;)
            </motion.p>

            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 bottom-14 hidden rounded-2xl border border-border bg-background px-4 py-3 shadow-lg md:block"
            >
              <p className="font-display text-sm">Arya Surve</p>
              <p className="text-xs text-muted-foreground">Influencer marketing · AI</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      <section className="border-y border-border bg-surface">
        <Stagger className="mx-auto grid max-w-6xl grid-cols-2 gap-px px-5 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <StaggerItem key={s.label} className="group px-2 py-4 text-center md:text-left">
              <p className="font-display text-4xl transition-colors group-hover:text-accent">
                <CountUp value={s.value} />
              </p>
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
            <WordReveal text="Different work. Different playbooks." />
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
            <ScrollScale key={card.to} className={i === 1 ? "md:mt-10" : undefined}>
              <TiltCard>
                <Link
                  to={card.to}
                  className="group relative block h-full overflow-hidden rounded-3xl border border-border bg-background p-8 transition-all hover:border-foreground/30 hover:shadow-[0_24px_60px_-32px_rgba(0,0,0,0.35)]"
                >
                  <motion.span
                    className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background:
                        "radial-gradient(600px circle at 50% 0%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 60%)",
                    }}
                  />
                  <span className="absolute right-6 top-6 text-xs text-muted-foreground">
                    {card.tag}
                  </span>
                  <motion.span
                    className="inline-block"
                    whileHover={{ rotate: -8, scale: 1.12 }}
                    transition={{ type: "spring", stiffness: 300, damping: 14 }}
                  >
                    <card.icon className="size-8 text-accent" />
                  </motion.span>
                  <h3 className="mt-6 text-2xl font-semibold">{card.title}</h3>
                  <p className="mt-3 text-muted-foreground">{card.body}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
                    Explore
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1.5" />
                  </span>
                </Link>
              </TiltCard>
            </ScrollScale>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-border py-20">
        <div className="mx-auto max-w-4xl px-5 text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">
            <WordReveal text="1,000 messages. 100 conversations. Zero deals. Every lesson." />
          </h2>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              That first year taught me more than any tutorial. It's the reason the work I do now
              actually lands.
            </p>
          </Reveal>
          <Reveal delay={0.25} className="mt-8">
            <Magnetic>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
              >
                Read the story
                <ArrowRight className="size-4" />
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="overflow-hidden border-t border-border py-8">
        <Parallax distance={40}>
          <Marquee
            className="font-display text-2xl text-muted-foreground/70"
            items={[
              "Still learning",
              "Still building",
              "Creator campaigns",
              "AI automation",
              "Outreach",
              "Nowhere near finished",
            ]}
          />
          <Marquee
            className="mt-4 font-display text-2xl text-muted-foreground/40"
            reverse
            speed={32}
            items={["Fameo Media", "AI", "Sales", "Curiosity", "14 and building", "No shortcuts"]}
          />
        </Parallax>
      </section>
    </>
  );
}
