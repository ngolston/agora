import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import "./Register.css"
import Container from "react-bootstrap/Container"

function App() {
    const history = useHistory();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:3001/api/Register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userName,
                email,
                password,
            }),
        });

        const data = await response.json();

        if (data.status === "ok") {
            history.push("/login");
        }
    }

    return (

        <Container className="register">
            <Form onSubmit={registerUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="registerHead">UserName</Form.Label>
                    <Form.Control value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter UserName" />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                </Form.Group>
                <Link to="/Login">
                    <Button className="registerBtn" variant="primary" type="submit" value="Register">
                        Submit
                    </Button>
                </Link>
            </Form>
        </Container>


    );
}

export default App;