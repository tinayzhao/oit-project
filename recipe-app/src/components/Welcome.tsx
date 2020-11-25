import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Jumbotron } from 'react-bootstrap';
import { authProvider } from "./authProvider";
import {
    AzureAD,
    AuthenticationState,
    IAzureADFunctionProps
  } from "react-aad-msal";
import './Welcome.css';

const Welcome = () => {

    const jumbotronStyle = {
        marginLeft: 400,
        width:624,
        height:420,
        backgroundColor: 'white',
        marginTop: 96
      };

    const backgroundStyle = {
        backgroundImage: 'url("/images/welcome.png")',
        backgroundSize: 'contain',
        height: 900,
        overflow: 'hidden'
    };

    const welcomeTextStyle = {
        color: '#685DEA',
        textAlign: 'center' as 'center',
        fontFamily: 'Poppins',
        marginTop: -20,
        fontWeight: 'bold' as 'bold',
        fontSize: 23
    };

    const buttonStyle1 = {
        backgroundColor: '#685DEA',
        fontFamily: 'Poppins',
        color: 'white',
        textAlign: 'center' as 'center',
        marginTop: 60,
        marginLeft: 180
    }

    const buttonStyle2 = {
        backgroundColor: '#685DEA',
        fontFamily: 'Poppins',
        color: 'white',
        textAlign: 'center' as 'center',
        marginTop: 30,
        marginLeft: 185
    }

    const tcStyle = {
        textAlign: 'center' as 'center',
        fontSize: 13,
        marginTop: 120,
        fontFamily: 'Poppins',
        color: 'gray'
      };
 
    return (
        <AzureAD provider={authProvider} forceLogin={true}>
            {({ login, logout, accountInfo, authenticationState, error}: IAzureADFunctionProps) => {
                const isInProgress =
                    authenticationState === AuthenticationState.InProgress;
                const isAuthenticated =
                    authenticationState === AuthenticationState.Authenticated;
                const isUnauthenticated =
                    authenticationState === AuthenticationState.Unauthenticated;
                    if (isUnauthenticated || isInProgress) {
                        return (
                            <div style={backgroundStyle}>
                                <Jumbotron style={jumbotronStyle}>
                                    <h1 style={welcomeTextStyle}>Welcome to Foodbook!</h1>
                                    <Button style={buttonStyle1}>Sign Up with Microsoft</Button>
                                    <Button style={buttonStyle2} onClick={login}>Sign In with Microsoft</Button>
                                    <p style={tcStyle}>By signing up you're agreeing to all T&C</p>
                                </Jumbotron>
                            </div>
                            
                        );
                    } else {
                        return (
                            <Redirect to="/preferences" />
                        );
                    }
                }}
        </AzureAD>
        
    );


    
    
    
    
    
    
    const formStyle = {
      width: 300,
      fontFamily: 'Poppins',
      marginTop: 30,
      marginLeft: 130
    };
    
    const submitStyle = {
      backgroundColor: '#EA655D',
      outline: 'none !important',
      fontFamily: 'Poppins',
      marginLeft: 90,
      width: 126,
      marginTop: 30,
      fontSize: 13
    };
    
    const inputStyle = {
      backgroundColor: '#F3F3F4'
    };
    
    const signupStyle = {
      textAlign: 'center',
      fontSize: 13,
      marginTop: 20,
      fontFamily: 'Poppins',
      color: 'gray'
    };
    
    const labelStyle = {
      fontSize: 13,
      fontWeight: 'bold',
      color: 'black'
    };
    
    const linkStyle = {
      color: '#EA655D'
    };
    
    const submitlinkStyle = {
        color: 'white'
    };
}

export default Welcome;