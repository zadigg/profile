import {
  HomeIcon,
  IdentificationIcon,
  NewspaperIcon,
  DesktopComputerIcon,
  RssIcon,
  AnnotationIcon,
} from "@heroicons/react/solid";
import Header from "./Header";
import Main from "./Main";

function Sidebar() {
  return (
    <div className=" ">
      <div className="md:flex">
        <div className="hidden md:flex">
          <div className="bg-[#0C0C14]  flex flex-col justify-start h-screen  items-center -3">
            <div className="font-Ephesis text-5xl bg-[#0d0d0e] w-full rounded-xl shadow-2xl p-2 ">
              <p>A.k</p>
            </div>
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
        <Header />
      </div>

    </div>
  );
}

export default Sidebar;
