import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../../public/assets/logo.png";
import { NavIcon } from "./navIcons";
import DemoPosterMini from "./DemoPosterMini";
import {
  featureMenu,
  industryMenu,
  MenuLink,
  navLinks,
  PRODUCT_APP_URL
} from "@/lib/data/nav";
import { WHATSAPP_URL } from "@/lib/constants";

type Panel = "features" | "industries" | null;

// A menu item: icon tile, name and one line about it.
const PanelLink = ({ link }: { link: MenuLink }) => (
  <Link
    href={link.href}
    className="group flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 hover:bg-[var(--surface-hover)]"
  >
    <NavIcon href={link.href} />
    <span className="min-w-0 pt-px">
      <span
        className="block text-[15px] font-semibold leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {link.label}
      </span>
      <span
        className="block text-[13.5px] mt-1 leading-snug"
        style={{ color: "var(--text-secondary)" }}
      >
        {link.desc}
      </span>
    </span>
  </Link>
);

const GroupLabel = ({ children }: { children: React.ReactNode }) => (
  <p
    className="text-[13px] font-semibold mb-2"
    style={{ color: "var(--text-secondary)" }}
  >
    {children}
  </p>
);

const FooterLink = ({
  href,
  children
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="inline-flex items-center gap-1.5 text-sm font-semibold"
    style={{ color: "var(--primary-dark)" }}
  >
    {children} <ArrowRight className="w-3.5 h-3.5" aria-hidden />
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
    closeTimer.current = window.setTimeout(() => setPanel(null), 160);
  };
  const hover = (p: Exclude<Panel, null>) => ({
    onMouseEnter: () => openPanel(p),
    onMouseLeave: closeSoon
  });

  const trigger = (p: Exclude<Panel, null>, label: string) => (
    <button
      type="button"
      className="nav-link inline-flex items-center gap-1"
      aria-expanded={panel === p}
      aria-controls={`menu-${p}`}
      onClick={() => setPanel(panel === p ? null : p)}
      {...hover(p)}
      style={
        panel === p
          ? { background: "var(--surface-hover)", color: "var(--text-primary)" }
          : undefined
      }
    >
      {label}
      <ChevronDown
        className="w-3.5 h-3.5 transition-transform"
        style={{ transform: panel === p ? "rotate(180deg)" : undefined }}
        aria-hidden
      />
    </button>
  );

  // Panels hang below the whole bar (not under their button), full width.
  const panelShell = (
    p: Exclude<Panel, null>,
    body: React.ReactNode,
    footer: React.ReactNode
  ) => (
    <div
      id={`menu-${p}`}
      hidden={panel !== p}
      className="absolute left-0 right-0 top-full pt-2 z-50"
      {...hover(p)}
    >
      <div
        className="menu-drop rounded-3xl overflow-hidden"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border-light)",
          boxShadow: "0 30px 70px -28px rgba(10,18,14,0.32)"
        }}
      >
        <div className="p-6">{body}</div>
        <div
          className="px-6 py-3.5 border-t flex flex-wrap items-center gap-x-7 gap-y-2"
          style={{
            borderColor: "var(--border-light)",
            background: "var(--background-secondary)"
          }}
        >
          {footer}
        </div>
      </div>
    </div>
  );

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
            {trigger("features", "Features")}
            {trigger("industries", "Industries")}
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

        {panelShell(
          "features",
          <div className="grid grid-cols-[repeat(3,minmax(0,1fr))_280px] gap-x-8">
            {featureMenu.map((group, gi) => (
              <div
                key={group.heading}
                className={gi > 0 ? "pl-8 border-l" : ""}
                style={
                  gi > 0 ? { borderColor: "var(--border-light)" } : undefined
                }
              >
                <GroupLabel>{group.heading}</GroupLabel>
                <div className="space-y-1">
                  {group.links.map((link) => (
                    <PanelLink key={link.href} link={link} />
                  ))}
                </div>
              </div>
            ))}
            <Link
              href="/demo"
              className="group rounded-2xl p-4 flex flex-col"
              style={{
                background: "var(--background-secondary)",
                border: "1px solid var(--border-light)"
              }}
            >
              <DemoPosterMini />
              <span
                className="block text-[16px] font-semibold mt-4"
                style={{ color: "var(--text-primary)" }}
              >
                See Whatching in action
              </span>
              <span
                className="block text-[13.5px] mt-1 leading-snug"
                style={{ color: "var(--text-secondary)" }}
              >
                A 3-minute tour of broadcasts, the chatbot builder and the AI
                agent.
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto pt-4"
                style={{ color: "var(--primary-dark)" }}
              >
                Watch the tour{" "}
                <ArrowRight
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
                  aria-hidden
                />
              </span>
            </Link>
          </div>,
          <>
            <FooterLink href="/features">All features</FooterLink>
            <FooterLink href="/pricing#compare">Compare plans</FooterLink>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="ml-auto inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              <FaWhatsapp
                className="w-4 h-4"
                style={{ color: "#25d366" }}
                aria-hidden
              />
              Questions? Chat with us on WhatsApp
            </a>
          </>
        )}

        {panelShell(
          "industries",
          <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_280px] gap-x-8">
            {/* Two columns of three, like the Features panel. */}
            {[industryMenu.slice(0, 3), industryMenu.slice(3)].map(
              (col, ci) => (
                <div
                  key={ci}
                  className={`space-y-1 ${ci > 0 ? "pl-8 border-l" : ""}`}
                  style={
                    ci > 0 ? { borderColor: "var(--border-light)" } : undefined
                  }
                >
                  {col.map((link) => (
                    <PanelLink key={link.href} link={link} />
                  ))}
                </div>
              )
            )}
            <Link
              href="/demo#book"
              className="rounded-2xl p-5 flex flex-col"
              style={{
                background: "var(--background-secondary)",
                border: "1px solid var(--border-light)"
              }}
            >
              <span
                className="block text-[16px] font-semibold"
                style={{ color: "var(--text-primary)" }}
              >
                Not sure where to start?
              </span>
              <span
                className="block text-[13.5px] mt-1.5 leading-snug"
                style={{ color: "var(--text-secondary)" }}
              >
                Book a free onboarding call and we&apos;ll set it up with you
                for your kind of business.
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto pt-4"
                style={{ color: "var(--primary-dark)" }}
              >
                Book a free call{" "}
                <ArrowRight className="w-3.5 h-3.5" aria-hidden />
              </span>
            </Link>
          </div>,
          <FooterLink href="/industries">All industries</FooterLink>
        )}
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
                    <ul className="pb-2 px-2 space-y-0.5">
                      {links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            className="flex items-center gap-3 px-2 py-2 rounded-xl"
                          >
                            <NavIcon href={link.href} size="sm" />
                            <span
                              className="text-[15px]"
                              style={{ color: "var(--text-body)" }}
                            >
                              {link.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link
                          href={allHref}
                          className="block px-2 py-2.5 text-[15px] font-semibold"
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
