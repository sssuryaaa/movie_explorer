const DisplayCardForMovies = ( props ) => {
    const {poster_path, title, overview, vote_average, release_date} = props.data;
    return (
        <div className="display-card w-50 h-90 shrink-0">
            <img src={"https://image.tmdb.org/t/p/w1280/" + poster_path}></img>
            <h1 className="overflow-x-clip font-bold">{title}</h1>
            <div>{release_date}</div>
        </div>
    )
}

export default DisplayCardForMovies;