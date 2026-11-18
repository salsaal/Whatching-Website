import React from "react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Seo from "@/components/Seo/Seo";
import SiteShell from "@/components/marketing/SiteShell";
import { WHATSAPP_URL } from "@/lib/constants";

const places = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/demo", label: "Product tour" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
];

// Shown for any address that doesn't exist. Next.js still returns a 404
// status for it; this only replaces the bare default page.
export default function NotFound() {
  return (
    <>
      <Seo
        title="Page not found | Whatching"
        description="This page doesn't exist. Find Whatching's features, pricing and product tour from here."
        path="/404"
        noindex
      />
      <SiteShell>
        <section className="pt-36 pb-24 max-sm:pt-28 max-sm:pb-16">
          {/* Inline width until App.css stops overriding Tailwind's max-w-*. */}
          <div className="container" style={{ maxWidth: 728 }}>
            <p
              className="text-sm font-semibold mb-3"
              style={{ color: "var(--primary-dark)" }}
            >
              Error 404
            </p>
            <h1 className="heading-2 mb-4">We couldn&apos;t find that page.</h1>
            <p
              className="body-large mb-8"
              style={{ color: "var(--text-secondary)" }}
            >
              The link may be old or mistyped. Start from the home page, or
              message us on WhatsApp and we&apos;ll point you to what you need.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/" className="btn-primary">
                Go to the home page
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <FaWhatsapp className="w-4 h-4" style={{ color: "#25d366" }} />
                Chat on WhatsApp
              </a>
            </div>
            <nav
              aria-label="Popular pages"
              className="mt-12 pt-8 border-t"
              style={{ borderColor: "var(--border-light)" }}
            >
              <p
                className="text-sm mb-3"
                style={{ color: "var(--text-secondary)" }}
              >
                Or go straight to
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {places.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="font-semibold underline underline-offset-4"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {p.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </section>
      </SiteShell>
    </>
  );
}
