import React from "react";
import Comment from "./Comment";

export default function CommentPage(props) {

    const commentId = props.match.params.id;

    return (
        <div >
            <div>
                <Comment id={commentId} />
            </div>
        </div>
    );
}

