import { MenuIcon } from "@heroicons/react/solid";
import {
  HomeIcon,
  IdentificationIcon,
  NewspaperIcon,
  DesktopComputerIcon,
  RssIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import Main from "./Main";

function Header() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="flex-grow">
      <div className="hidden md:flex justify-between p-5">
        <div className="flex space-x-9">
          <p>+251924029960</p>
          <p>Abelkibebe5@gmail.com</p>
        </div>
        <div>Eng/Amh</div>
      </div>
      <div className="flex justify-between items-center p-5 md:hidden">
        <p className="font-Ephesis text-5xl shadow-sm p-2 ">A.K</p>
        <button onClick={handleClick}>
          <MenuIcon className="h-8  " />
        </button>
      </div>

      {/* Main Detail */}
      <Main />
      {/* Main Detail */}

      {/*  */}
      {/*  */}
      {/*  */}

      {/* Mobile Menu  Start*/}
      <div className={`${active ? "" : "hidden"} flex`}>
        <div className="bg-[#0C0C14]  flex flex-col justify-start h-screen  items-center">
          <div className="p-4 mt-7">
            <div className="relative group">
              <HomeIcon className="h-16  text-gray-100-500 hover:text-[#b69741] " />
              <p className="absolute left-2/4 -top-5 transform -translate-x-2/4  opacity-0 group-hover:opacity-100 cursor-pointer  bg-black">
                Home
              </p>
            </div>
            {/*  */}
            <div className="relative group">
              <IdentificationIcon className="h-16  text-gray-100-500 hover:text-[#b69741] " />
              <p className="absolute left-2/4 -top-5 transform -translate-x-2/4  opacity-0 group-hover:opacity-100 cursor-pointer  bg-black">
                About
              </p>
            </div>
            {/*  */}
            <div className="relative group">
              <NewspaperIcon className="h-16  text-gray-100-500 hover:text-[#b69741] " />
              <p className="absolute left-2/4 -top-5 transform -translate-x-2/4  opacity-0 group-hover:opacity-100 cursor-pointer  bg-black">
                Resume
              </p>
            </div>
            {/*  */}
            <div className="relative group">
              <DesktopComputerIcon className="h-16  text-gray-100-500 hover:text-[#b69741] " />
              <p className="absolute left-2/4 -top-5 transform -translate-x-2/4  opacity-0 group-hover:opacity-100 cursor-pointer  bg-black">
                Work
              </p>
            </div>
            {/*  */}
            <div className="relative group">
              <RssIcon className="h-16  text-gray-100-500 hover:text-[#b69741] " />
              <p className="absolute left-2/4 -top-5 transform -translate-x-2/4  opacity-0 group-hover:opacity-100 cursor-pointer  bg-black">
                Blog
              </p>
            </div>
            {/*  */}
            <div className="relative group">
              <AnnotationIcon className="h-16  text-gray-100-500 hover:text-[#b69741] " />
              <p className="absolute left-2/4 -top-5 transform -translate-x-2/4  opacity-0 group-hover:opacity-100 cursor-pointer  bg-black">
                Contact
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* Mobile menu Ended */}
    </div>
  );
}

export default Header;
