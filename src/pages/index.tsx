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
import Link from "next/link";
import { WhyHack } from "@/components/Whyhack";

const noto_sans = {
  subsets: ["latin"],
  variable: "--font-noto-sans",
  importUrl:
    "'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'",
};

export default function HomePage() {
  return (
    <div className={noto_sans.variable}>
      <Header />
      <HeroSection />

      <Whatis />
      <WhyHack />
      <Timeline />
      <MainPrizes />
      <ThemeSection />

      {/* <SponsorSection /> */}

      {/* <OrganizersSection /> */}
      <FAQSection />
      <ContactUsSection />
    </div>
  );
}
