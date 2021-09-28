function Main() {
  return (
    <div className="p-4 relative sm:p-6 md:p-8 lg:p-7 xl:p-72 w-full ">
      <div className="absolute top-60 space-y-4  ">
        <p className="font-semibold font-Roboto text-2xl">Hello, My name is</p>
        <p className="text-6xl md:text-8xl font-Inconsolata">Abel Kibebe</p>
        <p className="font-bold text-xl ">
          FULL-STACK DEVELOPER | UX/UI DESIGNER | FREELANCER
        </p>
        <div>
          <p className="">
            I design and develop services for customers of all sizes,
          </p>
          <p className="">
            specializing in creating stylish, modern websites, web services
          </p>
          <p className="">and online stores.</p>
        </div>

        <div className="flex ">
          <button className="transition ease-in duration-700 font-Inconsolata text-3xl animate-bounce ">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default Main;
