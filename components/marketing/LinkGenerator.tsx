import React, { useId, useMemo, useState } from "react";
import { Check, Copy, ExternalLink } from "lucide-react";

// Builds a WhatsApp click-to-chat link (wa.me) from a phone number and an
// optional pre-filled message. Format from WhatsApp's help centre:
// https://wa.me/<full number in international format, digits only>?text=<urlencoded>

const COUNTRIES = [
  { code: "91", label: "+91 India" },
  { code: "971", label: "+971 UAE" },
  { code: "966", label: "+966 Saudi Arabia" },
  { code: "44", label: "+44 UK" },
  { code: "1", label: "+1 US / Canada" },
  { code: "65", label: "+65 Singapore" },
  { code: "61", label: "+61 Australia" }
];

const digits = (s: string) => s.replace(/\D/g, "");

const useCopy = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = async (key: string, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      setCopied(null);
    }
  };
  return { copied, copy };
};

const LinkGenerator = () => {
  const id = useId();
  const [country, setCountry] = useState("91");
  const [phone, setPhone] = useState("");
  // Only show a number error once they leave the field or have typed enough.
  const [touched, setTouched] = useState(false);
  const [message, setMessage] = useState(
    "Hi! I'd like to know more about your packages."
  );
  const { copied, copy } = useCopy();

  const { number, error } = useMemo(() => {
    let local = digits(phone);
    if (!local) return { number: "", error: "" };
    // People often type the country code or a leading 0 too.
    if (local.startsWith(country) && local.length > 10)
      local = local.slice(country.length);
    local = local.replace(/^0+/, "");
    if (country === "91" && !/^[6-9]\d{9}$/.test(local))
      return {
        number: "",
        error: "Enter a 10-digit Indian mobile number, for example 98765 43210."
      };
    if (local.length < 6 || local.length > 14)
      return { number: "", error: "That number looks too short or too long." };
    return { number: country + local, error: "" };
  }, [country, phone]);

  const showError =
    error && (touched || digits(phone).length >= 10) ? error : "";

  const link = number
    ? `https://wa.me/${number}${message.trim() ? `?text=${encodeURIComponent(message.trim())}` : ""}`
    : "";
  const html = link
    ? `<a href="${link}" target="_blank" rel="noopener">Chat with us on WhatsApp</a>`
    : "";

  return (
    <div
      className="rounded-3xl grid lg:grid-cols-2 overflow-hidden"
      style={{
        border: "1px solid var(--border-light)",
        background: "var(--surface)"
      }}
    >
      <form
        className="p-6 sm:p-8 space-y-5"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label
            htmlFor={`${id}-phone`}
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            Your WhatsApp number
          </label>
          <div className="flex gap-2">
            <label htmlFor={`${id}-cc`} className="sr-only">
              Country code
            </label>
            <select
              id={`${id}-cc`}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="input !w-[124px] sm:!w-[150px] shrink-0"
            >
              {COUNTRIES.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.label}
                </option>
              ))}
            </select>
            <input
              id={`${id}-phone`}
              type="tel"
              inputMode="tel"
              autoComplete="tel-national"
              placeholder="98765 43210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => setTouched(true)}
              className="input min-w-0"
              aria-invalid={Boolean(showError)}
              aria-describedby={showError ? `${id}-phone-err` : undefined}
            />
          </div>
          {showError && (
            <p
              id={`${id}-phone-err`}
              className="text-[13px] mt-1.5"
              style={{ color: "var(--danger, #c9372c)" }}
            >
              {error}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor={`${id}-msg`}
            className="block text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            Pre-filled message{" "}
            <span
              className="font-normal"
              style={{ color: "var(--text-secondary)" }}
            >
              (optional)
            </span>
          </label>
          <textarea
            id={`${id}-msg`}
            rows={4}
            maxLength={500}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="input resize-none"
          />
          <p
            className="text-[13px] mt-1.5"
            style={{ color: "var(--text-secondary)" }}
          >
            The customer sees this typed in, ready to send. They can change it
            first.
          </p>
        </div>
      </form>

      <div
        className="p-6 sm:p-8 flex flex-col gap-5"
        style={{ background: "var(--background-secondary)" }}
        aria-live="polite"
      >
        <div>
          <p
            className="text-sm font-semibold mb-1.5"
            style={{ color: "var(--text-primary)" }}
          >
            Your link
          </p>
          <div
            className="rounded-xl px-4 py-3 text-[15px] font-medium break-all min-h-[52px]"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border-light)",
              color: link ? "var(--text-primary)" : "var(--text-secondary)"
            }}
          >
            {link || "Enter your number to create the link."}
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <button
              type="button"
              className="btn-primary !min-h-[44px]"
              disabled={!link}
              onClick={() => copy("link", link)}
            >
              {copied === "link" ? (
                <Check className="w-4 h-4" aria-hidden />
              ) : (
                <Copy className="w-4 h-4" aria-hidden />
              )}
              {copied === "link" ? "Copied" : "Copy link"}
            </button>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="btn-secondary !min-h-[44px]"
              >
                <ExternalLink className="w-4 h-4" aria-hidden />
                Test it
              </a>
            )}
          </div>
        </div>

        {link && (
          <div>
            <p
              className="text-sm font-semibold mb-1.5"
              style={{ color: "var(--text-primary)" }}
            >
              For your website
            </p>
            <pre
              className="rounded-xl px-4 py-3 text-[13px] whitespace-pre-wrap break-all"
              style={{
                background: "var(--graphite, #0b1210)",
                color: "#d5f5df"
              }}
            >
              <code>{html}</code>
            </pre>
            <button
              type="button"
              className="mt-2 text-sm font-semibold inline-flex items-center gap-1.5"
              style={{ color: "var(--primary-dark)" }}
              onClick={() => copy("html", html)}
            >
              {copied === "html" ? (
                <Check className="w-4 h-4" aria-hidden />
              ) : (
                <Copy className="w-4 h-4" aria-hidden />
              )}
              {copied === "html" ? "Copied" : "Copy the code"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LinkGenerator;
