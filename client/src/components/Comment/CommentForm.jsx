import React from "react";
import { useContext, useState } from "react";
import UserCon from "../UserCon";
import TextBox from "../Text/TextBox";
import Button from "./Button";
import axios from "axios";

export default function CommentForm(props) {
    const userInfo = useContext(UserCon);
    const [commentBody, setCommentBody] = useState('');
    function postComment(e) {
        e.preventDefault();
        const data = { body: commentBody, parentId: props.parentId, rootId: props.rootId, };
        axios.post('http://localhost:3035/comments', data, { withCredentials: true })
            .then(response => {
                setCommentBody('');
                if (props.onSubmit) {
                    props.onSubmit();
                }
            });
    }
    return (
        <div>
            {userInfo.username && props.showAuthor && (
                <div>
                    Comment as {userInfo.username}
                </div>
            )}

            <form onSubmit={e => postComment(e)}>
                <TextBox
                    onChange={e => setCommentBody(e.target.value)}
                    value={commentBody}
                    placeholder={'Your comment'} />
                <div>
                    {!!props.onCancel && (
                        <Button outline

                            onClick={e => props.onCancel()}>Cancel</Button>
                    )}
                    <Button>Comment</Button>
                </div>
            </form>
        </div>
    );
}

