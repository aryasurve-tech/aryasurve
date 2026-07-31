import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Users, Handshake, LineChart, ClipboardList } from "lucide-react";
import influencerImg from "@/assets/influencer.jpg";
import campaignImg from "@/assets/campaign.jpg";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";

export const Route = createFileRoute("/influencer-marketing")({
  head: () => ({
    meta: [
      { title: "Influencer Marketing — Arya Surve & Fameo Media" },
      {
        name: "description",
        content:
          "Creator campaigns run end to end: creator sourcing, negotiation, briefs, delivery and reporting. Human-led work with Fameo Media — no AI in this side of what I do.",
      },
      { property: "og:title", content: "Influencer Marketing — Arya Surve & Fameo Media" },
      {
        property: "og:description",
        content:
          "Creator sourcing, negotiation, briefs, delivery and reporting for brands, with Fameo Media.",
      },
    ],
  }),
  component: InfluencerMarketing,
});

const steps = [
  {
    icon: ClipboardList,
    title: "Brief & goals",
    body: "We start with what the campaign actually needs to do — awareness, launch push, or sales.",
  },
  {
    icon: Users,
    title: "Creator sourcing",
    body: "Creators picked for audience fit, not follower count. Every profile is checked by hand.",
  },
  {
    icon: Handshake,
    title: "Outreach & negotiation",
    body: "Deals, deliverables and timelines locked in. This is the part I've had the most practice at.",
  },
  {
    icon: LineChart,
    title: "Delivery & reporting",
    body: "Content approvals, go-live tracking, and a clean report on what performed.",
  },
];

function InfluencerMarketing() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
        <div className="relative mx-auto max-w-6xl px-5 pt-16 pb-16 md:pt-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="size-1.5 rounded-full bg-accent" />
            with Fameo Media
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-3xl text-5xl font-semibold leading-[1.04] md:text-7xl"
          >
            Creator campaigns, run by people.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground"
          >
            I help brands run influencer campaigns with Fameo Media — a network of 5,000+ mid to
            high tier creators and bloggers, matched to the right audience, negotiated and taken
            live. This side of my work is entirely human-led: no AI anywhere in it.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 overflow-hidden rounded-[2rem] border border-border bg-surface"
          >
            <img
              src={influencerImg}
              alt="Phone on a tripod with a ring light, set up for creator content"
              width={1280}
              height={960}
              className="aspect-[16/9] w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <Reveal>
          <h2 className="max-w-2xl text-4xl font-semibold md:text-5xl">How a campaign runs</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 sm:grid-cols-2">
          {steps.map((s, i) => (
            <StaggerItem
              key={s.title}
              className="group rounded-3xl border border-border p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_-36px_rgba(0,0,0,0.35)]"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-sm text-muted-foreground">
                  0{i + 1}
                </span>
                <s.icon className="size-5 text-accent" />
              </div>
              <h3 className="mt-5 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-muted-foreground">{s.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-2">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              What brands get
            </p>
            <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
              Campaigns that hold up after the post goes live.
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                "Creators matched to your audience, not to a spreadsheet",
                "Clear pricing and deliverables agreed up front",
                "Briefs creators actually follow",
                "Honest reporting — including what didn't work",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              Start a campaign
              <ArrowRight className="size-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <motion.img
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              src={campaignImg}
              alt="Abstract paper growth arrow illustration"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full rounded-[2rem] border border-border bg-background object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-20 text-center md:py-28">
        <Reveal>
          <p className="font-display text-2xl leading-relaxed md:text-3xl">
            "I reached out to over 1,000 people and heard no more times than I can count. Influencer
            marketing is where that finally clicked."
          </p>
          <p className="mt-6 text-sm text-muted-foreground">Arya Surve</p>
        </Reveal>
      </section>
    </>
  );
}
