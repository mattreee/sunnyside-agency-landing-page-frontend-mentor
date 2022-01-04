import Logo from '../images/logo.svg';
import Hamburger from '../images/icon-hamburger.svg';
import React, { useState } from 'react'

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  window.addEventListener('resize', handleResize)

  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('mobile-menu')) {
      document.querySelector('.nav__ul').classList.toggle('active', true);
    } else {
      document.querySelector('.nav__ul').classList.remove('active');
    }
  })

  return (
    <nav className='nav' id='nav-id'>
      <img className='nav__logo' src={Logo} alt="" />
      {windowWidth < 900
        ? <MobileMenu />
        : <WidescreenNav />
      }
    </nav>
  )
}

function MobileMenu() {
  return (
    <>
      <img className='mobile-menu' src={Hamburger} data-mobile-menu alt='' />
      <ul className='nav__ul'>
        <li><a href="#nav-id">About</a></li>
        <li><a href="#nav-id">Services</a></li>
        <li><a href="#nav-id">Projects</a></li>
        <li><a id='contact-button' href="#nav-id">Contact</a></li>
    </ul>
    </>
  );
}

function WidescreenNav() {
  return (
    <ul className='nav__ul'>
      <li><a href="#nav-id">About</a></li>
      <li><a href="#nav-id">Services</a></li>
      <li><a href="#nav-id">Projects</a></li>
      <li><a id='contact-button' href="#nav-id">Contact</a></li>
    </ul>
  );
}

export default Navigation
