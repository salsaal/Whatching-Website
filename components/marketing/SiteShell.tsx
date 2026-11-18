import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactDock from "./ContactDock";

const SiteShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ContactDock />
    </div>
  );
};

export default SiteShell;
