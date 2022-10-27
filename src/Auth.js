import React from 'react';
import {Link} from 'react-router-dom'

const Auth = () => {
  return (
    <header className='showcase' >
        <div className='showcase-top' >
            <img src='https://i.bb.co/r5krrdz/logo.png' alt='logo'/>
            <Link to="/" className="btn btn rounded" >
              Sign In
            </Link>

            <div className='showcase-content' >
                <h1>Unlimited movies , TV shows and more</h1>
                <p> Watch anywhere , Cancel anytime</p>

                <Link to="/home"> Watch free for 30 days</Link>
            </div>
        </div>
    </header>
  )
}

export default Auth