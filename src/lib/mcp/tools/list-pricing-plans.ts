import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "list_pricing_plans",
  title: "List pricing plans",
  description:
    "List Zypdrive electric scooter subscription plans available in Udupi/Manipal, including price, included kilometres, extra-km rate and onboarding fee.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const plans = [
      {
        id: "green",
        name: "Green",
        price_inr: 1999,
        billing_cycle: "month",
        included_km_per_day: 30,
        included_km_per_month: 750,
        extra_km_rate_inr: 4,
        onboarding_fee_inr: 2000,
        onboarding_fee_note: "one-time, non-refundable, not charged on renewal",
        best_for: "Perfect for daily city commutes",
      },
      {
        id: "plus",
        name: "Plus",
        price_inr: 2599,
        billing_cycle: "month",
        included_km_per_day: 40,
        included_km_per_month: 1000,
        extra_km_rate_inr: 5,
        onboarding_fee_inr: 3000,
        onboarding_fee_note: "one-time, non-refundable, not charged on renewal",
        best_for: "More km for longer commutes",
        popular: true,
      },
      {
        id: "gig",
        name: "Gig Rider",
        price_inr: 1250,
        billing_cycle: "week",
        included_km_per_day: 80,
        included_km_per_month: 2000,
        extra_km_rate_inr: 6,
        onboarding_fee_inr: 2000,
        refundable_deposit_inr: 3000,
        best_for: "Built for delivery & gig workers",
      },
    ];
    return {
      content: [{ type: "text", text: JSON.stringify(plans, null, 2) }],
      structuredContent: { plans },
    };
  },
});
