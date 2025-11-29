import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../../utils/wishSlice";
import { useSelector } from "react-redux";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const DisplayCardForMovies = (props) => {
  const [btnName, setBtnName] = useState("Add to Wishlist");
  const dispatch = useDispatch();
  const wishItems = useSelector((store) => store.wish.items);
  const { poster_path, title, overview, vote_average, release_date, id } =
    props.data;
  useEffect(() => {
    if (wishItems.some((item) => item.id === props.data.id)) {
      setBtnName("Remove from Wishlist");
    } else {
      setBtnName("Add to Wishlist");
    }
  });
  return (
    <div className="display-card w-40 h-90 shrink-0">
      <Link to={"/movies/" + id}>
        <img src={"https://image.tmdb.org/t/p/w1280/" + poster_path}></img>
      </Link>
      <div className="flex justify-between">
        <div className="width-8/12">
          <Link to={"/movies/" + id}>
            <h1 className="overflow-x-clip font-normal">{title}</h1>
          </Link>
        </div>
        <div className="p-1 width-4/12">
          <button
            className={`cursor-pointer p-1 text-white rounded-lg`}
            onClick={(e) => {
              if (btnName === "Add to Wishlist") {
                dispatch(addItem(props.data));
              } else {
                dispatch(removeItem(props.data.id));
              }
            }}
          >
            {btnName == "Add to Wishlist" ? (
              <IoBookmarkOutline />
            ) : (
              <IoBookmark />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisplayCardForMovies;
