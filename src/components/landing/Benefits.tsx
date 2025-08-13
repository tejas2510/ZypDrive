import { BatteryCharging, Home, ShieldCheck, Wallet } from "lucide-react";
import { Card } from "@/components/ui/card";

const items = [
  {
    title: "Safe, reliable commutes",
    desc: "Well-maintained scooters, visible support, and routine service included.",
    Icon: ShieldCheck,
  },
  {
    title: "No downpayment",
    desc: "Predictable monthly cost starting at ₹1,799. Cancel anytime with notice.",
    Icon: Wallet,
  },
  {
    title: "Charge at home",
    desc: "40 km/day included. Plug into a regular socket and go.",
    Icon: BatteryCharging,
  },
];

const Benefits = () => {
  return (
    <section id="why" className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">Why Zypdrive</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {items.map(({ title, desc, Icon }) => (
            <Card key={title} className="p-6 card-hover">
              <div className="h-12 w-12 rounded-lg bg-primary/10 grid place-items-center mb-4">
                <Icon className="text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;