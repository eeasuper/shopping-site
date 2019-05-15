import React from 'react';
import {Router, Route, withRouter} from 'react-router-dom';
import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import history from './services/history';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Router history = {history}>
        <Route exact path="/" render={props=>{
            return(
              <Homepage />
            )
          }
        }/>
      </Router>
    </div>
  );
}

export default App;
