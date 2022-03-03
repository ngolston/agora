
import React from "react";
import { Link } from "react-router-dom";
import PostContent from "./PostContent";

export default function Post(props) {

    let postClass = (props.open ? "" : "");
    if (props.isListing) {
        postClass += "";
    } else {
        postClass += "";
    }
    return (
        <div>
            {props.open && (
                <div className={postClass}>
                    <PostContent {...props} />
                </div>
            )}
            {!props.open && (
                <Link to={{ pathname: '/comments/' + props._id, state: { commentId: props._id } }} className={postClass}>
                    <PostContent {...props} />
                </Link>
            )}


        </div>
    );
}

