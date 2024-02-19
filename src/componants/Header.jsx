import { useRef } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ setActiveIndex }) => {
  const header = useRef(null);
  window.onscroll = () => {
    if (window.scrollY == 0) {
      header.current.classList.remove("bg-[#3d3d49]");
    } else {
      header.current.classList.add("bg-[#3d3d49]");
    }
  };
  return (
    <div
      ref={header}
      className={`header flex justify-between rounded-xl w-[90%] fixed top-5  p-2 transition-all duration-700  items-center z-50  text-white `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="40"
        height="23"
        fill="none"
        viewBox="0 0 90 71"
      >
        <path fill="#000" d="M6 10H41V62H6z"></path>
        <path
          fill="#f0f8ff"
          d="M0 0v70.338h89.521V0H0zm19.184 53.481l-6.394-6.396 6.394-6.394 6.394-6.394-6.394-6.394-6.394-6.394 3.197-3.198 3.197-3.197 9.591 9.591 9.592 9.592-9.591 9.592-9.592 9.592z"
        ></path>
        <path
          fill="#000"
          d="M45 44H74V52H45z"
          className="blinkit   animate-[dev_1s_cubic-bezier(0.4,0,0.6,1)_both_alternate_infinite] "
        ></path>
      </svg>

      <button className=" ">
        <div className="btn transition-all hidden md:flex hover:bg-white hover:text-black  duration-700  border px-2 p-1 ">
          <p>hit me up</p>
          <div id="container-stars">
            <div id="stars" />
          </div>
          <div id="glow">
            <div className="circle" />
            <div className="circle" />
          </div>
        </div>
      </button>
    </div>
  );
};

export default Header;
