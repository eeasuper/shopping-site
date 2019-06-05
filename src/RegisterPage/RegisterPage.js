import React,{useState} from 'react';
import {withRouter} from 'react-router-dom'
import SimpleSnackbar from '../services/SimpleSnackbar';
import './RegisterPage.css';

const RegisterPage = withRouter((props)=>{
  const [name,setName] = useState("");
  const [username,setUsername] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [openSb, setOpenSb] = React.useState(false);
  const [sbMessage,setSbMessage] = React.useState("");

  function handleRegister(e){
    e.preventDefault();
    let nameRegex = /^.[^\s]{1,}$/
    if(!nameRegex.test(name)){
      console.log("ff");
      openSnackbar('Name should be greater than 1 character');
      return;
    }
    let usernameRegex = /^[\w][^\s]{4,24}$/;
    if(!usernameRegex.test(username)){
      openSnackbar('Username should be between 4 to 24 characters.');
      return;
    }
    let emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    if(!emailRegex.test(email)){
      openSnackbar('Email format is wrong.');
      return;
    }
    let passwordRegex = /^.[^\s]{7,}$/
    if(!passwordRegex.test(password)){
      openSnackbar('Password should be greater than 7 characters');
      return;
    }
    let userData = {
      name:name,
      username:username,
      email: email,
      password: password
    }
    props.register(userData).then((response)=>{
      props.history.push("/");
    }).catch((errorMessage)=>{
      openSnackbar(errorMessage)
    });
  }

  function openSnackbar(message){
    setOpenSb(true);
    if(message){
      setSbMessage(message)
    }
  }

  function handleCloseSnackbar(event, reason) {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSb(false);
  }
  return(
    <section className="page-width">
      <form onSubmit={handleRegister}>
        <div className="register-grid">
          <h1>
          Create Account
          </h1>
          <label htmlFor="CustomerName">Name</label>
          <input type="text" id="CustomerName" autoFocus value={name} onChange={(e)=>setName(e.target.value)}/>
          <label htmlFor="CustomerUsername">Username</label>
          <input type="text" id="CustomerUsername" autoFocus value={username} onChange={(e)=>setUsername(e.target.value)}/>
          <label htmlFor="CustomerEmail">Email</label>
          <input type="email" id="CustomerEmail" autoFocus value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="CustomerPassword">Password</label>
          <input type="password" id="CustomerPassword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <div className="register-btn-con">
            <input type="submit" value="Create" className="register-button btn" onClick={handleRegister}/>
          </div>
        </div>
      </form>
      <SimpleSnackbar open={openSb} handleClose={handleCloseSnackbar} message={sbMessage}/>
    </section>
  )
});

export default RegisterPage;