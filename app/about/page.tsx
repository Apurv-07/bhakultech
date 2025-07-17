import BackgroundLayout from "./components/backgroundLayout";
import HeroSection from "./components/heroSection";
import GoalfocusSection from "./components/goalfocusSection";
import ProcessSection from "./components/processlSection";
import OurMission from "./components/ourMission";
import BenefitSection from "./components/benefitSection";

export default function AboutPage() {
  return (
    <>
      <div className="font-['Inter']">
        <BackgroundLayout>
          <HeroSection />
          <GoalfocusSection />
          <ProcessSection />
          <OurMission />
          <BenefitSection />
          {/* 
          
          <CompanyWork /> */}
        </BackgroundLayout>
      </div>
    </>
  );
}
