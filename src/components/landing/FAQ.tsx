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
              No downpayment. You start with just a one-time onboarding fee of ₹2,000 (non-refundable) and ₹1,799/month rental in advance.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What if I ride more than 40 km/day?</AccordionTrigger>
            <AccordionContent>
              You get 40 km/day included — that's 1,000 km free every month. Anything above 1,000 km/month is charged at just ₹2.5/km. Note: unused km do not carry forward to the next month.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-double-ride">
            <AccordionTrigger>Can I share the scooter with a friend or colleague?</AccordionTrigger>
            <AccordionContent>
              Yes! Double-ride is fully supported. Share with a loved one, friend or colleague and split the cost — that's just ₹899/month per person.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-agreement">
            <AccordionTrigger>How long is the rental agreement?</AccordionTrigger>
            <AccordionContent>
              The first rental agreement is for 12 months (1 year) from the start date. After that, a new agreement can be made with the same or revised terms — once we verify your usage and our support team confirms a smooth ride history. Renewals continue with the prevailing monthly rental as per company policy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do I charge the scooter?</AccordionTrigger>
            <AccordionContent>
              Plug into a regular 220V home socket. A full charge takes about 3–4 hours, costs roughly ₹8–10 per day, and gives you 70+ km of range — easily covering a full day of commuting.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is service included?</AccordionTrigger>
            <AccordionContent>
              Yes, routine service is fully included. We'll coordinate convenient service windows for you.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How does the free trial work?</AccordionTrigger>
            <AccordionContent>
              Get a 15-day free trial with no questions asked. Experience the scooter, see if it fits your routine, and then decide to continue. If you love the ride, please share your experience and tag us on Facebook, Instagram, LinkedIn or X — and don't forget to like our pages while you're there!
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>What scooters do you offer?</AccordionTrigger>
            <AccordionContent>
              We offer a range of electric scooter models with varying speed and range options, all chosen for safe, comfortable daily commuting.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>Are you available in Udupi / Manipal?</AccordionTrigger>
            <AccordionContent>
              Yes — we currently serve the Udupi–Manipal region in Karnataka, and we'll be expanding to other cities shortly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>What about insurance and registration?</AccordionTrigger>
            <AccordionContent>
              All our scooters are non-RTO vehicles, so no registration is required on your part. Third-party insurance is already covered. Please always carry your driving licence and wear a helmet ⛑️ for your safety.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>Can I use it for long trips?</AccordionTrigger>
            <AccordionContent>
              Our scooters are designed mainly for daily commute and city travel within Udupi–Manipal. Long inter-city trips are not advisable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>What if the scooter breaks down?</AccordionTrigger>
            <AccordionContent>
              Please call or WhatsApp us on +91 91087 21342. Our support team will assist you with roadside support or a replacement scooter based on the situation.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-buy">
            <AccordionTrigger>Can I buy my scooter later?</AccordionTrigger>
            <AccordionContent>
              Yes 🎉 After completing <span className="font-medium">3 years</span> of your rental agreement, you'll have the option to buy the scooter at <span className="font-medium">40–50% of the original price</span>, or at a price we mutually agree upon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-parking">
            <AccordionTrigger>Where should I park the scooter?</AccordionTrigger>
            <AccordionContent>
              Please park your scooter in a <span className="font-medium">covered shed or parking area</span> at home or office whenever possible. This protects the electronic dashboard and other components from heavy rain. Short outdoor stops (a restaurant, the market) are completely fine — just try to avoid leaving it exposed to heavy rains for long periods.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>How can I cancel my subscription?</AccordionTrigger>
            <AccordionContent>
              You can cancel your subscription by giving 15 days prior notice as per the terms of your selected plan. Please note that the ₹2,000 onboarding fee is non-refundable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>Do I need a driving licence?</AccordionTrigger>
            <AccordionContent>
              Our scooters are non-RTO vehicles, so no registration is required. However, we only provide scooters to riders with a valid driving licence to ensure you can ride comfortably and safely, avoiding any issues later.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
