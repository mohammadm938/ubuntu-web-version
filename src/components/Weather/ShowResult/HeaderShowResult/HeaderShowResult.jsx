function HeaderShowResult({ cityInfo }) {
  return (
    <div className="flex flex-col w-full p-2 px-10">
      <div className="flex flex-row items-center justify-between text-slate-500">
        <div>
          {cityInfo.location.country} / {cityInfo.location.region} /{" "}
          {cityInfo.location.name}
        </div>
        <div>{cityInfo.location.tz_id}</div>
      </div>
      <div className="flex justify-center items-center mt-4">
        <div className="flex flex-row items-center justify-center bg-blue-400 rounded-lg w-1/2 shadow-lg shadow-blue-600">
          <img className="w-16" src={cityInfo.current.condition.icon} alt="" />
          <p className="text-2xl font-bold">
            {cityInfo.current.condition.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeaderShowResult;
