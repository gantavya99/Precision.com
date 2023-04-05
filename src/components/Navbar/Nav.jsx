import React from 'react'
import { Search,Heart,Handbag } from 'react-bootstrap-icons';
import './Nav.css'
const Nav = () => {
  return (
    <>
     <div className='nav-container cursor'>
        <div className='nav-container-left'>
        <div className='nav-items-left nav-item-left'>
            Women
        </div>
        <div className='nav-items-left'>
            Men
        </div>
        </div>
        
        <div className='nav-container-center'>
            PRECISION
        </div>
        <div className='nav-container-right'>
        <div className='nav-items-right'>
            My Account
        </div>
        <div className='nav-items-right nav-icon'>
           <Heart />
        </div>
        <div className='nav-items-right nav-icon'>
        <Search />
        </div>
        <div className='nav-items-right nav-item-right nav-icon'>
            <Handbag />
        </div>
        </div>
    </div>
    <div className="hover-container ">
        <span>
            New
        </span>
        <span>
            Bags
        </span>
        <span>
            Watches
        </span>
        <span>
            Wallets
        </span>
        <span>
            Tech & Travel
        </span>
        <span>
            For Work
        </span>

        <span>
            Doggo
        </span>
        <span>
            Gifts
        </span>
        <span>
            Personalization
        </span>
        <span>
            Gifts under $200
        </span>
        <span>
            Sale
        </span>
    </div>
    </>
   
  )
}

export default Nav