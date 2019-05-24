import React from 'react';
import './CartProduct.css'
function CartProduct({product,quantity,changeHandler}){
  return(
    <tr>
      <td className="cart-image">
        <a >
          <img src={product.picture}/>
        </a>
      </td>
      <td className="cart-description">
        <div>{product.name}</div>
        <p>
          <a className="btn-small">
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