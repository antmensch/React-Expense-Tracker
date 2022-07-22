import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../../img/logo.svg';
import dashboardIcon from './img/dashboard.svg';
import expensesIcon from './img/expenses.svg';
import settingsIcon from './img/settings.svg';
import logoutIcon from './img/logout.svg';


export default function Navbar() {

  function handleLogout() {
    console.log('log out button clicked')
  }

  return (
    <nav className='navbar'>
        <Link className='navbar--logoWrapper' to='/'> 
        <img src={logo} alt="website logo" width="30px" height="30px" className='navbar--logo'/> 
        <span className='navbar--logoText'> Maglo. </span>
        </Link>
      
      <ul className='navbar--menu'>
        <li className='navbar--menuItem'>
          <NavLink to="/dashboard">
            <img className='navbar--icon' src={dashboardIcon} alt="dashboard icon" width="16px" height="16px" />
            <span className="navbar--menuItemText">Dashboard</span>
          </NavLink>
        </li>
        <li className='navbar--menuItem'>
          <NavLink to="/expenses">
            <img className='navbar--icon' src={expensesIcon} alt="expenses icon" width="16px" height="16px" />
            <span className="navbar--menuItemText">Expenses</span>
          </NavLink>
        </li>
        <li className='navbar--menuItem'>
          <NavLink to="/settings">
            <img className='navbar--icon' src={settingsIcon} alt="dashboard icon" width="16px" height="16px" />
            <span className="navbar--menuItemText">Settings</span>
          </NavLink>
        </li>
      </ul>

      
        <button className="navbar--logoutButton" onClick={handleLogout}>
          <img src={logoutIcon} alt="logout icon" />
          <span className="navbar--logoutButtonText"> Logout</span>
        </button>
      
    </nav>
  )
}