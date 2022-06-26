import { FaRegWindowMinimize, FaRegWindowRestore } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SetPageContext } from "../../App";
import { useContext } from "react";
function HeaderApp({ name }) {
  const setPage = useContext(SetPageContext);
  return (
    <div className="flex flex-row items-center justify-between px-1 text-slate-400 ">
      {/* app title */}
      <div className="">
        <h2 className="text-lg font-semibold">{name}</h2>
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

export default HeaderApp;
