import { useState } from "react";
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./LogIn.css"
function LogIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginUser(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:3001/api/Login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        const data = await response.json();

        if (data.user) {
            localStorage.setItem("token", data.user);
            alert("Login Successful");
            window.location.href = "/";
        } else {
            alert("Login Failed");
        }
    }

    return (
        <div>
            <Container style={{ width: '40rem' }} className="login">

                <Form onSubmit={loginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="loginHead">Email address</Form.Label>
                        <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Please enter a valid email
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="loginBtn" variant="primary" type="submit" value="Login">
                        Submit
                    </Button>
                </Form>

            </Container>
        </div>
    )
};

export default LogIn;