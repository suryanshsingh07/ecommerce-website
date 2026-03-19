import React,{ useState } from 'react'
import './nav.css'
import { MdLocalShipping } from 'react-icons/md';
import { FaSearch } from "react-icons/fa";
import { MdOutlineLogin } from "react-icons/md";
import { MdOutlineLogout } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import { useAuth0 } from "@auth0/auth0-react";
import {Link} from 'react-router-dom';
const Nav = ({search, setSearch}) => {
  const {loginWithRedirect, logout, user, isAuthenticated}=useAuth0();
  const [showProfile, setShowProfile] = useState(false);

  const clearSearch = () => {
    setSearch('');
  };

  return (
    <>
    <div className='header'>
      <div className='top_header'>
        <div className='icon'>
          <MdLocalShipping />
        </div>
        <div className='info'>
          <p>Free Shipping when Shopping upto ₹1000  </p>
        </div>
      </div>
      <div className='middle_header'>
        <div className='logo_box'>
          <div className='logo'>
            <img src='images/logo/logo.png' alt="logo" />
          </div>
          <div className='text'>
            <h1>MyShop</h1>
          </div>
        </div>
        <div className='search_box'>
          <input type='text' value={search} placeholder='Search' onChange={(e) => setSearch(e.target.value)}></input>
          {search ? (
            <button onClick={clearSearch}>
              <ImCross />
            </button>
          ) : (
            <button>
              <FaSearch />
            </button>
          )}
        </div>
        { isAuthenticated?
        //log out button
            <div className='user'>
              <div className='icon'>
                <MdOutlineLogout />         
              </div>
              <div className='btn'>
                <button onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}>Logout</button>
              </div>
            </div> 
          :
          // log in button
            <div className='user'>
              <div className='icon'>
                <MdOutlineLogin />          
              </div>
              <div className='btn'>
                <button onClick={() => loginWithRedirect()}>Login</button>
              </div>
            </div> 
        } 
      </div>
      <div className='last_header'>
        <div className='user_profile' onClick={() => isAuthenticated && setShowProfile(true)}>
          {
            isAuthenticated ?
            <>
              <div className='icon'>
                <FiUser/>
              </div>
              <div className='info'>
                <h2>Profile</h2>
              </div>
            </>
            : 
            <>
              <div className='icon'>
                <FiUser/>
              </div>
              <p>Please Login</p>
            </>
          }
        </div>
        <div className='nav'>
          <ul>
            <li><Link to='/' className='link'>Home</Link></li>
            <li><Link to='/shop' className='link'>Shop</Link></li>
            <li><Link to='/cart' className='link'>Cart</Link></li>
            <li><Link to='/about' className='link'>About</Link></li>
            <li><Link to='/contact' className='link'>Contact</Link></li>
          </ul>
        </div>
        <div className='offer'>
          <p>Flat 10% over all iphone</p>
        </div>
      </div>
    </div>
    {isAuthenticated && showProfile && (
        <div className='profile_overlay' onClick={() => setShowProfile(false)}>
          <div className='profile_card' onClick={(e) => e.stopPropagation()}>
            <span className='close' onClick={() => setShowProfile(false)}>
              <ImCross />
            </span>
            <FiUser size={40} />
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() =>logout({ logoutParams: { returnTo: window.location.origin } })}>
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav