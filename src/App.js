import React, { useEffect } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Social from './components/Social/Social';

function App() {

  useEffect(()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [])

  return (
    <Router>
      <Navbar />
      <Landing />
      <Social />
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
