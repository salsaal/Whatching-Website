import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { Reveal } from "./Primitives";
import { PRODUCT_APP_URL } from "@/lib/data/nav";

const FinalCta = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const err: Record<string, string> = {};
    if (!form.name.trim()) err.name = "Name is required";
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      err.email = "Enter a valid email";
    if (!form.phone.match(/^[6-9]\d{9}$/))
      err.phone = "Enter a valid 10-digit phone number";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitError(false);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

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
              Make every conversation count. No complicated setup — get started
              in minutes, with a free onboarding call included.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={PRODUCT_APP_URL} className="btn-primary">
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </Link>
              {/* <Link href="mailto:hello@whatching.com?subject=Talk%20to%20Sales" className="btn-secondary">
                Talk to Sales
              </Link> */}
            </div>
            <div
              className="flex flex-wrap gap-x-6 gap-y-2 mt-7 text-sm"
              style={{ color: "var(--text-muted)" }}
            >
              <span>No credit card required</span>
              <span>Free onboarding call</span>
              <span>Cancel anytime</span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="surface-card p-7 sm:p-8">
            {!submitted ? (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <div>
                  <h3
                    className="text-lg font-semibold"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Get a free setup call
                  </h3>
                  <p
                    className="text-sm mt-1"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    We'll walk you through setup and answer any questions.
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="input"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="input"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  {errors.phone && <p className="error">{errors.phone}</p>}
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Work email"
                    className="input"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Get Free Setup"}{" "}
                  <ArrowRight className="w-4 h-4" />
                </button>
                {submitError && (
                  <p
                    className="text-xs text-center"
                    style={{ color: "var(--danger)" }}
                  >
                    Something went wrong. Please try again, or email{" "}
                    <a href="mailto:hello@whatching.com" className="underline">
                      hello@whatching.com
                    </a>
                    .
                  </p>
                )}
                <p
                  className="text-xs text-center pt-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  No spam. No credit card required.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <CheckCircle2
                  className="w-9 h-9 mx-auto mb-3"
                  style={{ color: "var(--primary)" }}
                />
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  You're all set!
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Our team will reach out shortly.
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
