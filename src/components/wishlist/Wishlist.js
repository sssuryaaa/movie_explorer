import { useSelector } from "react-redux";
import DisplayCardForMovies from "../movielist/DisplayCardForMovies";
import DisplayCardForTV from "../TVlist/DisplayCardForTV";

const Wishlist = () => {
  const wishItems = useSelector((store) => store.wish.items);
  const theme = useSelector((store) => store.theme);
  return wishItems.length === 0 ? (
    <div
      className={`text-center pt-24 min-h-[66%] pb-24 ${
        theme === "dark" ? "bg-gray-600 text-white" : ""
      }`}
    >
      No items in the watch later yet.
    </div>
  ) : (
    <div
      className={`flex gap-2 min-h-2/3 ${
        theme === "dark" ? "bg-gray-600 text-white" : ""
      }`}
    >
      {wishItems.map((item, index) => {
        return item.media_type === "movie" ? (
          <DisplayCardForMovies data={item} key={item.id} />
        ) : (
          <DisplayCardForTV data={item} key={item.id} />
        );
      })}
    </div>
  );
};

export default Wishlist;
