function ShowDetailResult({ cityInfo }) {
  return (
    <section className="p-2 pt-3 flex flex-col space-y-2">
      {/* row 1 */}
      <div className="flex flex-ro space-x-2">
        <div className=" bg-blue-700 w-1/4 p-2 rounded-lg text-white flex justify-center items-center hover:shadow-blue-400 hover:shadow-md">
          wind speed(mph){" "}
          <span className="ml-1 bg-blue-500 p-2 rounded-lg">
            {cityInfo.current.wind_mph}
          </span>
        </div>
        <div className=" bg-blue-700 w-1/4 p-2 rounded-lg text-white flex justify-center items-center hover:shadow-blue-400 hover:shadow-md">
          wind speed(kph){" "}
          <span className="ml-1 bg-blue-500 p-2 rounded-lg">
            {cityInfo.current.wind_kph}
          </span>
        </div>
        <div className=" bg-blue-700 w-1/4 p-2 rounded-lg text-white flex justify-center items-center hover:shadow-blue-400 hover:shadow-md">
          wind degree{" "}
          <span className="ml-1 bg-blue-500 p-2 rounded-lg">
            {cityInfo.current.wind_degree}
          </span>
        </div>
        <div className=" bg-blue-700 w-1/4 p-2 rounded-lg text-white flex justify-center items-center hover:shadow-blue-400 hover:shadow-md">
          wind direction{" "}
          <span className="ml-1 bg-blue-500 p-2 rounded-lg">
            {cityInfo.current.wind_dir}
          </span>
        </div>
      </div>
      {/* row 2 */}
      <div className="flex flex-ro space-x-2">
        <div className=" bg-blue-700 w-1/4 p-2 rounded-lg text-white flex justify-center items-center hover:shadow-blue-400 hover:shadow-md">
          feels like(c){" "}
          <span className="ml-1 bg-blue-500 p-2 rounded-lg">
            {cityInfo.current.feelslike_c}
          </span>
        </div>
        <div className=" bg-blue-700 w-1/4 p-2 rounded-lg text-white flex justify-center items-center hover:shadow-blue-400 hover:shadow-md">
          feels like(f){" "}
          <span className="ml-1 bg-blue-500 p-2 rounded-lg">
            {cityInfo.current.feelslike_f}
          </span>
        </div>
        <div className=" bg-blue-700 w-1/4 p-2 rounded-lg text-white flex justify-center items-center hover:shadow-blue-400 hover:shadow-md">
          uv{" "}
          <span className="ml-1 bg-blue-500 p-2 rounded-lg">
            {cityInfo.current.uv}
          </span>
        </div>
        <div className="text-sm bg-blue-700 w-1/4 p-2 rounded-lg text-white flex justify-center items-center hover:shadow-blue-400 hover:shadow-md">
          last update{" "}
          <span className="ml-1 bg-blue-500 p-2 rounded-lg text-sm">
            {" "}
            {cityInfo.current.last_updated}
          </span>
        </div>
      </div>
    </section>
  );
}

export default ShowDetailResult;
