import React from 'react';
import {Route,Link,withRouter,Switch} from 'react-router-dom';
import {connect} from "react-redux";

import Homepage from './Homepage/Homepage';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import AllProducts from './AllProducts/AllProducts';
import ActivityProducts from './ActivityProducts/ActivityProducts';
import FlightProducts from './FlightProducts/FlightProducts';
import MusicProducts from './MusicProducts/MusicProducts';
import ProductPage from './ProductPage/ProductPage';
import CartPage from './CartPage/CartPage';
import ScrollToTop from './services/ScrollToTop';
import LoginPage from './LoginPage/LoginPage';
import RegisterPage from './RegisterPage/RegisterPage';
import AccountPage from './AccountPage/AccountPage';
import {loadCart,addToCart,updateCartItem,removeFromCart} from './store/actions/cart';
import {login,register,logout} from './store/actions/currentUser';
import './App.css';

const Main = withRouter((props)=>{

  // for test:
  function dotest(){
      props.login({
      email: 'john@email.com',
      password: 1234
    })
  }

  return (
    <ScrollToTop>
      <button onClick={dotest}>CLICK</button>
      <Navbar cart={props.cart} currentUser = {props.currentUser}/>
      <Switch>
        <Route exact path="/" component={Homepage}/>
        <Route path="/all" component={AllProducts}/>
        <Route path="/product" render={routeProps=>{
            return(
              <ProductPage currentUser={props.currentUser} cart={props.cart} loadCart={props.loadCart} addToCart={props.addToCart} {...routeProps}/>
            )
          }}
        />
        <Route path="/activity" component={ActivityProducts}/>
        <Route path="/music" component={MusicProducts}/>
        <Route path="/flight" component={FlightProducts}/>
        <Route path="/cart" render={routeProps=>{

            return(
              <CartPage currentUser={props.currentUser} cart={props.cart} loadCart={props.loadCart} updateCartItem={props.updateCartItem} removeFromCart={props.removeFromCart} {...routeProps}/>
            )
          }}
        />
        <Route path="/login" render={routeProps=>{
          return(
            <LoginPage login={props.login} {...routeProps}/>
          )
        }}/>
        <Route path="/register" render={routeProps=>{
          return(
            <RegisterPage register={props.register} {...routeProps}/>
          )
        }
        }/>
        <Route path="/account" render={routeProps=>{
          return(
            <AccountPage logout={props.logout} {...routeProps}/>
          )
        }
        }/>
      </Switch>
      <Footer/>
    </ScrollToTop>
  );
});

function mapStateToProps(state){
  return{
    currentUser: state.currentUser,
    cart: state.cart
  }
}
function mapDispatchToProps(dispatch){
  return{
    login:  (userData)=> dispatch(login(userData)),
    register: (userData)=> dispatch(register(userData)),
    loadCart: ()=>dispatch(loadCart()),
    addToCart: (order)=>dispatch(addToCart(order)),
    updateCartItem: (cartItemId, quantity,updateServer)=>dispatch(updateCartItem(cartItemId,quantity,updateServer)),
    removeFromCart: (cartId, productId) => dispatch(removeFromCart(cartId, productId)),
    logout: ()=>dispatch(logout())
    // doLoad: (products)=> dispatch(loadCart(products)),
    // doFetch: (userId) => dispatch(fetchCart(userId))
  };
}
//withRouter()
export default connect(mapStateToProps,mapDispatchToProps)(Main);