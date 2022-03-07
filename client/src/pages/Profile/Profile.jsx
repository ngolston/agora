import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SidebarTop from '../../components/SidebarTop/SidebarTop'
import RightBar from '../../components/RightBar/RightBar'
import Post from '../../components/Post/Post'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import Container from "react-bootstrap/Container"

export default function Profile() {
    return (
        <div>
            <Navbar />
            <Container className="d-flex justify-content-around">
                <Row>
                    <Col>
                        <SidebarTop />
                    </Col>
                    <Col>
                        <Post />
                    </Col>
                    <Col>
                        <RightBar />
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
