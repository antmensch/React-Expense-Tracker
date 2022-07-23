import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className='header'>
        <div className='header--currentComponentName'>Dashboard</div>
        <div className="header--menu">
            <img className='header--menuImage' width="36px" height="36px" src='' alt=''/>
            <button className='header--menuButton'>
                <span>User Name</span>
                <img src="" alt="" />
            </button>
            <div></div>
        </div>
    </header>
  )
}

export default Header