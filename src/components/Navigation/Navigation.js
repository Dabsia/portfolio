import React, {useState} from 'react'


import { Link} from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {

    

    const [navActive, setNavActive] = useState('nav__menu')
    const [toggleIcon, setToggleIcon] = useState(false)



    const navToggle = () => {
        navActive === 'nav__menu' ? setNavActive('nav__menu nav__active') : setNavActive('nav__menu')

        // ToggleIcon

        setToggleIcon(prevState => !prevState)
    }

  return (
    <nav className='nav'>
        <Link to = '/' className='nav__brand'> DABSIA</Link>
        <ul className={navActive}>
            <li className='nav__item'>
                <Link className='nav__link' to = '/shop'>Projects</Link>
            </li>
            <li className='nav__item'>
                <Link className='nav__link' to = '/about'>Resume</Link>
            </li>
            <li className='nav__item'>
                <Link className='nav__link' to = '/about'>Contact</Link>
            </li>
            
        </ul>
        
            <i onClick={navToggle} className={`${toggleIcon ? 'ri-close-fill' : 'ri-menu-line'} nav__toggler`} ></i>
            
    </nav>
  )
}

export default Navigation