import { ContactUsSection } from "@/components/ContactUsSection";
import { FAQSection } from "@/components/FAQSection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MainPrizes } from "@/components/MainPrizes";
import { OrganizersSection } from "@/components/OrganizersSection";

import { SponsorSection } from "@/components/SponsorSection";
import { ThemeSection } from "@/components/ThemeSection";
import { Timeline } from "@/components/Timeline";
import { Whatis } from "@/components/Whatis";
import { WhyHackSRM } from "@/components/WhyHackSrm";

const noto_sans = {
  subsets: ["latin"],
  variable: "--font-noto-sans",
  importUrl:
    "https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap",
};

export default function HomePage() {
  return (
    <div className={noto_sans.variable}>
      <Header />
      <HeroSection />
      <Whatis />
      <WhyHackSRM />
      <Timeline />
      <MainPrizes />
      <ThemeSection />

      <SponsorSection />

      <OrganizersSection />
      <FAQSection />
      <ContactUsSection />
    </div>
  );
}
