import React from 'react'
import Post from "../Post/Post"
import Card from "react-bootstrap/Card"
import "./Community.css"
export default function Community() {
    return (
        <div>

            <Card className="community">
                <Card.Header id="communityHead" as="h5" className="d-flex justify-content-end">


                    <Card.Title >Community title</Card.Title>

                </Card.Header>
                <Card.Body className="cardBody">
                    <Post />

                </Card.Body>

            </Card>





        </div>
    )
}
