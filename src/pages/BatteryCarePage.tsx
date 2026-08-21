import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import BatteryCare from "@/components/landing/BatteryCare";
import { BatteryCharging } from "lucide-react";

const BatteryCarePage = () => {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 via-secondary/30 to-background border-b">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs md:text-sm">
            <BatteryCharging className="w-3.5 h-3.5 text-primary" /> Battery care
          </span>
          <h1 className="mt-4 font-heading text-3xl md:text-5xl">
            Care for your <span className="text-gradient">battery</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            A healthy battery means a worry-free commute. These few habits keep your range strong for years.
          </p>
        </div>
      </section>

      <BatteryCare />
      <Footer />
    </main>
  );
};

export default BatteryCarePage;
