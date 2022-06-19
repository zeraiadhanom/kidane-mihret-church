import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import Dropdown from './Dropdown'
import Dropdown2 from './Dropdown2'
import logo from '../images/cross.jpg'


function Navbar() {
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const [dropdown2, setDropdown2] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
    
    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    }
    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    }

    const onMouseEnter2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false)
        } else {
            setDropdown2(true)
        }
    }
    const onMouseLeave2 = () => {
        if (window.innerWidth < 960) {
            setDropdown2(false)
        } else {
            setDropdown2(false)
        }
    }
    return(
        <>
        
        <nav className='navbar'>
        
            <Link to='/' className='navbar-logo'>
                <img width="50px" height="auto" className="img-responsive" src={logo}  alt="logo" />
            </Link>
            <div className='menu-icon'onClick={handleClick}>
                <i className={click ? 'fas fa-times': 'fas fa-bars'}/>
                
            </div>
            <ui className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown/>}
           </li>
           <li className='nav-item'>
               <Link to='/our-church' className='nav-links' onClick={closeMobileMenu}>
                   Our Church
               </Link>
           </li>
           <li className="nav-item">
            <Link to='/membership' className='nav-links' onClick={closeMobileMenu}>
                Membership
            </Link>
           </li>
           <li className="nav-item" onMouseEnter={onMouseEnter2} onMouseLeave={onMouseLeave2}>
            <Link to='/archive' className='nav-links' onClick={closeMobileMenu}>
                Archive  <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2/>}
           </li>
           <li className="nav-item">
            <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                Contact-Us
            </Link>
           </li>
            </ui>
        </nav>

        </>
    )
}


export default Navbar;