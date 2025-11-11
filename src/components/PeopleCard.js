import { Link } from "react-router-dom";

const PeopleCard = () =>{
    return (
        <div className="home-card">
            <h1 className="font-bold">People</h1>
            <ul>
                <Link to="/people/popular" target="_blank"><li>Popular</li></Link>
            </ul>
        </div>
    )
}

export default PeopleCard;