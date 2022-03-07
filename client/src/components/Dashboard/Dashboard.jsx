import React from 'react'
// import { useState } from 'react'
import "./Dashboard.css"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
// import { useMutation } from '@apollo/client'
// import { ADD_NEW_POST } from '../../GraphQl/Mutations'


export default function Dashboard() {

    // const [title, setTitle] = useState("");
    // const [text, setText] = useState("");
    // const [authorUsername, setAuthorUsername] = useState("");
    // const [_id, setId] = useState("");


    // const [createPost] = useMutation(ADD_NEW_POST);
    // const addPost = () => {
    //     createPost({
    //         variables: {
    //             title: title,
    //             text: text,
    //             authorUsername: authorUsername,
    //             _id: _id,
    //         }

    //     });

    // };

    return (
        <Card className="dash" body style={{ width: '40rem' }}>
            <Form.Select aria-label="Default select example">
                <option>Community Options</option>
                <option value="1">Sports</option>
                <option value="2">Technology</option>
                <option value="3">Movies</option>
            </Form.Select>
            <Card>
                <Card.Header id="dashBtn" as="h5" className="d-flex justify-content-end">

                    <Button variant="primary">Add An Image</Button>

                </Card.Header>
                <Card.Body>

                    <Form >
                        <Card.Title>Post Title</Card.Title>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Start adding to your community</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-end"> <Button type="submit" variant="primary">Post</Button></Card.Footer>
            </Card>
        </Card>

    )
}


// , _id: _id.value