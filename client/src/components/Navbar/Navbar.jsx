import React from "react";
import "./Navbar.css";
import { Search } from "@material-ui/icons"
import Modal from "../Modal/Modal";
import { useState } from "react";
// import { Modal } from "@material-ui/core";


export default function Navbar() {
    const [openModal, setOpenModal] = useState(false);
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
                    <button className="navbarLink">Create Post</button>
                    <button className="navbarLink">Log In</button>
                    <button className="openModalBtn" onClick={() => {
                        setOpenModal(true);
                    }}>Sign Up</button>
                    {openModal && <Modal setOpenModal={setOpenModal} />}
                </div>
            </div>


        </div>
    )
}