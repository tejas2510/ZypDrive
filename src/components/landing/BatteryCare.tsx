import { Card } from "@/components/ui/card";
import { AlertTriangle, BatteryCharging, BatteryWarning, Plug, ThermometerSun } from "lucide-react";

const dailyHabits = [
  "Never let the battery drain fully — plug in when 20–30% remains.",
  "Charge after every ride instead of waiting for low-battery alerts.",
  "Park and store the scooter in a cool, dry place.",
  "Only use our charger — third-party chargers can damage the battery.",
];

const ridingHabits = [
  "On uphill climbs, keep the accelerator at mid-throttle and ride slow — full acceleration drains the battery fast.",
  "On downhill stretches, stay off the accelerator to conserve battery capacity.",
  "Avoid double-riding where possible, and only double-ride on a full battery.",
];

const protectionNotes = [
  "Avoid full discharge. If the battery is drained completely and stops charging, a booster recovery costs about₹5,000.",
  "A fully drained battery that needs revival will have roughly half its normal life left.",
  "Heat, moisture and direct sun reduce battery life — keep the scooter sheltered whenever you can.",
];

const BatteryCare = () => {
  return (
    <section id="battery-care" className="py-14 md:py-20 bg-secondary/40">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            <BatteryCharging className="w-3.5 h-3.5" /> Battery care
          </span>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl">
            Enhancing battery life through <span className="text-gradient">smarter practices</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Once you've chosen a scooter with the right battery capacity, keeping it healthy takes just a few smart habits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 md:p-8">
            <h3 className="font-heading text-xl mb-4 flex items-center gap-2">
              <BatteryCharging className="w-5 h-5 text-primary" /> Everyday habits
            </h3>
            <div className="space-y-5">
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Plug className="w-4 h-4 text-primary" /> Charging & parking
                </h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {dailyHabits.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary inline-block shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <ThermometerSun className="w-4 h-4 text-primary" /> Riding style
                </h4>
                <ul className="space-y-2.5 text-sm text-muted-foreground">
                  {ridingHabits.map((t) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary inline-block shrink-0" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-5 text-sm text-foreground/80">
              Consistent care can preserve up to <span className="font-medium text-primary">90%</span> of your original battery capacity even after <span className="font-medium">2–3 years</span> of use.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h3 className="font-heading text-xl mb-4 flex items-center gap-2">
              <BatteryWarning className="w-5 h-5 text-primary" /> Protect your battery
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {protectionNotes.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary inline-block shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm">
              <div className="flex items-center gap-2 font-medium text-destructive">
                <AlertTriangle className="w-4 h-4" /> Please take this seriously
              </div>
              <p className="mt-2 text-muted-foreground">
                Full discharge is the fastest way to shorten battery life. If it happens, revival costs{" "}
                <span className="font-medium text-foreground">₹5,000</span> and the battery will only perform at about{" "}
                <span className="font-medium text-foreground">half</span> of its normal capacity afterwards.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BatteryCare;
