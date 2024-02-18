const Skill = () => {
  return (
    <div className="Skills md:w-1/2 flex   flex-col gap-10">
      <h3 className="text-4xl md:text-5xl cursor-default font-bold">
        <span>M</span>
        <span>y </span>
        <span>S</span>
        <span>k</span>
        <span>i</span>
        <span>l</span>
        <span>l</span>
        <span>s</span>
      </h3>
      <div className="Skill text-xl font-normal">
        <div>
          {" "}
          <img src={require("../assets/Html.svg").default} alt="" />
          <p>HTML</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/Visual Studio.svg").default} alt="" />
          <p>Visual Studio</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/css.svg").default} alt="" />
          <p>css</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/git.svg").default} alt="" />
          <p>git</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/js.svg").default} alt="" />
          <p>javascript</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/react.js.svg").default} alt="" />
          <p>react.js</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/tailwind.svg").default} alt="" />
          <p>tailwind css</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/ts.svg").default} alt="" />
          <p>type script</p>
        </div>
        <div>
          {" "}
          <img src={require("../assets/redux.svg").default} alt="" />
          <p>Redux Toolkit</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
