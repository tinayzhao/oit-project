import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import Preferences from './components/Preferences';
import Pantry from './components/Pantry';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';

const App = () => {

  return (
    <div>
      <Router>
        <Route path="/welcome" component={Welcome} />
        <Route path="/home" component={Dashboard}/>
        <Route path="/preferences" component={Preferences}/>
        <Route path="/pantry" component={Pantry} />
        <Redirect from="/" to="/welcome" />
    </Router>
    </div>
    
  );
}

export default App;
