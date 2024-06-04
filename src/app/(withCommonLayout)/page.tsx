import StatusMainPage from "./components/page/home/StatusMainPage";
import FeatureSection from "./components/page/home/FeatureSection";
import SearchPetCTA from "./components/page/home/SearchPetCTA";
import ContactMainPage from "./components/page/home/ContactMainPage";
import ContactInfoGlobal from "./components/shared/ContactInfoGlobal";
import HeroSectionMainPage from "./components/page/home/HeroSectionMainPage";
import TestimonialsMainPage from "./components/page/home/TestimonialsMainPage";

export default function Home() {
  return (
    <>
      <HeroSectionMainPage />
      {/* <Banner /> */}
      {/* Pet Listing in home page, Dynamic Ui */}
      <StatusMainPage />
      <FeatureSection />
      <TestimonialsMainPage />
      <SearchPetCTA />
      <ContactMainPage />
      <ContactInfoGlobal />
    </>
  );
}
