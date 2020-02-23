import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import Image from 'react-bootstrap/Image'

function Footer(){
    return(
        <Container className="dashboard"  fluid={true}>
            <Row className="justify-content-center">   
                Developed by Lise - 2020
            </Row>
            <Row className="justify-content-center">   
                <Col xs={12} md={12} lg={12} xl={12}>
                    <a href="./home">
                        <Image id="footer_image" src="assets/images/banner.png" alt="Kids Gift Tracker banner" fluid />
                    </a>
                </Col>
            </Row>
        </Container>
    )

}

export default Footer