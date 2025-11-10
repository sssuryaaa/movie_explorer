import { useState, useEffect, useOptimistic } from "react";
import Shimmer from "./Shimmer";
import DisplayCard from "./DisplayCard";
import { UPC_MOV_URL } from "../utils/constants";

const UpcomingMovies = () => {
    const [upcomingMovieList, setUpcomingMovieList] = useState([]);
    useEffect(()=>{
        fetchData();
    }, [])
    const fetchData = async () => {
        const data = await fetch(UPC_MOV_URL);
        const json = await data.json();
        setUpcomingMovieList(json.results);
    }
    return upcomingMovieList.length === 0 ? <Shimmer/> : (
        <div className="upcoming-movies">
            <h1 className="font-bold">Upcoming Movies</h1>
            <div className="upcoming-movie-cards flex gap-2 flex-wrap">
                {
                    upcomingMovieList.map((ele) => {
                        return (
                            <DisplayCard data = {ele} key = {ele.id}/>
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

export default UpcomingMovies;