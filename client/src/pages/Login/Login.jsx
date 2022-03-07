import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import LogIn from '../../components/LogIn/LogIn';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";



export default function Login() {
    return (
        <div>
            <Navbar />
            <div>

                <Container className="d-flex justify-content-around">
                    <Row>

                        <Col>
                            <LogIn />
                        </Col>
                    </Row>

                </Container>
            </div>

        </div>
    );
}
