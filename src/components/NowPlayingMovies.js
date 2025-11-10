import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import DisplayCard from "./DisplayCard";
import { NOW_MOV_URL } from "../utils/constants";

const NowPlayingMovies = () => {
    const [nowPlayingMovieList, setNowPlayingMovieList] = useState([]);
    console.log(nowPlayingMovieList);
    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(NOW_MOV_URL);
        const json = await data.json();
        setNowPlayingMovieList(json.results);
    }
    return nowPlayingMovieList.length === 0 ? <Shimmer/> : (
        <div className="popular-movies">
            <h1 className="font-bold">Now Playing</h1>
            <div className="now-playing-movie-cards flex gap-2 flex-wrap">
                {
                    nowPlayingMovieList.map((ele) => {
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

export default NowPlayingMovies;