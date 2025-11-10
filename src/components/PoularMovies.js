import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import DisplayCard from "./DisplayCard";
import { POP_MOV_URL } from "../utils/constants";

const PopularMovies = () => {
    const [popMovieList, setPopMovieList] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        fetchData(page);
    }, [page]);
    const fetchData = async (page_no) => {
        const data = await fetch(POP_MOV_URL+"&page="+page_no);
        const json = await data.json();
        setPopMovieList([...popMovieList, ...json.results]);
    }
    return popMovieList.length === 0 ? <Shimmer/> : (
        <div className="popular-movies">
            <h1 className="font-bold">Popular Movies</h1>
            <div className="pop-movie-cards flex gap-2 flex-wrap">
                {
                    popMovieList.map((ele) => {
                        return (
                            <DisplayCard data = {ele} key={ele.id}/>
                        )
                    })
                }
            </div>
            <button id="loadmore-btn" className="loadmore-btn w-dvw bg-blue-500" onClick={(event) => {
                setPage(page+1);
            }}>
                Load More
            </button>
        </div>
    )
}

export default PopularMovies;