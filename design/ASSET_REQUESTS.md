# Whatching — Asset Requests

Every product visual on the site — the hero dashboard, the template editor
preview, the bot canvas, the shared inbox, the analytics dashboard, the
Instagram comment-to-DM sequence — is built natively with HTML/CSS/SVG,
recreated to match the real Whatching app's actual design language (the
screenshots shared during this revamp) rather than using screenshots or stock
imagery. That keeps everything crisp at any resolution, on-brand, and
zero-pixelation, which was the whole point of moving off the old JPEGs.

Only one spot genuinely needs generated artwork that code can't produce: a
static social-share meta image (Open Graph tags can't render live CSS/SVG).
It currently falls back to the existing `/public/og-image.png` so nothing is
broken while this is pending.

---

### ASSET-001

**Filename:** `og-share.webp` (+ `.png` fallback)
**Destination:** `/public/assets/og/og-share.png` (referenced from `pages/_app.tsx` and per-page `<Head>` OG tags, replacing the current generic `og-image.png`)
**Dimensions:** 1200 × 630
**Aspect ratio:** 1.91:1
**Format:** PNG (OG images should not be WebP — inconsistent client support)
**Transparency:** No

**Purpose:** The social-share preview image used when any Whatching page (homepage, feature pages, blog posts) is shared on WhatsApp, LinkedIn, X, or iMessage.

**Visual description:** A premium, minimal composition on a near-black graphite-green background (`#0b1210`, matching `--text-primary`). Center-left: the Whatching wordmark/logo. Right two-thirds: a soft, abstracted suggestion of connected conversation bubbles (WhatsApp-green and a muted Instagram-gradient accent) linked by thin glowing lines — not a literal screenshot, an abstract brand mark. Soft radial glow behind the mark, consistent with the site's `--gradient-glow` token.

**Composition:** Logo + one-line tagline ("WhatsApp + Instagram automation") left-aligned in the left third; abstract connected-nodes graphic filling the right two-thirds; generous negative space, nothing crammed to the edges (Twitter/LinkedIn crop margins).

**Brand direction:** Matches the site's restrained, editorial palette — primary green (`#169f49`), graphite background, a touch of the Instagram gradient (`#962fbf → #d6249f → #f77737`) used sparingly as an accent, never dominant. No cartoon icons, no stock photography, no 3D.

**UI elements:** None — this is brand artwork, not a product screenshot.

**Text:** Yes, minimal — the Whatching wordmark and a single short tagline, both in Manrope (the site's font). No paragraph text.

**Responsive usage:** Fixed 1200×630 — this is a static social meta image, not a responsive in-page asset.

**Reference:** Whatching logo (`/public/assets/logo.png`) for brand mark and color; site's dark CTA band (`components/marketing/TrustAPISection.tsx`, `FinalCta.tsx`) for the graphite background and glow treatment.

---

## Old assets no longer used

`public/assets/Broadcast.jpeg`, `Broadcast2.png`, `flow.jpeg`, `form.jpeg`,
`industries.jpeg`, `industries2.jpeg`, and `hero.png` are not referenced
anywhere in the codebase anymore — every section that used to show one of
these now renders a native recreation instead (see `components/marketing/AppFrame.tsx`,
`visuals.tsx`, and `InstagramVisuals.tsx`). Left on disk untouched in case you
want them back for something else; safe to delete if not.
