import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import useGetShowInfo from "../../hooks/useGetShowInfo";
import { IMG_CDN } from "../../utils/constants";
import Shimmer from "../Shimmer";

const ShowDetails = () => {
  const location = useLocation();
  const isMovie = location.pathname.includes("movies") ? true : false;
  const { id } = useParams();
  const theme = useSelector((store) => store.theme);
  const { showInfo, errorMessage } = useGetShowInfo(id, isMovie);
  if (!showInfo && !errorMessage) return <Shimmer />;
  else if (!showInfo && errorMessage)
    return <div className="w-28 m-auto mt-10">{errorMessage}</div>;
  const { backdrop_path, genres, poster_path, original_title, name, overview } =
    showInfo;
  return (
    <div className={`${theme === "dark" ? "text-white bg-gray-600" : ""}`}>
      <div>
        <img
          className="opacity-50 w-full h-[450px] object-cover"
          src={IMG_CDN + backdrop_path}
        ></img>
      </div>
      <div>
        <img
          className="absolute w-[200px] h-[300px] top-[150px] left-[250px]"
          src={IMG_CDN + poster_path}
        ></img>
      </div>
      <div className="absolute top-[200px] left-[500px]">
        <h1 className="text-4xl font-bold">{original_title || name}</h1>
        <h2>{genres.map((genre) => genre?.name).join(", ")}</h2>
        <p className="my-2.5">{overview}</p>
      </div>
    </div>
  );
};

export default ShowDetails;
