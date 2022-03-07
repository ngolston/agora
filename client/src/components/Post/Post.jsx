import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Stack from "react-bootstrap/Stack"

export default function Post() {

    return (
        <Container>
            <Stack>
                <Card>
                    <Card.Header placeholder="User"></Card.Header>
                    <Card.Body>
                        <Card.Title placeholder="Post Title"></Card.Title>
                        <Card.Text placeholder="text">


                        </Card.Text>
                        <Button variant="primary">Like</Button>
                        <Button>Dislike</Button>
                    </Card.Body>
                </Card>
            </Stack>
        </Container>

    )
}
