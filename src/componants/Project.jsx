import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { useEffect, useState } from "react";
import Card from "./Card";

const Project = () => {
  // const [ref, inView] = useInView({
  //   /* Optional options */
  //   threshold: 0.1,
  // });
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
  const [project, setproject] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://portfolio-z8h6.onrender.com/repos/65c28ea1dc52464abbb6e233")
      .then((res) => res.json())
      .then((data) => {
        setproject(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="project w-full pt-[110px] lg:pt-[100px] lx:pt-0 flex items-center   min-h-screen">
      <div className="flex flex-col w-full ">
        <h3 className="mb-5 cursor-default text-4xl md:text-5xl font-bold">
          <span>P</span>
          <span>r</span>
          <span>o</span>
          <span>j</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
        </h3>
        <div className="flex self-center justify-center   gap-5  flex-wrap">
          {project &&
            project.map((item) => {
              return (
                <div key={item._id}>
                  <Card
                    name={item.name}
                    livelink={item.live}
                    github={item.github}
                    technologies={item.Techs}
                    img={item.preview}
                  />
                </div>
              );
            })}
          {Loading && (
            <div className="w-full flex justify-center">
              <span class="loader"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
