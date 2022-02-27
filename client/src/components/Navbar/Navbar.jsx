import React from "react";
import "./Navbar.css";
import { Search } from "@material-ui/icons"

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
                    <span className="navbarLink">Create Post |</span>
                    <span className="navbarLink">Log In |</span>
                    <span className="navbarLink">Sign Up</span>
                </div>
            </div>


        </div>
    )
}