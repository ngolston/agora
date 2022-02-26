import "./Navbar.css";

export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">Agora</span>
            </div>
            <div className="navbarCenter">
                <div className="searchBar">
                    <Search />
                    <input placeholder="Search Agora" className="searchInput" />


                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Create Post</span>
                    <span className="navbarlink">Profile/Signup</span>
                </div>
            </div>


        </div>
    )
}