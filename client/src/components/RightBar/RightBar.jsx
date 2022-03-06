import React from 'react'
import Card from "react-bootstrap/Card"


export default function RightBar() {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Name</Card.Title>
                    <Card.Text>

                        About you
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    )
}
