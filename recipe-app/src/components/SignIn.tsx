import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Jumbotron } from 'react-bootstrap';
import { AzureAD } from 'react-aad-msal';
import { authProvider } from './authProvider';

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        switch(e.currentTarget.name) {
        case "email":
            setEmail(val);
            break;
        case "password":
            setPassword(val);
        }
    };

    const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        //use Azure for authentication?


    };
 
    return (
        <div>
        <Jumbotron>
            <h1>Good to see you back!</h1>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="email" onChange={onChange} type="email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" onChange={onChange} type="password" />
                </Form.Group>
                <Button type="submit">Sign In</Button>
            </Form>
            <p>Don't have an account yet? <Link to="/signup">Sign Up</Link></p>
        </Jumbotron>
    </div>
    );
}

export default SignIn;