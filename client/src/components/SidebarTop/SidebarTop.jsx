import React from "react";
import "./SidebarTop.css"


export default function SidebarTop() {
    return (
        <div className="sidebarTop">
            <div className="sbWrap">
                <ul className="communityList">
                    <li className="community">
                        <span className="communityListTxt">Communities</span>

                    </li>
                    <li className="community">
                        <span className="communityListTxt">Communities</span>

                    </li>
                    <li className="community">
                        <span className="communityListTxt">Communities</span>

                    </li>
                </ul>
                <button className="communityBarBtn">Explore More Communities</button>
            </div>
        </div>
    )
}