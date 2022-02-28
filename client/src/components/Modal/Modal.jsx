import React from "react";
import "./Modal.css"
import Register from "../Register/Register";
import { useState } from "react";
export default function Modal({ setOpenModal }) {
    const [openRegister, setOpenRegister] = useState(false);
    return (
        <div className="modalBG">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {
                        setOpenRegister(false);
                    }}> X </button>
                </div>
                <div className="title">
                    <h1>Sign Up</h1>
                </div>
                <div className="body">
                    <p>Add your email to get started</p>
                </div>
                <div className="footer">
                    <button onClick={() => {
                        setOpenModal(false);
                    }}>Cancel</button>
                    <button className="openRegisterBtn" onClick={() => {
                        setOpenRegister(true);
                    }}>Continue</button>
                    {openRegister && <Register setOpenRegister={setOpenRegister} />}

                </div>
            </div>
        </div>
    )

}



