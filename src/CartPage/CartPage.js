import React,{Component,Fragment} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './CartPage.css';
import AllProducts from '../seed/AllProducts';
import CartProduct from './CartProduct/CartProduct';
class CartPage extends Component{
  constructor(props){
    super(props);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.updateQuantityValues = this.updateQuantityValues.bind(this);
  }
  componentDidMount(){
// Loading signs for cart could be useful for when the server is slow.
// Do backend operation here.
    // const fetchData = () => {
    //   // const result = await new Promise((res,rej)=>{
    //   //   res(JSON.parse(localStorage.getItem("cart")));
    //   // })
    //   // console.log(result);
    //   // return result;
    //   return JSON.parse(localStorage.getItem("cart"))
    // };
    // let result = fetchData();
    // this.setState((state)=>{
    //   return {
    //     cart: result
    //   }
    // })
    const userId = this.props.currentUser.user.id;
    if(userId){
      this.props.loadCart();
    }
  }

  handleRemove(e){
    e.persist();
    // const id = e.target.dataset.product;
    // let newState = this.state.cart.slice(0);
    // let cartItemIdToRemove;
    // newState.forEach((val,ind,arr)=>{
    //   if(val.product.id == id){
    //     cartItemIdToRemove = val.id;
    //     arr.splice(ind,1);
    //   }
    // })
    // const test = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c3JfaWQiOjEsInN1YiI6ImpvaG5ueSIsImV4cCI6MTU2MDA1NTg5NX0.JR5n_Gbv6T0C01PNfRRiguvBZrL0M3p3pPeESrgCesf4VseEpKhis2fBEr_40rVNgSzLlQ6qwB6ebbWOeAuqmA"
    // const config = {
    //   method:"delete",
    //   headers: {
    //     Authorization: test,
    //     Accept : "application/json",
    //     "Content-Type": "application/json"
    //   }
    // }
    // const url="http://localhost:8080/cart/"+this.state.cartId+"/"+cartItemIdToRemove;
    // axios(url, config).then((data)=>{
    //   this.setState((state)=>{
    //     return {
    //       ...state.cartId,
    //       cart: newState
    //     }
    //   })
    // }).catch((error)=>{
    //   console.log(error);
    // })
    this.props.removeFromCart(this.props.cart.cartId,e.target.dataset.product);
    // localStorage.setItem("cart",JSON.stringify(cart));
  }

  handleQuantityChange(e){
    e.persist();
    this.props.cart.cart.map((v)=>{
      if(v.product.id == e.target.dataset.product){
        v.quantity = parseInt(e.target.value);
      }
      return v;
    });
    this.props.updateCartItem(e.target.dataset.product,parseInt(e.target.value),false);
  }

  updateQuantityValues(e){
    this.props.cart.cart.forEach((v,i,a)=>{
      this.props.updateCartItem(v.id, v.quantity,true); 
    });
  }

  render(){
    const cart = this.props.cart.cart;
    const productTr = cart.length >= 1?cart.map((val,ind)=>{
      let product = AllProducts.find((v)=>{
        return parseInt(v.id) === parseInt(val.product.id);
      })
      let quantity = cart.filter(v=>v.product.id===val.product.id)[0].quantity;
      return(
        <CartProduct key={ind} product={product} quantity={quantity} changeHandler={this.handleQuantityChange} removeHandler={this.handleRemove}/>
      )
    }):null;
    
    const subtotal= cart.length >= 1?cart.reduce((acc,cur)=>{
      let product = AllProducts.find((v)=>{
        return parseInt(v.id) === parseInt(cur.product.id);
      })
      let quantity = cart.filter(v=>v.product.id===cur.product.id)[0].quantity;
      let total = product.price * quantity;
      acc += total;
      return acc;
    },0):null;

    return(
      <section className="page-width">
        {  cart.length < 1 &&
          <div className="empty-page-content">
            <h1>Your cart</h1>
            <p>Your cart is currently empty</p>
            <Link to="/all" className="btn">
              Continue Shopping
              <img src="images/right-arrow.svg"/>
            </Link>
          </div>
        }
        {  cart.length >= 1 &&
          <Fragment>
            <div className="cart-header">
              <h1>Your Cart</h1>
            </div>
            <form className="cart-form" disabled noValidate>
              <table>
                <thead>
                  <tr>
                    <th colSpan="2">Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                    {productTr}
                </tbody>
              </table>
            </form>
            <div className="cart-footer">
              <div>
                <div>
                  Subtotal ₩{subtotal}
                </div>
                <div className="cart-footer-offer">
                  OFFERS: Spend Won30000+ & Get FREE SHIPPING. Use code: Gui.
                </div>
                <Link to="/all" className="cart-footer-continue btn btn-secondary">
                  Continue Shopping
                </Link>
                <input className="btn btn-secondary" defaultValue="Update" onClick={this.updateQuantityValues}/>
                <input className="btn" defaultValue="Check out"/>
                <div>
                  Buttons go here
                </div>
              </div>
            </div>
          </Fragment>
        }
      </section>
    )
  }
}

export default CartPage;