import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const BASE_PRICE = 1779;
const ONBOARDING_FEE = 2000;
const INCLUDED_PER_DAY = 40;
const EXTRA_PER_KM = 2.5;
const AVERAGE_SCOOTER_SPEED_KMPH = 20;

function formatMinutes(totalMins: number) {
  const hrs = Math.floor(totalMins / 60);
  const mins = Math.round(totalMins % 60);
  if (hrs <= 0) return `${mins} min`;
  return `${hrs} hr${hrs > 1 ? "s" : ""}${mins > 0 ? ` ${mins} min` : ""}`;
}

const Pricing = () => {
  const [days, setDays] = useState(26);
  const [kmsPerDay, setKmsPerDay] = useState(30);
  const [busDailyCost, setBusDailyCost] = useState(55);

  const results = useMemo(() => {
    const included = INCLUDED_PER_DAY * days;
    const expected = kmsPerDay * days;
    const extraKms = Math.max(0, expected - included);
    const extraCost = extraKms * EXTRA_PER_KM;

    const scooterMonthly = BASE_PRICE + extraCost;
    const busMonthly = Math.max(0, busDailyCost) * Math.max(0, days);

    const scooterPerDayMins = (Math.max(0, kmsPerDay) / AVERAGE_SCOOTER_SPEED_KMPH) * 60;
    const ptPerDayMins = scooterPerDayMins * 4;
    const savedPerDay = Math.max(0, ptPerDayMins - scooterPerDayMins);
    const savedPerMonthMins = savedPerDay * Math.max(0, days);

    return { scooterMonthly, busMonthly, savedPerMonthMins };
  }, [days, kmsPerDay, busDailyCost]);

  return (
    <section id="pricing" className="py-14 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center">Simple pricing</h2>
        <p className="text-center text-muted-foreground mt-2 max-w-lg mx-auto">
          Transparent plan with everything you need to ride. Compare versus daily buses.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {/* Base plan */}
          <Card className="p-5 md:p-8 flex flex-col justify-between card-hover">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-primary">Monthly subscription</p>
              <h3 className="font-heading text-xl md:text-2xl mt-1">Base plan</h3>
              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl md:text-5xl font-heading">₹{BASE_PRICE.toLocaleString()}</span>
                <span className="text-muted-foreground mb-1.5 text-sm">/ month</span>
              </div>
              <div className="text-xs text-muted-foreground mt-1.5">+ ₹{ONBOARDING_FEE.toLocaleString()} one-time onboarding fee</div>
              <ul className="mt-5 space-y-2.5 text-sm">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" /> Monthly rental in advance</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" /> 40 km/day included — that's 1,000 km/month free</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" /> Just ₹{EXTRA_PER_KM}/km after included</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" /> Charge at home</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" /> Routine service included</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary inline-block" /> 15-day free trial</li>
              </ul>
            </div>
            <Button variant="hero" size="lg" className="mt-6 w-full" asChild>
              <a href="#contact">Get started</a>
            </Button>
          </Card>

          {/* Calculator */}
          <Card className="p-5 md:p-8">
            <h3 className="font-heading text-xl md:text-2xl">Your commute calculator</h3>
            <p className="text-sm text-muted-foreground mb-5">Compare scooter costs vs bus and see time saved.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                <div className="text-xs text-muted-foreground mt-1">Public transport typically takes ~4× longer.</div>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="busCost">Bus cost per day (₹)</Label>
                <Input id="busCost" type="number" min={0} max={500} value={busDailyCost} onChange={(e) => setBusDailyCost(Number(e.target.value))} />
                <div className="text-xs text-muted-foreground mt-1">Typical range is ₹50–₹60 per day.</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4">
              <Card className="p-3 md:p-4 bg-primary/5 border-primary/20">
                <div className="text-muted-foreground text-xs">Scooter (month)</div>
                <div className="text-xl md:text-2xl font-heading text-primary">₹{results.scooterMonthly.toLocaleString()}</div>
              </Card>
              <Card className="p-3 md:p-4 bg-background">
                <div className="text-muted-foreground text-xs">Bus (month)</div>
                <div className="text-xl md:text-2xl font-heading">₹{results.busMonthly.toLocaleString()}</div>
              </Card>
            </div>

            <Card className="mt-4 p-3 md:p-4 bg-primary/5 border-primary/20">
              <div className="text-muted-foreground text-xs">Time saved per month</div>
              <div className="text-2xl md:text-3xl font-heading text-primary">{formatMinutes(results.savedPerMonthMins)}</div>
            </Card>

            <p className="mt-4 text-xs text-muted-foreground">Estimates vary by route & traffic. Extra kms at ₹{EXTRA_PER_KM}/km.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
