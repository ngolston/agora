// import { Modal } from "@material-ui/core";
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PostFormModal from "../../components/Post/PostFormModal";
import AuthModal from "../../components/Auth/AuthModal";

export default function Home() {
    return (<div>
        <Router>
            <Navbar />
            <NewPage />
            <PostFormModal />
            <AuthModal />
        </Router>
    </div>

    )
}




