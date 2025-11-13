import { Link } from "react-router-dom";

const TVCard = () => {
    return (
        <div className="home-card">
            <h1 className="font-bold">TV Shows</h1>
            <ul>
                <Link to="/tv/popular" target="_blank"><li className="font-extralight hover:text-[#a0a0a0]">Popular</li></Link>
                <Link to="/tv/airing_today" target="_blank"><li className="font-extralight hover:text-[#a0a0a0]">Airing Today</li></Link>
                <Link to="/tv/on_the_air" target="_blank"><li className="font-extralight hover:text-[#a0a0a0]">On the Air</li></Link>
                <Link to="/tv/top_rated" target="_blank"><li className="font-extralight hover:text-[#a0a0a0]">Top Rated</li></Link>
            </ul>
        </div>
    )
}

export default TVCard;