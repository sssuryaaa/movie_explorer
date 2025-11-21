import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMovieDropdown, setOpenMovieDropdown] = useState(false);
  const [openTVDropdown, setOpenTVDropdown] = useState(false);
  const [openPeopleDropdown, setOpenPeopleDropdown] = useState(false);
  const wishItems = useSelector((store) => store.wish.items);

  return (
    <div className="header flex justify-between mb-2 relative shadow-[0_3px_3px_-2px_rgba(0,0,0,0.2)] p-4 ">
      <h1 className="logo">Logo</h1>
      <ul className="header-list flex">
        <Link to="/">
          <li className="mx-8 font-bold">Home</li>
        </Link>
        <li
          className="mx-8 font-bold"
          onMouseEnter={() => setOpenMovieDropdown(true)}
          onMouseLeave={() => setOpenMovieDropdown(false)}
        >
          Movies
          {openMovieDropdown && (
            <div className="movie-dropdown absolute text-black font-normal">
              <div>Popular</div>
              <div>Now Playing</div>
              <div>Upcoming</div>
              <div>Top Rated</div>
            </div>
          )}
        </li>
        <li
          className="mx-8 font-bold"
          onMouseEnter={() => setOpenTVDropdown(true)}
          onMouseLeave={() => setOpenTVDropdown(false)}
        >
          TV Shows
          {openTVDropdown && (
            <div className="tv-dropdown absolute bg-white shadow-xl text-black font-normal">
              <div className="hover:bg-gray-200 p-1 px-1.5">popular</div>
              <div className="hover:bg-gray-200 p-1 px-1.5">Airing Today</div>
              <div className="hover:bg-gray-200 p-1 px-1.5">On the Air</div>
              <div className="hover:bg-gray-200 p-1 px-1.5">Top Rated</div>
            </div>
          )}
        </li>
        <li
          className="mx-8 font-bold"
          onMouseEnter={() => setOpenPeopleDropdown(true)}
          onMouseLeave={() => setOpenPeopleDropdown(false)}
        >
          People
          {openPeopleDropdown && (
            <div className="people-dropdown absolute text-black font-normal">
              <div>popular</div>
            </div>
          )}
        </li>
        <Link to="/wishlist">
          <li className="font-bold">Wishlist ({wishItems.length})</li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
