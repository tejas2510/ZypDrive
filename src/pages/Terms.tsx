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
          <span className="font-medium text-foreground">Low-speed scooters:</span> Renters must be at
          least 18 years old and have a valid government-issued ID along with a valid Driving Licence.
        </li>
        <li>
          <span className="font-medium text-foreground">High-speed scooters:</span> Not introduced as
          of now.
        </li>
      </ul>
    ),
  },
  {
    title: "2. KYC",
    body: (
      <p>
        Customers must present a government-issued ID (Aadhaar Card), Driving Licence and a recent
        photograph, along with a local address proof or a letter of recommendation from the HR
        department of their employer, in order to book or rent a vehicle from Zypdrive.
      </p>
    ),
  },
  {
    title: "3. Onboarding fee and monthly rentals",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          A one-time onboarding fee of <span className="font-medium text-foreground">₹2,000</span> is
          payable at the time of joining. This onboarding fee is{" "}
          <span className="font-medium text-foreground">strictly non-refundable</span> in case the
          rental agreement is cancelled at any time.
        </li>
        <li>
          The monthly rental is <span className="font-medium text-foreground">₹1,799</span>, payable
          in advance. This amount may be revised in line with operational costs. If the agreement is
          cancelled, the advance rental for the unused portion is non-refundable.
        </li>
        <li>
          1,000 km/month are included with every plan. Additional kilometres are billed at{" "}
          <span className="font-medium text-foreground">₹2.5/km</span>. Unused km do not carry
          forward to the following month.
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
        credentials and feedback from our support team. Renewal terms will continue to include the
        ₹2,000 onboarding fee (if applicable) and the prevailing rental rate as per company policy.
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
        All vehicles are exclusively owned by Zypdrive. Any unauthorised sale of a vehicle, battery,
        charger, or other equipment will result in legal action.
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
        All Zypdrive vehicles are non-RTO vehicles and come with{" "}
        <span className="font-medium text-foreground">third-party insurance coverage</span>.
        Registration is not required. In case of an accident or emergency, please reach out to
        customer support immediately.
      </p>
    ),
  },
  {
    title: "10. Cancellation",
    body: (
      <p>
        You may cancel your subscription by giving prior notice as per the terms of your selected
        plan. The onboarding fee remains non-refundable. Any unused km balance does not carry forward
        and is not refundable.
      </p>
    ),
  },
  {
    title: "11. Customer Support",
    body: (
      <ul className="list-disc pl-5 space-y-1">
        <li>
          Email:{" "}
          <a
            href="mailto:contact.mohandaspatil@gmail.com"
            className="text-primary hover:underline break-all"
          >
            contact.mohandaspatil@gmail.com
          </a>
        </li>
        <li>
          Phone / WhatsApp:{" "}
          <a href="tel:+919108721342" className="text-primary hover:underline">
            +91-9108721342
          </a>
        </li>
        <li>
          Address: G–701, Sai Radha Pride Apartments, Brahmagiri Circle, Udupi – 576 101
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
