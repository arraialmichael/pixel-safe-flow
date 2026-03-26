import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ProofSection from "@/components/landing/ProofSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import VaultSection from "@/components/landing/VaultSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import PricingSection from "@/components/landing/PricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <HeroSection />
    <ProofSection />
    <ProblemSection />
    <SolutionSection />
    <HowItWorksSection />
    <VaultSection />
    <BenefitsSection />
    <BeforeAfterSection />
    <PricingSection />
    <FAQSection />
    <FinalCTASection />
    <Footer />
  </div>
);

export default Index;
