import React, { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Landing from './components/Landing/Landing';
import Social from './components/Social/Social';
import Footer from './components/Footer/Footer';

function App() {

  useEffect(()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, [])

  const isTablet = useMediaQuery({
    query: '(min-device-width: 500px)'
  })

  return (
    <Router>
      <Navbar />
      <Landing />
      <Social />
      {
        isTablet &&
        <Footer />
      }
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
