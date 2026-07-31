import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Linkedin } from "lucide-react";
import aryaAsset from "@/assets/arya2.jpg.asset.json";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Arya Surve — 14, self-taught, still building" },
      {
        name: "description",
        content:
          "At 13 I bet on myself: no roadmap, no mentors. 1,000+ outreaches, 100+ conversations, zero deals closed — and every lesson that came with it.",
      },
      { property: "og:title", content: "About Arya Surve — 14, self-taught, still building" },
      {
        property: "og:description",
        content:
          "The story behind the outreach, the rejections, and finding a place in influencer marketing and AI.",
      },
    ],
  }),
  component: About,
});

const timeline = [
  {
    year: "At 13",
    title: "Decided to bet on myself",
    body: "No roadmap. No mentors. Just curiosity and the willingness to learn.",
  },
  {
    year: "Then",
    title: "Taught myself everything I could reach",
    body: "AI, outreach, sales and business — by trying things instead of waiting to be ready.",
  },
  {
    year: "1,000+",
    title: "Reached out to over a thousand people",
    body: "100+ meaningful conversations. More rejections than I can count. Not a single deal closed.",
  },
  {
    year: "Eventually",
    title: "Found my place in influencer marketing",
    body: "Every rejection taught me something no tutorial could.",
  },
  {
    year: "Today",
    title: "Fameo Media, plus AI",
    body: "Running creator campaigns with Fameo Media while building my skills in AI and business.",
  },
];

function About() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-16 md:grid-cols-[0.85fr_1fr] md:items-center md:pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[2rem] border border-border bg-surface"
          >
            <img
              src={aryaAsset.url}
              alt="Arya Surve outdoors in the hills"
              width={1280}
              height={960}
              className="aspect-[4/5] w-full object-cover object-[60%_30%]"
            />
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-semibold leading-[1.05] md:text-6xl"
            >
              I'm still 14. Still nowhere near finished.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground"
            >
              Always open to connecting with founders, creators, and people who are building
              something real.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="https://www.linkedin.com/in/arya-surve-a98561408"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-foreground"
              >
                <Linkedin className="size-4" /> Connect on LinkedIn
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Say hello <ArrowRight className="size-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            The short version
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">How it went</h2>
        </Reveal>
        <Stagger className="mt-12 space-y-px">
          {timeline.map((t) => (
            <StaggerItem
              key={t.title}
              className="grid gap-2 border-t border-border py-8 md:grid-cols-[140px_1fr] md:gap-8"
            >
              <p className="font-display text-sm text-accent">{t.year}</p>
              <div>
                <h3 className="text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 text-muted-foreground">{t.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </>
  );
}
