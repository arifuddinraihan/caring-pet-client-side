import Banner from "./components/page/home/Banner";
import StatusMainPage from "./components/page/home/StatusMainPage";
import FeatureSection from "./components/page/home/FeatureSection";
import SearchPetCTA from "./components/page/home/SearchPetCTA";
import ContactMainPage from "./components/page/home/ContactMainPage";
import ContactInfoGlobal from "./components/shared/ContactInfoGlobal";

export default function Home() {
  return (
    <>
      <Banner />
      {/* Pet Listing in home page, Dynamic Ui */}
      <StatusMainPage />
      <FeatureSection />
      <SearchPetCTA />
      <ContactMainPage />
      <ContactInfoGlobal />
    </>
  );
}
