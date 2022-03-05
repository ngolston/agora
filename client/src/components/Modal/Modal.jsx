import React from "react";
import "./Modal.css"
import Register from "../Register/Register";
import { useState } from "react";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button"
import { render } from "react-dom";
export default
    function MyVerticallyCenteredModal(props) {
    const [openRegister, setOpenRegister] = useState(false);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Let's Get Started With Agora!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Register</h4>
                <p>
                    Hit continue to get registered with Agora
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={() => {
                    setOpenRegister(true);
                }}>Continue</Button>
                {openRegister && <Register setOpenRegister={setOpenRegister} />}
            </Modal.Footer>
        </Modal>
    );
}

/*function ModalSignup() {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch vertically centered modal
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

render(<ModalSignup />)*/

/*
function Modal({ setOpenModal }) {
const [openRegister, setOpenRegister] = useState(false);
return (
<div className="modalBG">
     <div className="modalContainer">
         <div className="titleCloseBtn">
             <button onClick={() => {
                 setOpenRegister(false);
             }}> X </button>
         </div>
         <div className="title">
             <h1>Wanna Join?</h1>
         </div>
         <div className="body">
             <p>To  get started using Agora, hit continue to register</p>
         </div>
         <div className="footer">
             <button onClick={() => {
                 setOpenModal(false);
             }}>Cancel</button>
             <button className="openRegisterBtn" onClick={() => {
                 setOpenRegister(true);
             }}>Continue</button>
             {openRegister && <Register setOpenRegister={setOpenRegister} />}

         </div>
     </div>
 </div>*/




