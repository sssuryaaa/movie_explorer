import { useSelector } from "react-redux";
import Carousel from "../carousel/Carousel";

const Body = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <div className={`body ${theme === "dark" ? "bg-gray-600 text-white" : ""}`}>
      <Carousel />
    </div>
  );
};

export default Body;
