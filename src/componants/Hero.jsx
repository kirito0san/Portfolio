import hero from "../assets/side-dots.png";

import SVGComponent from "../assets/Herosvg";
import anime from "animejs";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
gsap.registerPlugin(ScrollTrigger);
const Hero = ({ setPageNumber }) => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  useEffect(() => {
    if (inView) {
      anime({
        targets: [".parentHero"],
        translateX: [1000, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
      anime({
        targets: [".homeParagraph"],
        translateX: [-1000, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    }
  }, [inView]);

  return (
    <div
      id="home"
      ref={ref}
      className="article relative  md:flex-row md:items-center md:min-h-screen"
    >
      <img src={hero} alt="" />

      <div className={" parentHero !h-1/4 z-10 flex items-center justify-center  "}>
        <SVGComponent />
      </div>
      <div className="homeParagraph z-20  md:-order-1 cursor-default flex flex-col gap-5  md:w-[60%]">
        <p className=" text-4xl md:text-5xl  font-bold">
          <span>F</span>
          <span>r</span>
          <span>o</span>
          <span>n</span>
          <span>t</span>
          <span>-</span>
          <span>E</span>
          <span>n</span>
          <span>d</span>
          <span> S</span>
          <span>o</span>
          <span>f</span>
          <span>t</span>
          <span>w</span>
          <span>a</span>
          <span>r</span>
          <span>e</span>
          <span> D</span>
          <span>e</span>
          <span>v</span>
          <span>e</span>
          <span>l</span>
          <span>o</span>
          <span>p</span>
          <span>e</span>
          <span>r</span>
        </p>
        <p className="text-xl">
          Resolving design problems, building smart user interfaces and useful interactions,
          developing rich web applications and seamless web experiences.
        </p>
      </div>
    </div>
  );
};

export default Hero;
