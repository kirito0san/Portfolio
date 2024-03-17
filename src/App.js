import gsap from "gsap";
import Header from "./componants/Header";
import Main from "./componants/Main";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Moving from "./componants/Moving";
import { useState } from "react";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="App flex gap-5 flex-col   overflow-hidden    min-h-screen bg-[#141416]">
      <Moving setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      <div className="  flex flex-col gap-5 !w-[90%]  !mx-auto ">
        <Header />
        <Main setActiveIndex={setActiveIndex} activeIndex={activeIndex} />
      </div>
    </div>
  );
}

export default App;
