import MovieCard from "./MovieCard";
import TVCard from "./TVCard";
import PeopleCard from "./PeopleCard";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((store) => store.theme);
  return (
    <div
      className={`flex gap-30 justify-center align-middle bg-[#041E42] text-white p-7 ${
        theme === "dark" ? "bg-gray-900 text-white" : ""
      }`}
    >
      <MovieCard />
      <TVCard />
      <PeopleCard />
    </div>
  );
};

export default Footer;
