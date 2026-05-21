import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PartnerLogos from '@/components/PartnerLogos';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import ForWhom from '@/components/ForWhom';
import Process from '@/components/Process';
import Calculator from '@/components/Calculator';
import Benefits from '@/components/Benefits';
import Pricing from '@/components/Pricing';
import Comparison from '@/components/Comparison';
import Destinations from '@/components/Destinations';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';
import CookieBanner from '@/components/CookieBanner';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero – no FadeIn, immediately visible */}
        <Hero />

        {/* Partner logos strip – immediate trust signal */}
        <FadeIn>
          <PartnerLogos />
        </FadeIn>

        {/* Animated stats */}
        <FadeIn>
          <Stats />
        </FadeIn>

        {/* Services */}
        <FadeIn>
          <Services />
        </FadeIn>

        {/* For whom */}
        <FadeIn>
          <ForWhom />
        </FadeIn>

        {/* Process steps */}
        <FadeIn>
          <Process />
        </FadeIn>

        {/* Revenue calculator */}
        <FadeIn>
          <Calculator />
        </FadeIn>

        {/* Benefits + testimonials */}
        <FadeIn>
          <Benefits />
        </FadeIn>

        {/* Pricing tiers */}
        <FadeIn>
          <Pricing />
        </FadeIn>

        {/* Comparison table */}
        <FadeIn>
          <Comparison />
        </FadeIn>

        {/* Destinations */}
        <FadeIn>
          <Destinations />
        </FadeIn>

        {/* FAQ */}
        <FadeIn>
          <FAQ />
        </FadeIn>

        {/* Lead form */}
        <FadeIn>
          <LeadForm />
        </FadeIn>

        {/* Blog preview */}
        <FadeIn>
          <BlogPreview />
        </FadeIn>
      </main>

      <Footer />

      {/* Global floating elements */}
      <FloatingUI />
      <CookieBanner />
    </>
  );
}
