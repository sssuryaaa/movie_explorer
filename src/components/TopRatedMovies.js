import { useState, useEffect, useOptimistic } from "react";
import Shimmer from "./Shimmer";
import DisplayCard from "./DisplayCard";
import { TOP_MOV_URL } from "../utils/constants";

const TopRatedMovies = () => {
    const [topRatedMovieList, setTopRatedMovieList] = useState([]);
    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(TOP_MOV_URL);
        const json = await data.json();
        setTopRatedMovieList(json.results);
    }
    return topRatedMovieList.length === 0 ? <Shimmer/> : (
        <div className="upcoming-movies">
            <h1 className="font-bold">Top Rated Movies</h1>
            <div className="upcoming-movie-cards flex gap-2 flex-wrap">
                {
                    topRatedMovieList.map((ele) => {
                        return (
                            <DisplayCard data = {ele} key={ele.id}/>
                        )
                    })
                }
            </div>
            <button className="loadmore-btn w-dvw bg-blue-500">
                Load More
            </button>
        </div>
    )
}

export default TopRatedMovies;