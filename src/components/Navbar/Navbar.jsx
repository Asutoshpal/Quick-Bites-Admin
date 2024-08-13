import React from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = () => {
  return (
      <div className='navbar'>
      <div className="admin-logo">
        <img className='logo' src={assets.logo1} alt="" />
      <p>ADMIN</p>
      </div>  
      
          <img className ='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar