import React, { Component } from 'react'
import { Container, Row, Col, Button, Label } from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';
import Image from 'react-bootstrap/Image'


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || ((val.length) <= len);
const minLength = (len) => (val) => (val) && ((val.length) >= len);

class AddKid extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.postKid(values.birthYear, values.firstname);
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }
    render() {
        return (
            <Container className="dashboard" fluid={true}>
                <Row className="justify-content-center">
                    <h1>Add a kid</h1>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={4} md={1} lg={1} xl={1}>
                        <Image src="assets/images/kid.png" alt="Kid" fluid />
                    </Col>
                </Row>
                <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label htmlFor="birthYear" md={4}>Birth year</Label>
                        <Col md={{ size: 6 }}>
                            <Control.text model=".birthYear" id="birthYear" name="birthYear" placeholder="Birth Year"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".birthYear"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />

                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="firstname" md={4}>Kid's name</Label>
                        <Col md={{ size: 6 }}>
                            <Control.text model=".firstname" id="firstname" name="firstname" placeholder="Kid's name"
                                className="form-control"
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                            />
                            <Errors
                                className="text-danger"
                                model=".firstname"
                                show="touched"
                                messages={{
                                    required: 'Required',
                                    minLength: 'Must be greater than 2 characters',
                                    maxLength: 'Must be 15 characters or less'
                                }}
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{ size: 8 }}>
                            <Button type="submit" color="primary">
                                Add this kid
                                                                </Button>
                        </Col>
                    </Row>
                </LocalForm>
                <Row>
                    <Col sm="12" md={{ size: 6, offset: 3 }} className="button">
                        <a href="./home"><Button color="success">Back to dashboard</Button></a>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default AddKid