import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../utils/wishSlice";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IMG_CDN } from "../../utils/constants";

const DisplayCardForTV = (props) => {
  const [btnName, setBtnName] = useState("Add to Wishlist");
  const dispatch = useDispatch();
  const wishItems = useSelector((store) => store.wish.items);
  const { poster_path, original_name, first_air_date } = props.data;
  useEffect(() => {
    if (wishItems.some((item) => item.id === props.data.id)) {
      setBtnName("Remove from Wishlist");
    } else {
      setBtnName("Add to Wishlist");
    }
  });
  return (
    <div className="display-card w-40 h-90 shrink-0">
      <Link to={"/tv/" + props.data.id}>
        <img src={IMG_CDN + poster_path}></img>
      </Link>
      <div className="flex justify-between">
        <div>
          <Link to={"/tv/" + props.data.id}>
            <h1 className="overflow-x-clip">{original_name}</h1>
          </Link>
        </div>
        <div className="p-1">
          <button
            className={`cursor-pointer p-1`}
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

export default DisplayCardForTV;
