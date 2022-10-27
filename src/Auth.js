import React from 'react';
import {Link} from 'react-router-dom';
import "./Auth.css";

const Auth = () => {
  return (
    <header className='showcase' >
        <div className='showcase-top' >
          
            <img src='https://o.remove.bg/downloads/8ed35ce7-8985-4ab2-89c9-f26b2acc5ded/Netflix-logo-red-black-png-removebg-preview.png' alt='logo'/>
            <Link to="/" className="btn btn-rounded" >
              Sign In
            </Link>

            <div className='showcase-content' >
                <h1>Unlimited movies , TV shows and more</h1>
                <p> Watch anywhere , Cancel anytime</p>

                <Link to="/home" className='btn btn-xl' > Watch free for 30 days </Link>
            </div>
        </div>
    </header>
  )
}

export default Auth