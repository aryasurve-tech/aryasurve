import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-tight">
            Arya Surve<span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            14. Building in influencer marketing and AI. Still learning, still building.
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Pages
          </p>
          <div className="flex flex-col gap-2">
            <Link to="/influencer-marketing" className="hover:text-accent">
              Influencer Marketing
            </Link>
            <Link to="/ai" className="hover:text-accent">
              AI
            </Link>
            <Link to="/about" className="hover:text-accent">
              About
            </Link>
            <Link to="/contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Reach me
          </p>
          <a
            href="mailto:aryasurve.home@gmail.com"
            className="flex items-center gap-2 hover:text-accent"
          >
            <Mail className="size-4" /> aryasurve.home@gmail.com
          </a>
          <a href="tel:+917043635454" className="flex items-center gap-2 hover:text-accent">
            <Phone className="size-4" /> +91 70436 35454
          </a>
          <a
            href="https://wa.me/917016915644"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-accent"
          >
            <MessageCircle className="size-4" /> WhatsApp +91 70169 15644
          </a>
          <a
            href="https://www.linkedin.com/in/arya-surve-a98561408"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:text-accent"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
        </div>
      </div>
      <div className="border-t border-border px-5 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Arya Surve
      </div>
    </footer>
  );
}
