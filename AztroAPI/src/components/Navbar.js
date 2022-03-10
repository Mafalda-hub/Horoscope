import React from 'react';
import { Link } from 'react-router-dom';
// import Image from '';

const Navbar = () => {
  return (
    <header>
      <nav className='navbar is-dark'>
        <div className='container'>
          <div className='navbar-brand'>
            {/* <img src='./assets/black-cat-logo-small.png' alt='black cat logo' /> */}
            <Link to='/' className='navbar-item'>
              Home
            </Link>
            <Link to='/DailyHoroscope' className='navbar-item'>
              Daily Horoscope
            </Link>
            <Link to='about' className='navbar-item'>
              About
            </Link>
            <Link to='/register' className='navbar-item'>
              Register
            </Link>
            <Link to='/login' className='navbar-item'>
              Login
            </Link>
            <Link to='/pleasework' className='navbar-item'>
              Card
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
