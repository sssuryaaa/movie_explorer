import { useState } from "react";

const DisplayCardForTV = (props) => {
  const [btnName, setBtnName] = useState("Add to Wishlist");
  const { poster_path, original_name, first_air_date } = props.data;
  return (
    <div className="display-card w-40 h-90 shrink-0">
      <img src={"https://image.tmdb.org/t/p/w1280/" + poster_path}></img>
      <div className="flex justify-between">
        <div>
          <h1 className="overflow-x-clip font-bold">{original_name}</h1>
          <div>{first_air_date}</div>
        </div>
        <div className="p-1">
          <button
            className="p-1 border bg-red-400 border-red-950 text-white rounded-lg"
            onClick={() => {
              btnName === "Add to Wishlist"
                ? setBtnName("Remove from Wishlist")
                : setBtnName("Add to Wishlist");
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayCardForTV;
