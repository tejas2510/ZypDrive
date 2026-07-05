import scooterImg from "@/assets/scooter-zypdrive.png";
import { Card } from "@/components/ui/card";

const Showcase = () => {
  return (
    <section id="scooter" className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={scooterImg}
              alt="Zypdrive branded white and pink electric scooter for women"
              className="w-full h-auto rounded-xl shadow-elevated"
              loading="lazy"
              width={1280}
              height={1024}
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">Scooter showcase</h2>
            <p className="text-muted-foreground mt-2">Reliable Indian-made electric scooters, chosen for comfort, practicality and easy city rides.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <Card className="p-4 bg-background">
                <div className="text-sm text-muted-foreground">Included mileage</div>
                <div className="text-xl font-semibold">From 30 km/day · 750 km/month free</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-sm text-muted-foreground">Range per full charge</div>
                <div className="text-xl font-semibold">70+ km</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-sm text-muted-foreground">Full charging time</div>
                <div className="text-xl font-semibold">3–4 hours</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-sm text-muted-foreground">Charging cost</div>
                <div className="text-xl font-semibold">~₹8–10 / day</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-sm text-muted-foreground">Charging</div>
                <div className="text-xl font-semibold">Home 220V socket</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-sm text-muted-foreground">Brakes & safety</div>
                <div className="text-xl font-semibold">Reliable city braking</div>
              </Card>
              <Card className="p-4 bg-background sm:col-span-2">
                <div className="text-sm text-muted-foreground">Service</div>
                <div className="text-xl font-semibold">Routine service included</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;