import anime from "animejs";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Skill from "./Skill";

const About = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      anime({
        targets: [".aboutMe"],
        translateX: [-1000, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
      anime({
        targets: [".aboutParagraph"],
        translateX: [-1000, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
      anime({
        targets: [".Skills"],
        translateX: [1000, 0],
        easing: "easeInOutQuad",
        duration: 1000,
      });
    }
  }, [inView]);
  return (
    <div
      id="about"
      ref={ref}
      className="w-full about  md:h-screen  flex flex-col md:flex-row gap-7 md:items-center  justify-center  "
    >
      <div className="flex flex-col md:flex-row gap-2">
        <div className="article md:w-1/2  aboutMe cursor-default text-4xl md:text-5xl font-bold">
          <p>
            <span>H</span>
            <span>i </span>
            <span>,</span>
            <span>I</span>
            <span> a</span>
            <span>m </span>
            <span>A</span>
            <span>h</span>
            <span>m</span>
            <span>e</span>
            <span>d</span>
            <span> S</span>
            <span>y</span>
            <span>e</span>
            <span>d</span>
          </p>
          <p>
            <span>W</span>
            <span>e</span>
            <span>b</span>
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
          <div className="text-xl aboutParagraph capitalize font-normal">
            <p className=" font-light pt-5 ">
              I’m from egypt. Military exemption: exempt from the army , My journey with FWD started
              as the gateway into the world of programming. Upon completing the introductory stage,
              I began searching for other resources to deepen my knowledge in the field. Along the
              way, I stumbled upon a valuable treasure, which was found on YouTube under the name
              <a
                rel="noreferrer"
                className="hoverMe font-semibold"
                target="_blank"
                href="https://www.youtube.com/@ElzeroWebSchool"
              >
                {" "}
                Elzero Web School{" "}
              </a>
              . Professor
              <a
                rel="noreferrer"
                className="hoverMe font-semibold"
                target="_blank"
                href="https://www.facebook.com/OsElzero"
              >
                {" "}
                Osama Mohamed{" "}
              </a>
              was a major catalyst for me to fall in love with web design and development.
            </p>
          </div>
        </div>
        <Skill />
      </div>
    </div>
  );
};

export default About;
