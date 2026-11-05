import React, { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

// Free onboarding call request. Posts to /api/lead, the same lead sheet as
// the contact form.
const OnboardingForm = ({
  title = "Get a free onboarding call",
  headingAs: Heading = "h3"
}: {
  title?: string;
  headingAs?: "h2" | "h3";
}) => {
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
    <>
      {!submitted ? (
        <form className="space-y-4" onSubmit={handleSubmit} noValidate>
          <div>
            <Heading
              className="text-lg font-semibold"
              style={{ color: "var(--text-primary)" }}
            >
              {title}
            </Heading>
            <p
              className="text-sm mt-1"
              style={{ color: "var(--text-secondary)" }}
            >
              We&apos;ll walk you through setup and answer any questions.
            </p>
          </div>
          <div>
            <input
              type="text"
              placeholder="Your name"
              aria-label="Your name"
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
              aria-label="Phone number"
              className="input"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div>
            <input
              type="email"
              placeholder="Work email"
              aria-label="Work email"
              className="input"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
            No spam. We only use this to set up your call.
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
            You&apos;re all set!
          </h3>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Our team will reach out shortly.
          </p>
        </div>
      )}
    </>
  );
};

export default OnboardingForm;
