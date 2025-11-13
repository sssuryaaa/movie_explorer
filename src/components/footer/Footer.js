import MovieCard from "./MovieCard"
import TVCard from "./TVCard"
import PeopleCard from "./PeopleCard"

const Footer = () => {
    return (
        <div className="flex gap-30 justify-center align-middle bg-[#041E42] text-white p-7">

                <MovieCard/>
                <TVCard/>
                <PeopleCard/>
         </div>
    )
}

export default Footer;