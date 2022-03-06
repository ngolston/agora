import { useState } from "react";
import "./Login.css"
import Navbar from '../../components/Navbar/Navbar'
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

function App() {
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

    return(
        <div>
            <>
                <Navbar />

            </>
            <Container>
                <Card>

                </Card>

                <Form onSubmit={loginUser}>
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
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value="Login">
                        Submit
                    </Button>
                </Form>

            </Container>
        </div>
    )
    //     <div>
    //         <h1>Login</h1>
    //         <form onSubmit={loginUser}>
    //             <br />
    //             <input
    //                 value={email}
    //                 onChange={(e) => setEmail(e.target.value)}
    //                 type="email"
    //                 placeholder="Email"
    //             />
    //             <br />
    //             <input
    //                 value={password}
    //                 onChange={(e) => setPassword(e.target.value)}
    //                 type="password"
    //                 placeholder="Password"
    //             />
    //             <br />
    //             <input type="submit" value="Login" />
    //         </form>
    //     </div>
    // );
};

export default App;



// import React from 'react'
// import "./Login.css"
// import Navbar from '../../components/Navbar/Navbar'
// import Container from "react-bootstrap/Container"
// import Card from "react-bootstrap/Card"
// import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"

// export default function LogIn() {
//     return (

//         <div>
//             <>
//                 <Navbar />

//             </>
//             <Container>
//                 <Card>

//                 </Card>

//                 <Form onSubmit={loginUser}>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
//                         <Form.Text className="text-muted">
//                             We'll never share your email with anyone else.
//                         </Form.Text>
//                     </Form.Group>

//                     <Form.Group className="mb-3" controlId="formBasicPassword">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//                         <Form.Check type="checkbox" label="Check me out" />
//                     </Form.Group>
//                     <Button variant="primary" type="submit" value="Login">
//                         Submit
//                     </Button>
//                 </Form>

//             </Container>
//         </div>
//     )
// }



/*<div className="loginWrap">
                        <div className="loginLeft">
                            <h3 className="loginLogo">Agora</h3>
                            <span className="loginDescription">
                                Get started with community
                            </span>
                        </div>
                        <div className="loginRight">
                            <div className="loginBox">
                                <input placeholder="Email" className="loginInput" />
                                <input placeholder="Password" className="loginInput" />
                                <button className="loginBtn">Log In</button>

                            </div>
                        </div>
                    </div>*/