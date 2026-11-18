import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, X } from "lucide-react";
import Logo from "../../public/assets/logo.png";
import { navLinks, PRODUCT_APP_URL } from "@/lib/data/nav";

const Navbar = () => {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [router.asPath]);

  return (
    <div className="sticky top-0 z-50 px-3 sm:px-5 pt-3 sm:pt-4 pb-2">
      <header className="nav-header container-wide !px-0">
        <div className="flex items-center justify-between w-full pl-4 pr-2 py-2 sm:pl-5 sm:pr-2.5">
          <Link
            href="/"
            className="flex items-center shrink-0"
            aria-label="Whatching home"
          >
            <Image
              src={Logo}
              className="h-6 sm:h-7 w-max"
              alt="Whatching"
              priority
            />
          </Link>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Primary"
          >
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
            className="lg:hidden p-2 -mr-1"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
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
            className="lg:hidden absolute left-3 right-3 sm:left-5 sm:right-5 top-full mt-2 rounded-3xl overflow-hidden z-40 menu-drop"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-light)",
              boxShadow: "var(--shadow-nav)",
              transformOrigin: "top"
            }}
          >
            <div className="p-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 rounded-2xl text-[15px] font-semibold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.label}
                </Link>
              ))}
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
