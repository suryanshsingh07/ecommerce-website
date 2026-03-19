import React, { useEffect, useState } from 'react'
import './home.css';
import { Link } from 'react-router-dom';
import Homeproduct from './home_product';
import { IoMdEye } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const Home = ({shop, addtocart}) => {
    const [newProduct,setNewProduct]=useState([]);
    const [topProduct,setTopProduct]=useState([]);
    const [featuredProduct,setFeaturedProduct]=useState([]);
    const [trendingProduct, settrendingProduct]=useState(Homeproduct);
    // filter of trending product
    const filtercate = (x) =>{
        const filterproduct = Homeproduct.filter((curElm) =>{
            return curElm.type === x
        })
        settrendingProduct(filterproduct)
    }
    // all trending product
    const allTrendingProduct = () =>{
        settrendingProduct(Homeproduct)
    }
    // product type
    useEffect(() =>{
        productcategory();
    });
    const productcategory = () =>{
        // new product
        const newcategory = Homeproduct.filter((x) =>{
            return x.type === 'new'
        })
        setNewProduct(newcategory)
        // featured product
        const featuredcategory = Homeproduct.filter((x) =>{
            return x.type === 'featured'
        })
        setFeaturedProduct(featuredcategory)
        // top product
        const topcategory = Homeproduct.filter((x) =>{
            return x.type === 'top'
        })
        setTopProduct(topcategory)
    }

  return (
    <>
        <div className='home'>
            {/* <div className='top_banner'
            style={{backgroundImage: "url(../images/assets/slide_1.png)"}}>
                <div className='contant'>
                    <h3>silver aluminum</h3>
                    <h2>Apple Watch</h2>
                    <p>30% off at your first order</p>
                    <Link to='/shop' className='link'>Shop Now</Link>
                </div>
            </div> */}
            <div className='trending'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='header'>
                            <div className='heading'>
                                <h2 onClick={() => allTrendingProduct()}>trending product</h2>
                            </div>
                            <div className='cate'>
                                <h3 onClick={() => filtercate('new')}>New</h3>
                                <h3 onClick={() => filtercate('featured')}>Featured</h3>
                                <h3 onClick={() => filtercate('top')}>top selling</h3>
                            </div>
                        </div>
                        <div className='products'>
                            <div className='container'>
                                {
                                    trendingProduct.map((curElm)=>{
                                        return(
                                            <>
                                                <div className='box'>
                                                    <div className='img_box'>
                                                        <img src={curElm.image} alt={curElm.name || 'product'}></img>
                                                        <div className='icon'>
                                                            <div className='icon_box'>
                                                                <IoMdEye />
                                                            </div>
                                                            <div className='icon_box'>
                                                                <FaRegHeart />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='info'>
                                                        <h3>{curElm.name}</h3>
                                                        <p>₹{curElm.price.toLocaleString('en-IN')}</p>      
                                                        <button onClick={() => addtocart(curElm)} className='btn'>Add to cart</button>                                                  
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            <button>show more</button>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='right_container'>
                            <div className='testimonial'>
                                <div className='head'>
                                    <h3>our testimonial</h3>
                                </div>
                                <div className='detail'>
                                    <div className='img_box'>
                                        <img src='../images/assets/testimonial.jpg' alt='testimonial'></img>
                                    </div>
                                    <div className='info'>
                                        <h3>stephen robot</h3>
                                        <h4>web designer</h4>
                                        <p>The website is easy to use and the support team is excellent.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='newsletter'>
                                <div className='head'>
                                    <h3>newsletter</h3>
                                </div>
                                <div className='form'>
                                    <p>join our malling list</p>
                                    <input type='email' placeholder='E-mail' autoComplete='off'></input>
                                    <button>subscribe</button>
                                    <div className='icon_box'>
                                        <div className='icon'>
                                            <FaFacebookF />
                                        </div>
                                        <div className='icon'>
                                            <FaTwitter />
                                        </div>
                                        <div className='icon'>
                                            <FaInstagram />
                                        </div>
                                        <div className='icon'>
                                            <FaYoutube />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='banners'>
                <div className='container'>
                    <div className='left_box'>
                        <div className='box'>
                            <img src='/images/assets/banner_1.jpeg' alt='banner'></img>
                        </div>
                        <div className='box'>
                            <img src='/images/assets/banner_2.jpeg' alt='banner'></img>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='top'>
                            <img className='img3' src='/images/assets/banner_3.jpeg' alt='banner'></img> 
                            <img src='/images/assets/banner_4.jpeg' alt='banner'></img> 
                        </div>
                        <div className='bottom'>
                            <img src='/images/assets/banner_5.jpeg' alt='banner'></img>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className='product_type'>
                <div className='container'>
                    <div className='box'>
                        <div className='header'>
                            <h2>New Product</h2>
                        </div>
                        {
                            newProduct.map((curElm) =>{
                                return(
                                    <>
                                        <div className='product_box'>
                                            <div className='img_box'>
                                                <img src={curElm.image} alt={curElm.name}></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.name}</h3>
                                                <p>₹{curElm.price.toLocaleString('en-IN')}</p>
                                                <div className='icon'>
                                                    <button><IoMdEye /></button>
                                                    <button><FaRegHeart /></button>
                                                    <button onClick={() => addtocart(curElm)}><MdOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='box'>
                        <div className='header'>
                            <h2>Featured Product</h2>
                        </div>
                        {
                            featuredProduct.map((curElm) =>{
                                return(
                                    <>
                                        <div className='product_box'>
                                            <div className='img_box'>
                                                <img src={curElm.image} alt={curElm.name}></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.name}</h3>
                                                <p>₹{curElm.price.toLocaleString('en-IN')}</p>
                                                <div className='icon'>
                                                    <button><IoMdEye /></button>
                                                    <button><FaRegHeart /></button>
                                                    <button onClick={() => addtocart(curElm)}><MdOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className='box'>
                        <div className='header'>
                            <h2>Top Product</h2>
                        </div>
                        {
                            topProduct.map((curElm) =>{
                                return(
                                    <>
                                        <div className='product_box'>
                                            <div className='img_box'>
                                                <img src={curElm.image} alt={curElm.name}></img>
                                            </div>
                                            <div className='detail'>
                                                <h3>{curElm.name}</h3>
                                                <p>₹{curElm.price.toLocaleString('en-IN')}</p>
                                                <div className='icon'>
                                                    <button><IoMdEye /></button>
                                                    <button><FaRegHeart /></button>
                                                    <button onClick={() => addtocart(curElm)}><MdOutlineShoppingCart /></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>                                
            </div> */}
        </div>
    </>
  )
}

export default Home