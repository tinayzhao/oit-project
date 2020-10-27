import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Dashboard} />
      <Route path="/preferences" component={Preferences} />
      <Redirect from="/" to="/signin" />
    </Router>
  );
}

export default App;
