import { defineTool } from "@lovable.dev/mcp-js";

const FAQS = [
  { q: "Is there any downpayment?", a: "No. Just a one-time non-refundable onboarding fee of ₹2,000 plus monthly rental in advance, starting at ₹1,999/month on Green." },
  { q: "What plans do you offer?", a: "Green ₹1,999/mo (30 km/day), Plus ₹2,599/mo (40 km/day), Gig Rider ₹1,250/week (80 km/day). All include routine service, home charging and third-party insurance." },
  { q: "What if I ride more than my included km?", a: "Extra km at ₹4/km (Green), ₹5/km (Plus), ₹6/km (Gig). Unused km do not carry forward." },
  { q: "Can I share the scooter?", a: "Yes, double-ride is fully supported with a single pillion (helmet mandatory)." },
  { q: "How long is the rental agreement?", a: "12 months. Renewals continue at the prevailing rate; the onboarding fee is not charged again on renewal." },
  { q: "How do I charge?", a: "Plug into a regular 220V home socket. Full charge takes 3–4 hours and costs roughly ₹8–10/day. Range is 70+ km per charge." },
  { q: "Is service included?", a: "Yes, routine service is included and we coordinate convenient service windows." },
  { q: "Do I need a Driving Licence?", a: "Yes, a valid Driving Licence and government ID (Aadhaar) are required. Vehicles are non-RTO so no separate registration is needed." },
  { q: "Where do you operate?", a: "Udupi and Manipal, Karnataka." },
  { q: "How do I cancel?", a: "Give 15 days written notice. The onboarding fee remains non-refundable; unused km are not refundable." },
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
