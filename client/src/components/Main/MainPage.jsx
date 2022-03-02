import React from "react";
import Navbar from "../Navbar/Navbar";
import PostForm from "../Post/PostForm"
import PostsListing from "../Post/PostListing";

export default function MainPage() {
    return (<div>
        <Navbar />
        <PostForm />
        <PostsListing />
    </div>);
}

;