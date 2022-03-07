
import React from "react";
import Post from "../../components/Post/Post";
import Navbar from "../../components/Navbar/Navbar";
import SidebarTop from "../../components/SidebarTop/SidebarTop";
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Stack from "react-bootstrap/Stack"


export default function Home() {
    return (
        <div>
            <Navbar />
            <Container className="d-flex justify-content-around">
                <Row>
                    <Col md={4}>
                        <SidebarTop />
                    </Col>
                    <Stack style={{ width: '18rem' }} md={4}>
                        <Col>
                            <Post />


                            <Post />


                            <Post />
                        </Col>
                    </Stack>

                </Row>

            </Container>
        </div>

    )
}




