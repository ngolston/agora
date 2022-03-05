import React from 'react'
import "./Dashboard.css"


export default function Dashboard({ setOpenDash }) {

    return (
        <div className="dashboard">
            <div className="dashWrap">
                <div className="dashHead">
                    <img className="logohead" src="/assets/AgoraLogo.png" alt="logo" />
                </div>
                <div className="dashBody">
                    <input placeholder="Start typing to begin your post" type="text" className="dashInput" />
                </div>
                <hr className="dashHr" />

                <div className="dashFoot">
                    <div className="dashChoices">
                        <div className="dashOption">
                            <span className="dashOptionTxt">Add a picture</span>
                            <button className="dashBtn">Post</button>
                        </div>
                    </div>
                </div>
                <div className="cancel">
                    <button onClick={() => {
                        setOpenDash(false);
                    }}>Cancel</button>
                    <button>Submit</button>

                </div>
            </div>
        </div>

    )
}
