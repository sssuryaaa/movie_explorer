import React from "react";
import { IMG_CDN } from "../../utils/constants";

const Search = ({ data }) => {
  console.log(data);
  if (!data) return null;
  if (data.length === 0)
    return <div className="w-36 mx-auto my-9">No Results</div>;
  return (
    <div>
      {data.map((card) => {
        if (card.media_type === "movie") {
          return (
            <div
              className="p-3 m-3 flex gap-2 border border-gray-500"
              key={card.id}
            >
              <img className="w-24 h-24" src={IMG_CDN + card.poster_path}></img>
              <div>
                <h1>{card.original_title}</h1>
                <p>{card.overview}</p>
              </div>
            </div>
          );
        } else if (card.media_type === "person") {
          return (
            <div
              className="p-3 m-3 flex gap-2 border border-gray-500"
              key={card.id}
            >
              <img
                className="w-24 h-24"
                src={IMG_CDN + card.profile_path}
              ></img>
              <div>
                <h1>{card.name}</h1>
                <p>{card.known_for_department}</p>
              </div>
            </div>
          );
        } else {
          return (
            <div
              className="p-3 m-3 flex gap-2 border border-gray-500"
              key={card.id}
            >
              <img className="w-24 h-24" src={IMG_CDN + card.poster_path}></img>
              <div>
                <h1>{card.name}</h1>
                <p>{card.overview}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Search;
