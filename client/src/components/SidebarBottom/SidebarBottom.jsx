import React from 'react'
import "./SidebarBottom.css"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
export default function SidebarBottom() {
    return (
        <div className="sidebarBottom">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Like What You See?</Card.Title>

                    <Button variant="primary">Buy A Dev Coffee</Button>
                </Card.Body>

            </Card>
        </div>
        /* <div className="sidebarBottom">
             <div className="coffeeBar">
                 <span className="buy">Like What You See?</span>
                 <button className="coffee">Buy A Dev Coffee</button>
             </div>
         </div>*/
    )
}
