import React from 'react';
import Button from '../Button/Button';
import './NFTCalendar.scss';

const NFTCalendar = () => {
  return (
    <div className='container nft-calendar'>
      <div className='row'>
        <div className='nft-content'>
          <div className='nft-content__left'>
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
          <div className='nft-content__right'>
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
