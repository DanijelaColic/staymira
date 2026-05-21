import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PartnerLogos from '@/components/PartnerLogos';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import ForWhom from '@/components/ForWhom';
import Process from '@/components/Process';
import Calculator from '@/components/Calculator';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CaseStudies from '@/components/CaseStudies';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Comparison from '@/components/Comparison';
import Destinations from '@/components/Destinations';
import FAQ from '@/components/FAQ';
import LeadForm from '@/components/LeadForm';
import BlogPreview from '@/components/BlogPreview';
import Footer from '@/components/Footer';
import FloatingUI from '@/components/FloatingUI';
import CookieBanner from '@/components/CookieBanner';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import FadeIn from '@/components/FadeIn';

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <FadeIn><PartnerLogos /></FadeIn>
        <FadeIn><Stats /></FadeIn>
        <FadeIn><Services /></FadeIn>
        <FadeIn><ForWhom /></FadeIn>
        <FadeIn><Process /></FadeIn>
        <FadeIn><Calculator /></FadeIn>
        <FadeIn><Benefits /></FadeIn>
        <FadeIn><Testimonials /></FadeIn>
        <FadeIn><CaseStudies /></FadeIn>
        <FadeIn><Gallery /></FadeIn>
        <FadeIn><Pricing /></FadeIn>
        <FadeIn><Comparison /></FadeIn>
        <FadeIn><Destinations /></FadeIn>
        <FadeIn><FAQ /></FadeIn>
        <FadeIn><LeadForm /></FadeIn>
        <FadeIn><BlogPreview /></FadeIn>
      </main>

      <Footer />
      <FloatingUI />
      <CookieBanner />
      <ExitIntentPopup />
    </>
  );
}
