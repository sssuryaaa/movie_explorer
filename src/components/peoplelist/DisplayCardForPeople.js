const DisplayCardForPeople = ( props ) => {
    const {profile_path, name,} = props.data;
    return (
        <div className="display-card w-50 h-90 ">
            <img src={"https://image.tmdb.org/t/p/w1280/" + profile_path}></img>
            <h1 className="overflow-x-clip">{name}</h1>
        </div>
    )
}

export default DisplayCardForPeople;