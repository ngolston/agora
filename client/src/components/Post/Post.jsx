import React from 'react'
import "./Post.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"

export default function Post() {

    return (
        <Container>
            <Stack>
                <Card>
                    <Card.Header>Author/logo?</Card.Header>
                    <Card.Body>
                        <Card.Title>Post</Card.Title>
                        <Card.Text>
                            This is a post that you can add to a community!
                        </Card.Text>
                        <Button variant="primary">Like</Button>
                        <Button>Dislike</Button>
                    </Card.Body>
                </Card>
            </Stack>
        </Container>
        /*<div className="post">
            <div className="postWrap">
                <div className="postHead">
                    <div className="titleCloseBtn">

                    </div>
                    <div className="postHeadL"></div>
                    <div className="postHeadR"></div>
                </div>
                <div className="postBody">
                    <span>Post Goes here</span>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
                <div className="postFoot"></div>
                <div className="postBody">
                    <span>Post Goes here</span>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
                <div className="postFoot"></div>
                <div className="postBody">
                    <span>Post Goes here</span>
                    <button>Like</button>
                    <button>Dislike</button>
                </div>
                <div className="postFoot"></div>
            </div>

        </div>*/
    )
}
