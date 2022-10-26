import React, { useState , useEffect} from 'react';
import "./Navbar.css";

function Navbar() {
    const[show , handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll" , () => {
            if(window.scrollY > 100){
                handleShow(true);
            }else handleShow(false);
        });
        return() => {
            // window.removeEventListener("scroll");
        };
    } , []);


  return (
    <div className={`nav ${show && "nav_black"}`} >
        <img className='nav_logo' 
        src = "https://o.remove.bg/downloads/8ed35ce7-8985-4ab2-89c9-f26b2acc5ded/Netflix-logo-red-black-png-removebg-preview.png"
        alt='Netflix Logo' />

        <img
        className='nav_avatar' 
        src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
        alt='Netflix_logo'/>
    </div>
  )
}

export default Navbar