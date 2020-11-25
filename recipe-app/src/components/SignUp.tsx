import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Jumbotron } from 'react-bootstrap';

const SignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.currentTarget.value;
    switch(e.currentTarget.name) {
      case "name":
        setName(val);
        break;
      case "email":
        setEmail(val);
        break;
      case "password":
        setPassword(val);
    }
  };
 
    return (
        <div>
        <Jumbotron>
            <h1>Welcome!</h1>
            <Form>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                    <Form.Control name="username" onChange={onChange} type="username" />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control name="email" onChange={onChange} type="email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control name="password" onChange={onChange} type="password" />
                </Form.Group>
                <Button type="submit">Sign Up</Button>
              </Form>
              <p>Already a user? <Link to="/signin">Sign In</Link></p>
        </Jumbotron>
    </div>
    );
}

export default SignUp;