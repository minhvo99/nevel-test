import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='footer-content'>
            <div className='footer-content__row'>
              <h2 className='footer-content__row__title'>ABOUT US</h2>
              <ul>
                <li className='footer-content__row__title__text'>Careers</li>
                <li className='footer-content__row__title__text'>
                  Company Details
                </li>
                <li className='footer-content__row__title__text'>
                  Terms & Conditions
                </li>
                <li className='footer-content__row__title__text'>
                  Help Center
                </li>
                <li className='footer-content__row__title__text'>
                  Private polocy
                </li>
                <li className='footer-content__row__title__text'>Affilate</li>
              </ul>
            </div>
            <div className='footer-content__row'>
              <h2 className='footer-content__row__title'>PRODUCTS</h2>
              <ul>
                <li className='footer-content__row__title__text'>
                  NFT Marketplace
                </li>
                <li className='footer-content__row__title__text'>Slingshot</li>
                <li className='footer-content__row__title__text'>Swaps</li>
                <li className='footer-content__row__title__text'>
                  NFT Launchpad
                </li>
                <li className='footer-content__row__title__text'>
                  Runes Platform
                </li>
                <li className='footer-content__row__title__text'>
                  Creator Dashboard
                </li>
              </ul>
            </div>
            <div className='footer-content__row'>
              <h2 className='footer-content__row__title'>RESOURCES</h2>
              <ul>
                <li className='footer-content__row__title__text'>Support</li>
                <li className='footer-content__row__title__text'>API</li>
                <li className='footer-content__row__title__text'>
                  Feature Requests
                </li>
                <li className='footer-content__row__title__text'>
                  Trust & Safety
                </li>
                <li className='footer-content__row__title__text'>Sitemap</li>
              </ul>
            </div>
            <div className='footer-content__row'>
              <h2 className='footer-content__row__title'>CONTACT US</h2>
              <ul>
                <li className='footer-content__row__title__text'>
                  support&#64;tech.email
                </li>
                <li className='footer-content__row__title__text'>
                  affilate&#64;tech.email
                </li>
                <li className='footer-content__row__title__text'>
                  <img src='/assets/images/Link → installapp.png.png' alt='' />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
