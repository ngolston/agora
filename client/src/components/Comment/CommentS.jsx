import React from 'react';
import TimeAgo from 'timeago-react';
import Button from "../Button/Button";
import CommentForm from "./CommentForm";
import { useState, useContext } from 'react';
import RootCommentCon from "./RootCommentCon";
/*import ReactMarkdown from "react-markdown";*/
/*import gfm from "remark-gfm";*/


export default function CommentS(props) {
    const [showForm, setShowForm] = useState(false);
    const comments = props.comments.filter(comment => props.parentId === comment.parentId);
    const rootCommentInfo = useContext(RootCommentCon);

    return (
        <div>
            {comments.map(comment => {
                const replies = props.comments.filter(c => c.parentId === comment._id);
                return (
                    <div >
                        <div>
                            <div />
                            <div >{comment.author}</div>
                            <TimeAgo datetime={comment.postedAt} />
                        </div>
                        <div >
                            <div >

                                <Button type={'button'}
                                    onClick={() => setShowForm(comment._id)}>Reply</Button>
                                {comment._id === showForm && (
                                    <CommentForm
                                        parentId={comment._id}
                                        rootId={props.rootId}
                                        onSubmit={() => {
                                            setShowForm(false);
                                            rootCommentInfo.refreshComments();
                                        }}
                                        showAuthor={false}
                                        onCancel={e => setShowForm(false)} />
                                )}
                                {replies.length > 0 && (
                                    <CommentS comments={props.comments} parentId={comment._id} rootId={props.rootId} />
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

