import * as React from "react";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import asha from "@/assets/rider-asha.webp";
import nagma from "@/assets/rider-nagma.webp";
import sunita from "@/assets/rider-sunita.webp";
import kavya from "@/assets/rider-kavya.webp";

const testimonials = [
  {
    name: "Asha Patel",
    role: "Software Engineer",
    text: "Zypdrive has transformed my daily commute. No more waiting for buses or dealing with crowded public transport. The scooter is reliable and the service is excellent.",
    rating: 5,
    img: asha,
  },
  {
    name: "Nagma Khan",
    role: "Marketing Manager",
    text: "As a working mother, time is precious. Zypdrive saves me hours every week and gives me the freedom to manage my schedule better. Highly recommended!",
    rating: 5,
    img: nagma,
  },
  {
    name: "Kavya Sharma",
    role: "HR Executive",
    text: "The subscription model is perfect for me. No upfront costs, reliable service, and I can focus on my work instead of worrying about transportation.",
    rating: 5,
    img: kavya,
  },
  {
    name: "Sunita Reddy",
    role: "Teacher",
    text: "Safe, convenient, and eco-friendly. Zypdrive understands the needs of working women. The scooter has made my daily life so much easier.",
    rating: 5,
    img: sunita,
  },
  {
    name: "Priya Gupta",
    role: "Doctor",
    text: "Emergency calls don't wait for buses. With Zypdrive, I can reach my patients quickly and efficiently. It's been a game-changer for my medical practice.",
    rating: 5,
    img: asha,
  },
  {
    name: "Meera Singh",
    role: "Financial Analyst",
    text: "Cost-effective and time-saving. I calculated the savings compared to daily auto-rickshaws and buses - Zypdrive wins hands down. Plus, it's empowering!",
    rating: 5,
    img: kavya,
  },
  {
    name: "Rajni Verma",
    role: "Sales Executive",
    text: "Client meetings across the city are no longer stressful. The scooter gives me the flexibility to plan my day better and never miss an important meeting.",
    rating: 5,
    img: nagma,
  },
  {
    name: "Pooja Agarwal",
    role: "IT Consultant",
    text: "As someone who works late hours, safety is paramount. Zypdrive's well-maintained scooters and reliable service give me peace of mind every night.",
    rating: 5,
    img: sunita,
  },
];

const brands = ["DailyWork", "UrbanMart", "CarePlus Clinics", "OfficeHub", "FreshLane"];

const StarRow = ({ rating }: { rating: number }) => (
  <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className={i < rating ? "text-accent" : "text-muted-foreground"} fill="currentColor" size={16} />
    ))}
  </div>
);

const Testimonials = () => {
  const [api, setApi] = React.useState<any>(null);
  const [hovering, setHovering] = React.useState(false);

  React.useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      if (!hovering) api.scrollNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [api, hovering]);

  return (
    <section id="testimonials" className="py-14 md:py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-6">What riders say</h2>

        <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="relative">
          <Carousel setApi={setApi} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.name} className="basis-full md:basis-1/2 lg:basis-1/3 px-3">
                  <Card className="p-5 h-full card-hover">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={t.img} alt={`${t.name} photo`} />
                        <AvatarFallback>{t.name.slice(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{t.name}</div>
                        <div className="text-xs text-muted-foreground">{t.role}</div>
                      </div>
                    </div>
                    <p className="text-sm mt-3">“{t.text}”</p>
                    <div className="mt-3"><StarRow rating={t.rating} /></div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        <div className="mt-8 overflow-hidden">
          <div className="flex items-center gap-10 whitespace-nowrap animate-marquee" aria-hidden>
            {[...brands, ...brands].map((b, i) => (
              <span key={i} className="text-xs md:text-sm text-muted-foreground">Trusted by riders from {b}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;