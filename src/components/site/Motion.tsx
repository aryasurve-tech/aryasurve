import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useInView,
  animate,
  type MotionValue,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ---------------- Scroll progress bar ---------------- */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX: width }}
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-accent"
      aria-hidden
    />
  );
}

/* ---------------- Parallax wrapper ---------------- */
export function Parallax({
  children,
  distance = 80,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 90, damping: 22 });
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

/* ---------------- Word-by-word headline reveal ---------------- */
export function WordReveal({
  text,
  className,
  delay = 0,
  once = true,
}: {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const words = text.split(" ");
  return (
    <motion.span
      className={cn("inline-block", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-80px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.055, delayChildren: delay } } }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} className="inline-block overflow-hidden pb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "110%", rotate: 4, opacity: 0 },
              show: {
                y: "0%",
                rotate: 0,
                opacity: 1,
                transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </motion.span>
  );
}

/* ---------------- Magnetic button ---------------- */
export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 18 });
  const sy = useSpring(y, { stiffness: 250, damping: 18 });

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className={cn("inline-block", className)}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- 3D tilt card ---------------- */
export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 200, damping: 20 });
  const sry = useSpring(ry, { stiffness: 200, damping: 20 });

  return (
    <motion.div
      style={{ rotateX: srx, rotateY: sry, transformPerspective: 900 }}
      className={cn("will-change-transform", className)}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        ry.set(px * 12);
        rx.set(-py * 12);
      }}
      onPointerLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
      whileHover={{ scale: 1.015 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------- Count up on view ---------------- */
export function CountUp({
  value,
  className,
  duration = 1.6,
}: {
  value: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const numeric = Number((value.match(/[\d.]+/g) || ["0"]).join("").replace(/\.(?=.*\.)/g, ""));
  const prefix = value.slice(0, value.search(/[\d]/) === -1 ? 0 : value.search(/[\d]/));
  const suffix = value.slice((prefix + String(value.match(/[\d.,]+/)?.[0] ?? "")).length);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || !Number.isFinite(numeric)) return;
    const controls = animate(0, numeric, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, numeric, duration]);

  if (!Number.isFinite(numeric) || numeric === 0) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const rounded = numeric % 1 === 0 ? Math.round(display) : Number(display.toFixed(1));

  return (
    <span ref={ref} className={className}>
      {prefix}
      {rounded.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}

/* ---------------- Scroll-scaling section wrapper ---------------- */
export function ScrollScale({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ scale, opacity, y }}>{children}</motion.div>
    </div>
  );
}

/* ---------------- Marquee (motion driven, bidirectional) ---------------- */
export function Marquee({
  items,
  reverse = false,
  speed = 26,
  className,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      >
        {[0, 1].map((k) => (
          <span key={k} className="flex gap-10">
            {items.map((t) => (
              <span key={t} className="flex items-center gap-10">
                {t}
                <span className="size-1.5 rounded-full bg-accent" />
              </span>
            ))}
          </span>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

/* ---------------- Blob / aurora background ---------------- */
export function Aurora({ className }: { className?: string }) {
  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)} aria-hidden>
      <motion.div
        className="absolute -left-24 top-0 size-[28rem] rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--accent) 18%, transparent)" }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, 10, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 top-32 size-[24rem] rounded-full blur-3xl"
        style={{ background: "color-mix(in oklab, var(--foreground) 8%, transparent)" }}
        animate={{ x: [0, -50, 20, 0], y: [0, -30, 20, 0], scale: [1, 0.9, 1.1, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export type { MotionValue };
