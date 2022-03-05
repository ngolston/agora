import React from 'react'
import "./Post.css"

export default function Post() {

    return (
        <div className="post">
            <div className="postWrap">
                <div className="postHead">
                    <div className="titleCloseBtn">

                    </div>
                    <div className="postHeadL"></div>
                    <div className="postHeadR"></div>
                </div>
                <div className="postBody">
                    <span>Post Goes here</span>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
                <div className="postFoot"></div>
                <div className="postBody">
                    <span>Post Goes here</span>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
                <div className="postFoot"></div>
                <div className="postBody">
                    <span>Post Goes here</span>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
                <div className="postFoot"></div>
            </div>

        </div>
    )
}
