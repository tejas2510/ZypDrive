import { Bike, CheckCircle2, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";

const steps = [
  {
    title: "Choose plan & apply",
    desc: "Tell us about your commute and pick the plan that fits your daily ride.",
    Icon: FileText,
  },
  {
    title: "Complete your KYC",
    desc: "Share a few documents — we verify and schedule your delivery.",
    Icon: CheckCircle2,
  },
  {
    title: "Ride & relax",
    desc: "Charge at home and ride daily. Routine service is on us for the first year.",
    Icon: Bike,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-10">How it works</h2>
        <div className="grid md:grid-cols-3 gap-5 items-stretch">
          {steps.map(({ title, desc, Icon }, i) => (
            <Card key={title} className="p-6 card-hover">
              <div className="h-12 w-12 rounded-lg bg-primary/10 grid place-items-center mb-4">
                <Icon className="text-primary" />
              </div>
              <div className="text-xs text-muted-foreground mb-1">Step {i + 1}</div>
              <h3 className="font-semibold text-lg mb-1">{title}</h3>
              <p className="text-muted-foreground text-sm">{desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
