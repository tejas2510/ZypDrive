import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Card } from "@/components/ui/card";
import { ScrollText } from "lucide-react";

const sections = [
  {
    title: "1. Eligibility",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <span className="font-medium text-foreground">High-speed, RTO-registered scooters:</span> Renters
          must be at least 18 years old and hold a valid government-issued ID along with a valid
          Driving Licence.
        </li>
        <li>
          A valid insurance copy and helmet must be carried and worn on every ride.
        </li>
      </ul>
    ),
  },
  {
    title: "2. KYC",
    body: (
      <>
        <p>Before we hand over a scooter, please keep the following ready:</p>
        <ul className="list-disc pl-5 space-y-1 mt-2">
          <li>Aadhaar card</li>
          <li>Driving licence</li>
          <li>Permanent residential address proof</li>
          <li>Current residential address proof</li>
          <li>Your latest salary slip</li>
          <li>
            A letter from your company HR confirming your position and recommending the subscription
          </li>

          <li>Your own helmet (BYOH — bring your own helmet)</li>
          <li>
            Follow our Facebook, Instagram, X and LinkedIn pages for regular updates
          </li>
        </ul>
      </>
    ),
  },

  {
    title: "3. Onboarding fee and monthly rentals",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          A <span className="font-medium text-foreground">one-time</span> onboarding fee as per our latest
          plans — <span className="font-medium text-foreground">₹2,000 (Green) / ₹3,000 (Plus) / ₹2,000 (Gig Rider, plus a ₹3,000 refundable deposit)</span> — is payable at the time of joining.
          This onboarding fee is{" "}
          <span className="font-medium text-foreground">strictly non-refundable</span> and is{" "}
          <span className="font-medium text-foreground">not charged again on renewal</span>.
        </li>
        <li>
          Monthly rentals start at <span className="font-medium text-foreground">₹1,999</span> on the
          Green plan and <span className="font-medium text-foreground">₹2,599</span> on the Plus plan.
          The Gig Rider plan is billed weekly at{" "}
          <span className="font-medium text-foreground">₹1,250/week</span>. Rentals are payable in
          advance and may be revised in line with operational costs. If the agreement is cancelled,
          the advance rental for the unused portion is non-refundable.
        </li>
        <li>
          Included kilometres: <span className="font-medium text-foreground">Green — 750 km/month</span> (extra
          at ₹4/km), <span className="font-medium text-foreground">Plus — 1,000 km/month</span> (extra at
          ₹5/km), <span className="font-medium text-foreground">Gig Rider — 2,000 km/month</span> (extra
          at ₹6/km). Unused km do not carry forward to the next month on any plan.
        </li>
        <li>
          Routine service is <span className="font-medium text-foreground">free for the first 12
          months</span> on the Green and Plus plans. From the 2nd year, a 50% discount applies on
          actual service charges. On the{" "}
          <span className="font-medium text-foreground">Gig Rider</span> plan, all maintenance and
          routine service are free.
        </li>

      </ul>
    ),
  },
  {
    title: "4. Rental Agreement Duration",
    body: (
      <p>
        Our first rental agreement is valid for{" "}
        <span className="font-medium text-foreground">12 months (1 year)</span> from the start date.
        A new agreement may be made with the same or revised terms after verification of customer
        credentials and feedback from our support team. Renewals continue at the same rental or as
        decided by the management — <span className="font-medium text-foreground">the onboarding fee
        is not charged again on renewal</span>.
      </p>
    ),
  },
  {
    title: "5. Return and Responsibility",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          You are required to return the vehicle in good condition at the end of the rental period or
          to extend the rental agreement as per your requirement.
        </li>
        <li>
          Any damage to the vehicle during the rental period is the customer's responsibility, and
          all associated costs will be borne by the customer. Our technical team will inspect the
          vehicle periodically, in your presence and at your convenience.
        </li>
        <li>
          Tampering with any electronic or mechanical parts, or replacing tyres, the battery, the
          charger or any other component without authorisation is considered a breach of the rental
          agreement. Necessary action will be initiated immediately, including a complaint at the
          nearest police station.
        </li>
        <li>
          If the vehicle is not returned by the end of the rental period and no acknowledgement or
          response is received from the customer within 48 hours, Zypdrive reserves the right to file
          an FIR.
        </li>
      </ul>
    ),
  },
  {
    title: "6. Ownership of Vehicles",
    body: (
      <p>
        All vehicles are exclusively owned by the holding company{" "}
        <span className="font-medium text-foreground">ZYPDRIVE E-MOBILITY</span>. Any unauthorised
        sale of a vehicle, battery, charger, or other equipment will result in legal action.
      </p>

    ),
  },
  {
    title: "7. Safety Precautions",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>Customers must follow all safety guidelines and obey traffic rules at all times.</li>
        <li>Wearing a helmet is mandatory while riding the vehicle.</li>
        <li>Double-ride is allowed only with a single pillion rider, also wearing a helmet.</li>
      </ul>
    ),
  },
  {
    title: "8. Personal Data Protection",
    body: (
      <p>
        Zypdrive is committed to safeguarding your personal information. We maintain strict data
        privacy and security measures, and your data is used only for verification, billing, and
        support purposes.
      </p>
    ),
  },
  {
    title: "9. Insurance Coverage",
    body: (
      <p>
        All Zypdrive vehicles are <span className="font-medium text-foreground">RTO registered</span>.
        Third-party insurance is covered for the period of your rental agreement. Any self-damage or
        vehicle damage arising from an accident will be recovered from the customer. In case of an
        accident or emergency, please reach out to customer support immediately.
      </p>
    ),
  },
  {
    title: "10. Accidents, challans and theft",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          <span className="font-medium text-foreground">In case of an accident:</span> call customer
          service immediately on{" "}
          <a href="tel:+919108721342" className="text-primary hover:underline">
            +91-9108721342
          </a>
          . All costs involved in damage to the vehicle and self-damage are on the subscriber's
          account. Please drive with caution and care.
        </li>
        <li>
          <span className="font-medium text-foreground">RTO challans:</span> any challan raised
          during your usage period, for any reason, must be paid by the subscriber immediately.
        </li>
        <li>
          <span className="font-medium text-foreground">In case of theft:</span> call{" "}
          <a href="tel:+919108721342" className="text-primary hover:underline">
            +91-9108721342
          </a>{" "}
          so we can file a complaint with the local police station. Always park the scooter in a
          safe, secure place and keep it locked.
        </li>
      </ul>
    ),
  },
  {
    title: "11. Cancellation",
    body: (
      <p>
        All cancellations require a <span className="font-medium text-foreground">15 days notice
        period</span>. Any remaining kilometres will be forfeited. The onboarding fee remains
        non-refundable, and unused km neither carry forward nor are refundable.
      </p>
    ),
  },

  {
    title: "12. Customer Support",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Email:{" "}
          <a
            href="mailto:contact@zypdrive.com"
            className="text-primary hover:underline break-all"
          >
            contact@zypdrive.com
          </a>
        </li>
        <li>
          Phone / WhatsApp:{" "}
          <a href="tel:+919108721342" className="text-primary hover:underline">
            +91-9108721342
          </a>
        </li>
      </ul>
    ),
  },
];

const Terms = () => {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-secondary/30 to-background border-b">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-xs md:text-sm">
            <ScrollText className="w-3.5 h-3.5 text-primary" /> Legal
          </span>
          <h1 className="mt-4 font-heading text-3xl md:text-5xl">
            Terms &amp; <span className="text-gradient">Conditions</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Please read these terms carefully before subscribing to a Zypdrive scooter rental.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Last updated: May 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-10 md:py-14">
        <div className="container mx-auto px-4 max-w-3xl">
          <Card className="p-6 md:p-10 space-y-8 text-sm md:text-base text-muted-foreground leading-relaxed">
            {sections.map((s) => (
              <div key={s.title}>
                <h2 className="font-heading text-lg md:text-xl text-foreground mb-3">
                  {s.title}
                </h2>
                <div className="space-y-2">{s.body}</div>
              </div>
            ))}

            <div className="pt-6 border-t text-xs text-muted-foreground">
              By subscribing to Zypdrive, you confirm that you have read, understood, and agreed to
              the terms above. Zypdrive reserves the right to update these terms at any time;
              continued use of our service constitutes acceptance of the revised terms.
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Terms;
