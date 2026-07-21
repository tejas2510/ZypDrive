import { useEffect, useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info, Leaf, Zap, Briefcase } from "lucide-react";

const AVERAGE_SCOOTER_SPEED_KMPH = 20;

type PlanId = "green" | "plus" | "gig";

const PLANS: Record<PlanId, {
  id: PlanId;
  name: string;
  tagline: string;
  price: number;
  cycle: "month" | "week";
  includedPerDay: number;
  includedPerMonth: number;
  extraPerKm: number;
  onboardingFee: number;
  refundableDeposit?: number;
  Icon: typeof Leaf;
  highlight?: boolean;
  badge?: string;
}> = {
  green: {
    id: "green",
    name: "Green",
    tagline: "Perfect for daily city commutes",
    price: 1999,
    cycle: "month",
    includedPerDay: 30,
    includedPerMonth: 750,
    extraPerKm: 4,
    onboardingFee: 2000,
    Icon: Leaf,
  },
  plus: {
    id: "plus",
    name: "Plus",
    tagline: "More km for longer commutes",
    price: 2599,
    cycle: "month",
    includedPerDay: 40,
    includedPerMonth: 1000,
    extraPerKm: 5,
    onboardingFee: 3000,
    Icon: Zap,
    highlight: true,
    badge: "Most popular",
  },
  gig: {
    id: "gig",
    name: "Gig Rider",
    tagline: "Built for delivery & gig workers",
    price: 1250,
    cycle: "week",
    includedPerDay: 80,
    includedPerMonth: 2000,
    extraPerKm: 6,
    onboardingFee: 2000,
    refundableDeposit: 3000,
    Icon: Briefcase,
  },
};

function formatMinutes(totalMins: number) {
  const hrs = Math.floor(totalMins / 60);
  const mins = Math.round(totalMins % 60);
  if (hrs <= 0) return `${mins} min`;
  return `${hrs} hr${hrs > 1 ? "s" : ""}${mins > 0 ? ` ${mins} min` : ""}`;
}

const PlanCard = ({ plan }: { plan: typeof PLANS[PlanId] }) => {
  const { Icon } = plan;
  const totalUpfront = plan.onboardingFee + (plan.refundableDeposit ?? 0);
  return (
    <Card
      className={`p-5 md:p-7 flex flex-col justify-between card-hover relative ${
        plan.highlight ? "border-primary/60 ring-1 ring-primary/30 shadow-elevated" : ""
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-white text-xs font-medium px-3 py-1 rounded-full shadow">
          {plan.badge}
        </span>
      )}
      <div>
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary/10 grid place-items-center">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h3 className="font-heading text-lg md:text-xl leading-tight">{plan.name}</h3>
            <p className="text-xs text-muted-foreground">{plan.tagline}</p>
          </div>
        </div>

        <div className="mt-5 flex items-end gap-2">
          <span className="text-3xl md:text-4xl font-heading">₹{plan.price.toLocaleString()}</span>
          <span className="text-muted-foreground mb-1 text-sm">/ {plan.cycle}</span>
        </div>
        <div className="text-xs text-muted-foreground mt-1.5">
          + ₹{totalUpfront.toLocaleString()} upfront
          {plan.refundableDeposit ? (
            <span className="text-foreground/70">
              {" "}(₹{plan.onboardingFee.toLocaleString()} onboarding, non-refundable · ₹{plan.refundableDeposit.toLocaleString()} refundable deposit)
            </span>
          ) : (
            <span className="text-foreground/70"> onboarding fee (one-time, non-refundable)</span>
          )}
        </div>

        <ul className="mt-5 space-y-2.5 text-sm">
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
            {plan.includedPerDay} km/day included — {plan.includedPerMonth.toLocaleString()} km/{plan.cycle === "week" ? "month*" : "month"} free
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
            Just ₹{plan.extraPerKm}/km for extra kilometres
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
            Routine service included
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
            Charge at home only as required
          </li>
          <li className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" />
            {plan.cycle === "week" ? "Weekly rental in advance" : "Monthly rental in advance"}
          </li>
          {plan.cycle === "month" && (
            <li className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" /> 15-day free trial
            </li>
          )}
        </ul>
      </div>
      <Button variant={plan.highlight ? "hero" : "secondary"} size="lg" className="mt-6 w-full" asChild>
        <a href="#contact">Get started</a>
      </Button>
    </Card>
  );
};

const PLAN_DEFAULTS: Record<PlanId, { days: number; busDailyCost: number }> = {
  green: { days: 30, busDailyCost: 60 },
  plus: { days: 30, busDailyCost: 80 },
  gig: { days: 25, busDailyCost: 75 },
};

const Pricing = () => {
  const [planId, setPlanId] = useState<PlanId>("plus");
  const plan = PLANS[planId];

  const [days, setDays] = useState(PLAN_DEFAULTS.plus.days);
  const [kmsPerDay, setKmsPerDay] = useState(30);
  const [busDailyCost, setBusDailyCost] = useState(PLAN_DEFAULTS.plus.busDailyCost);
  const [petrolMileage, setPetrolMileage] = useState(45); // km/l for petrol scooter/bike
  const [petrolPrice, setPetrolPrice] = useState(105); // ₹/l
  const [bikeEmi, setBikeEmi] = useState(3500); // ₹/month EMI for owning a petrol 2-wheeler

  const results = useMemo(() => {
    const cyclesPerMonth = plan.cycle === "week" ? 4 : 1;
    const includedForPeriod = plan.includedPerMonth;
    const expected = kmsPerDay * days;
    const extraKms = Math.max(0, expected - includedForPeriod);
    const extraCost = extraKms * plan.extraPerKm;

    const scooterMonthly = plan.price * cyclesPerMonth + extraCost;

    // For Gig Rider compare vs petrol running cost + bike/scooter EMI; for Green/Plus compare vs bus
    const petrolFuel = petrolMileage > 0
      ? Math.round((expected / petrolMileage) * petrolPrice)
      : 0;
    const emi = Math.max(0, bikeEmi);
    const petrolTotal = petrolFuel + emi;
    const busMonthly = Math.max(0, busDailyCost) * Math.max(0, days);
    const comparisonMonthly = plan.id === "gig" ? petrolTotal : busMonthly;
    const comparisonLabel = plan.id === "gig" ? "Petrol + EMI (month)" : "Bus (month)";

    const scooterPerDayMins = (Math.max(0, kmsPerDay) / AVERAGE_SCOOTER_SPEED_KMPH) * 60;
    const ptPerDayMins = scooterPerDayMins * 4;
    const savedPerDay = Math.max(0, ptPerDayMins - scooterPerDayMins);
    const savedPerMonthMins = savedPerDay * Math.max(0, days);

    return { scooterMonthly, comparisonMonthly, comparisonLabel, petrolFuel, emi, savedPerMonthMins };
  }, [days, kmsPerDay, busDailyCost, petrolMileage, petrolPrice, bikeEmi, plan]);

  const isGig = plan.id === "gig";

  return (
    <section id="pricing" className="py-14 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center">Simple pricing</h2>
        <p className="text-center text-muted-foreground mt-2 max-w-xl mx-auto">
          Pick the plan that fits your routine. Transparent pricing, routine service included.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-6xl mx-auto">
          <PlanCard plan={PLANS.green} />
          <PlanCard plan={PLANS.plus} />
          <PlanCard plan={PLANS.gig} />
        </div>

        <p className="text-center text-xs text-muted-foreground mt-4 max-w-2xl mx-auto">
          *Gig Rider is billed weekly (₹1,250/week). 2,000 km included per month. Unused km don't carry forward.
          The onboarding fee is a one-time charge and is not repeated on renewal.
        </p>

        {/* Calculator */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-5 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
              <div>
                <h3 className="font-heading text-xl md:text-2xl">Your commute calculator</h3>
                <p className="text-sm text-muted-foreground">
                  {isGig
                    ? "Compare Gig Rider cost vs running a petrol scooter/bike."
                    : "Compare scooter costs vs bus and see time saved."}
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                {(Object.keys(PLANS) as PlanId[]).map((id) => (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setPlanId(id)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition ${
                      planId === id
                        ? "bg-primary text-primary-foreground border-primary"
                        : "bg-background hover:bg-secondary border-border text-muted-foreground"
                    }`}
                  >
                    {PLANS[id].name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              <div>
                <Label htmlFor="days">Working days / month</Label>
                <Input id="days" type="number" min={1} max={31} value={days} onChange={(e) => setDays(Number(e.target.value))} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Label htmlFor="kms">Your commute (km/day)</Label>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <button type="button" aria-label="Commute distance info" className="text-muted-foreground hover:text-foreground">
                        <Info className="h-4 w-4" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent>
                      Total distance for both to-and-fro journeys in a day.
                    </TooltipContent>
                  </Tooltip>
                </div>
                <Input id="kms" type="number" min={0} max={200} value={kmsPerDay} onChange={(e) => setKmsPerDay(Number(e.target.value))} />
                {!isGig && (
                  <div className="text-xs text-muted-foreground mt-1">Public transport typically takes ~4× longer.</div>
                )}
              </div>

              {isGig ? (
                <>
                  <div>
                    <Label htmlFor="mileage">Petrol scooter mileage (km/l)</Label>
                    <Input id="mileage" type="number" min={10} max={100} value={petrolMileage} onChange={(e) => setPetrolMileage(Number(e.target.value))} />
                    <div className="text-xs text-muted-foreground mt-1">Typical range is 40–55 km/l.</div>
                  </div>
                  <div>
                    <Label htmlFor="petrolPrice">Petrol price (₹/litre)</Label>
                    <Input id="petrolPrice" type="number" min={50} max={200} value={petrolPrice} onChange={(e) => setPetrolPrice(Number(e.target.value))} />
                    <div className="text-xs text-muted-foreground mt-1">Karnataka average is around ₹100–₹110/l.</div>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="emi">Bike / scooter EMI (₹/month)</Label>
                    <Input id="emi" type="number" min={0} max={20000} value={bikeEmi} onChange={(e) => setBikeEmi(Number(e.target.value))} />
                    <div className="text-xs text-muted-foreground mt-1">Typical EMI for a new petrol 2-wheeler is ₹3,000–₹4,500/month.</div>
                  </div>
                </>
              ) : (
                <div className="sm:col-span-2">
                  <Label htmlFor="busCost">Bus cost per day (₹)</Label>
                  <Input id="busCost" type="number" min={0} max={500} value={busDailyCost} onChange={(e) => setBusDailyCost(Number(e.target.value))} />
                  <div className="text-xs text-muted-foreground mt-1">Typical range is ₹70–₹80 per day (~₹1,875/month).</div>
                </div>
              )}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <Card className="p-3 md:p-4 bg-primary/5 border-primary/20">
                <div className="text-muted-foreground text-xs">Scooter — {plan.name} (month)</div>
                <div className="text-xl md:text-2xl font-heading text-primary">₹{results.scooterMonthly.toLocaleString()}</div>
              </Card>
              <Card className="p-3 md:p-4 bg-background">
                <div className="text-muted-foreground text-xs">{results.comparisonLabel}</div>
                <div className="text-xl md:text-2xl font-heading">₹{results.comparisonMonthly.toLocaleString()}</div>
                {isGig && (
                  <div className="text-[11px] text-muted-foreground mt-1">
                    Petrol ₹{results.petrolFuel.toLocaleString()} + EMI ₹{results.emi.toLocaleString()}
                  </div>
                )}
              </Card>
            </div>

            {!isGig && (
              <Card className="mt-4 p-3 md:p-4 bg-primary/5 border-primary/20">
                <div className="text-muted-foreground text-xs">Time saved per month</div>
                <div className="text-2xl md:text-3xl font-heading text-primary">{formatMinutes(results.savedPerMonthMins)}</div>
              </Card>
            )}

            <p className="mt-4 text-xs text-muted-foreground">
              Estimates vary by route & traffic. Extra kms on {plan.name} at ₹{plan.extraPerKm}/km.
            </p>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mt-8 text-xs text-muted-foreground space-y-2 text-center">
          <p>ℹ️ Unused km don't carry forward to the next month.</p>
          <p>📝 First rental agreement runs for <span className="font-medium text-foreground">12 months</span> from the start date. Renewals continue at the prevailing monthly rental — <span className="font-medium text-foreground">no onboarding fee is charged again</span>.</p>
          <p>🛒 After <span className="font-medium text-foreground">3 years</span>, you have the option to buy your scooter at <span className="font-medium text-foreground">40–50% of the original price</span> (or as mutually agreed).</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
