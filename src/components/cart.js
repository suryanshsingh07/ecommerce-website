import React from 'react'
import './cart.css'
import { Link } from 'react-router-dom'
import { MdDelete } from "react-icons/md";

const Cart = ({cart, setCart}) => {
// increase quantity
const incqty = (product) =>{
  const exist = cart.find((x) =>{
    return x.id === product.id
  })
  setCart(cart.map((curElm) =>{
    return curElm.id === product.id ? {...exist, qty: exist.qty+1} : curElm
  }))
}
// decrease quantity
const decqty = (product) =>{
  const exist = cart.find((x) =>{
    return x.id === product.id
  })
  if (exist.qty > 1){
    setCart(cart.map((curElm) =>{
      return curElm.id === product.id ? {...exist, qty: exist.qty-1} : curElm
    }))
  }else{
    setCart(cart.filter((curElm) =>{
      return curElm.id !== product.id
    }))
  }
}
// remove product
const removeproduct = (product) =>{
  const exist = cart.find((x) =>{
    return x.id === product.id
  })
  if (exist.qty > 0){
    setCart(cart.filter((curElm) =>{
      return curElm.id !== product.id
    }))
  }
}
// total price
const total = cart.reduce((price, item) => price + item.qty * item.price, 0)
  return (
    <>
      <div className='cart'>
        <h2>cart</h2>
        <p>Home . Cart</p>
        {
          cart.length === 0 &&
          <>
            <div className='empty_cart'>
              <img src='/images/assets/empty_cart.png' alt='Empty cart'></img>
              <h3>Your Shopping cart is Empty</h3>
              <Link to="/shop" className='btn'>
                <button>Shop Now</button>
              </Link>
            </div>
          </>
        }
        <div className='container'>
          {
            cart.map((curElm) =>{
              return(
                <>
                  <div className='box'>
                    <div className='img_box'>
                      <img src={curElm.image} alt={curElm.name}></img>
                    </div>
                    <div className='detail'>
                      <div className='info'>
                        <h4>{curElm.category}</h4>
                        <h3>{curElm.name}</h3>         
                        <p>Price: ₹{curElm.price.toLocaleString('en-IN')}</p>
                        <p>Total: ₹{(curElm.price*curElm.qty).toLocaleString('en-IN')}</p>
                      </div>                        
                      <div className='quantity'>
                        <button onClick={() => decqty(curElm)}>-</button>
                        <input type='number' value={curElm.qty}></input>
                        <button onClick={() => incqty(curElm)}>+</button>
                      </div> 
                      <div className='icon'>
                        <li onClick={() => removeproduct(curElm)}><MdDelete /></li>
                      </div>
                    </div> 
                  </div>
                </>
              )
            })
          }          
        </div>
        <div className='bottom'>
          {
            cart.length > 0 &&
            <>
              <div className='total'>
                <h4>Total price: ₹{(total).toLocaleString('en-IN')}</h4>
              </div>
              <button>Place Order</button>
            </>
           }
        </div>
      </div>
    </>
  )
}

export default Cart