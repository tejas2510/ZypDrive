import { Card } from "@/components/ui/card";
import { BatteryCharging, Sparkles } from "lucide-react";

const tips = [
  "Avoid full discharges — plug in when 20–30% remains.",
  "Store the scooter in cool, dry places.",
  "Use only brand-recommended chargers.",
  "Charge after every ride instead of waiting for low-battery alerts.",
];

const takeaways = [
  "Battery capacity of an EV scooter is measured in Watt-Hours (Wh) or Ampere-Hours (Ah).",
  "Weight, temperature and terrain all impact real-world EV battery performance.",
  "Higher-capacity batteries deliver better range and overall efficiency.",
  "Our scooters use long-lasting batteries chosen for reliable Indian-city performance.",
  "Consistent maintenance preserves up to 90% of original battery capacity even after 2–3 years.",
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
            <ul className="space-y-3 text-sm text-muted-foreground">
              {tips.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary inline-block shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-foreground/80">
              Consistent care can preserve up to <span className="font-medium text-primary">90%</span> of your original battery capacity even after <span className="font-medium">2–3 years</span> of use.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h3 className="font-heading text-xl mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" /> Key takeaways
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {takeaways.map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary inline-block shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BatteryCare;
