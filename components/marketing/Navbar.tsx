import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDown, Menu, PlayCircle, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../public/assets/logo.png";
import {
  featureMenu,
  industryMenu,
  MenuLink,
  navLinks,
  PRODUCT_APP_URL
} from "@/lib/data/nav";
import { WHATSAPP_URL } from "@/lib/constants";

type Panel = "features" | "industries" | null;

const PanelLink = ({ link }: { link: MenuLink }) => (
  <Link
    href={link.href}
    className="block rounded-xl px-3 py-2.5 hover:bg-[var(--surface-hover)]"
  >
    <span
      className="block text-[14px] font-semibold"
      style={{ color: "var(--text-primary)" }}
    >
      {link.label}
    </span>
    <span
      className="block text-[13px] mt-0.5"
      style={{ color: "var(--text-secondary)" }}
    >
      {link.desc}
    </span>
  </Link>
);

const Navbar = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState<Panel>(null);
  const [panel, setPanel] = useState<Panel>(null);
  const closeTimer = useRef<number | undefined>(undefined);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setPanel(null);
  }, [router.asPath]);

  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPanel(null);
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node))
        setPanel(null);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [panel]);

  const openPanel = (p: Panel) => {
    window.clearTimeout(closeTimer.current);
    setPanel(p);
  };
  const closeSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanel(null), 140);
  };

  const trigger = (p: Exclude<Panel, null>, label: string) => (
    <button
      type="button"
      className="nav-link inline-flex items-center gap-1"
      aria-expanded={panel === p}
      aria-controls={`menu-${p}`}
      onClick={() => setPanel(panel === p ? null : p)}
    >
      {label}
      <ChevronDown
        className="w-3.5 h-3.5 transition-transform"
        style={{ transform: panel === p ? "rotate(180deg)" : undefined }}
        aria-hidden
      />
    </button>
  );

  const panelStyle = {
    background: "var(--surface)",
    border: "1px solid var(--border-light)",
    boxShadow: "0 24px 60px -24px rgba(10,18,14,0.28)"
  };

  return (
    <div className="sticky top-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4 pb-2">
      <header className="nav-header container-wide !px-0" ref={navRef}>
        <div className="flex items-center justify-between w-full pl-4 pr-2 py-2 sm:pl-5 sm:pr-2.5">
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Whatching home"
          >
            <Image
              src={Logo}
              className="h-6 sm:h-7 w-auto"
              alt="Whatching"
              sizes="134px"
              priority
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary"
          >
            <div
              className="relative"
              onMouseEnter={() => openPanel("features")}
              onMouseLeave={closeSoon}
            >
              {trigger("features", "Features")}
              {/* Rendered even when closed, so the links are in the page. */}
              <div
                id="menu-features"
                hidden={panel !== "features"}
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
              >
                <div
                  className="menu-drop w-[760px] rounded-2xl p-4"
                  style={panelStyle}
                >
                  <div className="grid grid-cols-3 gap-2">
                    {featureMenu.map((group) => (
                      <div key={group.heading}>
                        <p
                          className="px-3 pt-1 pb-1.5 text-[13px] font-semibold"
                          style={{ color: "var(--text-secondary)" }}
                        >
                          {group.heading}
                        </p>
                        {group.links.map((link) => (
                          <PanelLink key={link.href} link={link} />
                        ))}
                      </div>
                    ))}
                  </div>
                  <div
                    className="mt-3 pt-3 px-3 border-t flex items-center justify-between text-sm"
                    style={{ borderColor: "var(--border-light)" }}
                  >
                    <Link
                      href="/features"
                      className="font-semibold"
                      style={{ color: "var(--primary-dark)" }}
                    >
                      All features <span aria-hidden>→</span>
                    </Link>
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-1.5 font-semibold"
                      style={{ color: "var(--text-primary)" }}
                    >
                      <PlayCircle
                        className="w-4 h-4"
                        style={{ color: "var(--primary)" }}
                        aria-hidden
                      />
                      Watch the 3-minute tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative"
              onMouseEnter={() => openPanel("industries")}
              onMouseLeave={closeSoon}
            >
              {trigger("industries", "Industries")}
              <div
                id="menu-industries"
                hidden={panel !== "industries"}
                className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
              >
                <div
                  className="menu-drop w-[520px] rounded-2xl p-4"
                  style={panelStyle}
                >
                  <div className="grid grid-cols-2 gap-1">
                    {industryMenu.map((link) => (
                      <PanelLink key={link.href} link={link} />
                    ))}
                  </div>
                  <div
                    className="mt-3 pt-3 px-3 border-t text-sm"
                    style={{ borderColor: "var(--border-light)" }}
                  >
                    <Link
                      href="/industries"
                      className="font-semibold"
                      style={{ color: "var(--primary-dark)" }}
                    >
                      All industries <span aria-hidden>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link href={PRODUCT_APP_URL} className="btn-ghost">
              Login
            </Link>
            <Link
              href={PRODUCT_APP_URL}
              className="btn-primary !min-h-[40px] !py-0 !px-5 !text-[0.875rem]"
            >
              Start free trial
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2 -mr-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-30 menu-fade"
            style={{ background: "rgba(10,18,14,0.32)" }}
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            className="lg:hidden absolute left-3 right-3 sm:left-5 sm:right-5 top-full mt-2 rounded-3xl z-40 menu-drop overflow-y-auto"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-nav)",
              maxHeight: "calc(100dvh - 96px)"
            }}
          >
            <div className="p-3">
              {(
                [
                  [
                    "features",
                    "Features",
                    featureMenu.flatMap((g) => g.links),
                    "/features",
                    "All features"
                  ],
                  [
                    "industries",
                    "Industries",
                    industryMenu,
                    "/industries",
                    "All industries"
                  ]
                ] as const
              ).map(([key, label, links, allHref, allLabel]) => (
                <div key={key}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-[15px] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                    aria-expanded={mobileSection === key}
                    onClick={() =>
                      setMobileSection(mobileSection === key ? null : key)
                    }
                  >
                    {label}
                    <ChevronDown
                      className="w-4 h-4 transition-transform"
                      style={{
                        transform:
                          mobileSection === key ? "rotate(180deg)" : undefined
                      }}
                      aria-hidden
                    />
                  </button>
                  {mobileSection === key && (
                    <ul className="pb-2 pl-2">
                      {links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="block px-4 py-2.5 rounded-xl text-[15px]"
                            style={{ color: "var(--text-body)" }}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={allHref}
                          className="block px-4 py-2.5 text-[15px] font-semibold"
                          style={{ color: "var(--primary-dark)" }}
                        >
                          {allLabel} <span aria-hidden>→</span>
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              ))}
              {[...navLinks, { label: "Product tour", href: "/demo" }].map(
                (link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-3 rounded-2xl text-[15px] font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 rounded-2xl text-[15px] font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                <FaWhatsapp
                  className="w-4 h-4"
                  style={{ color: "#25d366" }}
                  aria-hidden
                />
                Chat on WhatsApp
              </a>
              <div className="flex flex-col gap-2 pt-3 px-1 pb-1">
                <Link href={PRODUCT_APP_URL} className="btn-secondary">
                  Login
                </Link>
                <Link href={PRODUCT_APP_URL} className="btn-primary">
                  Start free trial
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
