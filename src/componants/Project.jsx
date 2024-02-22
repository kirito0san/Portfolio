import { useInView } from "react-intersection-observer";
import anime from "animejs";
import { useEffect, useState } from "react";
import Card from "./Card";
import { Fade } from "react-awesome-reveal";

const Project = () => {
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
                <Fade key={item._id}>
                  <Card
                    name={item.name}
                    livelink={item.live}
                    github={item.github}
                    technologies={item.Techs}
                    img={item.preview}
                  />
                </Fade>
              );
            })}
          {Loading && (
            <div className="w-full flex justify-center flex-col gap-10">
              <p>this progress may take some time so please wait ...</p>
              <span className="loader"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
