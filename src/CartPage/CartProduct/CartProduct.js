import React from 'react';
import {Link} from 'react-router-dom';
import './CartProduct.css'
function CartProduct({product,quantity,changeHandler,removeHandler}){

  return(
    <tr>
      <td className="cart-image">
        <a >
          <img src={product.picture}/>
        </a>
      </td>
      <td className="cart-description">
        <Link to={{pathname:'/product', search:`?id=${product.id}`}} >{product.name}</Link>
        <p>
          <a className="btn-small" data-product={product.id} onClick={removeHandler}>
            REMOVE
          </a>
        </p>
      </td>
      <td>
        ₩{product.price}
      </td>
      <td className="cart-qty">
        <div>
          <input type="number" min="0" defaultValue="1" pattern="[0-9]*" data-product={product.id} onChange={changeHandler}/>
        </div>
      </td>
      <td className="cart-total">
        ₩{product.price*quantity}
      </td>
    </tr>
  )
}

export default CartProduct;