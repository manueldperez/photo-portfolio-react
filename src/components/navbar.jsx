import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../global.css';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg'>
      <div className='container-fluid'>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <div className='navbar-nav w-50 mx-auto justify-content-center'>
            <Link className='navbar-brand text mx-5' to='/'>
              Manuel Perez
            </Link>
            <NavLink className='nav-item nav-link' to='/projects'>
              Projects
            </NavLink>
            <NavLink className='nav-item nav-link' to='/about'>
              About
            </NavLink>
            <NavLink className='nav-item nav-link' to='/contact'>
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
