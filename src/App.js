import React from 'react';
import Slider from "./componment/homecompo/Crousel";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './componment/homecompo/Navbar';
import Footer from './componment/homecompo/Footer';
import Batch from './componment/homecompo/Batch';
import Batchleft from './componment/homecompo/Batchleft';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Slider />
        <Batch />
        <Batchleft data="2018-22" />



      <Footer />
      </Router>
    </>
  )
}

export default App;
