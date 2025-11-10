import MovieCard from "./MovieCard";
import TVCard from "./TVCard";
import PeopleCard from "./PeopleCard";

const Body = () => {
    return (
        <div className="body flex gap-30 justify-center align-middle mt-30">
            <MovieCard/>
            <TVCard/>
            <PeopleCard/>
        </div>
    )
}

export default Body;