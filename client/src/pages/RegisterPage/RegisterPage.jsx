import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import SidebarTop from '../../components/SidebarTop/SidebarTop';
import Register from '../../components/Register/Register';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";



export default function RegisterPage() {
    return (
        <div>
            <div>
                <Navbar />
                <Container className="d-flex justify-content-around">
                    <Row>
                        <Col>
                            <SidebarTop />
                        </Col>
                        <Col>
                            <Register />
                        </Col>
                    </Row>

                </Container>
            </div>

        </div>
    );
}


/*import { useState } from "react";
import { useHistory } from "react-router-dom";

function App() {
    const history = useHistory();

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function registerUser(event) {
        event.preventDefault();

        const response = await fetch("http://localhost:3001/api/register", {
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
        <div>
            <h1>Register</h1>
            <form onSubmit={registerUser}>
                <br />
                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    placeholder="UserName"
                />
                <br />
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Email"
                />
                <br />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
}

export default App;




/*import React from "react";
import "./Register.css"
import { useState } from "react";
import EmailInput from "../EmailInput/EmailInput"

export default function Register({ setOpenRegister }) {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const inputs = [
        {
            id: 1,
            name: "username",
            type: "text",
            placeholder: "Username",
            errorMessage:
                "Username should be 3-16 characters and shouldn't include any special character!",
            label: "Username",
            pattern: "^[A-Za-z0-9]{3,16}$",
            required: true,
        },
        {
            id: 2,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },

        {
            id: 4,
            name: "password",
            type: "password",
            placeholder: "Password",
            errorMessage:
                "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
            label: "Password",
            pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
            required: true,
        },
        {
            id: 5,
            name: "confirmPassword",
            type: "password",
            placeholder: "Confirm Password",
            errorMessage: "Passwords don't match!",
            label: "Confirm Password",
            pattern: values.password,
            required: true,
        },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="modalBG">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button onClick={() => {
                        setOpenRegister(false);
                    }}> X </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="title">
                        <h1>Create User Profile</h1>
                        {inputs.map((input) => (
                            <EmailInput
                                key={input.id}
                                {...input}
                                value={values[input.name]}
                                onChange={onChange}
                            />
                        ))}
                    </div>
                    <div className="body">
                        <p>choose a unique username and secure password in order to continue</p>
                    </div>
                    <div className="footer">
                        <button onClick={() => {
                            setOpenRegister(false);
                        }}>Cancel</button>
                        <button>Submit</button>

                    </div>
                </form>
            </div>
        </div>


    );

}*/





// export default function Register({ setOpenRegister }) {

    // const [values, setValues] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    //     confirmPassword: "",
    // });

    // const inputs = [
    //     {
    //         id: 1,
    //         name: "username",
    //         type: "text",
    //         placeholder: "Username",
    //         errorMessage:
    //             "Username should be 3-16 characters and shouldn't include any special character!",
    //         label: "Username",
    //         pattern: "^[A-Za-z0-9]{3,16}$",
    //         required: true,
    //     },
    //     {
    //         id: 2,
    //         name: "email",
    //         type: "email",
    //         placeholder: "Email",
    //         errorMessage: "It should be a valid email address!",
    //         label: "Email",
    //         required: true,
    //     },

    //     {
    //         id: 4,
    //         name: "password",
    //         type: "password",
    //         placeholder: "Password",
    //         errorMessage:
    //             "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
    //         label: "Password",
    //         required: true,
    //     },
    //     {
    //         id: 5,
    //         name: "confirmPassword",
    //         type: "password",
    //         placeholder: "Confirm Password",
    //         errorMessage: "Passwords don't match!",
    //         label: "Confirm Password",
    //         required: true,
    //     },
    // ];

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // };

    // const onChange = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value });
    // };

 

// }

/////////////////////////////////////////// Nick Keep /////////////////////////////////////////////////////////////////////////////////////
// import { useState } from "react";
// import Navbar from "../../components/Navbar/Navbar";
// import { useHistory } from "react-router-dom";
// import Form from "react-bootstrap/Form"
// import Button from "react-bootstrap/Button"

// function App() {
//     const history = useHistory();
  
//     const [userName, setUserName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     async function registerUser(event) {
//       event.preventDefault();
  
//       const response = await fetch("http://localhost:3001/api/Register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           userName,
//           email,
//           password,
//         }),
//       });
  
//       const data = await response.json();
  
//       if (data.status === "ok") {
//         history.push("/login");
//       }
//     }

//     return (
//         <div>
//             <>
//                 <Navbar />
//             </>
//             <div className="modalBG">
//                 <div className="modalContainer">
//                 <Form onSubmit={registerUser}>
//                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>UserName</Form.Label>
//                         <Form.Control value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Enter UserName" />
//                         <Form.Text className="text-muted">
//                         </Form.Text>
//                     </Form.Group>

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
//                     </Form.Group>
//                     <Button variant="primary" type="submit" value="Register">
//                         Submit
//                     </Button>
//                     </Form>








//                     {/* <Form onSubmit={registerUser}>
//                             <h1>Create User Profile</h1>
//                             <Form.Group className="mb-3" controlId="formBasicEmail">
//                         <Form.Label>Email address</Form.Label>
//                         <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
//                         <Form.Text className="text-muted">
//                             We'll never share your email with anyone else.
//                         </Form.Text>
//                     </Form.Group>
//                         </div>
//                         <div className="body">
//                             <p>choose a unique username and secure password in order to continue</p>
//                         </div>
//                         <div className="footer">
//                             <button >Cancel</button>
//                             <button>Submit</button>

//                         </div>
//                     </form> */}
//                 </div>
//             </div>
//         </div>


//     );
// }

// export default App;
/////////////////////////////////////////// Nick Keep /////////////////////////////////////////////////////////////////////////////////////
