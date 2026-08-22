import { Bike, CheckCircle2, FileText, ShieldCheck } from "lucide-react";
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

const kycDocs = [
  "Aadhaar card",
  "Driving licence",
  "Permanent residential address proof",
  "Current residential address proof",
  "HR letter confirming your position & recommending the subscription",
  "BYOH — bring your own helmet",
  "Follow us on Facebook, Instagram, X & LinkedIn for updates",
];

const KYC = () => {
  return (
    <Card className="p-6 md:p-8">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-lg bg-primary/10 grid place-items-center shrink-0">
          <ShieldCheck className="text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-lg">What you need to subscribe</h3>
          <p className="text-muted-foreground text-sm mt-0.5">
            Keep these ready so your verification is quick and your delivery is on time.
          </p>
        </div>
      </div>
      <ul className="mt-5 grid sm:grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-muted-foreground">
        {kycDocs.map((it) => (
          <li key={it} className="flex gap-2.5">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary inline-block shrink-0" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

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
        <div className="mt-5">
          <KYC />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
