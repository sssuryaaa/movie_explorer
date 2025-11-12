import { useState } from "react";

const Header = () => {

    const [openMovieDropdown, setOpenMovieDropdown] = useState(false);
    const [openTVDropdown, setOpenTVDropdown]= useState(false);
    const [openPeopleDropdown, setOpenPeopleDropdown] = useState(false);

    return (
        <div className="header flex justify-between mb-2 bg-[#003153] relative shadow-[0_4px_4px_-2px_rgba(0,0,0,0.2)] p-4 text-white">
            <h1 className="logo">Logo</h1>
            <ul className="header-list flex">
                <li className="mx-8">Home</li>
                <li className="mx-8" onMouseEnter={() => setOpenMovieDropdown(true)} onMouseLeave={()=> setOpenMovieDropdown(false)}>
                    Movies
                    {
                        openMovieDropdown && (
                        <div className="movie-dropdown absolute text-black">
                            <div>
                                Popular
                            </div>
                            <div>
                                Now Playing
                            </div>
                            <div>
                                Upcoming
                            </div>
                            <div>
                                Top Rated
                            </div>
                        </div>
                        )
                    }                   
                </li>
                <li className="mx-8" onMouseEnter={()=> setOpenTVDropdown(true)} onMouseLeave={() => setOpenTVDropdown(false)}>
                    TV Shows
                    {
                        openTVDropdown && (
                            <div className="tv-dropdown absolute bg-white shadow-xl text-black">
                                <div className="hover:bg-gray-200 p-1 px-1.5">
                                    popular
                                </div>
                                <div className="hover:bg-gray-200 p-1 px-1.5">
                                    Airing Today
                                </div>
                                <div className="hover:bg-gray-200 p-1 px-1.5">
                                    On the Air
                                </div>
                                <div className="hover:bg-gray-200 p-1 px-1.5">
                                    Top Rated
                                </div>
                            </div>
                        )
                    }
                </li>
                <li className="mx-8" onMouseEnter={()=>setOpenPeopleDropdown(true)} onMouseLeave={() => setOpenPeopleDropdown(false)}>
                    People
                    {
                        openPeopleDropdown && (
                            <div className="people-dropdown absolute text-black">
                                <div>
                                    popular
                                </div>
                            </div>
                        )
                    }
                </li>
            </ul>
        </div>
    )
}

export default Header;