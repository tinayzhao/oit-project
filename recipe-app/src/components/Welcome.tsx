import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Jumbotron } from 'react-bootstrap';
import { authProvider } from "./authProvider";
import {
    AzureAD,
    AuthenticationState,
    IAzureADFunctionProps
  } from "react-aad-msal";

const Welcome = () => {

 
    return (
        <AzureAD provider={authProvider} forceLogin={true}>
            {({ login, logout, accountInfo, authenticationState, error}: IAzureADFunctionProps) => {
                return (
                    <Jumbotron>
                        <h1>Welcome to Foodbook!</h1>
                        <Button>Sign Up with Microsoft</Button>
                        <br></br>
                        <br></br>
                        <Button onClick={login}>Sign In with Microsoft</Button>
                    </Jumbotron>
                );}}
        </AzureAD>
        
    );
}

export default Welcome;