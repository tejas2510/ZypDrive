import scooterImg from "@/assets/scooter-komaki-xone.webp";
import { Card } from "@/components/ui/card";

const Showcase = () => {
  return (
    <section id="scooter" className="py-14 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src={scooterImg}
              alt="Electric scooter similar to Komaki X-One in studio"
              className="w-full h-auto rounded-xl shadow-elevated"
              loading="lazy"
              width={1024}
              height={768}
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-4xl">Scooter showcase</h2>
            <p className="text-muted-foreground mt-2">Komaki X-One or similar model, chosen for comfort, practicality and easy city rides.</p>
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <Card className="p-4 bg-background">
                <div className="text-sm text-muted-foreground">Range (real-world)</div>
                <div className="text-xl font-semibold">Up to 40–50 km/day</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-sm text-muted-foreground">Charging</div>
                <div className="text-xl font-semibold">Home 220V socket</div>
              </Card>
              <Card className="p-4 bg-background">
                <div className="text-sm text-muted-foreground">Brakes & safety</div>
                <div className="text-xl font-semibold">Reliable city braking</div>
              </Card>
              <Card className="p-4 bg-background">
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