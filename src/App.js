import gsap from "gsap";
import Header from "./componants/Header";
import Main from "./componants/Main";
import { ScrollTrigger } from "gsap/ScrollTrigger";



function App() {

  return (
    <div className="App flex gap-5 flex-col   overflow-hidden    min-h-screen bg-[#141416]">
      <div className="  flex flex-col gap-5 w-[90%]  mx-auto ">
        <Header />
        <Main />

      </div>
    </div>
  );
}

export default App;
