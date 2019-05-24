import React,{Component} from 'react';
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
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
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
      const productTr = Object.keys(this.state.cart).map((val,ind)=>{
      let product = AllProducts.find((v)=>{
        return parseInt(v.id) === parseInt(val);
      })
      return(
        <CartProduct key={ind} product={product} quantity={this.state.cart[product.id].quantity} changeHandler={this.handleQuantityChange}/>
      )
    });

    const subtotal= Object.keys(this.state.cart).reduce((acc,cur)=>{
      let product = AllProducts.find((v)=>{
        return parseInt(v.id) === parseInt(cur);
      })
      let total = product.price * this.state.cart[product.id].quantity;
      acc += total;
      return acc;
    },0);

    return(
      <section className="page-width">
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
            <input className="btn btn-secondary" defaultValue="Update"/>
            <input className="btn" defaultValue="Check out"/>
            <div>
              Buttons go here
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default CartPage;