import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Linkedin } from "lucide-react";
import aryaAsset from "@/assets/arya2.jpg.asset.json";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Aurora, Magnetic, Parallax, TiltCard, WordReveal } from "@/components/site/Motion";

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
        <Aurora />
        <div className="relative mx-auto grid max-w-6xl gap-12 px-5 pt-16 pb-16 md:grid-cols-[0.85fr_1fr] md:items-center md:pt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="overflow-hidden rounded-[2rem] border border-border bg-surface">
              <motion.img
                src={aryaAsset.url}
                alt="Arya Surve outdoors in the hills"
                width={1280}
                height={960}
                className="aspect-[4/5] w-full object-cover object-[60%_30%]"
                initial={{ scale: 1.16 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </TiltCard>
            <p className="mt-4 text-center text-sm italic text-muted-foreground">
              I don't care if you think I look ugly ;)
            </p>
          </motion.div>
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl font-semibold leading-[1.05] md:text-6xl"
            >
              {["I'm still 14.", "Still nowhere", "near finished."].map((line, i) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: "115%", rotate: 3 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{
                      duration: 0.95,
                      delay: 0.12 + i * 0.13,
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
              <Magnetic>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
                >
                  Say hello <ArrowRight className="size-4" />
                </Link>
              </Magnetic>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 md:py-28">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
            The short version
          </p>
          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            <WordReveal text="How it went" />
          </h2>
        </Reveal>
        <Stagger className="mt-12 space-y-px">
          {timeline.map((t) => (
            <StaggerItem
              key={t.title}
              className="group relative grid gap-2 border-t border-border py-8 md:grid-cols-[140px_1fr] md:gap-8"
            >
              <motion.span
                className="absolute left-0 top-0 h-px bg-accent"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
              <p className="font-display text-sm text-accent">{t.year}</p>
              <motion.div
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <h3 className="text-xl font-semibold">{t.title}</h3>
                <p className="mt-2 text-muted-foreground">{t.body}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-t border-border bg-surface">
        <div className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
          <Parallax distance={30}>
            <p className="font-display text-2xl leading-relaxed md:text-3xl">
              "Every rejection taught me something another tutorial couldn't."
            </p>
            <p className="mt-6 text-sm text-muted-foreground">Arya Surve</p>
          </Parallax>
        </div>
      </section>
    </>
  );
}
