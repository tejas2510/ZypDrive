import * as React from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Asha, Receptionist",
    text: "Zypdrive made my commute stress-free. No more waiting for buses!",
  },
  {
    name: "Nagma, Retail Associate",
    text: "Fixed monthly cost helped me plan better. Charging is easy at home.",
  },
  {
    name: "Sunita, Office Admin",
    text: "Service included means one less thing to worry about.",
  },
  {
    name: "Kavya, Nurse",
    text: "Safe, reliable scooter. Reached shifts on time every day.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-14 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-6">What riders say</h2>
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {testimonials.map((t) => (
              <CarouselItem key={t.name} className="basis-auto md:basis-1/2 lg:basis-1/3 px-3">
                <Card className="p-5 h-full card-hover">
                  <p className="text-sm">“{t.text}”</p>
                  <div className="mt-3 text-xs text-muted-foreground">{t.name}</div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;