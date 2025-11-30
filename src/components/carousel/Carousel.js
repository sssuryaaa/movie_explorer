import { useEffect, useRef, useState } from "react";
import { API_KEY, CAR_URL } from "../../utils/constants";
import CarShimmer from "./CarShimmer";
import DisplayCardForMovies from "../movielist/DisplayCardForMovies";
import DisplayCardForTV from "../TVlist/DisplayCardForTV";
import { Link, useSearchParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Carousel = () => {
  const [carData, setCarData] = useState([]);
  const [searchValue, setSearchvalue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const caRef = useRef(null);

  const handleSearch = () => {};

  const scrollLeft = () => {
    caRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    caRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    fetchCarouselData();
  }, []);

  const fetchCarouselData = async () => {
    const data = await fetch(CAR_URL + "&api_key=" + API_KEY);
    const json = await data.json();
    setCarData(json.results);
  };

  return carData.length === 0 ? (
    <CarShimmer />
  ) : (
    <div className="p-7 min-h-[500px]">
      <div className="w-full">
        <input
          className="w-10/12 border border-gray-700 p-2 bg-white text-black rounded-full"
          type="text"
          placeholder="search for movies or tv shows..."
          value={searchValue}
          onChange={(e) => setSearchvalue(e.target.value)}
        ></input>
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="flex justify-between items-center mb-1">
        <div className="font-bold">Trending</div>
        <div className="buttons flex gap-2 ">
          <button
            className="cursor-pointer p-3 bg-black text-white rounded-full"
            onClick={scrollLeft}
          >
            <FaArrowLeft />
          </button>
          <button
            className="cursor-pointer p-3 bg-black text-white rounded-full"
            onClick={scrollRight}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div
        ref={caRef}
        className="carousel flex overflow-x-scroll gap-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {carData.map((show) => {
          if (show.media_type === "movie") {
            return <DisplayCardForMovies data={show} key={show.id} />;
          } else {
            return <DisplayCardForTV data={show} key={show.id} />;
          }
        })}
      </div>
    </div>
  );
};

export default Carousel;
