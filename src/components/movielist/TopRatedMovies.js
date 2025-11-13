import { useState, useEffect, useOptimistic } from "react";
import Shimmer from "../Shimmer";
import { TOP_MOV_URL } from "../../utils/constants";
import DisplayCardForMovies from "./DisplayCardForMovies";

const TopRatedMovies = () => {
    const [topRatedMovieList, setTopRatedMovieList] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(()=>{
        if(page === 2){
            var observer = new IntersectionObserver((entries) => {
                if(entries[0].isIntersecting){
                    setPage(prev => prev+1);
                }
            }, {});
            observer.observe(document.getElementById("loadmore-btn"));
        }
        fetchData(page);
    }, [page]);
    const fetchData = async (page_no) => {
        const data = await fetch(TOP_MOV_URL + "&page=" + page_no);
        const json = await data.json();
        setTopRatedMovieList(prevList => {
            const combined = [...prevList, ...json.results];
            return combined.filter(
                (movie, index, self) => index === self.findIndex(m => m.id === movie.id)
            );
        });
    }
    return topRatedMovieList.length === 0 ? <Shimmer/> : (
        <div className="upcoming-movies">
            <h1 className="font-bold">Top Rated Movies</h1>
            <div className="upcoming-movie-cards flex gap-2 flex-wrap">
                {
                    topRatedMovieList.map((ele) => {
                        return (
                            <DisplayCardForMovies data = {ele} key={ele.id}/>
                        )
                    })
                }
            </div>
            <button id="loadmore-btn" className="loadmore-btn w-dvw bg-blue-500" onClick={()=>{
                setPage(page+1);
            }}>
                Load More
            </button>
        </div>
    )
}

export default TopRatedMovies;