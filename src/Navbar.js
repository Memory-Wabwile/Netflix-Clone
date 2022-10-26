import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <div className='Nav' >
        <img className='Nav_logo' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0f/"
        alt='Netflix Logo' />

        <img
        className='nav_avatar' 
        src='https://pbs.twimg.com/profile_images/12401199904115'
        alt='Netflix_logo'/>
    </div>
  )
}

export default Navbar