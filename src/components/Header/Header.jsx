import React from 'react'
import userpic from './img/userpic.png'
import arrow from './img/arrow.svg'
import { useState } from 'react'
import './Header.css'

function Header(props) {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(prev => !prev);
    }
  return (
    <header className='header'>
        <div className='header--currentComponentName'>{props.currentPage}</div>
        <div className="header--menu">
            <img className='header--menuImage' width="36px" height="36px" src={userpic} alt='user picture'/>
            <button className='header--menuButton' onClick={toggleMenu}>
                <span className='header--buttonText'>Mahfuzul Nabil</span>
                <img className={"header--buttonImage" + (menuOpen ? " open" : "")} src={arrow} alt="arrow" />
            </button>
            <div className={"header--dropdown" + (menuOpen ? '' : " collapsed")}>
                <ul className='header--dropdownList'>
                    <li className='header--dropdownListItem'>Item 1</li>
                    <li className='header--dropdownListItem'>Item 2</li>
                    <li className='header--dropdownListItem'>Item 3</li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header