
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SidebarTop from "../../components/SidebarTop/SidebarTop";
import Feed from "../../components/Feed/Feed";
import SidebarBottom from "../../components/SidebarBottom/SidebarBottom";
import "./home.css"
export default function Home() {
    return (
        <>
            <Navbar />
            <div className="homeContainer">
                <SidebarTop />
                <SidebarBottom />
                <Feed />
            </div>

        </>
    )
}




