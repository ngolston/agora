/*import React from "react";
import "./LoginModal.css"
import LogIn from "../LogIn/LogIn";
import { useState } from "react";

export default function LoginModal({ setOpenLoginModal }) {
    const [openLogin, setOpenLogin] = useState(false);
    return (
        <div className="modalBG">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {
                        setOpenLogin(false);
                    }}> X </button>
                </div>

                <div className="footer">
                    <button onClick={() => {
                        setOpenLoginModal(false);
                    }}>Cancel</button>
                    <button className="openLoginBtn" onClick={() => {
                        setOpenLogin(true);
                    }}>Continue</button>
                    {openLogin && <LogIn setOpenLogin={setOpenLogin} />}

                </div>
            </div>
        </div>
    )

}*/