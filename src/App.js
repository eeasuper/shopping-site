import React from 'react';
import {Router, Route,Link} from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AllProducts from './AllProducts/AllProducts';
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
        <Footer/>
      </ScrollToTop>
    </Router>
  );
}

export default App;

    // display: block;
    // width: 100%;
    // height: 50px;