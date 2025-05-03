import React, { useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../Icon/Icon';
import Button from '../Button/Button';
import './Header.scss';

const menu = [
  { name: 'Home', path: '/' },
  { name: 'Items1', path: '/' },
  { name: 'Items2', path: '/' },
  { name: 'Items3', path: '/' },
  { name: 'Items4', path: '/' },
];

const Header = () => {
  const { pathname } = useLocation();
  const activeNav = menu.findIndex((e) => e.path === pathname);

  const menuLeft = useRef(null);
  const barsIconRef = useRef(null);

  const menuToggle = (action) => {
    menuLeft.current.classList.toggle('active');
    if (action === 'hideBars') {
      barsIconRef.current.classList.add('hidden');
    } else if (action === 'showBars' || action === 'menuItemClick') {
      barsIconRef.current.classList.remove('hidden');
    }
  };
  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='header__menu'>
            <div
              className='header__menu__mobile-toggle'
              onClick={() => menuToggle('hideBars')}
            >
              <div ref={barsIconRef}>
                <Icon icon='bars' />
              </div>
            </div>
            <div className='header__menu__logo'>
              <div className='header__menu__logo__item'>
                <Icon icon='logo' />
              </div>
              <div className='header__menu__left' ref={menuLeft}>
                <div
                  className='header__menu__left__close'
                  onClick={() => menuToggle('showBars')}
                >
                  <Icon icon='times' />
                </div>
                {menu.map((item, index) => (
                  <div
                    key={index}
                    className={`header__menu__item header__menu__left__item ${
                      index === activeNav ? 'active' : ''
                    }`}
                    onClick={() => menuToggle('menuItemClick')}
                  >
                    <Link to={item.path}>
                      <span>{item.name}</span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className='header__menu__right'>
              <div className='header__menu__item header__menu__right__item'>
                <Button label='sign up' severity='primary' rounded />
              </div>
              <div className='header__menu__item header__menu__right__item'>
                <Button label='log in' severity='secondary' rounded />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
