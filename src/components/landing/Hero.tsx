import { Button } from "@/components/ui/button";

import heroImg from "@/assets/hero-woman-scooter.webp";
import { CheckCircle, BatteryCharging, Home, Wrench } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handlePointer = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty("--pointer-x", `${x}px`);
    el.style.setProperty("--pointer-y", `${y}px`);
  };

  return (
    <header id="home" className="relative">
      <div
        ref={ref}
        onPointerMove={handlePointer}
        className="hero-spotlight"
      >
        <div className="container mx-auto px-4 py-10 md:py-16">


          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-left">
              {/* Free Trial Highlight */}
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-primary text-white mb-4">
                <span className="text-lg">🎉</span>
                <span className="font-semibold text-sm md:text-base">FREE TRIAL - 15 DAYS. NO QUESTIONS ASKED!</span>
                <span className="text-lg">🎉</span>
              </div>
              
              <p className="inline-flex items-center gap-2 text-xs md:text-sm px-3 py-1 rounded-full bg-secondary">
                Urban Mobility Redefined • Women-first
              </p>
              <h1 className="mt-4 font-heading text-4xl md:text-5xl leading-tight">
                Electric scooters for working women starting from
                <span className="block text-gradient">₹1,999 per month</span>
              </h1>
              <p className="mt-4 text-muted-foreground max-w-prose">
                Commute with confidence and predictable costs. No downpayment — just a one-time ₹2,000 onboarding fee (paid once, never on renewal · non-refundable). From 750 km/month free, charge at home, and routine service handled by us.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Button asChild variant="hero" size="lg">
                  <a href="#pricing">See plans</a>
                </Button>
                <Button asChild variant="secondary" size="lg">
                  <a href="#contact">Talk to us</a>
                </Button>
              </div>

              <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <li className="flex items-center gap-2"><CheckCircle className="text-primary" /> No downpayment</li>
                <li className="flex items-center gap-2"><BatteryCharging className="text-primary" /> Charge at home</li>
                <li className="flex items-center gap-2"><Home className="text-primary" /> From 750 km/month free</li>
                <li className="flex items-center gap-2"><Wrench className="text-primary" /> Routine service included</li>
              </ul>

              <div className="mt-6 text-xs text-muted-foreground">Trusted by 120+ riders in Bengaluru</div>
            </div>

            <div className="relative">
              <img
                src={heroImg}
                alt="Confident woman riding an electric scooter for her work commute"
                className="w-full h-auto rounded-xl shadow-elevated"
                loading="eager"
                width={1600}
                height={900}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
