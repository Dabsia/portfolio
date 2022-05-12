import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

  const [menuClicked, setMenuClicked] = useState(false)

  const handleClick = () => {
    setMenuClicked(!menuClicked)
  }
  
    return(
      <nav className='NavbarItems'>
        <h1 className='navbar-logo'>DABSIA.</h1>
        <div className='menu-icon' onClick={handleClick}>
        <i className={menuClicked ? 'ri-close-fill menu': 'ri-menu-line menu'  } />
        
        </div>
        <ul className={menuClicked ? 'nav-menu active' : 'nav-menu'}>
          <li><Link className='nav-links' to = '/'>Home</Link></li>
          <li><Link className='nav-links' to = '/products'>Products</Link></li>
          <li><Link className='nav-links' to = 'about'>About</Link></li>
          <li><Link className='nav-links' to = '/services'>Services</Link></li>
        </ul>
      </nav>
    )

}

export default NavBar