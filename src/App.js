import React from 'react';
import {Router, Route,Link} from 'react-router-dom';
import {Provider} from "react-redux";
import {setAuthorizationToken,setCurrentUser,login,getOneUser} from "./store/actions/currentUser";
import {loadCart} from './store/actions/cart';
import {configureStore} from "./store";
import jwtDecode from "jwt-decode";

import Main from './Main';
import history from './services/history';
import './App.css';
const store = configureStore();

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  //prevent someone from manually tampering with the key of jwtToken in localStorage
  try{
    let jwt = jwtDecode(localStorage.jwtToken);
    getOneUser(jwt.usr_id).then((user)=>{
      store.dispatch(setCurrentUser(user));
      store.dispatch(loadCart());
    })
  } catch(e){ 
    console.log(e);
    store.dispatch(setCurrentUser({
      isAuthenticated: false,
      user: {}
    }))
  }
}

function App() {
  
  return (
    <Provider store={store}>
      <Router history = {history} className="App" dispatch={store.dispatch}>
        <Main dispatch={store.dispatch}/>
      </Router>
    </Provider>
  );
}

export default App;