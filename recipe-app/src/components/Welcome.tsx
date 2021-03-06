import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
import { Container, Row, Col, Button, Form, Jumbotron } from 'react-bootstrap';
import { authProvider } from "./authProvider";
import {
    AzureAD,
    AuthenticationState,
    IAzureADFunctionProps
  } from "react-aad-msal";

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

    const signUp = () => {
        window.open("https://signup.live.com/signup?lcid=1033&wa=wsignin1.0&rpsnv=13&ct=1606469014&rver=7.0.6738.0&wp=MBI_SSL&wreply=https%3a%2f%2faccount.microsoft.com%2fauth%2fcomplete-signin%3fru%3dhttps%253A%252F%252Faccount.microsoft.com%252F%253Frefp%253Dsignedout-index%2526refd%253Dwww.google.com&lc=1033&id=292666&lw=1&fl=easi2&mkt=en-US&lic=1&uaid=b712a80a8f0841158102b07cc454a0dc");
    };
 
    return (
        <AzureAD provider={authProvider}>
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
                                    <Button style={buttonStyle1} onClick={signUp}>Sign Up with Microsoft</Button>
                                    <Button style={buttonStyle2} onClick={login}>Sign In with Microsoft</Button>
                                    <p style={tcStyle}>By signing up you're agreeing to all T&C</p>
                                </Jumbotron>
                            </div>
                            
                        );
                    } else {
                        return (
                            <Redirect to="/home" />
                        );
                    }
                }}
        </AzureAD>
        
    );

}

export default Welcome;