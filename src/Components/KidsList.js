import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import { Loading } from './Common/loading'

function KidsList(props) {

    const list = props.kids.kids.map((kid) => {
        return (
            <li key={kid.kidId}>
                id: {kid.kidId} - {kid.firstname}
            </li>
        );
    });

    if (props.kids.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.kids.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.kids.errMess}</h4>
                </div>
            </div>
        );
    }
    else {
        return (
            <Container className="dashboard">
                <Row>
                    The list is:
                    <ul>{list}</ul>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="button">
                        <a href="./addakid"><Button color="success">Add a kid</Button></a>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="button">
                        <a href="./demo"><Button color="success">Back to dashboard</Button></a>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default KidsList