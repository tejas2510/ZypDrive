import TrialBanner from "@/components/landing/TrialBanner";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import JourneyComparison from "@/components/landing/JourneyComparison";
import Pricing from "@/components/landing/Pricing";
import HowItWorks from "@/components/landing/HowItWorks";
import Showcase from "@/components/landing/Showcase";
import BatteryCare from "@/components/landing/BatteryCare";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import Contact from "@/components/landing/Contact";
import Footer from "@/components/landing/Footer";

const Index = () => {
  const serviceLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Zypdrive Electric Scooter Subscription',
    provider: {
      '@type': 'Organization',
      name: 'Zypdrive',
    },
    areaServed: 'India',
    audience: { '@type': 'PeopleAudience', audienceType: 'Working-class women' },
    offers: {
      '@type': 'Offer',
      price: '1999',
      priceCurrency: 'INR',
      description: 'Monthly subscription starting at ₹1,999 with 750 km/month free (Green plan, 30 km/day), no downpayment, routine service included',
    },
  };

  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Is there any downpayment?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No, you can start from ₹1,999 per month on the Green plan with no downpayment — only a one-time ₹2,000 onboarding fee.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if I ride more than my included km?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Green plan includes 30 km/day (750 km/month) with ₹5/km extra. Plus plan includes 40 km/day (1,000 km/month) with ₹6/km extra. Use the calculator to estimate your monthly cost.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I charge the scooter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Plug into a regular 220V home socket. It’s simple and safe when following the manual.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is service included?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, routine service is included. We’ll coordinate convenient service windows for you.',
        },
      },
    ],
  };

  return (
    <main>
      <TrialBanner />
      <Navbar />
      <Hero />
      <Benefits />
      <JourneyComparison />
      <Pricing />
      <HowItWorks />
      <Showcase />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />

      {/* Structured data for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </main>
  );
};

export default Index;
