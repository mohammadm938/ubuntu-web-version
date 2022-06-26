import HeaderApp from "../Header/HeaderApp";
import NavBar from "./NavBar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import MainSearch from "./MainSearch/MainSearch";
import Footer from "./Footer/Footer";
import ShowResult from "./ShowResult/ShowResult";

function Weather() {
  const [city, setCity] = useState(null);
  const [cityInfo, setCityInfo] = useState(null);
  useEffect(() => {
    if (city != null) {
      const baseURL = `http://api.weatherapi.com/v1/current.json?key=d9b44aa5c8834c81bcf144621222606&q=${city}&aqi=no`;
      axios.get(baseURL).then((response) => {
        setCityInfo(response.data);
      });
    }
  }, [city]);
  return (
    <div className="w-full h-screen -mt-10 pt-8 bg-white">
      <div className="bg-slate-800">
        <HeaderApp name="Weather" />
      </div>
      <div className="p-2 relative">
        <NavBar setCity={setCity} setCityInfo={setCityInfo} />
      </div>

      {cityInfo == null ? (
        <MainSearch setCity={setCity} />
      ) : (
        <div className="flex justify-center items-center mt-3">
          <ShowResult cityInfo={cityInfo} />{" "}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Weather;
