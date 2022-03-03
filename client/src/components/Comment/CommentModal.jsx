import React from "react";
import PostContent from "./PostContent";
import { useEffect, useState } from "react";
import axios from "axios";
import CommentForm from "./CommentForm";
import CommentS from "./Comments";
import RootCommentCon from "./RootCommentCon";
import Comment from "./Comment";

export default function CommentModal(props) {

    const [comment, setComment] = useState({});

    const visibleClass = props.open ? 'block' : 'hidden';

    useEffect(() => {
        axios.get('http://localhost:3001/comments/' + props.id)
            .then(response => {
                setComment(response.data);
            });
    }, [props.id]);

    function close() {
        setComment({});
        props.onClickOut();
    }

    return (
        <div className={visibleClass}>

            <div >
                <div>
                    <Comment comment={comment} id={props.id} />
                </div>
            </div>

        </div>
    );
}

