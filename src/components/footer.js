import React from 'react'
import './footer.css';
import { FaPiggyBank, FaWallet } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";


const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='left_box'>
            <div className='box'>
              <div className='icon_box'>
                <FaPiggyBank />
              </div>
              <div className='detail'>
                <h3>Great Saving</h3>
                <p>We offer great savings through carefully priced solutions that deliver maximum value. By combining quality, efficiency, and affordability, we help you reduce costs while maintaining the standards you expect.</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon_box'>
                <MdLocalShipping />
              </div>
              <div className='detail'>
                <h3>Free Delivery</h3>
                <p>Enjoy free delivery on every order, with no hidden charges. Get your items delivered straight to your doorstep quickly and conveniently, saving you both time and money.</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon_box'>
                <TfiHeadphoneAlt />
              </div>
              <div className='detail'>
                <h3>24X7 Support</h3>
                <p>Our 24X7 support team is always available to help you, anytime you need assistance. Day or night, you can rely on us for quick and dependable support.</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon_box'>
                <FaWallet />
              </div>
              <div className='detail'>
                <h3>Money Back</h3>
                <p>Our money-back guarantee reflects our commitment to customer satisfaction. If for any reason you are not satisfied, we provide a straightforward and reliable refund process.</p>
              </div>
            </div>
          </div>
          <div className='right_box'>
            <div className='header'>
              <img src='/images/logo/logo.png' alt='logo'></img>
              <div className='text'>
                <h1>MyShop</h1>
              </div>
              <p>We are committed to delivering exceptional value through great savings, free delivery, and reliable 24/7 support. With a strong focus on customer satisfaction, we also offer a money-back guarantee to ensure complete peace of mind. Our goal is to provide quality, convenience, and trust in every experience.</p>
            </div>
            <div className='bottom'>
              <div className='box'>
                <h3>Your Account</h3>
                <ul>
                  <li>About us</li>
                  <li>Account</li>
                  <li>Payment</li>
                  <li>Sales</li>
                </ul>
              </div>
              <div className='box'>
                <h3>Products</h3>
                <ul>
                  <li>Delivery</li>
                  <li>Track Order</li>
                  <li>New Product</li>
                  <li>Old Product</li>
                </ul>
              </div>
              <div className='box'>
                <h3>Contact Us</h3>
                <ul>
                  <li>226024, Lucknow, Uttar Pradesh, India</li>
                  <li>+(91) 88745 18917</li>
                  <li>suryanshsinghchauhanthakur@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer