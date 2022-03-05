
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SidebarTop from "../../components/SidebarTop/SidebarTop";
import Post from "../../components/Post/Post";
import Stack from "react-bootstrap/Stack"
import "./home.css"

export default function Home() {
    return (
        <>
            <Navbar />

            <div className="homeContainer">
                <SidebarTop />
                <Stack gap={3} className="col-md-5 mx-auto">
                    <Post />
                    <Post />
                    <Post />
                </Stack>
            </div>

        </>
    )
}




