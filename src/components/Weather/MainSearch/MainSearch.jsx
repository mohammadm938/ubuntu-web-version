import { createRef } from "react";
import { BiSearch } from "react-icons/bi";
import weatherImg from "../imgs/weather.svg";

const searchInputRef = createRef();

function MainSearch({ setCity }) {
  return (
    <section className="flex flex-col justify-center items-center mt-4 h-5/6 space-y-4 ">
      <img className="w-1/4" src={weatherImg} alt="" />
      <div className="w-full flex justify-center items-center">
        <input
          ref={searchInputRef}
          className="w-1/3 p-2 pr-7 rounded-lg shadow-xl shadow-blue-500 border-2 focus:outline-none hover:shadow-pink-600 focus:shadow-purple-700 focus:border-2 focus:border-purple-600"
          type="text"
          placeholder="Search your city..."
        />
        <div
          className="relative right-9 hover:bg-slate-900 p-2 rounded-full hover:text-white hover:cursor-pointer"
          onClick={() => {
            setCity(searchInputRef.current.value);
          }}
        >
          <BiSearch />
        </div>
      </div>
    </section>
  );
}

export default MainSearch;
