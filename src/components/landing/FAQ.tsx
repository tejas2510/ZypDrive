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
              No, you can start from ₹1,799 per month with no downpayment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What if I ride more than 40 km/day?</AccordionTrigger>
            <AccordionContent>
              Extra kms are charged at ₹8/km. Use the calculator to estimate your monthly cost.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I charge the scooter?</AccordionTrigger>
            <AccordionContent>
              Plug into a regular 220V home socket. It’s simple and safe when following the manual.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is service included?</AccordionTrigger>
            <AccordionContent>
              Yes, routine service is included. We’ll coordinate convenient service windows for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Can I cancel?</AccordionTrigger>
            <AccordionContent>
              You can cancel with notice per your plan terms. Contact support and we’ll guide you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;