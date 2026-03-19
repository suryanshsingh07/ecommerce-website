import React, { useState } from 'react'
import './shop.css'
import { FaRegHeart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { ImCross } from "react-icons/im";

const Shop = ({shop, Filter, allcatefilter, addtocart}) => {
    // toggle product detail
    const[showDetail, setShowDetail]=useState(false);
    // showing detail data
    const[detail, setDetail]=useState([]);
    // showing detail product
    const detailpage = (product) =>{
       
        const detaildata = ([{product}])
        const productdetail = detaildata[0]['product']
        setDetail(productdetail)
        setShowDetail(true);
    }
    //close detail product
    const closedetail = () =>{
        setShowDetail(false);
    }
  return (
    <>
        {
            showDetail ?
            <>
                <div className='product_detail'>
                    <button className='close_btn' onClick={closedetail}><ImCross/></button>
                    <div className='container'>
                        <div className='img_box'>
                            <img src={detail.image} alt={detail.name}></img>
                        </div>
                        <div className='info'>
                            <h4>{detail.category}</h4>
                            <h2>{detail.name}</h2>
                            <p>{detail.details}</p>
                            <h3>₹{detail.price.toLocaleString('en-IN')}</h3>
                            <button onClick={() => addtocart(detail)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </>
            : null
        }
        <div className='shop'>
            <h2>Shop</h2>
            <p>Home . Shop</p>
            <div className='container'>
                <div className='left_box'>
                    <div className='category'>
                        <div className='header'>
                            <h3>All Categories</h3>
                        </div>
                        <div className='box'>
                            <ul>
                                <li onClick={() => allcatefilter ()}>All Itmes</li>
                                <li onClick={() => Filter ("Accessories")}>Accessories</li>
                                <li onClick={() => Filter ("Electronics")}>Electronics</li>
                                <li onClick={() => Filter ("Clothing")}>Clothing</li>
                                <li onClick={() => Filter ("Appliances")}>Appliances</li>
                                <li onClick={() => Filter ("Grocery")}>Grocery</li>
                                <li onClick={() => Filter ("Mobiles")}>Mobiles</li>
                                <li onClick={() => Filter ("Furniture")}>Furniture</li>
                            </ul>
                        </div>
                    </div>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src='/images/assets/shop_left_banner.jpeg' alt='banner'></img>
                        </div>
                    </div>
                </div>
                <div className='right_box'>
                    <div className='banner'>
                        <div className='img_box'>
                            <img src='/images/assets/shop_right_banner.jpeg' alt='banner'></img>
                        </div>
                    </div>
                    <div className='product_box'>
                        <h2>Shop Product</h2>
                        <div className='product_container'>
                            {
                                shop.map((curElm) => {
                                    return(
                                        <>
                                            <div className='box'>
                                                <div className='img_box'>
                                                    <img src={curElm.image} alt={curElm.name}></img>
                                                    <div className='icon'>
                                                        <li><FaRegHeart/></li>
                                                        <li onClick={() => detailpage(curElm)}><IoMdEye/></li>
                                                    </div>
                                                </div>
                                                <div className='detail'>
                                                    <h3>{curElm.name}</h3>
                                                    <p>₹{curElm.price.toLocaleString('en-IN')}</p>
                                                    <button onClick={() => addtocart(curElm)}>Add to Cart</button>
                                                </div>
                                            </div>  
                                        </>
                                    )
                                }) 
                            }                                                     
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Shop
