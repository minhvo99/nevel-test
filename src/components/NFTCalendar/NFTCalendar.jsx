import React, { useEffect } from 'react';
import Button from '../Button/Button';
import './NFTCalendar.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const NFTCalendar = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className='container nft-calendar'>
      <div className='row'>
        <div className='nft-content'>
          <div className='nft-content__left' data-aos='fade-up'>
            <div className='nft-content__left__actions'>
              <h1 className='nft-content__left__actions__title'>
                nft drop calendar
              </h1>
              <div className='nft-content__left__actions__btns'>
                <Button icon='arrow-left' />
                <Button icon='arrow-right' />
              </div>
            </div>
            <div className='nft-content__left__items'>
              <img src='/assets/images/drop-calendar.png' alt='NFT 3' />
            </div>
          </div>
          <div
            className='nft-content__right'
            data-aos='fade-up'
            data-aos-delay='300'
          >
            <div className='nft-content__right__hot'>
              <h1 className='title'>hot nft</h1>
              <div className='nft-content__right__hot__items'>
                <img src='assets/images/image (2).png' alt='NFT 1' />
              </div>
            </div>
            <div className='nft-content__right__promotion'>
              <h1 className='title'>promotion</h1>
              <div className='nft-content__right__promotion__items'>
                <img src='/assets/images/image (3).png' alt='NFT 2' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCalendar;
