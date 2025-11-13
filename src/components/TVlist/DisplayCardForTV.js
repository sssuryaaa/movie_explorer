const DisplayCardForTV = ( props ) => {
    const {poster_path, original_name, first_air_date} = props.data;
    return (
        <div className="display-card w-50 h-90 shrink-0">
            <img src={"https://image.tmdb.org/t/p/w1280/" + poster_path}></img>
            <h1 className="overflow-x-clip font-bold">{original_name}</h1>
            <div>{first_air_date}</div>
        </div>
    )
}

export default DisplayCardForTV;