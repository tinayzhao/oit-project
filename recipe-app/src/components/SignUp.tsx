import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Jumbotron } from 'react-bootstrap';

const SignUp = () => {
 
    return (
        <div>
        <Jumbotron>
            <h1>Welcome!</h1>
            <Form onSubmit={this.onSubmit}>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                    <Form.Control name="username" onChange={this.onChange} type="username" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name="email" onChange={this.onChange} type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" onChange={this.onChange} type="password" />
                </Form.Group>
                <Button type="submit">
                <Link>Sign Up</Link>
                </Button>
              </Form>
              <p>Already a user? <Link>Sign In</Link></p>
        </Jumbotron>
    </div>
    );
}

export default SignUp;