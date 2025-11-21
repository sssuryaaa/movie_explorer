import { Link } from "react-router-dom";

const PeopleCard = () => {
  return (
    <div className="home-card">
      <h1 className="font-bold">People</h1>
      <ul>
        <Link to="/people/popular">
          <li className="font-extralight hover:text-[#a0a0a0]">Popular</li>
        </Link>
      </ul>
    </div>
  );
};

export default PeopleCard;
