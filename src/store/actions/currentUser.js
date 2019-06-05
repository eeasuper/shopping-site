// import {apiCall, setTokenHeader} from "../../services/api";
import {SET_CURRENT_USER} from "../actionTypes";
import {loadCart, fetchCart,loadCartAction} from './cart';
import axios from 'axios';

export function setCurrentUser(user){
  return {
    type: SET_CURRENT_USER,
    user
  };
}

export function setAuthorizationToken(token){
  // const test = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c3JfaWQiOjEsInN1YiI6ImpvaG5ueSIsImV4cCI6MTU2MDA1NTg5NX0.JR5n_Gbv6T0C01PNfRRiguvBZrL0M3p3pPeESrgCesf4VseEpKhis2fBEr_40rVNgSzLlQ6qwB6ebbWOeAuqmA"
  // setTokenHeader(token);
  if(token){
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem("jwtToken", token);
    // axios.defaults.headers.common["Authorization"] = test;
  } else {
    localStorage.removeItem("jwtToken");
    delete axios.defaults.headers.common["Authorization"];
  }
}

const serverUrl = "http://localhost:8080"

export function register(userData){
  return (dispatch)=>{
    return new Promise((resolve,reject)=>{
      const url = serverUrl + "/register";
      return axios({
        method:'post',
        url: url,
        data: userData
      }).then((response)=>{
        dispatch(setCurrentUser(response.data))
        setAuthorizationToken(response.headers.authorization)
        resolve(response.data);
      }).catch((error)=>{
        reject(error.response.data.message);
      })
    })
    
  }
}

export function login(userData){  
  return (dispatch) => {
    return new Promise((resolve,reject)=>{
      const url = serverUrl + "/login";
      return axios({
        method:'post',
        url: url,
        data: userData
      }).then((response)=>{
        dispatch(setCurrentUser(response.data))
        setAuthorizationToken(response.headers.authorization)
        resolve(response.data);
      }).catch((error)=>{
        reject(error.response.status);
      })
    })
    // return new Promise((resolve, reject)=>{
    //   return apiCall(method, "/"+`${type}`, userData)
    //   .then((data) => {
    //     let response = {
    //       name: data.name,
    //       username: data.username,
    //       password: data.password,
    //       email: data.email,
    //       token: data.token,
    //       id: data.id
    //     };
    //     localStorage.setItem("jwtToken", data.token);
    //     setAuthorizationToken(data.token);
    //     dispatch(setCurrentUser(response));
    //     dispatch(fetchCart(data.id));
    //     resolve();
    //   })
    //   .catch(err=>{
    //     reject(err);
    //   })
    // })
  }
}

export function getOneUser(userId){

  // return dispatch =>{

    return new Promise((resolve,reject)=>{
      console.log("ff");
      return axios({
        url: serverUrl + "/user/"+userId
      }).then((response)=>{
        console.log(response.data);
        // dispatch(setCurrentUser(response.data));
        // dispatch(loadCart());
        resolve(response.data);
      }).catch((error)=>{
        reject(error.response)
      })
    })
  // }
}

export function logout(){
  return dispatch => {
    localStorage.clear();
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
    dispatch(loadCartAction({}));
  }
}