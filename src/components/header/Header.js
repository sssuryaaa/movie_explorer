import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeTheme } from "../../utils/themeSlice";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  const [openMovieDropdown, setOpenMovieDropdown] = useState(false);
  const [openTVDropdown, setOpenTVDropdown] = useState(false);
  const [openPeopleDropdown, setOpenPeopleDropdown] = useState(false);
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.theme);
  const wishItems = useSelector((store) => store.wish.items);

  return (
    <div
      className={`header flex justify-between p-4 ${
        theme === "dark"
          ? "bg-linear-to-b from-gray-700 to-gray-600 text-white"
          : ""
      }`}
    >
      <h1 className="logo">Logo</h1>
      <ul className="header-list flex">
        <Link to="/">
          <li className="mx-8 font-extralight">Home</li>
        </Link>
        <li
          className="mx-8 font-extralight"
          onMouseEnter={() => setOpenMovieDropdown(true)}
          onMouseLeave={() => setOpenMovieDropdown(false)}
        >
          Movies
          {openMovieDropdown && (
            <div
              className={`border py-1 rounded-lg movie-dropdown absolute z-100 bg-white shadow-xl text-black font-extralight ${
                theme === "dark" ? " bg-gray-900" : ""
              }`}
            >
              <Link to="/movies/popular">
                <div className="hover:bg-gray-200 px-4 py-3 cursor-pointer">
                  Popular
                </div>
              </Link>
              <Link to="/movies/nowplaying">
                <div className="hover:bg-gray-200 px-4 py-3 cursor-pointer">
                  Now Playing
                </div>
              </Link>
              <Link to="/movies/upcoming">
                <div className="hover:bg-gray-200 px-4 py-3 cursor-pointer">
                  Upcoming
                </div>
              </Link>
              <Link to="/movies/toprated">
                <div className="hover:bg-gray-200 px-4 py-3 cursor-pointer">
                  Top Rated
                </div>
              </Link>
            </div>
          )}
        </li>
        <li
          className="mx-8 font-extralight"
          onMouseEnter={() => setOpenTVDropdown(true)}
          onMouseLeave={() => setOpenTVDropdown(false)}
        >
          TV Shows
          {openTVDropdown && (
            <div
              className={`border py-1 rounded-lg movie-dropdown absolute z-100 bg-white shadow-xl text-black font-extralight ${
                theme === "dark" ? " bg-gray-900" : ""
              }`}
            >
              <Link to="/tv/popular">
                <div className="hover:bg-gray-200 px-4 py-3 cursor-pointer">
                  popular
                </div>
              </Link>
              <Link to="/tv/airing_today">
                <div className="hover:bg-gray-200 px-4 py-3 cursor-pointer">
                  Airing Today
                </div>
              </Link>
              <Link to="/tv/on_the_air">
                <div className="hover:bg-gray-200 px-4 py-3 cursor-pointer">
                  On the Air
                </div>
              </Link>
              <Link to="/tv/top_rated">
                <div className="hover:bg-gray-200 px-4 py-3 cursor-pointer">
                  Top Rated
                </div>
              </Link>
            </div>
          )}
        </li>
        <li
          className="mx-8 font-extralight"
          onMouseEnter={() => setOpenPeopleDropdown(true)}
          onMouseLeave={() => setOpenPeopleDropdown(false)}
        >
          People
          {openPeopleDropdown && (
            <div
              className={`border py-1 rounded-lg movie-dropdown absolute z-100 bg-white shadow-xl text-black font-extralight ${
                theme === "dark" ? " bg-gray-900" : ""
              }`}
            >
              <Link to="people/popular">
                <div className="hover:bg-gray-200 px-4 py-3 cursor-pointer">
                  popular
                </div>
              </Link>
            </div>
          )}
        </li>
        <Link to="/wishlist">
          <li
            className={`mx-8 font-extralight ${
              wishItems.length > 0 ? "text-red-600 font-bold" : ""
            }`}
          >
            Watch Later ({wishItems.length})
          </li>
        </Link>
        <li
          className=" mx-8 cursor-pointer font-extralight"
          onClick={() => {
            if (theme === "dark") {
              dispatch(changeTheme("light"));
            } else {
              dispatch(changeTheme("dark"));
            }
          }}
        >
          {theme === "dark" ? (
            <MdOutlineDarkMode className="font-6xl" />
          ) : (
            <MdDarkMode className="font-6xl" />
          )}
        </li>
      </ul>
    </div>
  );
};

export default Header;
