import React from "react";
import "./Register.css"
export default function Register({ setOpenRegister }) {
    return (
        <div className="modalBG">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {
                        setOpenRegister(false);
                    }}> X </button>
                </div>
                <div className="title">
                    <h1>Create Username and Password</h1>
                </div>
                <div className="body">
                    <p>choose a unique username and secure password in order to continue</p>
                </div>
                <div className="footer">
                    <button onClick={() => {
                        setOpenRegister(false);
                    }}>Cancel</button>
                    <button>Submit</button>

                </div>
            </div>
        </div>
    )

}