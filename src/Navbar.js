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
            window.removeEventListener("scrollY");
        };
    } , []);


  return (
    <div className={`Nav ${show && "nav_black"}`} >
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