import React from 'react'
import "./LogIn.css"
export default function LogIn() {
    return (
        <div>
            <div className="loginWrap">
                <div className="loginLeft">
                    <h3 className="loginLogo">Agora</h3>
                    <span className="loginDescription">
                        Get started with community
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginBtn">Log In</button>

                    </div>
                </div>
            </div>

        </div>
    )
}
