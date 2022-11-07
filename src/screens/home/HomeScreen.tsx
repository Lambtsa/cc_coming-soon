import { Copyright } from "@components/Copyright";
import { Header } from "@components/Header";
import { MainSection } from "@components/Main";
import { AboutSection } from "./sections/About";
import { HowSection } from "./sections/How";
import { Jumbotron } from "@components/Jumbotron";
import { ServicesSection } from "./sections/Services";

export const HomeScreen = (): JSX.Element => {
  return (
    <>
      <Header fixed />
      <MainSection>
        <Jumbotron
          title="jumbotron.home.title"
          subtitle="jumbotron.home.description"
          btnText="commons.discover"
          onClick={() => console.log("clicked")}
        />
        <AboutSection />
        <ServicesSection />
        <HowSection />
      </MainSection>
      <Copyright />
    </>
  );
};
