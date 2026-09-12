import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MessageCircle,
  ClipboardList,
  FileCheck2,
  IndianRupee,
  KeyRound,
  Bike,
  Wrench,
  RefreshCw,
  Route as RouteIcon,
} from "lucide-react";

type Stage = {
  icon: typeof Bike;
  tag: string;
  title: string;
  desc: string;
  points: string[];
};

const stages: Stage[] = [
  {
    icon: MessageCircle,
    tag: "Step 1",
    title: "Say hello",
    desc: "Reach out on WhatsApp, call us, or fill the contact form on the home page. We reply within 24 hours.",
    points: [
      "Tell us where you live and work (Udupi / Manipal and around)",
      "Share your daily riding distance, both ways",
      "Ask us anything — no commitment at this stage",
    ],
  },
  {
    icon: ClipboardList,
    tag: "Step 2",
    title: "Pick the plan that fits",
    desc: "We walk you through Green, Plus and Gig Rider and help you pick based on your real daily kilometres.",
    points: [
      "Green — 30 km/day (750 km a month), extra km at ₹4",
      "Plus — 40 km/day (1,000 km a month), extra km at ₹5",
      "Gig Rider — weekly plan, 80 km/day, extra km at ₹6",
      "One-time onboarding fee: ₹2,000 (Green), ₹3,000 (Plus), ₹2,000 (Gig Rider) — non-refundable",
    ],
  },
  {
    icon: FileCheck2,
    tag: "Step 3",
    title: "Documents & verification",
    desc: "A short, simple check. Send clear photos or bring the originals — we verify the same day in most cases.",
    points: [
      "Aadhaar card",
      "Valid driving licence (two-wheeler)",
      "PAN card",
      "Your latest salary slip",
      "Letter from your employer / HR, or proof of work",
      "Current address proof",
      "Two passport-size photos",
      "Emergency contact number",
      "Follow Zypdrive on Instagram, Facebook, X and LinkedIn",
    ],
  },
  {
    icon: IndianRupee,
    tag: "Step 4",
    title: "Agreement & first payment",
    desc: "We sign a simple 12-month subscription agreement and collect the first payment.",
    points: [
      "12-month rental agreement, explained line by line",
      "One-time onboarding fee as per your plan + first month's rental in advance",
      "Gig Rider only: a ₹3,000 refundable security deposit is collected at handover",
      "Insurance and RTO paperwork stay with us — nothing for you to chase",
      "All vehicles are owned by ZYPDRIVE E-MOBILITY",
    ],
  },
  {
    icon: KeyRound,
    tag: "Step 5",
    title: "Keys in your hand",
    desc: "We deliver the scooter, fully charged, and take you through everything before you ride off.",
    points: [
      "Handover of scooter, charger, keys and documents",
      "A short ride-along and controls walkthrough",
      "Charging demo on a normal 220V home socket",
      "Safety, parking and battery care briefing",
    ],
  },
  {
    icon: Bike,
    tag: "Step 6",
    title: "Ride every day",
    desc: "Charge at home, ride to work and back, and keep your evenings for yourself.",
    points: [
      "70+ km range on a full charge, 3–4 hours to charge",
      "Roughly ₹8–10 a day of electricity",
      "Included kilometres do not carry forward to the next month",
      "Park under cover whenever you can, especially in the rain",
    ],
  },
  {
    icon: Wrench,
    tag: "Step 7",
    title: "Service & support",
    desc: "Routine service is on us for the first year. Call us any time something feels off.",
    points: [
      "Free routine service for the first 12 months",
      "50% off actual service charges from year 2",
      "Gig Rider: all maintenance free",
      "Report damage, accidents or challans to us immediately",
    ],
  },
  {
    icon: RefreshCw,
    tag: "Step 8",
    title: "Renewal, or your own scooter",
    desc: "At the end of 12 months you choose what happens next.",
    points: [
      "Renew for another 12 months at a ₹2,000 renewal fee, at prevailing rates",
      "Option to buy the scooter after 3 or 5 years",
      "Or simply return it in good condition",
      "To stop, give us 15 days' written notice",
    ],
  },
];

const Journey = () => {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 via-secondary/30 to-background border-b">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs md:text-sm">
            <RouteIcon className="w-3.5 h-3.5 text-primary" /> The Zypdrive Ride Path
          </span>
          <h1 className="mt-4 font-heading text-3xl md:text-5xl">
            From <span className="text-gradient">"hi"</span> to your first ride
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Every step from your first message to your daily commute — what we ask for, what we hand over, and how renewal works.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* The traced path */}
            <div
              aria-hidden="true"
              className="absolute left-5 md:left-1/2 top-2 bottom-2 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary via-primary/40 to-primary/10"
            />

            <ol className="space-y-8 md:space-y-12">
              {stages.map(({ icon: Icon, tag, title, desc, points }, i) => {
                const right = i % 2 === 1;
                return (
                  <li key={title} className="relative pl-14 md:pl-0">
                    {/* Node */}
                    <span className="absolute left-5 md:left-1/2 top-4 -translate-x-1/2 z-10 grid place-items-center h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-elevated ring-4 ring-background">
                      <Icon className="h-5 w-5" />
                    </span>

                    <div
                      className={`md:w-[calc(50%-2.5rem)] ${
                        right ? "md:ml-auto" : ""
                      }`}
                    >
                      <Card className="p-5 md:p-6 card-hover">
                        <div className="text-xs font-semibold uppercase tracking-wider text-primary">
                          {tag}
                        </div>
                        <h2 className="font-heading text-xl md:text-2xl mt-1">{title}</h2>
                        <p className="text-sm text-muted-foreground mt-2">{desc}</p>
                        <ul className="mt-4 space-y-2 text-sm">
                          {points.map((p) => (
                            <li key={p} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-12 text-center">
            <h2 className="font-heading text-2xl md:text-3xl">Ready to start your path?</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Tell us about your commute — we'll take it from there.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-5">
              <Button asChild variant="hero" size="lg">
                <Link to="/#contact">Start subscription</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/#pricing">See plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Journey;
