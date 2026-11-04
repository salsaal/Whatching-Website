export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!process.env.GOOGLE_SCRIPT_URL) {
    console.error("GOOGLE_SCRIPT_URL is not configured");
    return res.status(500).json({ error: "Lead capture is not configured" });
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !phone) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message, source: req.headers.referer ?? "", submittedAt: new Date().toISOString() })
    });

    if (!response.ok) {
      const text = await response.text().catch(() => "");
      console.error("Google Sheets webhook error", response.status, text);
      return res.status(502).json({ error: "Failed to record lead" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Lead submission failed", error);
    return res.status(500).json({ error: "Failed" });
  }
}
