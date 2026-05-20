import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Bike,
  Wallet,
  Users,
  ShieldCheck,
  Home,
  Wrench,
  Sparkles,
  Leaf,
  Heart,
} from "lucide-react";
import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";

const principles = [
  {
    icon: Bike,
    title: "Comfortable EV commute",
    desc: "Home to office and back with a smooth, weather-protected ride on a modern electric scooter.",
  },
  {
    icon: Wallet,
    title: "Almost the cost of a bus pass",
    desc: "Monthly rental is on par with what many women already spend on daily bus tickets — without the wait or crowd.",
  },
  {
    icon: Users,
    title: "Share & save 50%",
    desc: "Double ride is allowed. Split with a friend, colleague or loved one and bring your cost down to ₹899/month each.",
  },
  {
    icon: ShieldCheck,
    title: "No down payment, no EMI stress",
    desc: "No bank loans, no finance chasing you. Just ₹1,799/month plus a one-time ₹2,000 onboarding fee (non-refundable).",
  },
  {
    icon: Home,
    title: "Charge at home, your way",
    desc: "Charge at home or office only as required. Tyre pressure & wash, on your schedule.",
  },
  {
    icon: Wrench,
    title: "Maintenance on us",
    desc: "All routine maintenance is fully handled by our team — you just ride.",
  },
  {
    icon: Sparkles,
    title: "Commute as a pleasure",
    desc: "We're turning the daily office trip from a chore into something you actually look forward to.",
  },
  {
    icon: Leaf,
    title: "Eco-friendly by design",
    desc: "Every ride lowers your carbon footprint and helps build cleaner Indian cities.",
  },
];

const About = () => {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/30 to-background">
        <div className="container mx-auto px-4 py-10 md:py-14 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs md:text-sm">
            <Heart className="w-3.5 h-3.5 text-primary" /> Our story
          </span>
          <h1 className="mt-4 font-heading text-4xl md:text-6xl leading-tight">
            About <span className="text-gradient">Zypdrive</span>
          </h1>
          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            Making mobility in India seamless, shareable and sustainable — built first for the
            working women who keep our cities moving.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-[auto,1fr] gap-6 md:gap-10 items-start">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-2xl md:text-3xl">Our mission</h2>
              <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Zypdrive exists to make mobility in India <span className="text-foreground font-medium">seamless, shareable and sustainable</span> for working women. It's our vision of women empowerment — easing the troublesome daily commute from home to office and back, away from crowded buses, rainy days, hot summers and long waits at the bus stand.
                </p>
                <p>
                  We started as a simple initiative: cut the travel time, the walk from home to bus stand to office, and make it easy to pick up daily essentials on the way back home — all with the comfort of a personal ride.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles grid */}
      <section className="py-14 md:py-20 bg-secondary/40">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl">
              Our guiding <span className="text-gradient">principles</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              The promises that shape every Zypdrive ride.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p, i) => (
              <Card key={i} className="p-6 card-hover">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{p.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl">Who we are</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We are empowering women employees across Indian cities to create a shift in the mobility industry — making the office commute more efficient, easier, and cheaper on both time and money.
              </p>
              <p>
                Zypdrive is a technology-driven mobility platform that enables <span className="text-foreground font-medium">Integrated Office Mobility</span> across public and private modes of transport.
              </p>
              <p>
                We're an India-based company with a founding team that is deeply passionate about creating positive social impact through women empowerment. That mindset runs through every member of our team — we're dedicated to making a difference in the lives of working women around us.
              </p>
              <p>
                If you're passionate about urban mobility, chaotic congestion, sustainable living, and saving time and money — let's have a conversation and make a difference together.
              </p>
            </div>
          </div>

          {/* Hashtags */}
          <div className="flex flex-wrap gap-2 pt-4 border-t">
            {[
              "#GoElectric",
              "#WomenEmpowerment",
              "#EcoFriendly",
              "#SaveEarth",
              "#MakeInIndia",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 md:py-20 bg-gradient-to-br from-primary/10 to-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl">
            Ready to <span className="text-gradient">ride with us?</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Start your 15-day free trial — no questions asked.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="lg">
              <Link to="/#contact">Start subscription</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/#pricing">See pricing</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
