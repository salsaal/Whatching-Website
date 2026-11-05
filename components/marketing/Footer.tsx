import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, MapPin, Youtube } from "lucide-react";
import Logo from "../../public/assets/logo.png";
import { footerColumns } from "@/lib/data/nav";

const columnDefs: { heading: string; key: keyof typeof footerColumns }[] = [
  { heading: "Product", key: "product" },
  { heading: "Industries", key: "industries" },
  { heading: "Resources", key: "resources" },
  { heading: "Company", key: "company" }
];
const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/whatching_official" },
  { icon: Linkedin, href: "https://www.linkedin.com/company/whatching/" },
  { icon: Youtube, href: "https://youtube.com/@whatching_official" }
];
const Footer = () => {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border-light)",
        background: "var(--background)"
      }}
    >
      <div
        className="container-wide"
        style={{ paddingTop: "5rem", paddingBottom: "3.5rem" }}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">
          <div className="sm:col-span-2">
            <Link href="/" className="inline-flex">
              <Image src={Logo} className="h-7 w-max" alt="Whatching" />
            </Link>
            <p
              className="text-sm mt-4 max-w-[320px] leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              Whatching helps businesses turn WhatsApp and Instagram
              conversations into revenue — campaigns, AI automation, a shared
              inbox and analytics, built on official messaging APIs.
            </p>
            <div className="flex items-center gap-2.5 mt-5">
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  aria-label="Social link"
                  className="footer-social w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "var(--surface-hover)",
                    color: "var(--text-secondary)"
                  }}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {columnDefs.map((col) => (
            <div key={col.key}>
              <h3
                className="text-xs font-bold uppercase tracking-wide mb-4"
                style={{ color: "var(--text-muted)" }}
              >
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {footerColumns[col.key].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="footer-link text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t text-sm"
          style={{
            borderColor: "var(--border-light)",
            color: "var(--text-muted)"
          }}
        >
          <p>© {new Date().getFullYear()} Whatching.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="mailto:hello@whatching.com"
              className="inline-flex items-center gap-2 hover:text-[var(--primary)]"
            >
              <Mail className="w-4 h-4" /> hello@whatching.com
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4" /> West Bengal, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
