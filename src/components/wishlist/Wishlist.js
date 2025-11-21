import { useSelector } from "react-redux";
import DisplayCardForMovies from "../movielist/DisplayCardForMovies";

const Wishlist = () => {
  const wishItems = useSelector((store) => store.wish.items);
  return (
    <div className="flex gap-2">
      {wishItems.map((item, index) => {
        return <DisplayCardForMovies data={item} key={index} />;
      })}
    </div>
  );
};

export default Wishlist;
