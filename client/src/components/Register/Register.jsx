import React from "react";
import { useState } from "react";
import Container from "react-bootstrap/Container"
import { CREATE_USER_MUTATION } from "../../GraphQl/Mutations"
import { useMutation } from "@apollo/client"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"


export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);

    const addUser = () => {
        createUser({
            variables: {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
            },
        });

        if (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Form>
                <Row>
                    <Col>
                        <Form.Control placeholder="First name" onChange={(e) => {
                            setFirstName(e.target.value);
                        }} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Last name" onChange={(e) => {
                            setLastName(e.target.value);
                        }} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Control placeholder="Email" onChange={(e) => {
                            setEmail(e.target.value);
                        }} />
                    </Col>
                    <Col>
                        <Form.Control placeholder="Password" onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                    </Col>
                </Row>
                <Link to="/Profile">
                    <Button variant="primary" type="submit" onClick={addUser}>
                        Submit
                    </Button>
                </Link>
            </Form>
        </Container>
    );

}