import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/wishSlice";
import { useSelector } from "react-redux";

const DisplayCardForMovies = (props) => {
  const [btnName, setBtnName] = useState("Add to Wishlist");
  const dispatch = useDispatch();
  const wishItems = useSelector((store) => store.wish.items);
  const { poster_path, title, overview, vote_average, release_date } =
    props.data;
  useEffect(() => {
    if (wishItems.includes(props.data)) {
      setBtnName("Remove from Wishlist");
    } else {
      setBtnName("Add to Wishlist");
    }
  });
  return (
    <div className="display-card w-40 h-90 shrink-0">
      <img src={"https://image.tmdb.org/t/p/w1280/" + poster_path}></img>
      <div className="flex justify-between">
        <div className="width-8/12">
          <h1 className="overflow-x-clip font-bold">{title}</h1>
          <div>{release_date}</div>
        </div>
        <div className="p-1 width-4/12">
          <button
            className="p-1 bg-red-400 border border-red-950 text-white rounded-lg"
            onClick={() => {
              if (btnName === "Add to Wishlist") {
                dispatch(addItem(props.data));
                // setBtnName("Remove from wishlist");
              } else {
                dispatch(removeItem(props.data));
                // setBtnName("Add to Wishlist");
              }
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayCardForMovies;
