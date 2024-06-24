import React from 'react'
import "../Styles/Navbar.css"
import logo from '../assets/Images/navbar-images/sleepy-owl-Photoroom_1.png'
import search from '../assets/Images/navbar-images/search.png'
import cart from '../assets/Images/navbar-images/cart.png'
import arrow from '../assets/Images/navbar-images/sort-down.png'

const Navbar = () => {
  return (
    <div className ="navbarContainer">
      <ul>
        <li className='shop'>Shop<img src={arrow}></img>
        <div className='dropdownContainer'>
          <div className='column-1'>
            <ul>
              <li id='login'>Login / Signup</li>
              <li>Bulk Orders</li>
              <li>Blog</li>
              <li>About-us</li>
              <li>Reviews</li>
              <li>Contact-us</li>
            </ul>
          </div>
          <div className='dropdown-products'>
            <ul>
              <li>Enamel Mug Combo</li>
              <li className='description'>Blink and you'll never miss</li>
              <li>Premium Instant Coffee</li>
              <li className='description'>Blink and you'll never miss</li>
              <li>Xpresso: Instant Coffee</li>
              <li className='description'>Warning: strong coffee</li>
            </ul>
          </div>
          <div className='dropdown-products'>
          <ul>
              <li>Cold Brew</li>
              <li className='description'>Brew Overnight</li>
              <li>Ground Coffee</li>
              <li className='description'>Arabica beans</li>
              <li>Cold Coffee</li>
              <li className='description'>kick off the summer right</li>
            </ul>
          </div>
          <div className='dropdown-products'>
          <ul>
              <li>Coffee Bags</li>
              <li className='description'>Blink and you'll never miss</li>
              <li>Merchandise</li>
              <li className='description'>Perfect companion</li>
            </ul>
          </div>
        </div>
        </li>
        <li>Instant Coffee<img src={arrow}></img></li>
        <li>BestSellers</li>
      </ul> 
      <img src={logo} alt="logo" className='logo'></img>
      <ul><li className='bulk-orders'>BulkOrders</li></ul>
      <div className='search-box'>
        <input type='text' placeholder='Search'></input>
        <img src={search} alt='search-icon'></img>
      </div>
      <div className='cart-div'>
        <img src={cart} alt='cart-icon' className='cart-icon'></img>
      </div>
    </div>
  )
}

export default Navbar