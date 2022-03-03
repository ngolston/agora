import React from 'react';
import { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
/*import Input from "../Input";*/
import TextBox from "../Text/TextBox";
/*import Button from "./Button";*/
import PostFormModalCon from "./PostFormModalCon";
/*import AuthModalCon from "../Auth/AuthModalCon";*/
import axios from "axios";
import Register from '../Register/Register';
import Modal from '../Modal/Modal';

export default function PostFormModal() {

    const modalCon = useContext(PostFormModalCon);
    const registerPage = useContext(Register);

    const visibleClass = modalCon.show ? 'block' : 'hidden';

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [newPostId, setNewPostId] = useState(null);

    function createPost() {
        const data = { title, body };
        axios.post('http://localhost:3001/comments', data, { withCredentials: true })
            .then(response => {
                setNewPostId(response.data._id);
            })
            .catch(error => {
                console.log(error);
                if (error.response.status === 401) {
                    registerPage.setShow('login');
                }
            });
    }


    if (newPostId) {
        return (<Redirect to={'/comments/' + newPostId} />);
    }

    return (
        <div
            className={"" + visibleClass} style={{ backgroundColor: '' }}>

            <div className="">
                <h1 className="">Create a post</h1>
                <Modal
                    className={''}
                    placeholder={'Title'}
                    onChange={e => setTitle(e.target.value)}
                    value={title} />
                <TextBox
                    className={''}
                    placeholder={'Post text'}
                    onChange={e => setBody(e.target.value)}
                    value={body} />
                <div className={'text-right'}>
                    <button onClick={() => modalCon.setShow(false)}
                        outline className={''}>Cancel</button>
                    <button onClick={() => createPost()} className={''}>POST</button>
                </div>
            </div>

        </div>
    );
}


