import React from "react";
import SidebarBottom from "../SidebarBottom/SidebarBottom";
import "./SidebarTop.css"
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import ListGroup from "react-bootstrap/ListGroup"
import Stack from "react-bootstrap/Stack"

export default function SidebarTop() {
    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Agora's Top Communities</Card.Title>
                        <Card.Text>
                            Check out some of our favorite communities!
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Plants make a link</ListGroupItem>
                        <ListGroupItem>Dogs make a link </ListGroupItem>
                        <ListGroupItem>Dev make a link</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                        <Button variant="primary">Explore More Communities</Button>
                    </Card.Body>
                </Card>
                <Stack gap={3}>
                    <SidebarBottom />
                </Stack>
            </div>
        </>


    )
}

/*<div className="sidebarTop">
    <div className="sbWrap">
        <ul className="communityList">

            <li className="community">
                <span className="communityListTxt">Communities</span>

            </li>
            <li className="community">
                <span className="communityListTxt">Communities</span>

            </li>
            <li className="community">
                <span className="communityListTxt">Communities</span>

            </li>
        </ul>
        <button className="communityBarBtn">Explore More Communities</button>
        <div>
            <SidebarBottom />
        </div>
    </div>

</div>*/
