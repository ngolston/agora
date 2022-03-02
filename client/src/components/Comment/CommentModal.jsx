import React from "react";
import PostContent from "./PostContent";
import { useEffect, useState } from "react";
import axios from "axios";
import ClickOutHandler from 'react-clickout-handler';
import CommentForm from "./CommentForm";
import CommentS from "./Comments";
import RootCommentCon from "./RootCommentCon";
import Comment from "./Comment";

export default function CommentModal(props) {

    const [comment, setComment] = useState({});

    const visibleClass = props.open ? 'block' : 'hidden';

    useEffect(() => {
        axios.get('http://localhost:3035/comments/' + props.id)
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
            <ClickOutHandler onClickOut={() => close()}>
                <div >
                    <div>
                        <Comment comment={comment} id={props.id} />
                    </div>
                </div>
            </ClickOutHandler>
        </div>
    );
}

