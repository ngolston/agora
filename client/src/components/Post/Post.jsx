import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"

export default function Post() {



    return (
        <Container style={{ width: '40rem' }}>
            <Stack>
                <Card className="post">
                    <Card.Header className="postHead" placeholder="User"></Card.Header>
                    <Card.Body>
                        <Card.Title className="postTitle" placeholder="Post Title"></Card.Title>
                        <Card.Text className="text" placeholder="text">


                        </Card.Text>
                        <Stack direction="horizontal" gap={2}>
                            <Button variant="primary">Like</Button>
                            <Button >Dislike</Button>
                        </Stack>
                    </Card.Body>
                </Card>
            </Stack>
        </Container>

    )
}
