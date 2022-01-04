import Logo from '../images/logo.svg';
import Facebook from '../images/icon-facebook.svg';
import Instagram from '../images/icon-instagram.svg';
import Twitter from '../images/icon-twitter.svg';
import Pinterest from '../images/icon-pinterest.svg';
import GalleryCone from '../images/desktop/image-gallery-cone.jpg';
import GalleryMilkbottles from '../images/desktop/image-gallery-milkbottles.jpg';
import GalleryOrange from '../images/desktop/image-gallery-orange.jpg';
import GallerySugarcubes from '../images/desktop/image-gallery-sugarcubes.jpg';

import MobileCone from '../images/mobile/image-gallery-cone.jpg';
import MobileMilkbottles from '../images/mobile/image-gallery-milkbottles.jpg';
import MobileOrange from '../images/mobile/image-gallery-orange.jpg';
import MobileSugar from '../images/mobile/image-gallery-sugar-cubes.jpg';

import React, { useState } from 'react'

const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  function handleResize() {
    setWindowWidth(window.innerWidth);
  }

  return (
    <footer id='footer' className='footer'>
      {window.addEventListener('resize', handleResize)}
      {windowWidth < 900
        ? <MobileFooterImages />
        : <WidescreenFooterImages />
      }
      <div className='footer__info'>
        <img className='footer__logo' src={Logo} alt='' />
        <ul className='footer__ul'>
          <li><a href="#footer">About</a></li>
          <li><a href="#footer">Services</a></li>
          <li><a href="#footer">Projects</a></li>
        </ul>
        <div className='footer__contacts'>
          <a href="#footer"><img src={Facebook} alt="" /></a>
          <a href="#footer"><img src={Instagram} alt="" /></a>
          <a href="#footer"><img src={Twitter} alt="" /></a>
          <a href="#footer"><img src={Pinterest} alt="" /></a>
        </div>
      </div>
    </footer>
  )
}

const WidescreenFooterImages = () => {
  return (
    <div className='footer__images'>
      <img src={GalleryMilkbottles} alt='' />
      <img src={GalleryOrange} alt='' />
      <img src={GalleryCone} alt='' />
      <img src={GallerySugarcubes} alt='' />
    </div>
  )
}

const MobileFooterImages = () => {
  return (
    <div className='footer__images'>
      <img src={MobileMilkbottles} alt='' />
      <img src={MobileOrange} alt='' />
      <img src={MobileCone} alt='' />
      <img src={MobileSugar} alt='' />
    </div>
  )
}

export default Footer
