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
              Plug into a regular 220V home socket. It's simple and safe when following the manual.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is service included?</AccordionTrigger>
            <AccordionContent>
              Yes, routine service is included. We'll coordinate convenient service windows for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How does the free trial work?</AccordionTrigger>
            <AccordionContent>
              Get 15 days free trial with no questions asked. Experience the scooter, see if it fits your routine, and then decide to continue.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What scooters do you offer?</AccordionTrigger>
            <AccordionContent>
              We offer high-quality electric scooters with different speed and range options. Base plan includes reliable daily commute scooters, while Pro plan offers premium models with enhanced performance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Are you available in Udupi/Manipal?</AccordionTrigger>
            <AccordionContent>
              Yes! We specifically serve the Udupi-Manipal region in Karnataka. Perfect for college students, working professionals, and anyone commuting in the area.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>What about insurance and registration?</AccordionTrigger>
            <AccordionContent>
              All our scooters come with proper registration and insurance coverage. You don't need to worry about any legal documentation - it's all handled.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Can I use it for long trips?</AccordionTrigger>
            <AccordionContent>
              Our scooters are designed for daily commuting. For longer trips beyond your daily allowance, extra kms are charged at ₹8/km. The Pro plan offers unlimited km for those who need more flexibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>What happens if the scooter breaks down?</AccordionTrigger>
            <AccordionContent>
              We provide roadside assistance and maintenance support. Our service team will help you get back on the road quickly, and routine maintenance is completely covered.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>Can I cancel my subscription anytime?</AccordionTrigger>
            <AccordionContent>
              You can cancel with notice per your plan terms. Contact our support team and we'll guide you through the process smoothly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>Do I need a driving license?</AccordionTrigger>
            <AccordionContent>
              Yes, a valid driving license is required to use our electric scooters. This ensures safety and compliance with local traffic regulations.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;