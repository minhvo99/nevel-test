import React, { useRef } from 'react';
import Button from '../Button/Button';
import './NFTCollection.scss';
const items = [
  'Rectangle-0.png',
  'Rectangle-1.png',
  'Rectangle-2.png',
  'Rectangle-3.png',
  'Rectangle-4.png',
  'Rectangle-5.png',
];

const NFTCollection = () => {
  const collectionRef = useRef(null);
  const scrollLeft = () => {
    if (collectionRef.current) {
      const { scrollLeft } = collectionRef.current;
      if (scrollLeft > 0) {
        collectionRef.current.scrollBy({
          left: -200,
          behavior: 'smooth',
        });
      }
    }
  };

  const scrollRight = () => {
    if (collectionRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = collectionRef.current;
      if (scrollLeft + clientWidth < scrollWidth) {
        collectionRef.current.scrollBy({
          left: 200,
          behavior: 'smooth',
        });
      }
    }
  };
  return (
    <div className='collection container'>
      <div className='row'>
        <div className='collection-actions'>
          <h1 className='collection-actions__title'>new nft collections</h1>
          <div className='collection-actions__btns'>
            <Button icon='arrow-left' onClick={scrollLeft} />
            <Button icon='arrow-right' onClick={scrollRight} />
          </div>
        </div>
        <div className='collection-item' ref={collectionRef}>
          {items.map((item, index) => (
            <div className='collection-item__img' key={index}>
              <img src={`/assets/images/${item}`} alt={`NFT ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTCollection;
