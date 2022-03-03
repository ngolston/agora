import React from 'react';
import ClickOutHandler from 'react-clickout-handler';
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Input from "../Input";
import TextBox from "../Text/TextBox";
import Button from "./Button";
import PostFormModalCon from "./PostFormModalCon";
import AuthModalCon from "../Auth/AuthModalCon";
import axios from "axios";

export default function PostFormModal() {

    const modalCon = useContext(PostFormModalCon);
    const authModalCon = useContext(AuthModalCon);

    const visibleClass = modalCon.show ? 'block' : 'hidden';

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [newPostId, setNewPostId] = useState(null);

    function createPost() {
        const data = { title, body };
        axios.post('http://localhost:3035/comments', data, { withCredentials: true })
            .then(response => {
                setNewPostId(response.data._id);
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    authModalCon.setShow('login');
                }
            });
    }

    if (newPostId) {
        return (<Redirect to={'/comments/' + newPostId} />);
    }

    return (
        <div
            className={visibleClass}>
            <ClickOutHandler onClickOut={() => { }}>
                <div>
                    <h1 >Create a post</h1>
                    <Input
                        placeholder={'Title'}
                        onChange={e => setTitle(e.target.value)}
                        value={title} />
                    <TextBox
                        className={'w-full mb-3'}
                        placeholder={'Post text'}
                        onChange={e => setBody(e.target.value)}
                        value={body} />
                    <div>
                        <Button onClick={() => modalCon.setShow(false)}
                            outline>Cancel</Button>
                        <Button onClick={() => createPost()} >POST</Button>
                    </div>
                </div>
            </ClickOutHandler>
        </div>
    );
}

