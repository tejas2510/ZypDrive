import { defineTool } from "@lovable.dev/mcp-js";

const FAQS = [
  { q: "Is there any downpayment?", a: "No. Just a one-time non-refundable onboarding fee starting at ₹2,000 plus monthly rental in advance, starting at ₹1,999/month, depending on the plan." },
  { q: "What plans do you offer?", a: "Green ₹1,999/mo (30 km/day), Plus ₹2,599/mo (40 km/day), Gig Rider ₹1,250/week (80 km/day). All include free routine service for year 1 (50% off from year 2), home charging and insurance cover." },
  { q: "What if I ride more than my included km?", a: "Extra km at ₹4/km (Green), ₹5/km (Plus), ₹6/km (Gig). Unused km do not carry forward." },
  { q: "Can I share the scooter?", a: "Yes, double-ride is fully supported with a single pillion (helmet mandatory)." },
  { q: "How long is the rental agreement?", a: "12 months. Renewals continue at the prevailing rental or as decided by the management; the onboarding fee is not charged again on renewal." },
  { q: "How do I charge?", a: "Plug into a regular 220V home socket. Full charge takes 3–4 hours and costs roughly ₹8–10/day. Range is 70+ km per charge." },
  { q: "Is service included?", a: "Routine service is free for the first 12 months. From the 2nd year, 50% discount on actual service charges plus 18% GST." },
  { q: "Do I need a Driving Licence?", a: "Yes. A valid Driving Licence and government ID (Aadhaar) are required. Scooters are RTO registered; always carry your insurance copy and wear a helmet." },
  { q: "Where do you operate?", a: "Udupi and Manipal, Karnataka." },
  { q: "How do I cancel?", a: "Give 15 days written notice. Remaining km are forfeited and the onboarding fee remains non-refundable." },
];

export default defineTool({
  name: "list_faqs",
  title: "List FAQs",
  description: "List frequently asked questions about Zypdrive e-scooter subscriptions and policies.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(FAQS, null, 2) }],
    structuredContent: { faqs: FAQS },
  }),
});
