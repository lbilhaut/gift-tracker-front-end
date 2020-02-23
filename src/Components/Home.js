import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

function Home () {
    return (
        <Container className="dashboard">
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <a href="./demo"><Button color="success">Demo</Button></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Home
