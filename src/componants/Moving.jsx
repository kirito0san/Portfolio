import { useEffect } from "react";

const Moving = ({ activeIndex, setActiveIndex }) => {
  const handelclick = (e, i) => {
    document.querySelectorAll(".headerNav button").forEach((el) => {
      el.classList.remove(`active`);
    });
    setActiveIndex(i);
    e.target.classList.add(`active`);
  };
  useEffect(() => {
    document.querySelectorAll(".headerNav p").forEach((el, ii) => {
      el.classList.remove(`active`);
      if (ii == activeIndex) {
        el.classList.add(`active`);
      }
    });
  }, [activeIndex]);
  return (
    <nav className="headerNav">
      <p
        className="active"
        onClick={(e) => {
          handelclick(e, 0);
        }}
      ></p>
      <p onClick={(e) => handelclick(e, 1)}></p>
      <p onClick={(e) => handelclick(e, 2)}></p>
    </nav>
  );
};

export default Moving;
