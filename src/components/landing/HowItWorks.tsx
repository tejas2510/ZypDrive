import { Bike, CheckCircle2, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Choose plan & apply",
    desc: "Tell us about your commute and pick the plan that fits your daily ride.",
    Icon: FileText,
    items: [] as string[],
  },
  {
    title: "Keep these ready for KYC",
    desc: "Share these documents and we'll verify and schedule your delivery.",
    Icon: CheckCircle2,
    items: [
      "Aadhaar card",
      "Driving licence",
      "Permanent residential address proof",
      "Current residential address proof",
      "Letter from your company HR confirming your position and recommending the subscription",
      "BYOH — bring your own helmet",
      "Follow us on Facebook, Instagram, X and LinkedIn for updates",
    ],
  },
  {
    title: "Ride & relax",
    desc: "Charge at home and ride daily. Routine service is on us for the first year.",
    Icon: Bike,
    items: [] as string[],
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">How it works</h2>
        <div className="grid md:grid-cols-3 gap-5 items-start">
          {steps.map(({ title, desc, Icon, items }, i) => (
            <Card key={title} className="p-6 card-hover">
              <div className="h-12 w-12 rounded-lg bg-primary/10 grid place-items-center mb-4">
                <Icon className="text-primary" />
              </div>
              <div className="text-xs text-muted-foreground mb-1">Step {i + 1}</div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
              {items.length > 0 && (
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {items.map((it) => (
                    <li key={it} className="flex gap-2.5">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary inline-block shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
