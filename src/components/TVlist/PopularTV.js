import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import { POP_TV_URL } from "../../utils/constants";
import { API_KEY } from "../../utils/constants";
import DisplayCardForTV from "./DisplayCardForTV";

const PopularTV = () => {
    const [popMovieList, setPopMovieList] = useState([]);
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
        const data = await fetch(POP_TV_URL+ "&api_key=" + API_KEY +"&page="+page_no);
        const json = await data.json();
        // setPopMovieList([...popMovieList, ...json.results]);
        setPopMovieList(prevList => {
            const combined = [...prevList, ...json.results];
            return combined.filter(
                (movie, index, self) => index === self.findIndex(m => m.id === movie.id)
            );
        });

    }
    return popMovieList.length === 0 ? <Shimmer/> : (
        <div className="popular-movies">
            <h1 className="font-bold">Popular TV Shows</h1>
            <div className="pop-movie-cards flex gap-2 flex-wrap p-9">
                {
                    popMovieList.map((ele) => {
                        return (
                            <DisplayCardForTV data = {ele} key={ele.id}/>
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

export default PopularTV;