import About from "./About";
import Hero from "./Hero";
import { Fade } from "react-awesome-reveal";
import Project from "./Project";
import { FullpageContainer, FullpageSection } from "@shinyongjun/react-fullpage";
import "@shinyongjun/react-fullpage/css";
const Main = ({ activeIndex, setActiveIndex }) => {
  return (
    <Fade>
      <div className="md:text-3xl  mainParent     relative flex flex-col gap-[200px]  text-white">
        <FullpageContainer
          transitionDuration={2000}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        >
          <FullpageSection name=" first">
            <Hero />
          </FullpageSection>
          <FullpageSection isAutoHeight={true} name="three">
            <About />
          </FullpageSection>

          <FullpageSection name="second">
            <Project />{" "}
          </FullpageSection>
        </FullpageContainer>
      </div>
    </Fade>
  );
};

export default Main;
