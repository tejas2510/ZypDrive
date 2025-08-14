import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

const BASE_PRICE = 1779;
const PRO_PRICE = 2399;
const ONBOARDING_FEE = 2000;
const INCLUDED_PER_DAY = 40;
const EXTRA_PER_KM = 8;
// Approximate average scooter speed in city traffic (km/h) - Udupi/Manipal traffic
const AVERAGE_SCOOTER_SPEED_KMPH = 25;

function formatMinutes(totalMins: number) {
  const hrs = Math.floor(totalMins / 60);
  const mins = Math.round(totalMins % 60);
  if (hrs <= 0) return `${mins} min`;
  return `${hrs} hr${hrs > 1 ? "s" : ""}${mins > 0 ? ` ${mins} min` : ""}`;
}

const Pricing = () => {
  const [days, setDays] = useState(26);
  const [kmsPerDay, setKmsPerDay] = useState(30);
  const [busDailyCost, setBusDailyCost] = useState(55); // typical 50–60

  const results = useMemo(() => {
    const included = INCLUDED_PER_DAY * days;
    const expected = kmsPerDay * days;
    const extraKms = Math.max(0, expected - included);
    const extraCost = extraKms * EXTRA_PER_KM;

    const scooterMonthly = BASE_PRICE + extraCost;
    const busMonthly = Math.max(0, busDailyCost) * Math.max(0, days);

    // Time: derive from distance; public transport assumed ~4x scooter time
    const scooterPerDayMins = (Math.max(0, kmsPerDay) / AVERAGE_SCOOTER_SPEED_KMPH) * 60;
    const ptPerDayMins = scooterPerDayMins * 4;
    const savedPerDay = Math.max(0, ptPerDayMins - scooterPerDayMins);
    const savedPerMonthMins = savedPerDay * Math.max(0, days);

    return {
      scooterMonthly,
      busMonthly,
      savedPerMonthMins,
    };
  }, [days, kmsPerDay, busDailyCost]);

  return (
    <section id="pricing" className="py-14 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center">Simple pricing</h2>
        <p className="text-center text-muted-foreground mt-2">
          Transparent plans with everything you need to ride. Compare versus daily buses.
        </p>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6 mt-8">
          <div className="xl:col-span-1 lg:col-span-2 xl:order-1 lg:order-3 space-y-6">
            {/* Base plan */}
            <Card className="p-4 md:p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-semibold text-lg md:text-xl">Base plan</h3>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-3xl md:text-4xl font-heading">₹{BASE_PRICE.toLocaleString()}</span>
                  <span className="text-muted-foreground mb-1 text-sm">/ month</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">+ ₹{ONBOARDING_FEE.toLocaleString()} onboarding fee</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>• Monthly rental in advance</li>
                  <li>• {INCLUDED_PER_DAY} km/day included</li>
                  <li>• ₹{EXTRA_PER_KM}/km after included</li>
                  <li>• Charge at home</li>
                  <li>• Routine service included</li>
                  <li>• Standard speed & range</li>
                </ul>
              </div>
              <Button variant="outline" size="lg" className="mt-6" asChild>
                <a href="#contact">Choose Base</a>
              </Button>
            </Card>

            {/* Pro plan */}
            <Card className="p-4 md:p-6 flex flex-col justify-between border-primary/50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">POPULAR</span>
              </div>
              <div>
                <h3 className="font-semibold text-lg md:text-xl">Pro plan</h3>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-3xl md:text-4xl font-heading">₹{PRO_PRICE.toLocaleString()}</span>
                  <span className="text-muted-foreground mb-1 text-sm">/ month</span>
                </div>
                <div className="text-xs text-muted-foreground mt-1">+ ₹{ONBOARDING_FEE.toLocaleString()} onboarding fee</div>
                <ul className="mt-4 space-y-2 text-sm">
                  <li>• Monthly rental in advance</li>
                  <li>• Unlimited km/day</li>
                  <li>• No extra per km charges</li>
                  <li>• Higher speed & range</li>
                  <li>• Premium scooter model</li>
                  <li>• Priority service support</li>
                </ul>
              </div>
              <Button variant="hero" size="lg" className="mt-6" asChild>
                <a href="#contact">Choose Pro</a>
              </Button>
            </Card>
          </div>

          {/* Calculator */}
          <Card className="p-4 md:p-6 xl:col-span-2 lg:col-span-2 xl:order-2 lg:order-1">
            <h3 className="font-semibold mb-1 text-lg md:text-xl">Your commute calculator</h3>
            <p className="text-sm text-muted-foreground mb-4">Compare scooter costs vs bus and see time saved.</p>

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
                <div className="text-xs text-muted-foreground mt-1">We estimate scooter time from this distance. Public transport typically takes ~4x longer.</div>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="busCost">Bus cost per day (₹)</Label>
                <Input id="busCost" type="number" min={0} max={500} value={busDailyCost} onChange={(e) => setBusDailyCost(Number(e.target.value))} />
                <div className="text-xs text-muted-foreground mt-1">Typical range is ₹50–₹60 per day.</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <Card className="p-3 md:p-4 bg-background">
                <div className="text-muted-foreground text-xs md:text-sm">Scooter total (month)</div>
                <div className="text-xl md:text-2xl font-heading">₹{results.scooterMonthly.toLocaleString()}</div>
              </Card>
              <Card className="p-3 md:p-4 bg-background">
                <div className="text-muted-foreground text-xs md:text-sm">Bus total (month)</div>
                <div className="text-xl md:text-2xl font-heading">₹{results.busMonthly.toLocaleString()}</div>
              </Card>
            </div>

            <div className="mt-6">
              <Card className="p-3 md:p-4 bg-primary/5">
                <div className="text-muted-foreground text-xs md:text-sm">Time saved per month</div>
                <div className="text-2xl md:text-3xl font-heading">{formatMinutes(results.savedPerMonthMins)}</div>
              </Card>
            </div>

            <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">Estimates vary by route & traffic. Extra kms charged at ₹{EXTRA_PER_KM}/km.</p>
              <Button variant="secondary" size="sm" asChild>
                <a href="#contact">Enroll</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;