import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactDock from "./ContactDock";

const SiteShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
        style={{
          background: "var(--surface)",
          color: "var(--text-primary)",
          boxShadow: "var(--shadow-nav)"
        }}
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <ContactDock />
    </div>
  );
};

export default SiteShell;
