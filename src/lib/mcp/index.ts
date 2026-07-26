import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listPricingPlans from "./tools/list-pricing-plans";
import listFaqs from "./tools/list-faqs";
import getMyAccount from "./tools/get-my-account";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "zypdrive-mcp",
  title: "Zypdrive",
  version: "0.1.0",
  instructions:
    "Tools for Zypdrive — electric scooter subscriptions for women commuters in Udupi/Manipal. Use `list_pricing_plans` and `list_faqs` for plan/service info, and `get_my_account` to identify the signed-in user.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listPricingPlans, listFaqs, getMyAccount],
});
