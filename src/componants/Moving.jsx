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
    document.querySelectorAll(".headerNav button").forEach((el, ii) => {
      el.classList.remove(`active`);
      if (ii == activeIndex) {
        el.classList.add(`active`);
      }
    });
  }, [activeIndex]);
  return (
    <nav className="headerNav">
      <button
        className="active"
        onClick={(e) => {
          handelclick(e, 0);
        }}
      ></button>
      <button onClick={(e) => handelclick(e, 1)}></button>
      <button onClick={(e) => handelclick(e, 2)}></button>
    </nav>
  );
};

export default Moving;
