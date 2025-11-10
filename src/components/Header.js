const Header = () => {
    return (
        <div className="header flex justify-between m-2 mt-3.5">
            <h1 className="logo">Logo</h1>
            <ul className="header-list flex">
                <li className="mx-8">Home</li>
                <li className="mx-8">Movies</li>
                <li className="mx-8">TV Shows</li>
                <li className="mx-8">People</li>
            </ul>
        </div>
    )
}

export default Header;