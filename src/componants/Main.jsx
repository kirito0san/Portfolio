import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin-svgrepo-com.svg";
import github from "../assets/github-color-svgrepo-com.svg";
import facebook from "../assets/facebook-color-svgrepo-com.svg";
import About from "./About";
import Hero from "./Hero";
import { Fade } from "react-awesome-reveal";
import Moving from "./Moving";
import ReactPageScroller, { SectionContainer } from "react-page-scroller";
import React, { useState } from "react";
import anime from "animejs";
import Project from "./Project";
const Main = () => {
  const [PageNumber, setPageNumber] = useState(0);
  return (
    <Fade>
      <div className="md:text-3xl  mainParent     relative flex flex-col gap-5  text-white">
        <Moving setPageNumber={setPageNumber} PageNumber={PageNumber} />
        <React.Fragment>
          <ReactPageScroller
            customPageNumber={PageNumber}
            onBeforePageScroll={(page) => {
              setPageNumber(page);
            }}
            containerWidth={"100%"}
          >
            <Hero setPageNumber={setPageNumber} />
            <SectionContainer height={150}>
              <About />
            </SectionContainer>
            <Project />
          </ReactPageScroller>
        </React.Fragment>
      </div>
    </Fade>
  );
};

export default Main;
