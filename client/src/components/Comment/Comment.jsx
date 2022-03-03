import React from "react";
import Post from "../Post/Post";
import CommentForm from "./CommentForm";
import RootCommentCon from "./RootCommentCon";
import CommentS from "./CommentS";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Comment(props) {

    const [comment, setComment] = useState({});
    const [comments, setComments] = useState([]);



    function refreshComments() {
        axios.get('http://localhost:3035/comments/root/' + props.id)
            .then(response => {
                setComments(response.data);
            });
    }


    useEffect(() => {
        if (props.comment) {
            setComment(props.comment);
        } else {
            axios.get('http://localhost:3035/comments/' + props.id)
                .then(response => {
                    setComment(response.data);
                });
        }
        refreshComments();
    }, [props.id, props.comment]);



    return (
        <>
            {comment && (
                <Post {...comment} open={true} />
            )}
            {!!comment && !!comment._id && (
                <>
                    <hr />
                    <CommentForm onSubmit={() => refreshComments()}
                        rootId={comment._id} parentId={comment._id} showAuthor={true} />
                    <hr />
                    <RootCommentCon.Provider value={{ refreshComments, commentsTotals, }}>
                        <CommentS
                            parentId={comment._id}
                            rootId={comment._id}
                            comments={comments} />
                    </RootCommentCon.Provider>
                </>
            )}
        </>
    );
}

