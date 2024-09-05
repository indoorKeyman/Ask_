import { MainContainer } from "../components/styledcomponents/styledcomponents";
import IntroduceCompany from "../components/About/IntroduceCompany";
import VisionMission from "../components/About/VisionMission";
import CompanyCoreValue from "../components/About/CompanyCoreValue";

function About() {
  return (
    <>
      <MainContainer>
        <IntroduceCompany />
        <VisionMission />
        <CompanyCoreValue />
      </MainContainer>
    </>
  );
}

export default About;
