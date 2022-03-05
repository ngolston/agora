import React from 'react'
import "./Dashboard.css"
import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"


export default function Dashboard() {

    return (
        <Card body>
            <Form.Select aria-label="Default select example">
                <option>Community Options</option>
                <option value="1">Plants</option>
                <option value="2">Dogs</option>
                <option value="3">Dev</option>
            </Form.Select>
            <Card>
                <Card.Header as="h5">
                    <Button variant="primary">Post</Button>
                    <Button variant="primary">Images</Button>

                </Card.Header>
                <Card.Body>
                    <Card.Title>Post Title</Card.Title>
                    <Card.Text>
                        Post Text
                    </Card.Text>

                </Card.Body>
                <Card.Footer> <Button variant="primary">Post</Button></Card.Footer>
            </Card>
        </Card>

        /*<div className="dashboard">
            <div className="dashWrap">
                <div className="dashHead">
                    <img className="logohead" src="/assets/AgoraLogo.png" alt="logo" />
                </div>
                <div className="dashBody">
                    <input placeholder="Start typing to begin your post" type="text" className="dashInput" />
                </div>
                <hr className="dashHr" />

                <div className="dashFoot">
                    <div className="dashChoices">
                        <div className="dashOption">
                            <span className="dashOptionTxt">Add a picture</span>
                            <button className="dashBtn">Post</button>
                        </div>
                    </div>
                </div>
                <div className="cancel">
                    <button onClick={() => {
                        setOpenDash(false);
                    }}>Cancel</button>
                    <button>Submit</button>

                </div>
            </div>
        </div>*/

    )
}
