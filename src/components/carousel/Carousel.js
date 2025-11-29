import { useEffect, useState } from "react";
import { API_KEY, CAR_URL } from "../../utils/constants";
import CarShimmer from "./CarShimmer";
import DisplayCardForMovies from "../movielist/DisplayCardForMovies";
import DisplayCardForTV from "../TVlist/DisplayCardForTV";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [carData, setCarData] = useState([]);
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
      <div className="font-bold">Trending</div>
      <div className="carousel flex overflow-x-scroll gap-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
