import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"
import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { ADD_NEW_POST } from "../../GraphQl/Queries"


export default function Post() {
    const [setTitle] = useState("");
    const [setText] = useState("");
    const [setAuthorUsername] = useState("");
    const { data } = useQuery(ADD_NEW_POST);
    const [post, setPost] = useState([]);

    useEffect(() => {
        if (data) {
            setPost(data.getAllPost);
        }

    }, [data]);


    return (
        <div>
            {""}

            {post.map((val) => {
                return (

                    <Container style={{ width: '40rem' }}>
                        <Stack>
                            <Card className="post">
                                <Card.Header className="postHead" placeholder="User" onChange={(e) => {
                                    setAuthorUsername(e.target.value);
                                }}></Card.Header>
                                <Card.Body>
                                    <Card.Title className="postTitle" placeholder="Post Title" onChange={(e) => {
                                        setTitle(e.target.value);
                                    }}></Card.Title>
                                    <Card.Text className="text" placeholder="text" onChange={(e) => {
                                        setText(e.target.value);
                                    }}>


                                    </Card.Text>
                                    <Stack direction="horizontal" gap={2}>
                                        <Button variant="primary">Like</Button>
                                        <Button >Dislike</Button>
                                    </Stack>
                                </Card.Body>
                            </Card>
                        </Stack>
                    </Container>)
            })}
        </div>
    )
}
