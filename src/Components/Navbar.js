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
        <li>Shop<img src={arrow}></img></li>
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