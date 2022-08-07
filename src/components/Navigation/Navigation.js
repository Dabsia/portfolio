import React from 'react'


import { Link} from 'react-router-dom'
import './Navigation.css'


const Navigation = () => {

  return (
    <nav className='nav'>
        <Link to = '/' className='nav__brand'> DABSIA</Link>            
    </nav>
  )
}

export default Navigation