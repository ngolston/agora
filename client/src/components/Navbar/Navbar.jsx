import React from "react";
import "./Navbar.css";
import { Search } from "@material-ui/icons"
import { Link } from "react-router-dom"






export default function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <div>
                    <img src="/assets/AgoraLogo.png" alt="logopic" className="logo" />
                </div>
            </div>
            <div className="navbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon" />
                    <input placeholder="Search Agora" className="searchInput" />


                </div>
            </div>

            <div className="navbarRight">
                <div className="navbarLinks">

                    <Link to="/CreatePost">Create Post</Link>
                    <Link to="/Login">Log In</Link>
                    <Link to="Register">Sign Up</Link>
                </div>
            </div>


        </div>
    )
}