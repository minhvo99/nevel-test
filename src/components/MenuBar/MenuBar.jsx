import React from 'react';
import Icon from '../Icon/Icon';
import './MenuBar.scss';
const navBar = [
  {
    item: 'cash-back',
    label: 'free to earn',
  },
  {
    item: 'ranking',
    label: 'ranking',
  },
  {
    item: 'video',
    label: 'video-nft',
  },
  {
    item: 'new',
    label: 'new nft',
  },
  {
    item: 'road-maps',
    label: 'roadmaps',
  },
];

const MenuBar = () => {
  return (
    <div className='menu-bar'>
      {navBar.map((item, index) => (
        <div className='menu-bar__item' key={index}>
          <div className='menu-bar__item__icon'>
            <Icon icon={item.item} />
          </div>
          <div className='menu-bar__item__label'>{item.label}</div>
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
