import React from 'react';
import './Navbar.css';
import airbnblogo from './Images/Airbnb-Logo.png';

function Navbar() {
  return (
    <div className='navbarair'>
      <div>
        <img className='logoairbnb' src={airbnblogo} alt="" />
      </div>
      <div className='navmiddle'>
        <div><a className='navlinks' href="">Anywhere</a></div>
        <div><a className='navlinks' href="">Anyweek</a></div>
        <div className='guestSearch'>
            <a className='navlinks' href="">Guests</a>
           
           {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg> */}
           
            </div>
        
      </div>
      <div className='navbarleft'>
        <div>Airbnb your  home</div>
        <div>World</div>
        <div>User and Burger Menu</div>
      </div>
    </div>
    
  );
}

export default Navbar;
