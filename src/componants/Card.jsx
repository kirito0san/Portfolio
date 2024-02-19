const Card = ({ keys, name, livelink, github, technologies, img }) => {
  return (
    <div className=" w-[320px] md:w-[450px]  card h-[250px] relative overflow-hidden rounded-md">
      <img className="absolute top-0 -z-10  left-0 w-full h-full   " src={img} alt="" />
      <div className="flex relative -top-[100%] flex-col gap-3 h-full p-2 px-3 justify-between transition-all duration-500  bg-gradient-to-b from-[#000000cc] to-[#6969694a]   z-20 ">
        <p className=" text-3xl capitalize font-semibold">{name}</p>
        <div className="mt-0  text-base">
          <p className="text-lg tracking-wider mb-2  font-bold">Technologies</p>
          <div className="flex capitalize flex-wrap gap-1">
            {technologies &&
              technologies.map((e, i) => (
                <p
                  className="border-2 font-semibold text-lg cursor-default px-3 py-1 bg-[#000000cc]  text-[#eeeeee]  hover:text-orange-400   hover:border-orange-400 transition-all duration-500 rounded-full "
                  key={i}
                >
                  {e}
                </p>
              ))}
          </div>
        </div>
        <div className="flex pb-3   !text-xl font-bold justify-between">
          <a className="github_linkdin" target="_blank" href={livelink} rel="noreferrer">
            <p> Live Demo</p>
          </a>
          <a className="github_linkdin" target="_blank" href={github} rel="noreferrer">
            <p> Github</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
