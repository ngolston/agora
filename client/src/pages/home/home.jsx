
import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import PostFormModal from "../../components/Post/PostFormModal";
import Modal from "../../components/Modal/Modal";
import MainPage from "../../components/Main/MainPage";
import NewPage from "../../components/New/NewPage";

function Home() {
    return (<div>
        <MainPage>
            <Navbar />
            <NewPage />
            <PostFormModal />
            <Modal />
        </MainPage>
    </div>

    )
}
export default Home;