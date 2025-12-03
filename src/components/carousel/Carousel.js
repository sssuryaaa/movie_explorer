import { useEffect, useRef, useState } from "react";
import { API_KEY, CAR_URL } from "../../utils/constants";
import CarShimmer from "./CarShimmer";
import DisplayCardForMovies from "../movielist/DisplayCardForMovies";
import DisplayCardForTV from "../TVlist/DisplayCardForTV";
import { Link, useSearchParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Search from "../search/Search";

const Carousel = () => {
  const [carData, setCarData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchvalue] = useState(
    searchParams.get("query") || ""
  );
  const [searchData, setSearchData] = useState(null);
  const caRef = useRef(null);

  const handleSearch = async () => {
    setSearchParams({ query: searchValue });
  };

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

  useEffect(() => {
    fetchSearchData();
  }, [searchParams]);

  const fetchSearchData = async () => {
    if (searchParams.get("query") === null) return;
    const data = await fetch(
      "https://api.themoviedb.org/3/search/multi?api_key=" +
        API_KEY +
        "&query=" +
        encodeURIComponent(searchParams.get("query"))
    );
    const json = await data.json();
    setSearchData(json.results);
  };

  const fetchCarouselData = async () => {
    const data = await fetch(CAR_URL + "&api_key=" + API_KEY);
    const json = await data.json();
    setCarData(json.results);
  };

  return carData.length === 0 ? (
    <CarShimmer />
  ) : (
    <div className="p-7 min-h-[500px]">
      <div className="w-full flex gap-1.5 justify-center mb-20">
        <input
          className="w-10/12 border border-gray-700 p-2 bg-white text-black rounded-full"
          type="text"
          placeholder="search for movies or tv shows..."
          value={searchValue}
          onChange={(e) => setSearchvalue(e.target.value)}
        ></input>
        <button
          className="p-2 px-4 bg-gray-400 rounded-full bg-"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className="search-results">
        <Search data={searchData} />
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
