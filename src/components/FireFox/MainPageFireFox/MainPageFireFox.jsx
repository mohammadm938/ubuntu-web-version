import { createRef } from "react";
import { AiFillGoogleCircle, AiOutlineSearch } from "react-icons/ai";
import fireFox from "../../../img/firefox.png";
import Header from "../Header/Header";

const inputValue = createRef();
const searchTitle = createRef();

const search = () => {
  // const options = {
  //   method: "GET",
  //   headers: {
  //     "X-User-Agent": "desktop",
  //     "X-Proxy-Location": "EU",
  //     "X-RapidAPI-Key": "75ba012919msh0e54a188327545fp1d27cfjsnfb2cb155ebc4",
  //     "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
  //   },
  // };

  // let q = inputValue.current.value.replaceAll(" ", "+");

  // fetch("https://google-search3.p.rapidapi.com/api/v1/search/q=" + q, options)
  //   .then((response) => response.json())
  //   .then((response) => console.log(response))
  //   .catch((err) => console.error(err));

  searchTitle.current.innerText = inputValue.current.value;
  console.log(searchTitle.current);
};

function MainPageFireFox() {
  return (
    <div className="bg-white w-full">
      {/* header of firefox */}
      <Header searchTitle={searchTitle} />
      {/* body of firefox */}
      <div className="bg-slate-800 w-full h-full -mt-8 pt-8 flex flex-col justify-center items-center space-y-10">
        <div
          className="flex flex-row justify-center space-x-3
          w-2/5 items-center"
        >
          <img src={fireFox} className="w-20" alt="" />
          <h2 className="text-white text-3xl font-bold ">Firefox</h2>
        </div>
        <div className="w-2/5 relative ">
          <AiFillGoogleCircle className="text-2xl text-slate-600 absolute top-3 left-2" />
          <input
            type="text"
            placeholder="Search with google or enter address ..."
            className="w-full h-12 p-2 pl-10 pr-10 rounded-lg font-sans focus:shadow-xl focus:outline-2 focus:border-black focus:outline-none"
            ref={inputValue}
          />
          <div className="text-xl text-slate-600 absolute right-2 bottom-2 hover:bg-slate-600 p-1 rounded-xl">
            <AiOutlineSearch className="hover:text-white" onClick={search} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPageFireFox;
