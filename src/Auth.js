import React from 'react';
import {Link} from 'react-router-dom';
import "./Auth.css";
import Footer from './Footer';

const Auth = () => {
  return (
    <header className='showcase' >
        <div className='showcase-top' >
          
            {/* <img src='https://o.remove.bg/downloads/8ed35ce7-8985-4ab2-89c9-f26b2acc5ded/Netflix-logo-red-black-png-removebg-preview.png' alt='logo'/>
            <Link to="/" className="btn btn-rounded" >
              Sign In
            </Link> */}

            <div className='showcase-content' >
                <h1>Watch your favourite Movie Trailer</h1>
                <p> Click on the movie to watch the trailer</p>

                <Link to="/home" className='btn btn-xl' > Click Here</Link>
            </div>
            <Footer/>
        </div>
        
    </header>
    
  );
 
}

export default Auth