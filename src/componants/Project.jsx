import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { useEffect } from "react";
import Card from "./Card";

const Project = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.1,
  });
  //   useEffect(() => {
  //     if (inView) {
  //       anime({
  //         targets: [".aboutMe"],
  //         translateX: [-1000, 0],
  //         easing: "easeInOutQuad",
  //         duration: 1000,
  //       });
  //       anime({
  //         targets: [".aboutParagraph"],
  //         translateX: [-1000, 0],
  //         easing: "easeInOutQuad",
  //         duration: 1000,
  //       });
  //       anime({
  //         targets: [".Skills"],
  //         translateX: [1000, 0],
  //         easing: "easeInOutQuad",
  //         duration: 1000,
  //       });
  //     }
  //   }, [inView]);

  return (
    <div ref={ref} className="project flex items-center justify-center h-screen">
      <div className="">
        <h3 className="mb-5 cursor-default text-4xl md:text-5xl font-bold">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
        </h3>
        <div className="flex gap-5 flex-wrap">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Project;
