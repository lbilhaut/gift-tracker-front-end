import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Image from 'react-bootstrap/Image'

function Header (){
    return(
        <Container className="dashboard"  fluid={true}>
            <Row className="justify-content-center">   
                <Col xs={6} md={3} lg={2} xl={2}>
                    <a href="./home">
                        <Image src="assets/images/logoKGT.png" alt="Kids Gift Tracker logo" fluid />
                    </a>
                </Col>
            </Row>
        </Container>
    )
}

export default Header