/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../assets/moon-image.png';

const Navbar = () => {
  const [openBurger, setOpenBurger] = React.useState(false);

  const toggleBurgerMenu = () => {
    setOpenBurger(!openBurger);
  };

  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <div className='logo-navbar moon'>
          <img src={Image} alt='logo' />
        </div>
        <a
          role='button'
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
          href='#'
          onClick={toggleBurgerMenu}
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div className={openBurger ? 'navbar-menu is-active' : 'navbar-menu'}>
        <div className='navbar-start'>
          <Link className='navbar-item' to='/'>
            Home
          </Link>
          <Link className='navbar-item' to='/dailyhoroscope'>
            Daily Horoscope
          </Link>
          <Link className='navbar-item' to='about'>
            About
          </Link>
          <Link className='navbar-item' to='/register'>
            Register
          </Link>
          <Link className='navbar-item' to='/login'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
