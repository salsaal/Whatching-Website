import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Primitives";
import OnboardingForm from "./OnboardingForm";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const FinalCta = () => {
  return (
    <section
      className="section-padding-large"
      style={{ background: "var(--background-secondary)" }}
      id="cta"
    >
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <span className="pill mb-5">
              <Sparkles
                className="w-3.5 h-3.5"
                style={{ color: "var(--primary)" }}
              />
              Get started today
            </span>
            <h2 className="heading-2 mb-5">
              Your customers are already messaging you.
            </h2>
            <p className="body-large mb-8 max-w-lg">
              Make every conversation count. Start your free 7-day trial of Pro.
              No card needed. Fill in the form and we&apos;ll set up a free
              onboarding call.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={PRODUCT_APP_URL} className="btn-primary">
                Start your free 7-day trial <ArrowRight className="w-4 h-4" />
              </Link>
              {/* <Link href="mailto:hello@whatching.com?subject=Talk%20to%20Sales" className="btn-secondary">
                Talk to Sales
              </Link> */}
            </div>
            <div
              className="flex flex-wrap gap-x-6 gap-y-2 mt-7 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span>7-day trial of Pro. No card needed.</span>
              <span>Cancel anytime</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="surface-card p-7 sm:p-8">
            <OnboardingForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
