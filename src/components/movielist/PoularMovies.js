import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import { POP_MOV_URL } from "../../utils/constants";
import DisplayCardForMovies from "./DisplayCardForMovies";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const PopularMovies = () => {
  const [popMovieList, setPopMovieList] = useState([]);
  const [page, setPage] = useState(1);
  const theme = useSelector((store) => store.theme);
  useEffect(() => {
    if (page === 2) {
      var observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      }, {});
      observer.observe(document.getElementById("loadmore-btn"));
    }
    fetchData(page);
    // return () => observer.disconnect();
  }, [page]);
  const fetchData = async (page_no) => {
    const data = await fetch(POP_MOV_URL + "&page=" + page_no);
    const json = await data.json();
    // setPopMovieList([...popMovieList, ...json.results]);
    setPopMovieList((prevList) => {
      const combined = [...prevList, ...json.results];
      return combined.filter(
        (movie, index, self) =>
          index === self.findIndex((m) => m.id === movie.id)
      );
    });
  };
  return popMovieList.length === 0 ? (
    <Shimmer />
  ) : (
    <div
      className={`popular-movies ${
        theme === "dark" ? "bg-gray-600 text-white" : ""
      }`}
    >
      <h1 className="font-bold">Popular Movies</h1>
      <div className="pop-movie-cards flex gap-2 flex-wrap p-9">
        {popMovieList.map((movie) => {
          return <DisplayCardForMovies data={movie} key={movie.id} />;
        })}
      </div>
      <button
        id="loadmore-btn"
        className="loadmore-btn w-dvw bg-blue-500"
        onClick={(event) => {
          setPage(page + 1);
        }}
      >
        Load More
      </button>
    </div>
  );
};

export default PopularMovies;
