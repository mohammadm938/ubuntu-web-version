import { FaRegWindowMinimize, FaRegWindowRestore } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { SetPageContext } from "../../../App";

function Header({ searchTitle }) {
  const setPage = useContext(SetPageContext);

  return (
    <div className="z-10 relative flex flex-row justify-between items-center bg-slate-900 text-white px-1 -mt-2 py-1">
      {/* search title */}
      <div className="flex justify-center items-center bg-slate-500 h-8 px-4 rounded-tr-md hover:bg-slate-800 w-32 overflow-x-hidden">
        <span ref={searchTitle}>Search Page</span>
      </div>
      {/* close side */}
      <div className=" flex items-center justify-center">
        <div className=" p-2 hover:bg-slate-600 rounded-2xl">
          <FaRegWindowMinimize className="relative -top-1" />
        </div>
        <div className=" p-2 hover:bg-slate-600  rounded-2xl">
          <FaRegWindowRestore />
        </div>
        <div className=" p-2 hover:bg-red-600 hover:text-red-200 rounded-2xl">
          <AiOutlineClose onClick={() => setPage("main")} />
        </div>
      </div>
    </div>
  );
}

export default Header;
