import React from 'react'
import BurgerLogosu from '../assets/burgerlogo.png'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
            <img src={BurgerLogosu} alt='Burger Logomuz'/>
            <div className='mainLink'>
              <Link to={'/'}>Anasayfa</Link>
              <Link to={'/menu'}>Menü</Link>
              <Link to={'/contact'}>İletişim</Link>
              <Link to={'/about'}>Hakkımızda</Link>
              <Link to={'/signup'}>Kaydol</Link>
              
            </div>
        </div>

    </div>
  )
}
