import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-14 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-heading text-3xl md:text-4xl text-center mb-8">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is there any downpayment?</AccordionTrigger>
            <AccordionContent>
              No, you can start from ₹1,779 per month with just a ₹2,000 onboarding fee.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What if I ride more than 40 km/day?</AccordionTrigger>
            <AccordionContent>
              Extra kms are charged at ₹8/km on the Base plan. The Pro plan offers unlimited km with no extra charges.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I charge the scooter?</AccordionTrigger>
            <AccordionContent>
              Plug into a regular 220V home socket. It's simple and safe when following the manual. Perfect for Udupi/Manipal apartments and homes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is service included?</AccordionTrigger>
            <AccordionContent>
              Yes, routine service is included. We'll coordinate convenient service windows for you across Udupi and Manipal regions.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Can I cancel anytime?</AccordionTrigger>
            <AccordionContent>
              You can cancel with 30 days notice per your plan terms. Contact support and we'll guide you through the process.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>Is it suitable for Udupi-Manipal routes?</AccordionTrigger>
            <AccordionContent>
              Absolutely! Our scooters are perfect for Udupi-Manipal commutes, campus routes, and city travel. The range easily covers daily needs in this region.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>What about monsoon season?</AccordionTrigger>
            <AccordionContent>
              The scooters are designed for Indian weather conditions. During heavy monsoons, we recommend using protective gear and following safety guidelines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>How is it different from buying a scooter?</AccordionTrigger>
            <AccordionContent>
              No huge upfront cost, no maintenance headaches, no insurance worries. Just pay monthly and ride. We handle everything else.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>What happens if the scooter breaks down?</AccordionTrigger>
            <AccordionContent>
              We provide 24/7 support and will arrange immediate replacement or repair. Your mobility won't be affected.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>Can students use this service?</AccordionTrigger>
            <AccordionContent>
              Yes! Perfect for Manipal University students and working professionals in the region. We have special considerations for student needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;