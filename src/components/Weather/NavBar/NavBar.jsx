import { createRef } from "react";
import { BiSearch } from "react-icons/bi";
import cloud from "../imgs/cloud.svg";
import sun from "../imgs/sun.svg";
import "./weather.css";

const searchInputRef = createRef();

function Navbar({ setCity, setCityInfo }) {
  return (
    <nav className="flex flex-row justify-between">
      <ul className=" flex flex-row space-x-4">
        <li
          className="hover:cursor-pointer border-b-2 border-black  border-opacity-0 hover:border-opacity-100 p-1"
          onClick={() => setCityInfo(null)}
        >
          Main Page
        </li>
        <li className="hover:cursor-pointer border-b-2 border-black  border-opacity-0 hover:border-opacity-100 p-1">
          <a href="google.com">Personal Site</a>
        </li>
        <li className="hover:cursor-pointer border-b-2 border-black  border-opacity-0 hover:border-opacity-100 p-1">
          <a href="https://github.com/mohammadm938" target="_blank">
            GitHub
          </a>
        </li>
        <li className="group bg-slate-700 text-white hover:text-black p-2 rounded-full flex justify-center items-center hover:cursor-pointer hover:bg-blue-200 shadow-md hover:shadow-blue-500 transition-all  duration-500 hover:transition-all hover:duration-500 ">
          <input
            type="text"
            ref={searchInputRef}
            placeholder="Search city ..."
            className="transition-all  duration-500 group-hover:transition-all group-hover:duration-500 hidden group-hover:w-48 group-hover:block w-full h-full border-none outline-none bg-transparent"
          ></input>
          <BiSearch onClick={() => setCity(searchInputRef.current.value)} />
        </li>
      </ul>
      <div>
        <img className="cloud" src={cloud} alt="" />
        <img className="sun" src={sun} alt="" />
        <img className="cloud cloud2" src={cloud} alt="" />
      </div>
    </nav>
  );
}

export default Navbar;
