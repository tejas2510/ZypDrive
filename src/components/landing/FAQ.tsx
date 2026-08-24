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
              No downpayment. You start with a <span className="font-medium">one-time</span> onboarding fee starting at ₹2,000 (non-refundable, and never charged again on renewal), plus your monthly rental in advance — starting at ₹1,999/month, depending on the plan you choose.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-plans">
            <AccordionTrigger>What plans do you offer?</AccordionTrigger>
            <AccordionContent>
              We offer three plans:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><span className="font-medium">Green</span> — ₹1,999/month · 30 km/day (750 km/month free) · extra km at ₹4/km.</li>
                <li><span className="font-medium">Plus</span> — ₹2,599/month · 40 km/day (1,000 km/month free) · extra km at ₹5/km.</li>
                <li><span className="font-medium">Gig Rider</span> — ₹1,250/week · 80 km/day (2,000 km/month free) · extra km at ₹6/km. Perfect for delivery and gig workers, with <span className="font-medium">all maintenance free</span>.</li>
              </ul>
              All plans include free routine service for the first year (50% discount on actual bills from the 2nd year), home charging and insurance cover.

            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What if I ride more than my included km?</AccordionTrigger>
            <AccordionContent>
              Extra kilometres are charged at ₹4/km on the Green plan, ₹5/km on the Plus plan and ₹6/km on the Gig Rider plan. Note: unused km do not carry forward to the next month.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-double-ride">
            <AccordionTrigger>Can I share the scooter with a friend or colleague?</AccordionTrigger>
            <AccordionContent>
              Yes! Double-ride is fully supported. Share with a loved one, friend or colleague and split the cost — that's an easy way to cut your monthly commute spend in half.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-agreement">
            <AccordionTrigger>How long is the rental agreement?</AccordionTrigger>
            <AccordionContent>
              The first rental agreement is for 12 months (1 year) from the start date. After that, a new agreement can be made with the same or revised terms — once we verify your usage and our support team confirms a smooth ride history. Renewals continue at the prevailing monthly rental or as decided by the management, and the onboarding fee is <span className="font-medium">not</span> charged again.
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
              Routine service is included free for the first 12 months on every plan — including Gig Rider, where all maintenance is free. From the 2nd year, you get a 50% discount on actual service charges if service is required. We'll coordinate convenient service windows for you.
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
              We offer a range of Indian-made electric scooter models with varying speed and range options, all chosen for safe, comfortable daily commuting.
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
              All our scooters are RTO-registered high-speed scooters. Comprehensive insurance is covered in the first year, and third-party insurance from the 2nd year onwards. From the 2nd year, any damage to the vehicle or personal damage is on your account, at actuals as per our authorised service centre. Please always carry your driving licence and insurance copy, and wear a helmet ⛑️.
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
              Yes 🎉 After completing <span className="font-medium">3 years</span> you can buy the scooter at <span className="font-medium">40–50% of the original price</span>, and after <span className="font-medium">5 years</span> at <span className="font-medium">25–30%</span> — or at a price we mutually agree upon.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-parking">
            <AccordionTrigger>Where should I park the scooter?</AccordionTrigger>
            <AccordionContent>
              Please park your scooter in a <span className="font-medium">covered shed or parking area</span> at home or office whenever possible. This protects the electronic dashboard and other components from rain, dust and the hot summer sun. Short outdoor stops (a restaurant, the market) are completely fine — just try to avoid leaving it exposed to heavy rains for long periods.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-11">
            <AccordionTrigger>How can I cancel my subscription?</AccordionTrigger>
            <AccordionContent>
              You can cancel by giving 15 days prior notice as per the terms of your selected plan. Any remaining kilometres are forfeited, and the onboarding fee is a one-time non-refundable charge.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-docs">
            <AccordionTrigger>What documents do I need to subscribe?</AccordionTrigger>
            <AccordionContent>
              Please keep these ready for KYC:
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Aadhaar card</li>
                <li>Driving licence</li>
                <li>Permanent residential address proof</li>
                <li>Current residential address proof</li>
                <li>Your latest salary slip</li>
                <li>A letter from your company HR confirming your position and recommending the subscription</li>
              </ul>

              It's also BYOH — bring your own helmet — and do follow our Facebook, Instagram, X and LinkedIn pages for regular updates.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-accident">
            <AccordionTrigger>What should I do in case of an accident or theft?</AccordionTrigger>
            <AccordionContent>
              Call our customer service immediately on <span className="font-medium">+91 91087 21342</span>. For an accident, all costs involved in vehicle damage and self-damage are on your account — please ride with caution and care. For theft, we'll help you file a complaint at the local police station; always park in a safe, secure place and keep the scooter locked.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-challan">
            <AccordionTrigger>Who pays RTO challans?</AccordionTrigger>
            <AccordionContent>
              Any RTO challan raised during your usage period, for any reason, must be paid by you immediately.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-12">
            <AccordionTrigger>Do I need a driving licence?</AccordionTrigger>
            <AccordionContent>
              Yes. You need a valid driving licence, and you should always carry your insurance copy and wear a helmet — for your own safety and comfort on the road.
            </AccordionContent>
          </AccordionItem>

        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
