import ContactMainPage from "../components/page/home/ContactMainPage";
import ContactInfoGlobal from "../components/shared/ContactInfoGlobal";
import AboutOurTeam from "./components/AboutOurTeam";
import AboutUsBanner from "./components/AboutUsBanner";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsBanner />
      <AboutOurTeam />
      <ContactMainPage />
      <ContactInfoGlobal />
    </>
  );
};

export default AboutUsPage;
