import HeaderShowResult from "./HeaderShowResult/HeaderShowResult";
import ShowDetailResult from "./ShowDetailResult/ShowDetailResult";

function ShowResult({ cityInfo }) {
  return (
    <section className="flex flex-col justify-center items-center w-1/2 shadow-lg shadow-blue-300 space-y-3">
      <HeaderShowResult cityInfo={cityInfo} />
      <div className="w-full bg-blue-200">
        <ShowDetailResult cityInfo={cityInfo} />
      </div>
    </section>
  );
}

export default ShowResult;
