
import { Link } from "react-router-dom";

const MovieCard = () => {
    return (
        <div className="home-card">
            <h1 className="font-bold">Movies</h1>
            <ul>
                <Link to="/movies/popular" target="_blank" ><li className="font-extralight hover:text-[#a0a0a0]">Popular</li></Link>
                <Link to="/movies/nowplaying" target="_blank" ><li className="font-extralight hover:text-[#a0a0a0]">Now Playing</li></Link>
                <Link to="/movies/upcoming" target="_blank" ><li className="font-extralight hover:text-[#a0a0a0]">Upcoming</li></Link>
                <Link to="/movies/toprated" target="_blank" ><li className="font-extralight hover:text-[#a0a0a0]">Top Rated</li></Link>
            </ul>
        </div>
    );
}

export default MovieCard;