import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Mail, Phone, MessageCircle, CalendarClock, Linkedin } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/site/Reveal";
import { Aurora, TiltCard } from "@/components/site/Motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Arya Surve — email, phone, WhatsApp" },
      {
        name: "description",
        content:
          "Reach Arya Surve at aryasurve.home@gmail.com, +91 70436 35454, or WhatsApp +91 70169 15644. Or book a call directly.",
      },
      { property: "og:title", content: "Contact Arya Surve" },
      {
        property: "og:description",
        content: "Email, phone, WhatsApp, LinkedIn, or book a call directly.",
      },
    ],
  }),
  component: Contact,
});

const channels = [
  {
    icon: CalendarClock,
    label: "Book a call",
    value: "cal.com/arya-surve-eojakp",
    href: "https://cal.com/arya-surve-eojakp/call",
    primary: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "aryasurve.home@gmail.com",
    href: "mailto:aryasurve.home@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 70169 15644",
    href: "https://wa.me/917016915644",
  },
  { icon: Phone, label: "Phone", value: "+91 70436 35454", href: "tel:+917043635454" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "arya-surve",
    href: "https://www.linkedin.com/in/arya-surve-a98561408",
  },
];

function Contact() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-50" />
      <Aurora />
      <div className="relative mx-auto max-w-5xl px-5 py-20 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl text-5xl font-semibold leading-[1.05] md:text-6xl"
        >
          <span className="block overflow-hidden pb-1">
            <motion.span
              className="block"
              initial={{ y: "115%", rotate: 3 }}
              animate={{ y: "0%", rotate: 0 }}
              transition={{ duration: 0.95, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              Let's talk.
            </motion.span>
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 max-w-lg text-lg text-muted-foreground"
        >
          Campaign, automation idea, or just a conversation — pick whichever way is easiest for you.
        </motion.p>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {channels.map((c) => (
            <StaggerItem key={c.label} className={c.primary ? "sm:col-span-2" : undefined}>
              <TiltCard>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`group flex items-center justify-between gap-4 rounded-3xl border p-7 transition-shadow hover:shadow-[0_24px_60px_-36px_rgba(0,0,0,0.35)] ${
                  c.primary
                    ? "border-transparent bg-foreground text-background"
                    : "border-border bg-background"
                }`}
              >
                <div>
                  <p
                    className={`text-xs font-medium uppercase tracking-[0.2em] ${
                      c.primary ? "text-background/70" : "text-muted-foreground"
                    }`}
                  >
                    {c.label}
                  </p>
                  <p className="mt-2 font-display text-lg break-all">{c.value}</p>
                </div>
                <c.icon
                  className={`size-6 shrink-0 transition-transform group-hover:-rotate-12 group-hover:scale-125 ${
                    c.primary ? "" : "text-accent"
                  }`}
                />
              </a>
              </TiltCard>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12 rounded-3xl border border-border bg-surface p-7">
          <p className="text-muted-foreground">
            Working with brands on creator campaigns through Fameo Media, and building AI automation
            separately. Mention which one you're reaching out about and I'll reply faster.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
