
import React from "react";
import Post from "../../components/Post/Post";
import Stack from "react-bootstrap/Stack"
import "./home.css"


export default function Home() {
    return (
        <>
            <div className="homeContainer">
                <Stack gap={3} className="col-md-5 mx-auto">
                    <Post />
                    <Post />
                    <Post />
                </Stack>
            </div>

        </>
    )
}




