import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Redirect from="/" to="/signin" />
    </Router>
  );
}

export default App;
