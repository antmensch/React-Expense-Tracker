import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import logo from '../../img/logo.svg'
import dashboardIcon from './img/dashboard.svg'
import expensesIcon from './img/expenses.svg'
import settingsIcon from './img/settings.svg'


export default function Navbar() {

  function handleLogout() {
    console.log('log out button clicked')
  }

  return (
    <nav className='navbar'>
      <div className="navbar--logoWrapper">
        <Link to='/'> 
        <img src={logo} alt="website logo" width="30px" height="30px" className='navbar--logo'/> 
        <span className='navbar--logoText'> Maglo. </span>
        </Link>
      </div> 
      
      <ul className='navbar--menu'>
        <li className='navbar--menuItem'>
          <NavLink to="/dashboard">
            
            Dashboard
          </NavLink>
        </li>
        <li className='navbar--menuItem'>
          <NavLink to="/expenses">
            Expenses
          </NavLink>
        </li>
        <li className='navbar--menuItem'>
          <NavLink to="/settings">
            Settings
          </NavLink>
        </li>
      </ul>

      <div className="nav--buttonWrapper">
        <button onClick={handleLogout}>Log out</button>
      </div>
      

    </nav>
  )
}