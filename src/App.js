import React from 'react';
import {Router, Route,Link} from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AllProducts from './AllProducts/AllProducts';
import ActivityProducts from './ActivityProducts/ActivityProducts';
import FlightProducts from './FlightProducts/FlightProducts';
import MusicProducts from './MusicProducts/MusicProducts';
import ProductPage from './ProductPage/ProductPage';
import history from './services/history';
import ScrollToTop from './services/ScrollToTop';
import './App.css';


function App() {
  
  return (
    <Router history = {history} className="App">
      <ScrollToTop>
        <Navbar/>
        <Route exact path="/" component={Homepage}/>
        <Route path="/all" component={AllProducts}/>
        <Route path="/product" component={ProductPage}/>
        <Route path="/activity" component={ActivityProducts}/>
        <Route path="/music" component={MusicProducts}/>
        <Route path="/flight" component={FlightProducts}/>
        <Footer/>
      </ScrollToTop>
    </Router>
  );
}

export default App;

    // display: block;
    // width: 100%;
    // height: 50px;