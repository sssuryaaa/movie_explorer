import { Link } from "react-router-dom";

const TVCard = () => {
    return (
        <div className="home-card">
            <h1 className="font-bold">TV Shows</h1>
            <ul>
                <Link to="/tv/popular" target="_blank"><li>Popular</li></Link>
                <Link to="/tv/airing_today" target="_blank"><li>Airing Today</li></Link>
                <Link to="/tv/on_the_air" target="_blank"><li>On the Air</li></Link>
                <Link to="/tv/top_rated" target="_blank"><li>Top Rated</li></Link>
            </ul>
        </div>
    )
}

export default TVCard;