
import { Link } from "react-router-dom";

const MovieCard = () => {
    return (
        <div className="home-card">
            <h1 className="font-bold">Movies</h1>
            <ul>
                <Link to="/movies/popular" target="_blank"><li>Popular</li></Link>
                <Link to="/movies/nowplaying" target="_blank"><li>Now Playing</li></Link>
                <Link to="/movies/upcoming" target="_blank"><li>Upcoming</li></Link>
                <Link to="/movies/toprated" target="_blank"><li>Top Rated</li></Link>
            </ul>
        </div>
    );
}

export default MovieCard;