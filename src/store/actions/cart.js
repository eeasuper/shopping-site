import {LOAD_CART, ADD_TO_CART, REMOVE_FROM_CART,CHANGE_QUANTITY_OF_CARTITEM} from '../actionTypes';
// import {apiCall} from '../../services/api';
import axios from 'axios';

export const loadCartAction = cart => ({
  type: LOAD_CART,
  cart
});

export const removeAction = cart => ({
  type: REMOVE_FROM_CART,
  cart
});

export const addToCartAction = cart => ({
  type: ADD_TO_CART,
  cart
})

export const changeQuantityOfCartItemAction = cart =>({
  type: CHANGE_QUANTITY_OF_CARTITEM,
  cart
})

// export const updateCartAction = (cart)=>({
//   type: UPDATE_CART,
//   cart
// })

export const removeFromCart = (cartId, productId) => {
  return (dispatch,getState) => {
    const cartItems = getState().cart.cart;
    const cartItemId = cartItems.filter((val,ind)=>val.product.id == productId)[0].id
    const url = serverUrl + "/cart/"+cartId+"/"+cartItemId;
    return axios({
      method: 'delete',
      url: url
    }).then((response)=>{
      cartItems.forEach((val,ind,arr)=>{
        if(val.id == cartItemId){
          arr.splice(ind,1)
        }
      });
      dispatch(removeAction({
        cart: cartItems,
        cartId: getState().cart.cartId
      }));
    })
  }
}

const serverUrl = "http://localhost:8080";

export const loadCart = () => {
  return (dispatch,getState) => {
    // const jwt = localStorage.getItem("jwtToken");
    const url = serverUrl + "/user/"+ getState().currentUser.user.id+"/cart";
    // const test = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c3JfaWQiOjEsInN1YiI6ImpvaG5ueSIsImV4cCI6MTU2MDA1NTg5NX0.JR5n_Gbv6T0C01PNfRRiguvBZrL0M3p3pPeESrgCesf4VseEpKhis2fBEr_40rVNgSzLlQ6qwB6ebbWOeAuqmA"
    // const config = {
    //   headers: {
    //     Authorization: test,
    //     Accept : "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }
    //set configs default later...
    return axios(url).then((response)=>{
        /* Make the most recently added items the last in the array.*/
      if(response.data){
        response.data.cartItems.sort((a,b)=>{
          return a.addedDate - b.addedDate;
        });
        dispatch(loadCartAction(response.data));
      }
    });  
  };
}

export const addToCart = order => (dispatch, getState) => {
  return new Promise((resolve,reject)=>{
    const url = serverUrl + "/cart/"+getState().cart.cartId+"/"+order.productId+"/"+order.quantity;
    return axios({
      method: 'post',
      url: url
    }).then((response)=>{
      dispatch(addToCartAction(response.data));
      resolve(response.data);
    }).catch((error)=>{
      reject(error.response.data.message);
    })
  })
  // let {currentUser} = getState();
  // const userId = currentUser.user.id;
  //   /*
  // res: order:{
  //   id:...,userId...,productId...,quantity...
  // }
  // */
  // let product = productArray.find((val,ind)=>{
  //   return val.id === order.productId;
  // })
  // //add quantity value to the static product data found.
  // product.quantity = order.quantity;
  // let dispatched = dispatch(addCart(product));
  // return apiCall("post", `/users/${userId}/cart`, order)
  // .then(data=>{
  // })
  // .catch(err =>  {
  //     let {cart} = getState();
  //     if(Object.keys(cart).some((e)=>(dispatched.product.id===e))){
  //       dispatch(remove(product.id))
  //     }
  //   console.log(err);
  // });
}

export const updateCartItem = (cartItemId,quantity,updateServer) =>{
  return (dispatch,getState)=>{
    let cart = getState().cart;
    let url = serverUrl + "/cart/"+getState().cart.cartId+"/"+cartItemId+"/"+quantity;
    if(updateServer){
      axios({
        method: 'put',
        url: url
      }).then((response)=>{
      })
    }
    let c = cart.cart.map((v)=>{
        if(v.id == cartItemId){
          v.quantity = quantity;
        }
        return v;
      })
    dispatch(changeQuantityOfCartItemAction({
      cart: c,
      cartId: getState().cart.cartId
    }));
  }
}

// export const updateCart = (cart)=>(dispatch,getState)=>{
//   return new Promise((resolve,reject)=>{
//     console.log(cart);
//     const newCart = {
//       id: cart.cartId,
//       cartItems: cart.cart
//     }
//     // let cart = getState().cart
//     let url = serverUrl + "/cart/"+cart.cartId;
//     return axios({
//       method: 'put',
//       url: url,
//       data: newCart
//     }).then((response)=>{
//       console.log(response)
//       dispatch(updateCartAction(cart));
//       // resolve(response);
//     })
//   })
// }