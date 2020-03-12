import React from 'react';
import './App.css';

import Navbar from './homeFiles/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import OurService from './pages/OurService';
import Error from './pages/Error';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/ourservice" component={OurService} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
