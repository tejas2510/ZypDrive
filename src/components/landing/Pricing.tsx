import { useMemo, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const BASE_PRICE = 1799;
const INCLUDED_PER_DAY = 40;
const EXTRA_PER_KM = 8;

const Pricing = () => {
  const [days, setDays] = useState(26);
  const [kmsPerDay, setKmsPerDay] = useState(30);

  const { extraKms, extraCost, total } = useMemo(() => {
    const included = INCLUDED_PER_DAY * days;
    const expected = kmsPerDay * days;
    const extra = Math.max(0, expected - included);
    const extraCharge = extra * EXTRA_PER_KM;
    return {
      extraKms: extra,
      extraCost: extraCharge,
      total: BASE_PRICE + extraCharge,
    };
  }, [days, kmsPerDay]);

  return (
    <section id="pricing" className="py-14 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center">Simple pricing</h2>
        <p className="text-center text-muted-foreground mt-2">Transparent plans with everything you need to ride.</p>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card className="p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-xl">Base plan</h3>
              <div className="mt-3 flex items-end gap-2">
                <span className="text-4xl font-heading">₹1,799</span>
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

          <Card className="p-6">
            <h3 className="font-semibold mb-4">Extra km cost calculator</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="days">Working days / month</Label>
                <Input id="days" type="number" min={1} max={31} value={days} onChange={(e) => setDays(Number(e.target.value))} />
              </div>
              <div>
                <Label htmlFor="kms">Your commute (km/day)</Label>
                <Input id="kms" type="number" min={0} max={200} value={kmsPerDay} onChange={(e) => setKmsPerDay(Number(e.target.value))} />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <Card className="p-4 bg-background">
                <div className="text-muted-foreground">Extra kms</div>
                <div className="text-2xl font-heading">{extraKms}</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-muted-foreground">Extra cost</div>
                <div className="text-2xl font-heading">₹{extraCost}</div>
              </Card>
            </div>
            <div className="mt-6 rounded-lg p-4 bg-primary/5 flex items-center justify-between">
              <div>
                <div className="text-muted-foreground text-sm">Estimated monthly total</div>
                <div className="text-3xl font-heading">₹{total}</div>
              </div>
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