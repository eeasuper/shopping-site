import React,{Component,Fragment} from 'react';
import {Link} from 'react-router-dom';
import './CartPage.css';
import AllProducts from '../seed/AllProducts';
import CartProduct from './CartProduct/CartProduct';
class CartPage extends Component{
  constructor(props){
    super(props);
    this.state={
      cart: {}
    }
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }
  componentDidMount(){
// Loading signs for cart could be useful for when the server is slow.
// Do backend operation here.
    const fetchData = () => {
      // const result = await new Promise((res,rej)=>{
      //   res(JSON.parse(localStorage.getItem("cart")));
      // })
      // console.log(result);
      // return result;
      return JSON.parse(localStorage.getItem("cart"))
    };
    let result = fetchData();
    this.setState((state)=>{
      return {
        cart: result
      }
    })
  }

  handleRemove(e){
    e.persist();
    const id = e.target.dataset.product;
    let cart = this.state.cart;
    delete cart[id];
    this.setState((state)=>{
      return {
        cart:{
          ...cart
        }
      }
    })
    localStorage.setItem("cart",JSON.stringify(cart));
  }

  handleQuantityChange(e){
    e.persist();
    this.setState((state)=>{
      return {
        cart:{
          ...state.cart,
          [e.target.dataset.product]: {
            quantity: parseInt(e.target.value)
          }
        }
      }
    })
  }

  render(){
      const productTr = this.state.cart!=null?Object.keys(this.state.cart).map((val,ind)=>{
      let product = AllProducts.find((v)=>{
        return parseInt(v.id) === parseInt(val);
      })
      return(
        <CartProduct key={ind} product={product} quantity={this.state.cart[product.id].quantity} changeHandler={this.handleQuantityChange} removeHandler={this.handleRemove}/>
      )
    }):null;

    const subtotal= this.state.cart != null?Object.keys(this.state.cart).reduce((acc,cur)=>{
      let product = AllProducts.find((v)=>{
        return parseInt(v.id) === parseInt(cur);
      })
      let total = product.price * this.state.cart[product.id].quantity;
      acc += total;
      return acc;
    },0):null;

    return(
      <section className="page-width">
        {
          this.state.cart == null &&
          <div className="empty-page-content">
            <h1>Your cart</h1>
            <p>Your cart is currently empty</p>
            <Link to="/all" className="btn">
              Continue Shopping
              <img src="images/right-arrow.svg"/>
            </Link>
          </div>
        }
        {  this.state.cart != null &&
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
                  { this.state.cart != null &&
                    productTr
                  }
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
                <input className="btn btn-secondary" defaultValue="Update"/>
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