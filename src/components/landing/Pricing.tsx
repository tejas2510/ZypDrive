import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BASE_PRICE = 1799;
const INCLUDED_PER_DAY = 40;
const EXTRA_PER_KM = 8;

function formatMinutes(totalMins: number) {
  const hrs = Math.floor(totalMins / 60);
  const mins = Math.round(totalMins % 60);
  if (hrs <= 0) return `${mins} min`;
  return `${hrs} hr${hrs > 1 ? "s" : ""}${mins > 0 ? ` ${mins} min` : ""}`;
}

const Pricing = () => {
  const [days, setDays] = useState(26);
  const [kmsPerDay, setKmsPerDay] = useState(30);
  const [tripsPerDay, setTripsPerDay] = useState(2); // to & from work
  const [scooterTimeMins, setScooterTimeMins] = useState(15); // one-way by scooter
  const [busDailyCost, setBusDailyCost] = useState(55); // typical 50–60

  const results = useMemo(() => {
    const included = INCLUDED_PER_DAY * days;
    const expected = kmsPerDay * days;
    const extraKms = Math.max(0, expected - included);
    const extraCost = extraKms * EXTRA_PER_KM;

    const scooterMonthly = BASE_PRICE + extraCost;
    const busMonthly = Math.max(0, busDailyCost) * Math.max(0, days);
    const monthlySavings = busMonthly - scooterMonthly;

    // Time: assumption — 1x scooter time ≈ 4x on public transport
    const ptOneWay = scooterTimeMins * 4;
    const savedPerOneWay = Math.max(0, ptOneWay - scooterTimeMins);
    const savedPerDay = savedPerOneWay * Math.max(0, tripsPerDay);
    const savedPerMonthMins = savedPerDay * Math.max(0, days);

    return {
      extraKms,
      extraCost,
      scooterMonthly,
      busMonthly,
      monthlySavings,
      savedPerMonthMins,
    };
  }, [days, kmsPerDay, scooterTimeMins, tripsPerDay, busDailyCost]);

  return (
    <section id="pricing" className="py-14 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center">Simple pricing</h2>
        <p className="text-center text-muted-foreground mt-2">
          Transparent plans with everything you need to ride. Compare versus daily buses.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {/* Base plan */}
          <Card className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-xl">Base plan</h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-heading">₹{BASE_PRICE.toLocaleString()}</span>
                <span className="text-muted-foreground mb-1">/ month</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                <li>• No downpayment</li>
                <li>• {INCLUDED_PER_DAY} km/day included</li>
                <li>• ₹{EXTRA_PER_KM}/km after included</li>
                <li>• Charge at home</li>
                <li>• Routine service included</li>
              </ul>
            </div>
            <Button variant="hero" size="lg" className="mt-6" asChild>
              <a href="#contact">Start subscription</a>
            </Button>
          </Card>

          {/* Calculator */}
          <Card className="p-6">
            <h3 className="font-semibold mb-1">Your commute</h3>
            <p className="text-sm text-muted-foreground mb-4">We’ll calculate scooter costs vs bus and time saved.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="days">Working days / month</Label>
                <Input id="days" type="number" min={1} max={31} value={days} onChange={(e) => setDays(Number(e.target.value))} />
              </div>
              <div>
                <Label htmlFor="kms">Your commute (km/day)</Label>
                <Input id="kms" type="number" min={0} max={200} value={kmsPerDay} onChange={(e) => setKmsPerDay(Number(e.target.value))} />
              </div>
              <div>
                <Label htmlFor="trips">Trips per day</Label>
                <Input id="trips" type="number" min={1} max={6} value={tripsPerDay} onChange={(e) => setTripsPerDay(Number(e.target.value))} />
              </div>
              <div>
                <Label htmlFor="scooterTime">Scooter time (one-way, minutes)</Label>
                <Input id="scooterTime" type="number" min={5} max={120} value={scooterTimeMins} onChange={(e) => setScooterTimeMins(Number(e.target.value))} />
                <div className="text-xs text-muted-foreground mt-1">Typically, 15 min by scooter ≈ 60 min by public transport.</div>
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="busCost">Bus cost per day (₹)</Label>
                <Input id="busCost" type="number" min={0} max={500} value={busDailyCost} onChange={(e) => setBusDailyCost(Number(e.target.value))} />
                <div className="text-xs text-muted-foreground mt-1">Typical range is ₹50–₹60 per day.</div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
              <Card className="p-4 bg-background">
                <div className="text-muted-foreground">Extra kms (month)</div>
                <div className="text-2xl font-heading">{results.extraKms.toLocaleString()}</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-muted-foreground">Extra cost (month)</div>
                <div className="text-2xl font-heading">₹{results.extraCost.toLocaleString()}</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-muted-foreground">Scooter total (month)</div>
                <div className="text-2xl font-heading">₹{results.scooterMonthly.toLocaleString()}</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-muted-foreground">Bus total (month)</div>
                <div className="text-2xl font-heading">₹{results.busMonthly.toLocaleString()}</div>
              </Card>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-4 bg-primary/5">
                <div className="text-muted-foreground text-sm">Estimated savings vs bus</div>
                <div className={`text-3xl font-heading ${results.monthlySavings >= 0 ? "text-foreground" : "text-muted-foreground"}`}>
                  {results.monthlySavings >= 0 ? `₹${results.monthlySavings.toLocaleString()}` : `—`}
                </div>
              </Card>
              <Card className="p-4 bg-primary/5">
                <div className="text-muted-foreground text-sm">Time saved per month</div>
                <div className="text-3xl font-heading">{formatMinutes(results.savedPerMonthMins)}</div>
              </Card>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-xs text-muted-foreground">Estimates vary by route & traffic. Extra kms charged at ₹{EXTRA_PER_KM}/km.</p>
              <Button variant="secondary" asChild>
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