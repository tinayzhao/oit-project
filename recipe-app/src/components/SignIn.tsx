import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Jumbotron } from 'react-bootstrap';

const SignIn = () => {
 
    return (
        <div>
        <Jumbotron>
            <h1>Good to see you back!</h1>
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" onChange={this.onChange} type="email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={this.onChange} type="password" />
                </Form.Group>
                <Button type="submit" >
                <Link>Sign In</Link>
                </Button>
            </Form>
            <p>Don't have an account yet? <Link>Sign Up</Link></p>
        </Jumbotron>
    </div>
    );
}

export default SignIn;