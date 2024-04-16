/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Logo from '../../atoms/Logo/Logo';
import ViewAll from '../../atoms/ViewAll/ViewAll';
import './Footer.scss';

export default function Footer() {
  return (
    <footer>
      <div className='footer-top w-90'>
        <div className='footer-top__column'>
          <Logo />
          <div className='footer-top__column__support'>
            <div className='column-item'>
              <span className='column-item__primary support-caption body-small-400'>Customer Supports:</span>
              <span className='column-item__primary white-caption body-large-500'>(629) 555-0129</span>
            </div>
            <div className='column-item'>
              <span className='column-item__primary address-blk body-medium-400'>My Home Twitza
M Hotel, Hitech City Main Rd, Diamond Hills, Lumbini Avenue, HITEC City, Hyderabad, Telangana 500081
</span>
            </div>
            <span className='column-item white-caption body-medium-500'>info@bazaar.com</span>
          </div>
        </div>
        <div className='footer-top__links'>
          <span className='footer-top__links__category label-2'>top category</span>
          <ul className='list'>
            <li>
              <a href="#" className='list__item body-small-500'>Computer & Laptop</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>SmartPhone</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>Headphone</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>Accessories</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>Camera & Photo</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>TV & Homes</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>
                <ViewAll variant={'yellow'}/>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-top__links'>
          <span className='footer-top__links__category label-2'>quick links</span>
          <ul className='list'>
            <li>
              <a href='#' className='list__item body-small-500'>Shop Product</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>Shoping Cart</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>Wishlist</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>Compare</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>Track Order</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>Customer Help</a>
            </li>
            <li>
              <a href='#' className='list__item body-small-500'>About Us</a>
            </li>
          </ul>
        </div>
        <div className='footer-top__links'>
          <span className='footer-top__links__category label-2'>download app</span>
          <ul className='download'>
            <li>
              <a href='#' className='download__type'>
                <img src='http://localhost:9000/icons/playstore.svg' alt="google play store"/>
                <div className='download__type__text'>
                  <span className='get-app'>Get it now</span>
                  <span className='store'>Google Play</span>
                </div>
              </a>
            </li>
            <li>
              <a href='#' className='download__type'>
              <img src='http://localhost:9000/icons/appstore.svg' alt="app store"/>
                <div className='download__type__text'>
                  <span className='get-app'>Get it now</span>
                  <span className='store'>App Store</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div className='footer-top__links'>
          <span className='footer-top__links__category label-2'>locate us</span>
          <div className="footer-top__links__map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5304022572714!2d78.37220987462803!3d17.43430970145276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93849b1e3735%3A0x79443d2befa038b8!2sMy%20Home%20Twitza!5e0!3m2!1sen!2sin!4v1705325504561!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <span className='footer-bottom__text body-small-400'>Bazaar - eCommerce Template © 2021. Design by Team-Bazaar</span>
      </div>
    </footer>
  );
}
