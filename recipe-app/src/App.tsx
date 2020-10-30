import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Pantry from './components/Pantry';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

const App = () => {

  return (
    <Router>
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/home" component={Dashboard} />
      <Route path="/preferences" component={Preferences} />
      <Route path="/pantry" component={Pantry} />
      <Redirect from="/" to="/signin" />
    </Router>
  );
}

export default App;
