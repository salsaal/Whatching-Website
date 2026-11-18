import React, { useId, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/constants";

// The one lead form on the site: the free onboarding call (home, demo page)
// and, with a message box, the contact page. Posts to /api/lead.

/** Accepts "+91 98765 43210", "098765 43210", "98765-43210" and returns the
 *  10-digit mobile number, or null if it isn't one. */
export const normalisePhone = (raw: string) => {
  let digits = raw.replace(/\D/g, "");
  if (digits.length === 12 && digits.startsWith("91")) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith("0")) digits = digits.slice(1);
  return /^[6-9]\d{9}$/.test(digits) ? digits : null;
};

type Field = "name" | "phone" | "email" | "message";

const OnboardingForm = ({
  title = "Get a free onboarding call",
  intro = "We'll walk you through setup and answer your questions.",
  headingAs: Heading = "h3",
  withMessage = false,
  submitLabel = "Book my free call"
}: {
  title?: string;
  intro?: string;
  headingAs?: "h2" | "h3";
  withMessage?: boolean;
  submitLabel?: string;
}) => {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});

  const validate = () => {
    const err: Partial<Record<Field, string>> = {};
    if (!form.name.trim()) err.name = "Enter your name.";
    if (!normalisePhone(form.phone))
      err.phone =
        "Enter a 10-digit Indian mobile number, for example 98765 43210.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      err.email = "Enter an email address, for example you@business.com.";
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const update = (field: Field, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
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
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: normalisePhone(form.phone),
          message: form.message.trim()
        })
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

  const field = (
    name: Field,
    label: string,
    input: React.InputHTMLAttributes<HTMLInputElement>
  ) => (
    <div>
      <label
        htmlFor={`${id}-${name}`}
        className="block text-sm font-semibold mb-1.5"
        style={{ color: "var(--text-primary)" }}
      >
        {label}
      </label>
      <input
        id={`${id}-${name}`}
        className="input"
        value={form[name]}
        onChange={(e) => update(name, e.target.value)}
        aria-invalid={Boolean(errors[name])}
        aria-describedby={errors[name] ? `${id}-${name}-err` : undefined}
        style={
          errors[name] ? { borderColor: "var(--danger, #c9372c)" } : undefined
        }
        {...input}
      />
      {errors[name] && (
        <p
          id={`${id}-${name}-err`}
          className="text-[13px] mt-1.5"
          style={{ color: "var(--danger, #c9372c)" }}
        >
          {errors[name]}
        </p>
      )}
    </div>
  );

  if (submitted)
    return (
      <div className="py-6" role="status">
        <CheckCircle2
          className="w-9 h-9 mb-3"
          style={{ color: "var(--primary)" }}
          aria-hidden
        />
        <p
          className="text-lg font-semibold mb-2"
          style={{ color: "var(--text-primary)" }}
        >
          Thanks, {form.name.trim().split(" ")[0]}. We&apos;ve got your details.
        </p>
        <p
          className="text-[15px] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          We&apos;ll call or WhatsApp you, usually within a day, to book your
          free onboarding call. Want to talk sooner?
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-secondary mt-5"
        >
          <FaWhatsapp
            className="w-4 h-4"
            style={{ color: "#25d366" }}
            aria-hidden
          />
          Message us on WhatsApp
        </a>
      </div>
    );

  return (
    <form className="space-y-4" onSubmit={handleSubmit} noValidate>
      <div>
        <Heading
          className="text-lg font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </Heading>
        <p className="text-sm mt-1" style={{ color: "var(--text-secondary)" }}>
          {intro}
        </p>
      </div>
      {field("name", "Your name", { type: "text", autoComplete: "name" })}
      {field("phone", "WhatsApp number", {
        type: "tel",
        inputMode: "tel",
        autoComplete: "tel",
        placeholder: "98765 43210"
      })}
      {field("email", "Email", {
        type: "email",
        autoComplete: "email",
        placeholder: "you@business.com"
      })}
      {withMessage && (
        <div>
          <label
            htmlFor={`${id}-message`}
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            How can we help?{" "}
            <span
              className="font-normal"
              style={{ color: "var(--text-secondary)" }}
            >
              (optional)
            </span>
          </label>
          <textarea
            id={`${id}-message`}
            rows={4}
            className="input resize-none"
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </div>
      )}
      <button type="submit" className="btn-primary w-full" disabled={loading}>
        {loading ? "Sending…" : submitLabel}
      </button>
      {submitError && (
        <p
          className="text-[13px] text-center"
          style={{ color: "var(--danger, #c9372c)" }}
          role="alert"
        >
          That didn&apos;t send. Please try again, or email{" "}
          <a href="mailto:hello@whatching.com" className="underline">
            hello@whatching.com
          </a>
          .
        </p>
      )}
      <p
        className="text-xs text-center pt-1"
        style={{ color: "var(--text-secondary)" }}
      >
        No spam. We only use this to contact you about Whatching.
      </p>
    </form>
  );
};

export default OnboardingForm;
