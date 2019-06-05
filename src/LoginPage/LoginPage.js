import React,{useState} from 'react';
import {Link,withRouter} from 'react-router-dom';
import SimpleSnackbar from '../services/SimpleSnackbar';
import './LoginPage.css'
const LoginPage = withRouter((props)=>{
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [openSb, setOpenSb] = React.useState(false);
  const [sbMessage,setSbMessage] = React.useState("");

  function handleLogin(e){
    e.preventDefault();
    console.log(email);
    let userData = {
      email: email,
      password: password
    }
    props.login(userData).then((response)=>{
      props.history.push("/");
    }).catch((errorStatus)=>{
      if(errorStatus == 404){
        openSnackbar("Email or Password could not be authenticated");
      }else{
        openSnackbar("Server responded with "+errorStatus);
      }
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
      <form onSubmit={handleLogin}>
        <div className="login-grid">
          <h1>
          Login
          </h1>
   
          <label htmlFor="CustomerEmail">Email</label>
          <input type="email" id="CustomerEmail" autoFocus value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <label htmlFor="CustomerPassword">Password</label>
          <input type="password" id="CustomerPassword" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <div className="login-btn-con">
            <input type="submit" value="Sign In" className="sign-in-button btn" onClick={handleLogin}/>
            <Link to="/register" className="register-link">
              Create Account
            </Link>
          </div>
        </div>
      </form>
      <SimpleSnackbar open={openSb} handleClose={handleCloseSnackbar} message={sbMessage}/>
    </section>
  );
});

export default LoginPage;