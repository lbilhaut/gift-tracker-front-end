import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'

function Demo () {
    return (
        <Container className="dashboard">
            <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                    <a href="${RELATIVE_PATH}/kids"><Button color="success">See kids</Button></a>
                </Col>
            </Row>
        </Container>
    )
}

export default Demo