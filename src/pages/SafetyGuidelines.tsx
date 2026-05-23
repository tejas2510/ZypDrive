import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Bike, BatteryCharging, Plug, Lock, Phone, Mail } from "lucide-react";

type Section = {
  icon: typeof Bike;
  title: string;
  items: string[];
};

const sections: Section[] = [
  {
    icon: Bike,
    title: "Vehicle Safety",
    items: [
      "Wear a Helmet: Always wear a helmet while riding to ensure safety. It's mandatory as per traffic laws.",
      "Follow Traffic Rules: Obey all traffic signals, speed limits, and road signs to avoid accidents.",
      "Ride at Safe Speeds: Maintain a moderate speed, especially in crowded areas, to prevent mishaps.",
      "Avoid Overloading: Do not carry heavy luggage that can affect vehicle balance.",
      "Check Brakes & Lights: Before riding, ensure brakes, indicators, and lights are working properly.",
      "No Drunk Driving: Riding under the influence of alcohol or drugs is strictly prohibited.",
      "Park Responsibly: Always park the vehicle in designated spots to avoid penalties or towing. Any towing charges and penalties will be added to your account.",
      "Emergency Assistance: In case of breakdowns, accidents, or technical issues, contact Zypdrive support immediately.",
    ],
  },
  {
    icon: BatteryCharging,
    title: "Battery Safety",
    items: [
      "Do not remove the battery from the scooter for whatever reason. Strictly prohibited.",
      "Charge Only with Approved Chargers: Use only the provided charger to avoid damage or fire hazards.",
      "Keep Away from Water: Do not expose the battery to rain or water to prevent short circuits.",
      "Avoid Overcharging: Unplug the charger once the battery is fully charged to maintain battery life.",
      "Do Not Tamper: Any attempt to open or modify the battery is strictly prohibited.",
      "Monitor Charging Environment: Charge in a dry, ventilated area and away from flammable objects.",
    ],
  },
  {
    icon: Plug,
    title: "Charger Safety",
    items: [
      "Use Standard Power Outlets: Always use a stable power source to avoid voltage fluctuations.",
      "Do Not Use Damaged Cables: If the charging cable is damaged, report it to Zypdrive customer service immediately.",
      "Disconnect After Use: Once charging is complete, unplug the charger to prevent overheating.",
      "Keep Away from Heat & Fire: Store chargers in a cool, dry place to avoid damage.",
    ],
  },
  {
    icon: Lock,
    title: "Asset Protection & Responsibility",
    items: [
      "Secure the Vehicle: Lock the vehicle when not in use to prevent theft.",
      "Report Issues Immediately: Any damage or malfunction must be reported to Zypdrive customer support.",
      "Personal Liability: Users are responsible for any misuse, damage, or loss of the vehicle, battery, or charger during the rental period. Any damage will be charged as per the cost incurred and the customer is liable to pay the same.",
      "Return in Proper Condition: Ensure the vehicle is returned in good condition, almost as received.",
      "Covered Parking Requested: Please park the scooter in a covered shed or parking area at home or office whenever possible. This protects the electronic dashboard and other parts from heavy rain. Brief outdoor parking (e.g. at a restaurant) is usually fine — just avoid prolonged exposure to heavy rain.",
    ],
  },
];

const SafetyGuidelines = () => {
  return (
    <main>
      <Navbar />

      <section className="bg-gradient-to-br from-primary/10 via-secondary/30 to-background border-b">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs md:text-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-primary" /> Ride Safe
          </span>
          <h1 className="mt-4 font-heading text-3xl md:text-5xl">
            Safety <span className="text-gradient">Guidelines</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Your safety is our priority. A few simple habits keep every ride smooth, every battery healthy, and every journey home worry-free. Please read and follow these guidelines — for you, your loved ones, and every rider sharing the road.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl space-y-6">
          {sections.map(({ icon: Icon, title, items }) => (
            <Card key={title} className="p-6 md:p-8">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                  <Icon className="w-5 h-5 text-primary" />
                </span>
                <h2 className="font-heading text-xl md:text-2xl">{title}</h2>
              </div>
              <ol className="space-y-3">
                {items.map((it, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary text-xs font-medium text-foreground">
                      {i + 1}
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ol>
            </Card>
          ))}

          <Card className="p-6 md:p-8 bg-primary/5 border-primary/20">
            <h2 className="font-heading text-lg md:text-xl mb-2">Jurisdiction</h2>
            <p className="text-sm md:text-base text-muted-foreground">
              All disputes shall be subject to the jurisdiction of the Udupi court for any legal actions.
            </p>
          </Card>

          <Card className="p-6 md:p-8">
            <h2 className="font-heading text-lg md:text-xl mb-3">Need help? We're one call away.</h2>
            <p className="text-sm md:text-base text-muted-foreground mb-4">
              By using Zypdrive services, you agree to adhere to these safety guidelines. Violations may lead to penalties, suspension of services, or both.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 text-sm">
              <a href="tel:+919108721342" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium">
                <Phone className="w-4 h-4" /> +91 91087 21342
              </a>
              <a href="mailto:contact.mohandaspatil@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors text-primary font-medium break-all">
                <Mail className="w-4 h-4" /> contact.mohandaspatil@gmail.com
              </a>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default SafetyGuidelines;
