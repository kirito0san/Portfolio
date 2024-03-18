import { useRef } from "react";
import github from "../assets/iconmonstr-github-3.svg";
import linkedin from "../assets/iconmonstr-linkedin-3.svg";
import { Link } from "react-router-dom";

const Header = ({ setActiveIndex }) => {
  const header = useRef(null);
  const contarctmove = useRef(null);

  const handelclick = () => {
    contarctmove.current.classList.toggle("activemove");
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

      <button>
        <div
          onClick={() => {
            handelclick();
          }}
          className="!w-[150px] p-1 px-2 transition-all duration-700 border btn md:flex hover:bg-white hover:text-black "
        >
          {" "}
          <p className="object-cover ">hit me up</p>
          <div id="container-stars">
            <div id="stars" />
          </div>
        </div>
        <div
          ref={contarctmove}
          className="fixed z-30 flex flex-col justify-around gap-5 p-2 transition-all bg-white rounded-lg contact activemove right-2 top-28 "
        >
          <Link
            aria-label="github"
            to="https://github.com/kirito0san"
            target="_blank"
            rel="noreferrer github"
          >
            <img className="w-10 h-10" src={github} alt="" />
          </Link>
          <Link
            to="https://www.linkedin.com/in/ahmed-fathy-05114a257/"
            target="_blank"
            aria-label="linkedin"
            rel="linkedin noreferrer"
          >
            <img className="w-10 h-10" src={linkedin} alt="" />
          </Link>
        </div>
      </button>
    </div>
  );
};

export default Header;
